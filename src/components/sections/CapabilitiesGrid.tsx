import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";

const DIVISION_BUTTON_LABELS: { [key: string]: string } = {
  "mining-services": "Explore Mining Operations",
  "mineral-trading": "Explore Mineral Trading",
  "railway-solutions": "Explore Railway Corridors",
};

const DIVISION_SPECS: { [key: string]: { label: string; value: string } } = {
  "mining-services": { label: "Direct Fleet", value: "450+ Heavy Units" },
  "mineral-trading": { label: "Annual Volume", value: "4.2M Metric Tonnes" },
  "railway-solutions": { label: "Maintained Rail", value: "1,140 km Corridors" },
};

const DIVISION_SUMMARIES: { [key: string]: string } = {
  "mining-services": "Turnkey pit-to-port mining concessions, heavy equipment mobilization, and continuous extraction across African resource basins.",
  "mineral-trading": "Direct physical commodity flows connecting African extraction operations to international smelters and refineries.",
  "railway-solutions": "Heavy-haul freight railway construction, track ballasting, and 32-tonne axle-load mineral transport corridors.",
};

export function CapabilitiesGrid() {
  // Home page presents the 3 primary divisions as large editorial image-led panels
  const primaryDivisions = CAPABILITIES.slice(0, 3);

  return (
    <section className="w-full bg-iron-white py-12 md:py-16 border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header: Clean Editorial Title (Eyebrow Removed as instructed by PDF Page 4) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-6">
          <div>
            <h2 className="font-heading text-display-lg sm:text-[2.75rem] md:text-[3rem] font-medium text-earth-black leading-[1.08] tracking-tight">
              Three Primary Divisions
            </h2>
            <p className="text-body text-quarry-grey max-w-xl mt-2 font-normal leading-relaxed text-sm sm:text-base">
              Core operating units coordinating heavy mineral extraction, physical commodity distribution, and freight logistics corridors.
            </p>
          </div>
          <Link
            href="/capabilities"
            className="font-sans text-xs font-semibold text-earth-black hover:text-oxide-red uppercase tracking-wider inline-flex items-center gap-2 transition-colors pb-1 border-b border-earth-black/30 hover:border-oxide-red"
          >
            See all services <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Image-Led Editorial Panels (Clean, Spacious, Un-cluttered Composition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {primaryDivisions.map((division, idx) => {
            const spec = DIVISION_SPECS[division.id];
            const summary = DIVISION_SUMMARIES[division.id] || division.description;

            return (
              <Link
                key={division.id}
                href={`/capabilities/${division.slug}`}
                className="group relative min-h-[410px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden border border-slab-grey transition-all duration-500 hover:border-earth-black hover:shadow-xl bg-coal-dark p-6 sm:p-7"
              >
                {/* Full-Bleed Background Photography with Generous Upper Breathing Room */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Refined Scrim: Clear photograph view at top, text-safe gradient at bottom */}
                  <div 
                    className="absolute inset-0 z-[1] pointer-events-none"
                    style={{
                      background: `
                        linear-gradient(to top, rgba(14, 14, 12, 0.96) 0%, rgba(14, 14, 12, 0.85) 50%, rgba(14, 14, 12, 0.3) 75%, rgba(14, 14, 12, 0.1) 100%),
                        linear-gradient(to bottom, rgba(14, 14, 12, 0.35) 0%, transparent 22%)
                      `
                    }}
                  />
                </div>

                {/* Top Row: Division Number & Category Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-dust-tan font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-0.5 bg-black/50 text-white/90 border border-white/15 backdrop-blur-sm font-semibold">
                    Primary Division
                  </span>
                </div>

                {/* Bottom Content Area: Spacious, Refined Editorial Typography */}
                <div className="relative z-10 flex flex-col justify-end pt-12">
                  {/* Service Title */}
                  <h3 className="font-heading text-2xl sm:text-[1.85rem] font-medium text-white mb-2 leading-snug group-hover:text-oxide-red transition-colors">
                    {division.title}
                  </h3>

                  {/* Refined Concise Summary */}
                  <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed mb-5 font-normal">
                    {summary}
                  </p>

                  {/* Clean Single-Line Spec Badge */}
                  {spec && (
                    <div className="flex items-center justify-between text-xs font-sans py-2 px-3 bg-black/40 border border-white/10 mb-4 backdrop-blur-sm">
                      <span className="text-[11px] uppercase tracking-wider text-dust-tan font-medium">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-white text-xs tracking-wide">
                        {spec.value}
                      </span>
                    </div>
                  )}

                  {/* Refined Editorial CTA Button */}
                  <div className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-white/10 hover:bg-oxide-red text-white backdrop-blur-sm border border-white/20 hover:border-oxide-red transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold group/btn shadow-sm">
                    <span>{DIVISION_BUTTON_LABELS[division.id] || "Explore Operations"}</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
