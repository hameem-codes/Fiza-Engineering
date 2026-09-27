import React from "react";
import Link from "next/link";
import { PersonPlaceholder } from "@/components/ui/PersonPlaceholder";

// TODO: CONFIRM PARTNERSHIP with AELMET and Eliixir Traintech
// Keep row hidden until owner confirms active strategic partnerships
const SHOW_PARTNERS = false;

export function FounderSection() {
  return (
    <section className="w-full bg-[#EAE7DF] py-11 md:py-16 border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Founder Portrait Placeholder */}
          <div className="lg:col-span-4 max-w-sm mx-auto lg:mx-0 w-full">
            <PersonPlaceholder
              name="Muhammed Farooghuddin"
              title="Founder & Chief Executive Officer"
              className="w-full aspect-[4/5] max-h-[380px]"
            />
          </div>

          {/* Right: Leadership Profile & Quote */}
          <div className="lg:col-span-8">
            <h2 className="text-display-lg sm:text-[2.5rem] font-medium text-earth-black leading-[1.08] mb-2">
              Muhammed Farooghuddin
            </h2>
            <span className="font-sans text-xs uppercase tracking-wide text-oxide-red font-semibold block mb-5">
              Founder & Chief Executive Officer
            </span>

            {/* Founder Biography */}
            <p className="text-earth-black/85 text-body leading-relaxed mb-6 font-normal">
              India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development. Under his leadership, Fiza has developed strategic concessions, heavy rail logistics corridors, and large-scale turnkey industrial plant operations across Africa, Asia, and the Middle East.
            </p>

            {/* Founder Quote */}
            <blockquote className="border-l-4 border-oxide-red pl-5 py-2 my-5 bg-iron-white/80 p-4 border border-slab-grey/40">
              <p className="font-heading text-lg md:text-xl italic text-earth-black leading-snug font-normal">
                &ldquo;Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward.&rdquo;
              </p>
              <cite className="block text-xs font-sans text-quarry-grey uppercase tracking-wide mt-2.5 not-italic font-medium">
                — Muhammed Farooghuddin, Founder & CEO
              </cite>
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/company#leadership"
                className="btn-primary text-xs py-3 px-6 font-sans uppercase tracking-wide font-semibold"
              >
                Read leadership profile
              </Link>
            </div>

            {/* Strategic Partners Row - Hidden behind SHOW_PARTNERS until confirmed */}
            {SHOW_PARTNERS && (
              <div className="mt-8 pt-5 border-t border-slab-grey/80 flex flex-wrap items-center gap-3 text-xs font-sans text-quarry-grey">
                <span className="font-bold text-earth-black uppercase tracking-wide">Partners:</span>
                <span className="text-earth-black font-medium">AELMET (USA)</span>
                <span>·</span>
                <span className="text-earth-black font-medium">Eliixir Traintech (India)</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
