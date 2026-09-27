import React from "react";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="w-full bg-[#181816] text-iron-white py-16 md:py-24 border-b border-slab-grey/20">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-display-lg sm:text-[3.25rem] font-medium text-iron-white leading-[1.08] mb-6">
              Talk to our engineering leadership.
            </h2>

            {/* High-Contrast, Comfortable Reading Typography */}
            <p className="text-white/95 text-body-lg max-w-xl mb-8 leading-relaxed font-normal">
              Whether mobilizing heavy fleet for open-pit mining concessions, engineering heavy-haul rail spurs, or structuring turnkey plant EPC contracts, our project teams are ready to deploy.
            </p>

            <div>
              <Link
                href="/contact"
                className="btn-primary !bg-oxide-red hover:!bg-iron-white hover:!text-earth-black text-xs py-4 px-8 font-sans uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-sm transition-colors"
              >
                <span>Initiate project consultation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Quick Direct Contacts Panel */}
          <div className="lg:col-span-5 bg-[#20201D] border border-slab-grey/30 p-8 md:p-9 space-y-6">
            <div className="border-b border-slab-grey/25 pb-3">
              <span className="font-sans text-xs uppercase tracking-[0.08em] text-dust-tan font-semibold block">
                Corporate Inquiries
              </span>
            </div>

            <div className="flex items-start gap-3.5 text-xs font-sans">
              <MapPin size={18} className="text-oxide-red shrink-0 mt-0.5" />
              <div>
                <span className="text-iron-white block font-semibold mb-0.5">Headquarters</span>
                <span className="text-dust-tan/90 leading-relaxed block">{SITE_FACTS.contact.hqAddress}</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs font-sans">
              <Mail size={18} className="text-oxide-red shrink-0 mt-0.5" />
              <div>
                <span className="text-iron-white block font-semibold mb-0.5">Email</span>
                <a
                  href={`mailto:${SITE_FACTS.contact.primaryEmail}`}
                  className="text-dust-tan hover:text-oxide-red transition-colors"
                >
                  {SITE_FACTS.contact.primaryEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs font-sans">
              <Phone size={18} className="text-oxide-red shrink-0 mt-0.5" />
              <div>
                <span className="text-iron-white block font-semibold mb-0.5">Telephone</span>
                <a
                  href={`tel:${SITE_FACTS.contact.primaryPhone.replace(/\s+/g, "")}`}
                  className="text-dust-tan hover:text-oxide-red transition-colors"
                >
                  {SITE_FACTS.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
