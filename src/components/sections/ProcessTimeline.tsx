"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  step: string;
  name: string;
  desc: string;
  detail: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "ASSESS",
    desc: "Geological validation, site survey, and deposit feasibility scoping.",
    detail: "Comprehensive geophysical core logging, environmental impact assessments, and pit bench geometry mapping prior to capital expenditure."
  },
  {
    step: "02",
    name: "MOBILISE",
    desc: "Fleet deployment, logistics planning, and local workforce onboarding.",
    detail: "Heavy excavation equipment and crushing plant modules transported through secure logistics corridors with on-site technician deployment."
  },
  {
    step: "03",
    name: "EXECUTE",
    desc: "Round-the-clock extraction, civil construction, or plant commissioning.",
    detail: "Disciplined continuous mining operations, grade control, ballast laying, and mechanical assembly maintaining strict LTIFR safety protocols."
  },
  {
    step: "04",
    name: "DELIVER",
    desc: "Tonnage targets met, site restoration, and handover documentation.",
    detail: "Direct mineral transport to deep-water ports, client consignment sign-off, concurrent land backfilling, and topsoil restoration."
  }
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [inView, setInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Accessibility: respects reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setActiveStep(0);
      setIsAutoPlaying(false);
      setInView(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Measured, controlled operational progression from 01 to 04
  useEffect(() => {
    if (!inView || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= PROCESS_STEPS.length - 1) {
          setIsAutoPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [inView, isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveStep(index);
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Executive Pipeline Sub-Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-3.5 border-b border-slab-grey/60 gap-3 text-xs font-sans uppercase tracking-wider">
        <div className="flex items-center gap-2 font-semibold text-earth-black">
          <span className="w-2 h-2 rounded-full bg-oxide-red animate-pulse" />
          <span>Operational Execution Framework</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 md:gap-5 text-quarry-grey font-medium text-[11px] overflow-x-auto no-scrollbar py-1">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => handleStepClick(idx)}
              className={cn(
                "inline-flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none whitespace-nowrap",
                idx === activeStep
                  ? "text-oxide-red font-bold"
                  : idx < activeStep
                  ? "text-earth-black font-semibold"
                  : "text-quarry-grey/70 hover:text-earth-black"
              )}
            >
              <span className="font-mono text-[10px] px-1 py-0.5 bg-black/5">{step.step}</span>
              <span>{step.name}</span>
              {idx < PROCESS_STEPS.length - 1 && (
                <span className="text-slab-grey ml-1.5">→</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Connected Architectural Phase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => handleStepClick(idx)}
              className={cn(
                "flex flex-col justify-between text-left p-6 sm:p-7 bg-iron-white border transition-all duration-300 cursor-pointer focus:outline-none relative group min-h-[420px]",
                isActive
                  ? "border-earth-black shadow-xl ring-1 ring-earth-black/10 -translate-y-1.5 bg-white"
                  : isCompleted
                  ? "border-slab-grey hover:border-earth-black shadow-sm"
                  : "border-slab-grey/80 opacity-90 hover:opacity-100 hover:border-earth-black"
              )}
            >
              {/* Top Accent Indicator on Active / Completed */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-1.5 transition-colors duration-500",
                  isActive
                    ? "bg-oxide-red"
                    : isCompleted
                    ? "bg-earth-black"
                    : "bg-slab-grey/40"
                )}
              />

              <div>
                {/* Header: Large Display Numeral & Stage Status */}
                <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-slab-grey/50">
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span
                      className={cn(
                        "font-heading text-4xl sm:text-[2.6rem] font-medium tracking-tight leading-none transition-colors",
                        isActive
                          ? "text-oxide-red"
                          : isCompleted
                          ? "text-earth-black"
                          : "text-quarry-grey/60 group-hover:text-earth-black"
                      )}
                    >
                      {step.step}
                    </span>
                    <span className="text-quarry-grey/70 font-mono text-[11px] uppercase tracking-wider">
                      / 04
                    </span>
                  </div>

                  <div className="shrink-0">
                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-oxide-red text-white text-[10.5px] font-sans font-semibold uppercase tracking-wider shadow-sm whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Active Stage
                      </span>
                    ) : isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-emerald-800 text-[11px] font-sans font-semibold uppercase tracking-wider whitespace-nowrap">
                        ✓ Complete
                      </span>
                    ) : (
                      <span className="text-quarry-grey text-[11px] font-sans uppercase tracking-wider font-medium whitespace-nowrap">
                        Phase {step.step}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phase Name */}
                <h3
                  className={cn(
                    "font-heading text-2xl sm:text-[1.65rem] font-medium transition-colors duration-300 mb-3 leading-snug",
                    isActive
                      ? "text-earth-black font-semibold"
                      : "text-earth-black group-hover:text-oxide-red"
                  )}
                >
                  {step.name}
                </h3>

                {/* Primary Description */}
                <p className="font-sans text-xs sm:text-[13.5px] text-earth-black/85 font-normal leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Technical Operational Deliverables Box */}
              <div className="w-full pt-4 border-t border-slab-grey/50 mt-auto">
                <div className="bg-[#F8F7F3] p-3.5 border border-slab-grey/60">
                  <span className="font-sans text-[10.5px] uppercase tracking-wider font-semibold text-quarry-grey block mb-1.5">
                    Operational Scope
                  </span>
                  <p className="font-sans text-xs text-quarry-grey leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
