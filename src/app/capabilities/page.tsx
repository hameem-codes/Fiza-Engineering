import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CAPABILITIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Fiza Engineering",
  description:
    "Comprehensive engineering, mining, rail, civil infrastructure, turnkey plants, agriculture, and industrial power services across Africa.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Services | Fiza Engineering",
    description:
      "Comprehensive engineering, mining, rail, civil infrastructure, turnkey plants, agriculture, and industrial power services across Africa.",
    url: "https://fiza-one.vercel.app/capabilities",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Fiza Engineering",
    description:
      "Comprehensive engineering, mining, rail, civil infrastructure, turnkey plants, agriculture, and industrial power services across Africa.",
  },
};

const DIVISION_BUTTON_LABELS: Record<string, string> = {
  "mining-services": "Explore Mining Operations",
  "mineral-trading": "Explore Mineral Trading",
  "railway-solutions": "Explore Railway Corridors",
  "infrastructure": "Explore Heavy Infrastructure",
  "turnkey-plants": "Explore Turnkey Plants",
  "agriculture": "Explore Commercial Agriculture",
  "equipment-procurement": "Explore Machinery Rebuild",
  "industrial-power": "Explore Industrial Power",
};

export default function CapabilitiesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero: Rich Blended Photography without milky wash */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/capabilities/heavy-infrastructure.jpg"
          alt="Fiza Engineering heavy civil works, industrial infrastructure, and arterial transport corridor operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim Overlay: Visible heavy machinery + razor sharp typography */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(20, 20, 18, 0.96) 0%, rgba(20, 20, 18, 0.85) 45%, rgba(20, 20, 18, 0.45) 75%, rgba(20, 20, 18, 0.25) 100%),
              linear-gradient(to top, rgba(20, 20, 18, 0.9) 0%, transparent 40%, rgba(20, 20, 18, 0.6) 100%)
            `
          }}
        />

        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14 md:pb-18">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.08] mb-4">
              Core Operations & Services
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Direct open-pit concessions, heavy-haul railway corridors, turnkey processing plants, and equipment rebuilding operations deployed across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Unified Services Showcase Block: Full-Bleed Background Images Behind Text (Matching Second Image Reference) */}
      <section className="w-full bg-[#F4F2EC] py-16 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="font-heading text-display-lg sm:text-[3rem] font-medium text-earth-black leading-[1.08] tracking-tight">
              Unified Operating Portfolio
            </h2>
            <p className="text-body-lg text-quarry-grey mt-4 font-normal leading-relaxed">
              Direct open-pit extraction, export rail corridors, modular plant fabrication, and fleet remanufacturing operating as a single integrated engineering system across Africa.
            </p>
          </div>

          {/* Full-Bleed Background Photography Grid: 3-column layout matching second image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const buttonLabel = DIVISION_BUTTON_LABELS[cap.id] || "Explore Operations";

              return (
                <Link
                  key={cap.id}
                  id={cap.slug}
                  href={`/capabilities/${cap.slug}`}
                  className="group relative min-h-[440px] sm:min-h-[470px] flex flex-col justify-between overflow-hidden border border-slab-grey transition-all duration-500 hover:border-earth-black hover:shadow-2xl bg-coal-dark p-6 sm:p-7"
                >
                  {/* Full-Bleed Background Photography with Generous Scrim */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Refined Scrim: Clear photograph view at top, text-safe gradient at bottom */}
                    <div 
                      className="absolute inset-0 z-[1] pointer-events-none"
                      style={{
                        background: `
                          linear-gradient(to top, rgba(14, 14, 12, 0.98) 0%, rgba(14, 14, 12, 0.88) 45%, rgba(14, 14, 12, 0.35) 75%, rgba(14, 14, 12, 0.12) 100%),
                          linear-gradient(to bottom, rgba(14, 14, 12, 0.4) 0%, transparent 22%)
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
                      Division 0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Content Area: Editorial Typography directly over Image */}
                  <div className="relative z-10 flex flex-col justify-end pt-14">
                    {/* Service Title */}
                    <h3 className="font-heading text-2xl sm:text-[1.75rem] font-medium text-white mb-2 leading-snug group-hover:text-oxide-red transition-colors min-h-[4.25rem] flex items-end">
                      {cap.title}
                    </h3>

                    {/* Concise Summary */}
                    <p className="font-sans text-xs sm:text-[13.5px] text-white/85 leading-relaxed mb-5 font-normal line-clamp-3 min-h-[3.85rem]">
                      {cap.description}
                    </p>

                    {/* Clean Single-Line Spec Badge */}
                    {cap.bigStat && (
                      <div className="flex items-center justify-between text-xs font-sans py-2 px-3 bg-black/40 border border-white/10 mb-4 backdrop-blur-sm min-h-[36px]">
                        <span className="text-[11px] uppercase tracking-wider text-dust-tan font-medium">
                          {cap.bigStat.label}
                        </span>
                        <span className="font-semibold text-white text-xs tracking-wide">
                          {cap.bigStat.value}
                        </span>
                      </div>
                    )}

                    {/* Refined Editorial CTA Button */}
                    <div className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-white/10 hover:bg-oxide-red text-white backdrop-blur-sm border border-white/20 hover:border-oxide-red transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold group/btn shadow-sm">
                      <span>{buttonLabel}</span>
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-white" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA Section */}
      <section className="w-full bg-[#181816] py-20 md:py-24 text-iron-white border-t border-slab-grey/20">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2.5 h-2.5 bg-oxide-red inline-block" />
              <span className="font-sans text-xs uppercase tracking-[0.08em] text-dust-tan font-medium">
                Direct Engineering Procurement
              </span>
            </div>
            <h2 className="font-heading text-display-md sm:text-[2.75rem] font-medium text-iron-white leading-[1.05]">
              Initiate Project Consultation
            </h2>
            <p className="text-body text-dust-tan/90 max-w-xl mt-3 font-normal leading-relaxed">
              Connect directly with our engineering project managers and commercial teams to evaluate concession feasibility, fleet requirements, and logistical corridors.
            </p>
          </div>
          <Link
            href="/contact?type=mining-services"
            className="btn-primary !bg-oxide-red hover:!bg-iron-white hover:!text-earth-black text-iron-white text-xs py-4 px-8 font-sans uppercase tracking-wider font-semibold whitespace-nowrap transition-colors inline-flex items-center gap-2"
          >
            <span>Consult Our Engineers</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
