import React, { Suspense } from "react";
import Image from "next/image";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";
import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const offices = SITE_FACTS.offices;
  const hqOffice = offices.find((o) => o.city === "Dubai") || offices[0];
  const regionalOffices = offices.filter((o) => o.city !== "Dubai");

  return (
    <div className="w-full">
      {/* 1. Hero: Contextually accurate engineering consultation & management photography (PDF Page 8) */}
      <section className="relative w-full h-[60vh] min-h-[480px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src={SITE_IMAGES.contact.hero.src}
          alt={SITE_IMAGES.contact.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim: Text-safe dark left, natural visibility of engineering consultation on right */}
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
              Contact Our Project Leadership
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Connect directly with our engineering directors and operations project managers in Dubai and across our African regional hubs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Split Layout: Regional Hubs Left, Intake Form Right */}
      <section className="w-full bg-[#EBE8E0] py-16 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left: Office Directory (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Corporate Headquarters */}
              <div id="hq" className="scroll-mt-28">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-oxide-red inline-block" />
                  <span className="font-sans text-xs uppercase tracking-wider text-oxide-red font-semibold">
                    Global Headquarters
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-medium text-earth-black mb-4">
                  Dubai Corporate Office
                </h2>

                <div className="bg-iron-white border border-slab-grey p-7 shadow-sm">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slab-grey/40">
                    <h3 className="font-heading text-xl font-medium text-earth-black flex items-center gap-2">
                      <Building2 size={18} className="text-oxide-red" />
                      <span>{hqOffice.city}</span>
                    </h3>
                    <span className="font-sans text-xs text-oxide-red font-bold uppercase tracking-wider">
                      {hqOffice.country}
                    </span>
                  </div>

                  <p className="font-sans text-xs uppercase tracking-wider text-quarry-grey font-semibold mb-4">
                    {hqOffice.type}
                  </p>

                  <div className="space-y-3 text-xs font-sans text-earth-black">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="text-oxide-red mt-0.5 shrink-0" />
                      <span className="text-quarry-grey leading-relaxed">{hqOffice.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone size={15} className="text-oxide-red shrink-0" />
                      <a
                        href={`tel:${hqOffice.phone.replace(/\s+/g, "")}`}
                        className="font-semibold text-earth-black hover:text-oxide-red transition-colors"
                      >
                        {hqOffice.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-oxide-red shrink-0" />
                      <a
                        href={`mailto:${hqOffice.email}`}
                        className="text-quarry-grey hover:text-oxide-red transition-colors"
                      >
                        {hqOffice.email}
                      </a>
                    </div>

                    {hqOffice.mapUrl && (
                      <div className="pt-2">
                        <a
                          href={hqOffice.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-xs uppercase tracking-wider font-semibold text-oxide-red hover:underline inline-flex items-center gap-1.5"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Regional Operations Hubs */}
              <div id="offices" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-quarry-grey font-semibold block mb-1">
                    Regional Network
                  </span>
                  <h2 className="font-heading text-2xl font-medium text-earth-black">
                    African Operations Hubs
                  </h2>
                </div>

                <div className="space-y-5">
                  {regionalOffices.map((office) => (
                    <div
                      key={office.city}
                      className="bg-iron-white border border-slab-grey p-6 shadow-sm font-sans"
                    >
                      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slab-grey/40">
                        <h3 className="font-heading text-lg font-medium text-earth-black flex items-center gap-2">
                          <Building2 size={16} className="text-oxide-red" />
                          <span>{office.city}</span>
                        </h3>
                        <span className="text-xs text-oxide-red font-semibold uppercase tracking-wider">
                          {office.country}
                        </span>
                      </div>

                      <span className="text-xs text-quarry-grey block mb-3 font-medium">
                        {office.type}
                      </span>

                      <div className="space-y-2 text-xs text-quarry-grey">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="text-oxide-red mt-0.5 shrink-0" />
                          <span>{office.address}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone size={14} className="text-oxide-red shrink-0" />
                          <a
                            href={`tel:${office.phone.replace(/\s+/g, "")}`}
                            className="font-semibold text-earth-black hover:text-oxide-red transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Operational Inquiry Form (7 Cols) */}
            <div id="form" className="scroll-mt-28 lg:col-span-7">
              <div className="bg-iron-white border border-slab-grey p-8 md:p-12 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-oxide-red inline-block" />
                  <span className="font-sans text-xs uppercase tracking-wider text-oxide-red font-semibold">
                    Direct Inquiry Intake
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-medium text-earth-black mb-3">
                  Initiate Project Discussion
                </h2>
                <p className="text-sm font-sans text-quarry-grey leading-relaxed mb-8">
                  Submit operational requirements, tender documentation, or concession inquiries. Project managers respond within 24 business hours.
                </p>

                <Suspense
                  fallback={
                    <div className="font-sans text-xs text-quarry-grey py-12 font-medium">
                      Loading inquiry form...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
