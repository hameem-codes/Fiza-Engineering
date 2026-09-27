"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const STATUS_CHIPS = ["ALL", "ACTIVE", "IN DEVELOPMENT", "COMPLETED"];
const COUNTRIES = ["ALL", "Mali", "Democratic Republic of Congo", "Madagascar"];
const SECTORS = [
  "ALL",
  "Mining Services & Rail",
  "Turnkey Plants",
  "Railway Solutions",
  "Infrastructure",
  "Infrastructure & Mining",
  "Commercial Agriculture"
];

function normalizeStatusParam(param: string | null): string {
  if (!param) return "ALL";
  const upper = param.toUpperCase().trim();
  if (upper === "IN_DEVELOPMENT" || upper === "IN DEVELOPMENT") return "IN DEVELOPMENT";
  if (upper === "ACTIVE") return "ACTIVE";
  if (upper === "COMPLETED") return "COMPLETED";
  return "ALL";
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [countryFilter, setCountryFilter] = useState("ALL");
  const [sectorFilter, setSectorFilter] = useState("ALL");

  useEffect(() => {
    const filterParam = searchParams?.get("filter") ?? null;
    if (filterParam) {
      setStatusFilter(normalizeStatusParam(filterParam));
    }
  }, [searchParams]);

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    const urlParam = status === "IN DEVELOPMENT" ? "IN_DEVELOPMENT" : status;
    const newUrl = status === "ALL" ? "/projects" : `/projects?filter=${urlParam}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleClearFilters = () => {
    setStatusFilter("ALL");
    setCountryFilter("ALL");
    setSectorFilter("ALL");
    window.history.replaceState(null, "", "/projects");
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (statusFilter !== "ALL") {
      const matchStatus =
        statusFilter === "IN DEVELOPMENT"
          ? p.status === "IN_DEVELOPMENT"
          : p.status === statusFilter;
      if (!matchStatus) return false;
    }

    if (countryFilter !== "ALL" && p.country !== countryFilter) {
      return false;
    }

    if (sectorFilter !== "ALL" && p.sector !== sectorFilter && p.category !== sectorFilter) {
      return false;
    }

    return true;
  });

  const isFiltered = statusFilter !== "ALL" || countryFilter !== "ALL" || sectorFilter !== "ALL";

  return (
    <div className="w-full">
      {/* 1. Hero: Rich Blended Photography with Crystal Clear Contrast (Fixes 2 PDF Page 2) */}
      <section className="relative w-full h-[62vh] min-h-[500px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/projects/project_falea.jpg"
          alt="Fiza Engineering Falea bauxite corridor heavy earthmoving, open-pit benches, and haul road infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim Overlay: Visible heavy earthmoving while guaranteeing 100% white text readability */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(14, 14, 12, 0.92) 0%, rgba(14, 14, 12, 0.80) 45%, rgba(14, 14, 12, 0.35) 75%, rgba(14, 14, 12, 0.15) 100%),
              linear-gradient(to top, rgba(14, 14, 12, 0.95) 0%, rgba(14, 14, 12, 0.3) 50%, rgba(14, 14, 12, 0.5) 100%)
            `
          }}
        />

        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14 md:pb-18">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.08] mb-4">
              Project Portfolio
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Active open-pit mining concessions, heavy-haul railway track rehabilitation, and turnkey processing plants operating across Mali, the DRC, and Madagascar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Filter Navigation: Clean, understated controls in unified light theme (PDF Page 2) */}
      <section className="w-full bg-iron-white/95 border-b border-slab-grey py-3.5 sticky top-[72px] z-30 backdrop-blur-md shadow-sm">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
              <span className="font-sans text-xs uppercase tracking-wider text-quarry-grey font-semibold shrink-0">
                Status:
              </span>
              <div className="flex items-center gap-5 md:gap-7 shrink-0">
                {STATUS_CHIPS.map((chip) => {
                  const isActive = statusFilter === chip;
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleStatusChange(chip)}
                      className={cn(
                        "editorial-tab text-xs uppercase tracking-wider py-1.5 transition-colors font-medium",
                        isActive
                          ? "text-oxide-red font-semibold border-b-2 border-oxide-red"
                          : "text-quarry-grey hover:text-earth-black border-b-2 border-transparent"
                      )}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Country & Sector Selector Strip — Understated editorial selectors */}
            <div className="flex items-center gap-4 text-xs font-sans">
              <div className="relative">
                <select
                  id="filter-country"
                  aria-label="Filter by Country"
                  value={countryFilter}
                  onChange={(e) => setCountryFilter(e.target.value)}
                  className="bg-transparent text-earth-black border-b border-slab-grey pb-1 px-1 pr-6 text-xs uppercase tracking-wider focus:outline-none focus:border-oxide-red cursor-pointer appearance-none"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c === "ALL" ? "All Jurisdictions" : c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-quarry-grey text-[10px]">▼</div>
              </div>

              <div className="relative">
                <select
                  id="filter-sector"
                  aria-label="Filter by Sector"
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="bg-transparent text-earth-black border-b border-slab-grey pb-1 px-1 pr-6 text-xs uppercase tracking-wider focus:outline-none focus:border-oxide-red cursor-pointer appearance-none"
                >
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>
                      {s === "ALL" ? "All Sectors" : s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-quarry-grey text-[10px]">▼</div>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-wider text-oxide-red hover:underline py-1 px-2 font-semibold"
                >
                  <RotateCcw size={13} /> Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Grid: Editorial Industrial Case Studies */}
      <section className="w-full bg-[#F4F2EC] py-20 md:py-28 min-h-[440px]">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {filteredProjects.length === 0 ? (
            <div className="bg-iron-white border border-slab-grey p-12 text-center max-w-lg mx-auto font-sans">
              <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                No projects found
              </h3>
              <p className="text-sm text-quarry-grey leading-relaxed mb-6 font-normal">
                No projects match the selected status, country, or sector criteria.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="btn-primary !bg-oxide-red hover:!bg-earth-black text-iron-white text-xs py-3 px-6 font-sans uppercase tracking-wider font-semibold inline-flex items-center gap-2"
              >
                <RotateCcw size={13} /> Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => {
                const keyFig = project.keyFigure || project.stats[0];
                const displayCountry =
                  project.country === "Democratic Republic of Congo" ? "DR Congo" : project.country;

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group relative min-h-[460px] sm:min-h-[490px] flex flex-col justify-between overflow-hidden border border-slab-grey transition-all duration-500 hover:border-earth-black hover:shadow-2xl bg-coal-dark p-6 sm:p-7"
                  >
                    {/* Full-Bleed Background Photography with Generous Scrim */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Refined Scrim: Clear photograph view at top, text-safe rich gradient at bottom */}
                      <div 
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                          background: `
                            linear-gradient(to top, rgba(14, 14, 12, 0.98) 0%, rgba(14, 14, 12, 0.90) 55%, rgba(14, 14, 12, 0.45) 80%, rgba(14, 14, 12, 0.15) 100%),
                            linear-gradient(to bottom, rgba(14, 14, 12, 0.5) 0%, transparent 28%)
                          `
                        }}
                      />
                    </div>

                    {/* Top Row: Country Indicator & Operational Status Badge */}
                    <div className="relative z-10 flex items-center justify-between w-full gap-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-dust-tan font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-oxide-red" />
                        {displayCountry}
                      </span>
                      <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-0.5 bg-black/60 text-white/95 border border-white/15 backdrop-blur-sm font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0">
                        {project.status === "ACTIVE" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        {project.status === "IN_DEVELOPMENT"
                          ? "In Development"
                          : project.status === "ACTIVE"
                          ? "Active Operation"
                          : "Commissioned"}
                      </span>
                    </div>

                    {/* Bottom Content Area: Crisp White Typography directly over Image */}
                    <div className="relative z-10 flex flex-col justify-end pt-14">
                      {/* Sector Line */}
                      <span className="text-[11px] font-sans uppercase tracking-wider text-dust-tan font-semibold block mb-1">
                        {project.sector}
                      </span>

                      {/* Project Title */}
                      <h2 className="font-heading text-2xl sm:text-[1.75rem] font-medium text-white mb-2 leading-snug group-hover:text-oxide-red transition-colors min-h-[4.25rem] flex items-end">
                        {project.name}
                      </h2>

                      {/* Summary */}
                      <p className="font-sans text-xs sm:text-[13.5px] text-white/85 leading-relaxed mb-5 font-normal line-clamp-3 min-h-[3.85rem]">
                        {project.summary}
                      </p>

                      {/* Clean Single-Line Spec Badge */}
                      {keyFig && (
                        <div className="flex items-center justify-between text-xs font-sans py-2 px-3 bg-black/40 border border-white/10 mb-4 backdrop-blur-sm min-h-[36px]">
                          <span className="text-[11px] uppercase tracking-wider text-dust-tan font-medium">
                            {keyFig.label}
                          </span>
                          <span className="font-semibold text-white text-xs tracking-wide font-mono">
                            {keyFig.value}
                          </span>
                        </div>
                      )}

                      {/* Refined Editorial CTA Button */}
                      <div className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-white/10 hover:bg-oxide-red text-white backdrop-blur-sm border border-white/20 hover:border-oxide-red transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold group/btn shadow-sm">
                        <span>Explore Project Dossier</span>
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-white" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-[100px] text-center font-sans text-xs text-quarry-grey font-medium">
          Loading project portfolio...
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}
