"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SITE_FACTS } from "@/lib/siteFacts";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    year: "1994",
    title: "Establishment & International Commodity Trade",
    description: "Founded by Muhammed Farooghuddin, developing international mineral trading and heavy industrial equipment supply channels across the Middle East, Asia, and Africa.",
    image: "/images/capabilities/mineral-trading.jpg"
  },
  {
    year: "2001",
    title: "Heavy Fleet Equipment Services",
    description: "Expanded direct operations with heavy earthmoving fleet deployment supporting industrial civil foundations and mining logistics.",
    image: "/images/capabilities/equipment-rebuild.jpg"
  },
  {
    year: "2007",
    title: "Open-Pit Mining Concessions",
    description: "Awarded multi-year overburden stripping concessions in Mali, establishing on-site rebuild machine workshops.",
    image: "/images/capabilities/mining-services.jpg"
  },
  {
    year: "2013",
    title: "Turnkey Industrial Plants Division",
    description: "Commissioned automated primary crushing circuits and expanded into Central Africa and the DRC copperbelt.",
    image: "/images/capabilities/turnkey-plants.jpg"
  },
  {
    year: "2018",
    title: "Direct Mineral Trading Corridors",
    description: "Structured direct off-take agreements for bauxite, high-grade hematite iron ore, and cathode copper to global markets.",
    image: "/images/projects/project_katanga.jpg"
  },
  {
    year: "2022",
    title: "Heavy-Haul Rail Infrastructure",
    description: "Executed railway track renewal and heavy-haul rolling stock operations across specialized mineral corridors.",
    image: "/images/capabilities/railway-solutions.jpg"
  },
  {
    year: "2026",
    title: `Operations across ${SITE_FACTS.countries} countries`,
    description: `Operating mining, civil, rail, and agro-industrial infrastructure projects across ${SITE_FACTS.countries} countries on ${SITE_FACTS.continents} continents.`,
    image: "/images/capabilities/heavy-infrastructure.jpg"
  }
];

export function CompanyTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Check intersection so animation only runs when visible to the user
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Measured, silky smooth auto-advance (5.5s per era) with automatic seamless loop
  useEffect(() => {
    if (!inView || isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % MILESTONES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [inView, isHovered]);

  const jumpToMilestone = (idx: number) => {
    const clamped = Math.max(0, Math.min(MILESTONES.length - 1, idx));
    setActiveIdx(clamped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      jumpToMilestone(activeIdx - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      jumpToMilestone(activeIdx + 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="relative w-full bg-[#F4F2EC] py-12 sm:py-16 lg:py-20 border-t border-slab-grey overflow-hidden"
      aria-label="Historical Milestones Timeline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="font-heading text-display-md sm:text-[2.75rem] lg:text-[3rem] font-medium text-earth-black leading-[1.08] tracking-tight">
              {SITE_FACTS.yearsInBusinessStory}
            </h2>
            <p className="text-body text-quarry-grey max-w-xl mt-2 sm:mt-3 font-normal leading-relaxed">
              From foundational commodity trade in 1994 to heavy extraction concessions, railway corridors, and international operations.
            </p>
          </div>

          {/* Stepper Controls (Clean, no pause or resume button) */}
          <div className="flex items-center gap-3 font-sans text-xs uppercase tracking-wider shrink-0">
            <span className="text-quarry-grey mr-2 font-medium">
              Era <span className="text-earth-black font-bold font-mono">{String(activeIdx + 1).padStart(2, "0")}</span> / {String(MILESTONES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => jumpToMilestone(activeIdx - 1)}
              disabled={activeIdx === 0}
              aria-label="Previous milestone"
              className="p-2.5 border border-slab-grey bg-iron-white text-earth-black hover:border-earth-black hover:bg-[#EAE7DF] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => jumpToMilestone(activeIdx + 1)}
              disabled={activeIdx === MILESTONES.length - 1}
              aria-label="Next milestone"
              className="p-2.5 border border-slab-grey bg-iron-white text-earth-black hover:border-earth-black hover:bg-[#EAE7DF] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Chronological Axis Navigation Bar */}
        <div className="w-full mb-8 pb-4 border-b border-slab-grey/60" onKeyDown={handleKeyDown}>
          <div className="relative w-full">
            {/* Axis Rail */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-slab-grey/50" />
            
            {/* Smooth Active Indicator Segment */}
            <div
              className="absolute top-1/2 left-0 h-[2.5px] -translate-y-1/2 bg-oxide-red transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                width: `${(activeIdx / (MILESTONES.length - 1)) * 100}%`
              }}
            />

            {/* Year Nodes */}
            <div className="relative flex justify-between items-center w-full">
              {MILESTONES.map((m, idx) => {
                const isActive = idx === activeIdx;
                const isPassed = idx <= activeIdx;

                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => jumpToMilestone(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none py-1.5"
                    aria-label={`Milestone year ${m.year}`}
                  >
                    <span
                      className={cn(
                        "font-sans text-xs sm:text-sm tracking-wider transition-all duration-300 mb-1.5 font-medium",
                        isActive
                          ? "font-bold text-oxide-red scale-110"
                          : isPassed
                          ? "text-earth-black font-semibold"
                          : "text-quarry-grey group-hover:text-earth-black"
                      )}
                    >
                      {m.year}
                    </span>

                    <div
                      className={cn(
                        "w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 transition-all duration-500 z-10",
                        isActive
                          ? "bg-oxide-red border-earth-black scale-125 shadow-sm ring-4 ring-oxide-red/20"
                          : isPassed
                          ? "bg-earth-black border-earth-black"
                          : "bg-iron-white border-slab-grey group-hover:border-earth-black"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spotlight Chronological Story Showcase: Full-Bleed Background Photography Behind Text */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${activeIdx * 100}%)`
            }}
          >
            {MILESTONES.map((milestone, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={milestone.year}
                  className="w-full flex-shrink-0 px-1"
                >
                  <div
                    className={cn(
                      "relative min-h-[350px] sm:min-h-[370px] lg:min-h-[350px] flex flex-col justify-between overflow-hidden border transition-all duration-700 bg-coal-dark p-6 sm:p-8 lg:p-10",
                      isActive
                        ? "border-earth-black shadow-2xl opacity-100 scale-100 ring-1 ring-white/10"
                        : "border-slab-grey opacity-40 scale-[0.98]"
                    )}
                  >
                    {/* Full-Bleed Background Photography with Directional Scrim */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1200px"
                        className="object-cover object-center transition-transform duration-1000 ease-out"
                      />
                      {/* Rich Scrim: Heavy dark contrast on left and bottom, visible machinery texture on right */}
                      <div 
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                          background: `
                            linear-gradient(to right, rgba(14, 14, 12, 0.96) 0%, rgba(14, 14, 12, 0.90) 45%, rgba(14, 14, 12, 0.65) 75%, rgba(14, 14, 12, 0.35) 100%),
                            linear-gradient(to top, rgba(14, 14, 12, 0.98) 0%, rgba(14, 14, 12, 0.6) 50%, rgba(14, 14, 12, 0.3) 100%)
                          `
                        }}
                      />
                    </div>

                    {/* Subtle countdown progress line across the top of the active card */}
                    {isActive && inView && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/15 z-20 overflow-hidden">
                        <div
                          key={`${activeIdx}-${isHovered}`}
                          className="h-full bg-oxide-red animate-timeline-progress"
                          style={{
                            animationPlayState: isHovered ? "paused" : "running"
                          }}
                        />
                      </div>
                    )}

                    {/* Content Layer: Razor-Sharp White Typography */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto">
                      {/* Year & Metric Column */}
                      <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/20 pb-5 lg:pb-0 lg:pr-6">
                        <span className="font-sans text-xs uppercase tracking-wider text-dust-tan font-semibold block mb-2">
                          Operational Milestone 0{idx + 1}
                        </span>
                        <div className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-none mb-3">
                          {milestone.year}
                        </div>
                        <span className="inline-block px-3 py-1 bg-black/60 border border-white/20 text-xs font-sans uppercase tracking-wider text-white font-semibold backdrop-blur-sm">
                          Corporate Era {milestone.year}
                        </span>
                      </div>

                      {/* Story Content Column */}
                      <div className="lg:col-span-8">
                        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-3 leading-snug">
                          {milestone.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed mb-6 font-normal max-w-2xl">
                          {milestone.description}
                        </p>

                        <div className="pt-3.5 border-t border-white/15 flex items-center justify-between text-xs font-sans">
                          <span className="uppercase tracking-wider font-semibold text-white/95">
                            Fiza Engineering Corporation
                          </span>
                          <span className="text-dust-tan font-mono text-[11px]">
                            Verified Historical Record
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
