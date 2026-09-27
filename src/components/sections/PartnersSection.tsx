import React from "react";
import { PARTNERS } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Globe2, ShieldCheck, Handshake } from "lucide-react";

export function PartnersSection() {
  return (
    <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <h2 className="text-display-lg font-medium text-earth-black leading-[1.08]">
              International Engineering Partners
            </h2>
          </div>
          <p className="text-body-sm text-quarry-grey max-w-md">
            Collaborating with global leaders in heavy mining technology, rolling stock engineering, and agricultural mechanization to deliver turnkey scale.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-iron-white border border-slab-grey p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-earth-black group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-2xl font-bold tracking-tight text-earth-black group-hover:text-oxide-red transition-colors">
                    {partner.name}
                  </span>
                  <span className="bg-[#EAE7DF] border border-slab-grey px-2.5 py-1 font-sans text-[11px] uppercase tracking-wide text-earth-black font-medium">
                    {partner.country}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-sans uppercase text-oxide-red font-semibold tracking-wide block mb-1">
                    Specialized Domain
                  </span>
                  <h3 className="text-heading-3 font-medium text-earth-black leading-snug">
                    {partner.domain}
                  </h3>
                </div>

                <p className="text-body-sm text-quarry-grey leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slab-grey/50 flex items-center gap-2 text-xs font-sans text-quarry-grey font-medium">
                <ShieldCheck size={14} className="text-oxide-red" />
                <span>Verified Strategic Agreement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
