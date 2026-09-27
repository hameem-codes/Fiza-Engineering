import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";

export function CompanyEditorial() {
  return (
    <section className="w-full py-11 md:py-16 bg-iron-white border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Block (7 Columns) */}
          <div className="lg:col-span-7">
            <h2 className="text-display-lg sm:text-[2.6rem] font-medium text-earth-black leading-[1.08] mb-6">
              Engineering heavy infrastructure and direct mineral supply chains.
            </h2>

            {/* Exactly ONE paragraph of 51 words (50-60 words range) */}
            <p className="text-body-lg text-earth-black/85 leading-relaxed mb-8 font-normal max-w-xl">
              Founded in {SITE_FACTS.foundedYear} by Muhammed Farooghuddin, Fiza Engineering Corporation is an integrated industrial company headquartered in Dubai with principal operations across Africa. We develop mineral concessions, engineer heavy-haul railway corridors, build turnkey processing plants, and supply bulk commodities to global markets with direct operational control and our own heavy machinery fleet.
            </p>

            <div className="pt-4 border-t border-slab-grey/60">
              <Link
                href="/company"
                className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2 font-sans uppercase tracking-wide font-semibold"
              >
                Read company profile <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Image Block (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[420px] w-full border border-slab-grey bg-slab-grey/40 shadow-sm overflow-hidden">
              <Image
                src={SITE_IMAGES.editorialMining.src}
                alt={SITE_IMAGES.editorialMining.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="img-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-earth-black/90 backdrop-blur-sm p-3.5 text-iron-white border border-slab-grey/20">
                <span className="block font-sans text-[10px] uppercase text-dust-tan tracking-wide font-medium">
                  Our fleet
                </span>
                <span className="text-xs font-sans text-iron-white block mt-0.5">
                  {SITE_FACTS.fleetSize} company-owned machines active across {SITE_FACTS.continents} continents.
                </span>
              </div>
            </div>

            {/* Asymmetric Floating Established Tag */}
            <div className="hidden sm:block absolute -top-3 -right-3 bg-iron-white border border-slab-grey px-4 py-2.5 shadow-sm">
              <span className="font-sans text-xl font-bold text-oxide-red block leading-none">{SITE_FACTS.foundedYear}</span>
              <span className="font-sans text-[9px] uppercase text-quarry-grey tracking-wide font-semibold mt-0.5 block">Founded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
