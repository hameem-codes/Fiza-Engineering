import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { Tag } from "@/components/ui/Tag";

export function FeaturedProjectBleed() {
  const featured = PROJECTS[0]; // Falea Bauxite & Mineral Corridor

  return (
    <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Bleed Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={featured.image}
          alt={featured.imageAlt || featured.name}
          fill
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
      </div>

      <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Tag active>FEATURED PROJECT</Tag>
            <span className="text-iron-white font-sans text-xs uppercase tracking-wide font-semibold">
              {featured.country}
            </span>
          </div>

          <h2 className="text-display-lg sm:text-[3.25rem] font-medium text-iron-white leading-[1.08] mb-6">
            {featured.name}
          </h2>

          <p className="text-body-lg text-white/95 mb-8 leading-relaxed">
            {featured.summary}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-b border-slab-grey/30 mb-8 font-sans">
            {featured.stats.map((s, idx) => (
              <div key={idx}>
                <span className="block text-quarry-grey text-[11px] uppercase tracking-wide font-medium">
                  {s.label}
                </span>
                <span className="text-iron-white text-base md:text-lg font-semibold">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href={`/projects/${featured.slug}`}
              className="btn-primary !bg-iron-white !text-earth-black hover:!bg-oxide-red hover:!text-iron-white"
            >
              Examine Project Case Study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
