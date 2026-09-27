import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export function ActiveProjectsSection() {
  // 3 primary ACTIVE industrial projects
  const activeProjects = PROJECTS.filter((p) => p.status === "ACTIVE").slice(0, 3);

  return (
    <section className="w-full bg-[#F4F2EC] py-16 md:py-24 border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-display-lg sm:text-[2.75rem] font-medium text-earth-black leading-[1.08]">
              Featured Active Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-sans text-xs font-semibold text-earth-black hover:text-oxide-red uppercase tracking-wider inline-flex items-center gap-2 transition-colors pb-1 border-b border-earth-black/30 hover:border-oxide-red"
          >
            Browse all projects <ArrowRight size={14} />
          </Link>
        </div>

        {/* Real Active Projects Grid: Photography Behind Text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => {
            const safeStats = project.stats
              .filter(
                (stat) =>
                  !stat.label.includes("Structural Steel") &&
                  !stat.label.includes("Overhead Crane")
              )
              .slice(0, 2)
              .map((stat) => ({
                ...stat,
                label:
                  stat.label === "Annual Rebuild Capacity" ? "Rebuild Capacity" : stat.label,
              }));

            const displayCountry =
              project.country === "Democratic Republic of Congo" ? "DR Congo" : project.country;

            return (
              <article
                key={project.id}
                className="group relative min-h-[490px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden border border-slab-grey transition-all duration-500 hover:border-earth-black hover:shadow-2xl bg-coal-dark p-5 sm:p-6 lg:p-7"
              >
                {/* Full-Bleed Background Photography with Generous Scrim */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt || project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Scrim Overlay: Visible photography at top, high-contrast dark reading gradient at bottom */}
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

                {/* Top Row: Operational Status Badge & Timeline */}
                <div className="relative z-10 flex items-center justify-between w-full gap-2">
                  <span className="text-[10px] font-sans uppercase tracking-widest px-2.5 py-0.5 bg-black/60 text-white/95 border border-white/15 backdrop-blur-sm font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Operation
                  </span>
                  {project.timeline && (
                    <span className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 bg-oxide-red text-white font-semibold shadow-sm shrink-0 whitespace-nowrap">
                      {project.timeline}
                    </span>
                  )}
                </div>

                {/* Bottom Content Area: Crisp White Typography directly over Image */}
                <div className="relative z-10 flex flex-col justify-end pt-14">
                  {/* Country & Sector Subheading */}
                  <div className="flex items-center justify-between gap-3 text-xs font-sans pb-2 mb-2 border-b border-white/15">
                    <div className="flex items-center gap-1.5 font-semibold text-white uppercase tracking-wider min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-oxide-red shrink-0" />
                      <span className="truncate">{displayCountry}</span>
                    </div>
                    <span className="text-[11px] font-sans text-dust-tan uppercase tracking-wider font-medium shrink-0">
                      {project.sector}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-[1.375rem] font-medium text-white mb-2 leading-snug group-hover:text-oxide-red transition-colors min-h-[3.5rem] flex items-end">
                    <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                  </h3>

                  {/* Overview */}
                  <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed mb-4 font-normal line-clamp-3 min-h-[3.75rem]">
                    {project.summary}
                  </p>

                  {/* Operational Highlights: Structured Engineering Spec Panel */}
                  <div className="bg-black/50 border border-white/15 divide-y divide-white/10 mb-4 backdrop-blur-sm">
                    {safeStats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 px-3 text-xs font-sans">
                        <span className="text-dust-tan text-[10.5px] uppercase tracking-wider font-medium">
                          {stat.label}
                        </span>
                        <span className="font-semibold text-white font-mono text-[11.5px] tracking-tight">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Full-Width Architectural Action Button */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-white/10 hover:bg-oxide-red text-white backdrop-blur-sm border border-white/20 hover:border-oxide-red transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold group/btn shadow-sm"
                  >
                    <span>View Project Dossier</span>
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-white" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
