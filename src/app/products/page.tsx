"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ALL_CATALOG_ITEMS,
  SHOW_PRODUCT_SPECS,
} from "@/lib/products";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "ALL",
  "Heavy Mining Fleet",
  "Turnkey Plant Modules",
  "Railway Solutions",
  "Traded Minerals",
];

function normalizeCategory(catParam: string | null): string {
  if (!catParam) return "ALL";
  const normalized = catParam.toLowerCase().replace(/[+_-]/g, " ").trim();
  if (normalized === "heavy mining fleet" || normalized === "mining fleet") {
    return "Heavy Mining Fleet";
  }
  if (
    normalized === "turnkey plant modules" ||
    normalized === "crusher stations" ||
    normalized === "crushers"
  ) {
    return "Turnkey Plant Modules";
  }
  if (
    normalized === "railway solutions" ||
    normalized === "locomotives" ||
    normalized === "rail"
  ) {
    return "Railway Solutions";
  }
  if (
    normalized === "traded minerals" ||
    normalized === "minerals" ||
    normalized === "commodities"
  ) {
    return "Traded Minerals";
  }
  const match = CATEGORIES.find(
    (c) => c.toLowerCase() === normalized
  );
  return match || "ALL";
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const catParam = searchParams?.get("category") ?? null;
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    setSelectedCategory(normalizeCategory(catParam));
  }, [catParam]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const newUrl = cat === "ALL" ? "/products" : `/products?category=${encodeURIComponent(cat)}`;
    window.history.replaceState(null, "", newUrl);
  };

  const filteredItems = ALL_CATALOG_ITEMS.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="w-full">
      {/* 1. Hero: Rich Blended Photography with Crystal Clear Contrast (Fixes 2 PDF Page 2) */}
      <section className="relative w-full h-[62vh] min-h-[500px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/capabilities/equipment-rebuild.jpg"
          alt="Fiza Engineering heavy equipment rebuild depot, powertrain overhaul, and fleet mobilization"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim Overlay: Visible heavy machinery while guaranteeing 100% white text readability */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(14, 14, 12, 0.92) 0%, rgba(14, 14, 12, 0.80) 45%, rgba(14, 14, 12, 0.35) 75%, rgba(14, 14, 12, 0.15) 100%),
              linear-gradient(to top, rgba(14, 14, 12, 0.95) 0%, rgba(14, 14, 12, 0.3) 50%, rgba(14, 14, 12, 0.5) 100%)
            `
          }}
        />

        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14 md:pb-18">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.08] mb-4">
              Fleet & Equipment
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Heavy hydraulic mining excavators, modular primary jaw crushers, diesel-electric locomotives, and traded industrial commodities directly owned and operated by Fiza Engineering Corporation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Filter Navigation: Typographic navigation in unified light theme (Fixes 2 PDF Page 2) */}
      <section className="w-full bg-iron-white/95 border-b border-slab-grey py-3.5 sticky top-[72px] z-30 backdrop-blur-md shadow-sm">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
            <span className="font-sans text-xs uppercase tracking-wider text-quarry-grey font-semibold shrink-0">
              Fleet Sector:
            </span>
            <div className="flex items-center gap-5 md:gap-7 shrink-0">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                      "editorial-tab text-xs uppercase tracking-wider py-1.5 transition-colors font-medium",
                      isActive
                        ? "text-oxide-red font-semibold border-b-2 border-oxide-red"
                        : "text-quarry-grey hover:text-earth-black border-b-2 border-transparent"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalog Grid: Photography-led Editorial Cards */}
      <section className="w-full bg-[#F4F2EC] py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-iron-white border border-slab-grey p-12 max-w-lg mx-auto font-sans">
              <h3 className="font-heading text-2xl font-medium text-earth-black mb-2">No items found</h3>
              <p className="text-quarry-grey text-sm mb-6">
                No equipment or mineral units match the selected category.
              </p>
              <button
                type="button"
                onClick={() => handleCategoryChange("ALL")}
                className="btn-primary !bg-oxide-red text-xs py-3 px-6 font-sans uppercase tracking-wider font-semibold"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item) => {
                const isMachinery = item.category !== "Traded Minerals";
                const detailHref = isMachinery ? `/products/${item.slug}` : "/capabilities/mineral-trading";
                const quoteHref = `/contact?type=${item.quoteType}&product=${encodeURIComponent(item.name)}`;

                return (
                  <article
                    key={item.id}
                    className="group relative min-h-[490px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden border border-slab-grey transition-all duration-500 hover:border-earth-black hover:shadow-2xl bg-coal-dark p-5 sm:p-6 lg:p-7"
                  >
                    {/* Full-Bleed Background Photography with Generous Scrim */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={item.heroImage}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Refined Scrim: Clear photograph view at top, text-safe rich gradient at bottom */}
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

                    {/* Top Row: Category Indicator & Model Number Badge (Flexible layout to prevent truncation) */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between w-full gap-2">
                      <span className="text-[9.5px] sm:text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 bg-black/75 text-white/95 border border-white/20 backdrop-blur-sm font-semibold flex items-center gap-1.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-oxide-red shrink-0" />
                        {item.category}
                      </span>
                      {item.modelNumber && (
                        <span className="font-mono text-[10.5px] sm:text-[11px] uppercase tracking-wider px-2 py-0.5 bg-oxide-red text-white font-semibold shadow-sm shrink-0 whitespace-nowrap">
                          {item.modelNumber}
                        </span>
                      )}
                    </div>

                    {/* Bottom Content Area: Crisp White Typography directly over Image */}
                    <div className="relative z-10 flex flex-col justify-end pt-14">
                      {/* Title */}
                      <h2 className="font-heading text-xl sm:text-[1.5rem] font-medium text-white mb-2 leading-snug group-hover:text-oxide-red transition-colors min-h-[3.85rem] flex items-end">
                        <Link href={detailHref}>{item.name}</Link>
                      </h2>

                      {/* Overview */}
                      <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed mb-4 font-normal line-clamp-3 min-h-[3.75rem]">
                        {item.overview}
                      </p>

                      {/* Technical Specifications Highlights Panel */}
                      <div className="bg-black/50 border border-white/15 divide-y divide-white/10 mb-4 backdrop-blur-sm">
                        {item.keySpecs.slice(0, 2).map((spec, i) => (
                          <div key={i} className="flex justify-between items-center py-2 px-3 text-xs font-sans">
                            <span className="text-dust-tan text-[11px] uppercase tracking-wider font-medium">{spec.label}</span>
                            <span className="font-semibold text-white font-mono text-[11.5px] tracking-tight">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Full-Width Architectural Action Button matching reference */}
                      <Link
                        href={detailHref}
                        className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-white/10 hover:bg-oxide-red text-white backdrop-blur-sm border border-white/20 hover:border-oxide-red transition-all duration-300 font-sans text-xs uppercase tracking-wider font-semibold group/btn shadow-sm"
                      >
                        <span>
                          {isMachinery ? "Explore Specifications & Scope" : "Inspect Mineral Off-Take"}
                        </span>
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-white" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-[100px] text-center font-sans text-xs font-medium text-quarry-grey">
          Loading equipment catalog...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
