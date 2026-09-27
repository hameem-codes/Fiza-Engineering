import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOUNDER_INFO } from "@/lib/constants";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";
import { PersonPlaceholder } from "@/components/ui/PersonPlaceholder";
import { CompanyTimeline } from "@/components/sections/CompanyTimeline";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { GlobalOfficeMap } from "@/components/sections/GlobalOfficeMap";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

// What Sets Us Apart - verified operational scale figures
const OPERATIONAL_METRICS = [
  {
    target: 450,
    suffix: "+",
    label: "Heavy Equipment Units",
    title: "100% Directly Owned Fleet",
    desc: "We own and operate our hydraulic excavators, rigid dump trucks, and ballast equipment directly, avoiding third-party rental delays.",
  },
  {
    target: 14,
    suffix: "",
    label: "Industrial Facilities",
    title: "EPC Engineering Plants",
    desc: "Our teams assemble turnkey processing plants, modular jaw crushing stations, and power control centers in-house.",
  },
  {
    target: 1140,
    suffix: " km",
    formatCommas: true,
    label: "Corridors Maintained",
    title: "Heavy-Haul Rail Competency",
    desc: "We rehabilitate and operate specialized 32-tonne axle-load railway tracks to move extraction volume to maritime ports.",
  },
  {
    target: 0.12,
    decimals: 2,
    suffix: "",
    label: "LTIFR Safety Rating",
    title: "Safety Governance",
    desc: "Operational sites follow ISO 45001 standards with regular supervisor briefings and comprehensive safety audits.",
  },
  {
    target: 35000,
    suffix: " m²",
    formatCommas: true,
    label: "Rebuild Workshops",
    title: "Regional Rebuild Base",
    desc: `Central rebuild and powertrain overhaul workshops in Bamako support operations and maintain fleet availability at ${SITE_FACTS.fleetAvailability}.`,
  },
  {
    target: 12,
    suffix: "",
    label: "Active Jurisdictions",
    title: "Pan-African Footprint",
    desc: `We maintain working relationships with national resource ministries, port authorities, and local communities established over ${SITE_FACTS.yearsInBusinessLower}.`,
  },
];

export default function CompanyPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section: Blended Photography without redundant clutter (PDF Page 3) */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/capabilities/mining-services.jpg"
          alt="Aerial view of large-scale open-pit mining operations and mineral excavation benches"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim: Text-safe dark left, natural visibility of mining cut on right */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(20, 20, 18, 0.96) 0%, rgba(20, 20, 18, 0.85) 45%, rgba(20, 20, 18, 0.45) 75%, rgba(20, 20, 18, 0.25) 100%),
              linear-gradient(to top, rgba(20, 20, 18, 0.9) 0%, transparent 40%, rgba(20, 20, 18, 0.6) 100%)
            `
          }}
        />

        {/* Hero Copy (Clean, without redundant chips or developer tags) */}
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="font-heading text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white leading-[1.08] mb-5">
              Fiza Engineering Corporation
            </h1>
            <p className="text-body-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              An integrated mining, heavy civil rail, and turnkey industrial engineering corporation founded in 1994, headquartered in Dubai with direct operating concessions across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="w-full py-20 md:py-28 bg-iron-white border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08] mb-8">
                Heavy industrial operations across key African corridors.
              </h2>
              <div className="space-y-5 text-quarry-grey text-body-lg leading-relaxed max-w-editorial font-sans">
                <p>
                  Established in {SITE_FACTS.foundedYear} by Muhammed Farooghuddin, Fiza Engineering Corporation develops arterial infrastructure, operates extraction concessions, and manages direct commodity supply chains connecting African resource basins to international markets.
                </p>
                <p>
                  Our operational scope includes direct open-pit mining in Mali and the Democratic Republic of Congo, heavy freight railway rehabilitation, and international physical mineral trading.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] border border-slab-grey overflow-hidden bg-slab-grey/40">
              <Image
                src={SITE_IMAGES.company.fieldOps.src}
                alt="Engineers reviewing site plans"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-[#181816]/90 text-iron-white px-3 py-1 font-sans text-xs font-medium border border-white/10">
                Field engineers on site
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operating Principles */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08]">
              Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-iron-white border border-slab-grey flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                  Direct control of equipment
                </h3>
                <p className="text-quarry-grey text-sm font-sans leading-relaxed">
                  We own, maintain, and dispatch our heavy machinery fleet directly. On-site technical workshops and mobile field mechanics handle repairs immediately, keeping operations on schedule.
                </p>
              </div>
            </div>

            <div className="p-8 bg-iron-white border border-slab-grey flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                  Local employment and technical training
                </h3>
                <p className="text-quarry-grey text-sm font-sans leading-relaxed">
                  We invest in local workforce capacity. Over 90% of our on-site personnel and technical teams are recruited and trained within the sovereign jurisdictions where we operate.
                </p>
              </div>
            </div>

            <div className="p-8 bg-iron-white border border-slab-grey flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                  Measured, reported operational results
                </h3>
                <p className="text-quarry-grey text-sm font-sans leading-relaxed">
                  We track operational progress through verified metric tonnes extracted, kilometers of track ballasted, and machine operating hours logged without lost-time safety incidents.
                </p>
              </div>
            </div>

            <div className="p-8 bg-iron-white border border-slab-grey flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                  Site restoration and watershed protection
                </h3>
                <p className="text-quarry-grey text-sm font-sans leading-relaxed">
                  We integrate concurrent backfilling, topsoil preservation, and engineered drainage into active extraction plans to stabilize land contours and protect local hydrological systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Operational Scale (Animated Statistics - PDF Page 3) */}
      <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OPERATIONAL_METRICS.map((item, idx) => (
              <div key={idx} className="bg-[#F4F2EC] p-8 md:p-9 border border-slab-grey flex flex-col justify-between transition-all duration-300 hover:border-earth-black">
                <div>
                  <div className="flex flex-col mb-5 pb-4 border-b border-slab-grey/60">
                    <div className="flex items-baseline leading-none whitespace-nowrap mb-2">
                      <span className="font-heading text-4xl sm:text-5xl font-medium text-earth-black leading-none">
                        <AnimatedCounter
                          target={item.target}
                          suffix={item.suffix}
                          decimals={item.decimals || 0}
                          formatCommas={item.formatCommas || false}
                          duration={2000}
                          delay={idx * 100}
                        />
                      </span>
                    </div>
                    <span className="font-sans text-xs text-quarry-grey uppercase tracking-wider block font-medium">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-earth-black mb-3 min-h-[3rem] flex items-start">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-quarry-grey leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work (Animated 01 to 04 Timeline - PDF Page 3) */}
      <section className="w-full py-20 md:py-28 bg-[#EBE8E0] border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08]">
              How We Work
            </h2>
            <p className="text-body-lg text-quarry-grey max-w-2xl mt-3 font-normal leading-relaxed">
              A systematic four-stage execution framework governing geological validation, logistics mobilization, continuous extraction, and final delivery.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 6. Company Timeline (Refined Historical Milestones) */}
      <CompanyTimeline />

      {/* 7. Leadership Section (Recomposed Horizontally across full width - PDF Page 4) */}
      <section id="leadership" className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08]">
              Corporate Leadership
            </h2>
          </div>

          {/* Full-Width Horizontal Editorial Layout (No accidental whitespace) */}
          <div className="border border-slab-grey bg-[#EAE7DF] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (4 cols): Portrait */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="w-full max-w-[280px] lg:max-w-none">
                  <PersonPlaceholder
                    name={FOUNDER_INFO.name}
                    title={FOUNDER_INFO.title}
                    className="w-full aspect-square border border-slab-grey/80 shadow-sm"
                  />
                </div>
              </div>

              {/* Middle Column (5 cols): Name, Title & Comprehensive Biography */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-medium text-earth-black mb-1">
                  {FOUNDER_INFO.name}
                </h3>
                <span className="font-sans text-xs uppercase tracking-wider text-oxide-red font-semibold block mb-5">
                  {FOUNDER_INFO.title}
                </span>

                <div className="space-y-4 text-sm font-sans text-earth-black/85 leading-relaxed">
                  <p>
                    {FOUNDER_INFO.bio}
                  </p>
                  <p>
                    Under his governance, Fiza Engineering Corporation has structured direct extraction contracts, built all-weather arterial haul corridors, and established sovereign mineral off-take partnerships across Africa, Asia, and the Middle East.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slab-grey/60 flex items-center gap-4 text-xs font-sans text-quarry-grey">
                  <span className="font-semibold text-earth-black uppercase tracking-wider">Leadership Focus:</span>
                  <span>Direct Equipment Ownership & Safe Corridor Execution</span>
                </div>
              </div>

              {/* Right Column (3 cols): Editorial Pull Quote */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slab-grey/60 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                <blockquote className="border-l-2 border-oxide-red pl-4 py-2 bg-iron-white/80 p-5 border border-slab-grey/40 shadow-sm">
                  <p className="font-heading text-base sm:text-lg italic text-earth-black leading-snug">
                    &ldquo;{FOUNDER_INFO.quote}&rdquo;
                  </p>
                  <cite className="block text-xs font-sans text-quarry-grey uppercase tracking-wider mt-3 not-italic font-medium">
                    — {FOUNDER_INFO.name}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Presence & Offices (Real Geographic Map + Office Carousel - Fixes 2 PDF Page 4) */}
      <section id="global" className="w-full bg-[#F4F2EC] py-20 md:py-28 border-t border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="font-heading text-display-lg font-medium text-earth-black leading-[1.08]">
              Global Presence & Offices
            </h2>
            <p className="text-body-lg text-quarry-grey max-w-2xl mt-4 leading-relaxed font-normal">
              Direct headquarters and regional operations depots coordinating active mining concessions, heavy equipment workshops, and freight rail logistics across Africa and the Middle East.
            </p>
          </div>

          {/* Interactive World Map & Office Carousel */}
          <GlobalOfficeMap />
        </div>
      </section>
    </div>
  );
}
