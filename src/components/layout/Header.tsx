"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONSOLIDATED_NAV = [
  { href: "/company", label: "Company" },
  { href: "/capabilities", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/achievements", label: "Certifications" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center justify-between px-6 md:px-12 bg-[#1A1A18] border-b border-slab-grey/20",
          scrolled ? "shadow-md bg-[#1A1A18]/95 backdrop-blur-md" : "bg-[#1A1A18]"
        )}
      >
        {/* Left: Brand Identity Block */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-9 h-9 bg-[#141412] border border-white/20 flex items-center justify-center font-heading font-bold text-xl tracking-tight text-white transition-transform duration-200 group-hover:scale-105 shadow-sm">
            <span className="relative inline-block leading-none">
              F
              <span className="absolute -bottom-0.5 -right-2 w-1.5 h-1.5 bg-oxide-red" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[15px] font-bold text-white tracking-[0.14em] uppercase leading-none group-hover:text-oxide-red transition-colors">
              FIZA
            </span>
            <span className="text-[9px] font-sans font-medium text-dust-tan tracking-[0.22em] uppercase mt-1">
              Engineering Corporation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — High-contrast, guaranteed visible at every stage */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
          {CONSOLIDATED_NAV.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[12px] xl:text-[13px] font-medium tracking-[0.04em] uppercase transition-colors duration-200 relative py-1 shrink-0",
                  isActive
                    ? "!text-oxide-red font-semibold"
                    : "!text-[#EAE7DF] hover:!text-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-oxide-red" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button: Get in Touch */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-oxide-red text-iron-white text-xs font-semibold uppercase tracking-wide py-2.5 px-5 hover:bg-earth-black hover:ring-1 hover:ring-iron-white/20 transition-all duration-200 shadow-sm inline-flex items-center gap-1.5 font-sans"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 flex items-center justify-center text-iron-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-coal-dark text-iron-white flex flex-col justify-between p-8 pt-28 lg:hidden animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <span className="text-label text-dust-tan tracking-wide uppercase font-sans mb-2 font-semibold">
              Corporate Directory
            </span>
            {CONSOLIDATED_NAV.map((link) => {
              const isActive =
                pathname === link.href || pathname?.startsWith(`${link.href}/`);

              return (
                <div key={link.href} className="border-b border-slab-grey/15 pb-3">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-medium tracking-tight uppercase hover:text-oxide-red transition-colors flex items-center justify-between",
                      isActive ? "text-oxide-red" : "text-iron-white"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={18} className="text-quarry-grey" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="pt-8 border-t border-slab-grey/20 space-y-5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-oxide-red text-iron-white text-center text-sm font-semibold uppercase tracking-wide py-3.5 block hover:bg-white hover:text-earth-black transition-colors font-sans"
            >
              Get in Touch
            </Link>

            <div className="text-xs font-sans text-quarry-grey space-y-1">
              <span className="block text-dust-tan font-semibold uppercase">
                Fiza Engineering Corporation
              </span>
              <span className="block">
                info@fizaengineering.com · Dubai · Africa
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
