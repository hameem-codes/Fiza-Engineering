"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_FACTS, yearsInBusinessDecade } from "@/lib/siteFacts";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    src: "/images/hero-real.jpg",
    alt: "Fiza Engineering heavy open-pit mining operations with hydraulic excavators and haul fleet",
  },
  {
    src: "/images/capabilities/mining-services.jpg",
    alt: "Fiza Engineering mining services and operations",
  },
  {
    src: "/images/capabilities/heavy-infrastructure.jpg",
    alt: "Fiza Engineering heavy civil works, industrial infrastructure, and arterial transport corridor operations",
  },
  {
    src: "/images/capabilities/railway-solutions.jpg",
    alt: "Fiza Engineering heavy-haul rail logistics, locomotives, and mineral transport operations",
  },
];

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsReducedMotion(prefersReducedMotion);
    
    if (prefersReducedMotion) return;

    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        if (!document.hidden) {
          setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }
      }, 6000);
    };

    startTimer();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startTimer();
      } else if (timer) {
        clearInterval(timer);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      {/* 1. Hero Main Frame */}
      <section className="relative w-full min-h-[580px] lg:h-[82vh] max-h-[880px] flex flex-col justify-end overflow-hidden bg-coal-dark">
        {/* Background Slideshow: subtle automatic crossfade & Ken Burns effect */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.src}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-[1200ms] ease-in-out",
                  isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
                )}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className={cn(
                    "img-cover object-center will-change-transform",
                    "transition-transform duration-[6000ms] ease-out motion-reduce:transform-none motion-reduce:transition-none",
                    isActive && !isReducedMotion ? "scale-[1.08]" : "scale-100"
                  )}
                />
              </div>
            );
          })}

          {/* Professional Directional Scrim Overlay: Darker on text-heavy left, photographic breathing room on right */}
          <div 
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background: `
                linear-gradient(to right, rgba(20, 20, 18, 0.96) 0%, rgba(20, 20, 18, 0.88) 45%, rgba(20, 20, 18, 0.5) 75%, rgba(20, 20, 18, 0.25) 100%),
                linear-gradient(to top, rgba(20, 20, 18, 0.9) 0%, transparent 40%, rgba(20, 20, 18, 0.6) 100%)
              `
            }}
          />
        </div>

        {/* Hero Copy & Actions */}
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14 md:pb-20 pt-40 md:pt-48">
          <div className="max-w-3xl">
            {/* Specific Headline naming actual operations */}
            <h1 className="font-heading text-display-lg sm:text-[3.25rem] md:text-[3.75rem] font-medium text-iron-white tracking-tight leading-[1.08] mb-5">
              Mining, rail and heavy civil works across Africa.
            </h1>

            {/* Concise Subtext */}
            <p className="text-body-lg text-white/95 max-w-2xl mb-8 leading-relaxed font-normal">
              Direct open-pit concessions, heavy-haul railway corridors, and turnkey processing plants operating across key African resource jurisdictions.
            </p>

            {/* Specific, Non-Duplicate CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-primary !bg-oxide-red hover:!bg-iron-white hover:!text-earth-black text-iron-white text-xs py-3.5 px-7 font-sans uppercase tracking-wider font-semibold shadow-sm transition-colors"
              >
                View active projects
              </Link>
              <Link
                href="/capabilities"
                className="btn-secondary !border-iron-white/60 !text-iron-white hover:!bg-iron-white hover:!text-earth-black hover:!border-iron-white text-xs py-3.5 px-7 font-sans uppercase tracking-wider font-semibold transition-colors"
              >
                See our services
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex px-6 md:px-12 gap-2 max-w-content mx-auto w-full">
          {HERO_SLIDES.map((_, idx) => {
            const isActive = idx === currentSlide;
            const isPast = idx < currentSlide;
            
            return (
              <div key={idx} className="h-[3px] flex-1 bg-iron-white/20 rounded-full overflow-hidden">
                <div
                  key={`${currentSlide}-${idx}`}
                  className={cn(
                    "h-full bg-oxide-red",
                    isPast ? "w-full" : "w-0"
                  )}
                  style={
                    isActive && !isReducedMotion
                      ? {
                          animation: "progress-fill 6s linear forwards",
                        }
                      : {}
                  }
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Single Stats Row directly under the hero (Kept ONCE on the page, imported from siteFacts) */}
      <section className="w-full bg-[#181816] border-b border-slab-grey/20 text-iron-white py-5 md:py-6">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 sm:gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slab-grey/15">
            <div className="pt-4 md:pt-0">
              <span className="font-sans text-xs uppercase tracking-wide text-quarry-grey block mb-1 font-semibold">
                Fleet Capacity
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl sm:text-4xl font-semibold text-oxide-red">
                  <AnimatedCounter target={SITE_FACTS.fleetSizeNumber} suffix="+" duration={1800} delay={0} />
                </span>
                <span className="text-xs font-sans text-dust-tan font-medium">Machines</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-sans text-xs uppercase tracking-wide text-quarry-grey block mb-1 font-semibold">
                Jurisdictions
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl sm:text-4xl font-semibold text-iron-white">
                  <AnimatedCounter target={SITE_FACTS.countries} duration={1800} delay={120} />
                </span>
                <span className="text-xs font-sans text-dust-tan font-medium">Countries</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-sans text-xs uppercase tracking-wide text-quarry-grey block mb-1 font-semibold">
                Global Footprint
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl sm:text-4xl font-semibold text-iron-white">
                  <AnimatedCounter target={SITE_FACTS.continents} duration={1800} delay={240} />
                </span>
                <span className="text-xs font-sans text-dust-tan font-medium">Continents</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-8">
              <span className="font-sans text-xs uppercase tracking-wide text-quarry-grey block mb-1 font-semibold">
                Track Record
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-2xl sm:text-4xl font-semibold text-oxide-red">
                  <AnimatedCounter target={yearsInBusinessDecade} suffix="+ Years" duration={1800} delay={360} />
                </span>
                <span className="text-xs font-sans text-dust-tan font-medium">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
