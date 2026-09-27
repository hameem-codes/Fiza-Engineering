"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  formatCommas?: boolean;
  duration?: number;
  delay?: number;
  trigger?: boolean;
  className?: string;
}

/**
 * Industrial ease-out cubic curve:
 * Starts with momentum, continuously and naturally decelerates, settling exactly on target without overshoot.
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  formatCommas = false,
  duration = 1800,
  delay = 0,
  trigger,
  className,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState<number>(0);
  const [isLanded, setIsLanded] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const isAnimatingRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Accessibility: respect prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCurrent(target);
      setIsLanded(true);
      hasAnimatedRef.current = true;
      return;
    }

    const resetAnimation = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      isAnimatingRef.current = false;
      hasAnimatedRef.current = false;
      setCurrent(0);
      setIsLanded(false);
    };

    const startAnimation = () => {
      // Guard against double-triggering or overlapping animations while still intersecting
      if (isAnimatingRef.current || hasAnimatedRef.current) return;
      isAnimatingRef.current = true;
      setIsLanded(false);

      timeoutRef.current = setTimeout(() => {
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(1, Math.max(0, elapsed / duration));
          const eased = easeOutCubic(progress);
          const rawVal = eased * target;
          const nextVal = decimals > 0 ? parseFloat(rawVal.toFixed(decimals)) : Math.round(rawVal);

          setCurrent(nextVal);

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          } else {
            setCurrent(target);
            setIsLanded(true);
            hasAnimatedRef.current = true;
            isAnimatingRef.current = false;
          }
        };

        animationFrameRef.current = requestAnimationFrame(animate);
      }, delay);
    };

    // If explicit trigger prop is passed
    if (trigger !== undefined) {
      if (trigger) {
        startAnimation();
      } else {
        resetAnimation();
      }
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }

    const element = elementRef.current;
    if (!element) {
      startAnimation();
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }

    // Fallback if IntersectionObserver is not available
    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [trigger, target, duration, delay, decimals]);

  const formattedDisplay = () => {
    let str = decimals > 0 ? current.toFixed(decimals) : current.toString();
    if (formatCommas) {
      const parts = str.split(".");
      parts[0] = parseInt(parts[0], 10).toLocaleString();
      str = parts.join(".");
    }
    return str;
  };

  return (
    <span
      ref={elementRef}
      className={cn("inline-flex items-baseline tabular-nums", className)}
      aria-label={`${prefix}${target}${suffix}`}
    >
      {prefix && <span>{prefix}</span>}
      <span className={cn(isLanded && "animate-counter-land")}>{formattedDisplay()}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
