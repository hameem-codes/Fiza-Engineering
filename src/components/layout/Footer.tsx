import React from "react";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";

export function Footer() {
  return (
    <footer className="w-full bg-[#EBE8E0] text-earth-black border-t border-slab-grey py-10 md:py-12">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Clean, Unified Light Editorial Footer (Replaces heavy dark footer block - PDF Page 1) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-slab-grey/60">
          {/* Brand Mark & Core Identity */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 select-none">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-heading text-2xl font-semibold tracking-tight uppercase text-earth-black group-hover:text-oxide-red transition-colors">
                FIZA
              </span>
              <span className="w-2 h-2 rounded-none bg-oxide-red inline-block" />
            </Link>
            <span className="hidden sm:inline text-slab-grey font-light">|</span>
            <span className="font-sans text-xs uppercase tracking-wider text-quarry-grey font-medium">
              Heavy Engineering, Mining & Rail Infrastructure
            </span>
          </div>

          {/* Quick Essential Navigation — Aligned exactly with Header Navbar */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-6 font-sans text-xs uppercase tracking-wider font-semibold text-earth-black">
            <Link href="/company" className="hover:text-oxide-red transition-colors">
              Company
            </Link>
            <Link href="/capabilities" className="hover:text-oxide-red transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-oxide-red transition-colors">
              Projects
            </Link>
            <Link href="/products" className="hover:text-oxide-red transition-colors">
              Products
            </Link>
            <Link href="/achievements" className="hover:text-oxide-red transition-colors">
              Certifications
            </Link>
            <Link href="/news" className="hover:text-oxide-red transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-oxide-red transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Bottom Tier: Contacts, Copyright & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans text-quarry-grey font-medium">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>Dubai HQ: <a href="tel:+97143628800" className="text-earth-black hover:text-oxide-red font-semibold transition-colors">+971 4 362 8800</a></span>
            <span>·</span>
            <span><a href="mailto:info@fizaengineering.com" className="text-earth-black hover:text-oxide-red font-semibold transition-colors">info@fizaengineering.com</a></span>
            <span>·</span>
            <span>DIFC Gate Precinct, Dubai · Africa</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span>© {SITE_FACTS.foundedYear + SITE_FACTS.yearsInBusiness} {SITE_FACTS.companyName}.</span>
            <Link href="/privacy" className="hover:text-earth-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-earth-black transition-colors">
              Terms
            </Link>
            <Link href="/achievements" className="hover:text-earth-black transition-colors">
              Accreditations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
