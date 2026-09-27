import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SITE_IMAGES } from "@/lib/images";

const PLANT_TYPES = [
  {
    title: "1,500 TPH Primary Jaw Crushing Circuit",
    category: "Crushing & Screening",
    image: SITE_IMAGES.turnkeyStrip.primaryCrushing.src,
    alt: SITE_IMAGES.turnkeyStrip.primaryCrushing.alt,
    href: "/products?category=Turnkey+Plant+Modules"
  },
  {
    title: "Modular Dense Media Separation (DMS) Unit",
    category: "Beneficiation",
    image: SITE_IMAGES.turnkeyStrip.gravitySeparation.src,
    alt: SITE_IMAGES.turnkeyStrip.gravitySeparation.alt,
    href: "/products?category=Turnkey+Plant+Modules"
  },
  {
    title: "Heavy Ball Mill & Dynamic Cyclone Station",
    category: "Grinding Circuits",
    image: SITE_IMAGES.turnkeyStrip.grainSilo.src,
    alt: SITE_IMAGES.turnkeyStrip.grainSilo.alt,
    href: "/products?category=Turnkey+Plant+Modules"
  },
  {
    title: "60,000 MT Aerated Grain Terminal & Elevator",
    category: "Agro-Processing",
    image: SITE_IMAGES.turnkeyStrip.slurryPumps.src,
    alt: SITE_IMAGES.turnkeyStrip.slurryPumps.alt,
    href: "/products?category=Turnkey+Plant+Modules"
  }
];

export function TurnkeyPlantStrip() {
  return (
    <section className="w-full bg-iron-white">
      <SectionDivider />
      <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-display-lg font-medium text-earth-black leading-[1.08]">
              Turnkey Processing Plants
            </h2>
          </div>
          <Link
            href="/capabilities/turnkey-plants"
            className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wide inline-flex items-center gap-2 font-sans transition-colors"
          >
            All Modular Plants <span>→</span>
          </Link>
        </div>

        {/* Clean Strip: Image + Type label only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANT_TYPES.map((plant, idx) => (
            <Link
              key={idx}
              href={plant.href}
              className="group flex flex-col border border-slab-grey bg-iron-white p-3 hover:border-earth-black transition-colors"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slab-grey mb-3">
                <Image
                  src={plant.image}
                  alt={plant.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <span className="font-sans text-[10px] text-quarry-grey uppercase tracking-wide block mb-1 font-medium">
                {plant.category}
              </span>
              <h3 className="text-body-sm font-medium text-earth-black leading-snug group-hover:text-oxide-red transition-colors">
                {plant.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
