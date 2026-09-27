import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ACHIEVEMENTS,
  ACHIEVEMENT_CATEGORIES,
  Achievement,
  AchievementCategory,
  getVisibleAchievements,
} from "@/lib/achievements";
import { SITE_FACTS } from "@/lib/siteFacts";
import { FileText, ExternalLink, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function normalizeCategory(param: string | undefined): "ALL" | AchievementCategory {
  if (!param) return "ALL";
  const normalized = param.trim().toLowerCase();
  if (normalized === "certifications" || normalized === "certification") return "Certifications";
  if (normalized === "awards" || normalized === "award") return "Awards";
  if (normalized === "milestones" || normalized === "milestone") return "Milestones";
  if (normalized === "partnerships" || normalized === "partnership") return "Partnerships";
  return "ALL";
}

function AchievementCard({ item }: { item: Achievement }) {
  const isCertification = item.category === "Certifications";
  const isMilestone = item.isInternalMilestone || item.category === "Milestones";

  return (
    <article className="bg-iron-white border border-slab-grey p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:border-earth-black hover:shadow-lg relative group">
      <div>
        {/* Top Header: Big Year / Metric + Authority Metadata (Matching Second Image Reference) */}
        <div className="flex flex-col mb-5 pb-5 border-b border-slab-grey/60">
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-heading text-4xl sm:text-5xl font-medium text-earth-black leading-none">
              {item.year}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-[11px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-earth-black/5 text-earth-black border border-slab-grey/50">
                {item.category}
              </span>
              {item.verified && (
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-emerald-800 font-semibold px-2 py-0.5 bg-emerald-50 border border-emerald-200">
                  <CheckCircle size={11} /> Verified
                </span>
              )}
            </div>
          </div>

          <span className="font-sans text-xs text-quarry-grey uppercase tracking-wider block font-medium">
            {isMilestone ? `Operational Standard: ${item.issuer}` : `Auditing Authority: ${item.issuer}`}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-[1.35rem] font-medium text-earth-black mb-3 min-h-[3.25rem] flex items-start leading-snug group-hover:text-oxide-red transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-sans text-quarry-grey leading-relaxed mb-6 font-normal">
          {item.description}
        </p>
      </div>

      {/* Bottom Technical Verification / Evidence Box */}
      <div className="pt-4 border-t border-slab-grey/60 mt-auto text-xs font-sans">
        {isCertification && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-sans">
              <span className="text-quarry-grey uppercase tracking-wider font-medium">Record Status</span>
              <span className="font-mono text-earth-black font-medium text-[11px]">
                {item.certificateNumber === "PENDING OWNER CONFIRMATION"
                  ? "Pending Verification"
                  : item.certificateNumber || "Official Record on File"}
              </span>
            </div>

            {item.evidenceUrl ? (
              <a
                href={item.evidenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full py-2.5 px-3 bg-earth-black text-white hover:bg-oxide-red transition-colors font-sans text-xs uppercase tracking-wider font-semibold mt-1"
              >
                <span className="flex items-center gap-1.5">
                  <FileText size={13} />
                  <span>Inspect Audit Certificate</span>
                </span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <div className="text-[11px] text-quarry-grey italic pt-0.5">
                Official credential available upon formal inquiry
              </div>
            )}
          </div>
        )}

        {!isCertification && item.evidenceUrl && (
          <a
            href={item.evidenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between w-full py-2.5 px-3 bg-earth-black text-white hover:bg-oxide-red transition-colors font-sans text-xs uppercase tracking-wider font-semibold"
          >
            <span className="flex items-center gap-1.5">
              <FileText size={13} />
              <span>Operational Documentation</span>
            </span>
            <ExternalLink size={12} />
          </a>
        )}

        {!isCertification && !item.evidenceUrl && (
          <div className="flex items-center justify-between text-quarry-grey text-[11px]">
            <span className="uppercase tracking-wider font-semibold text-earth-black">
              Fiza Corporation
            </span>
            <span>Verified Historical Record</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function AchievementsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = normalizeCategory(searchParams?.category);
  const visibleItems = getVisibleAchievements();

  // Sort by year descending
  const sortedItems = [...visibleItems].sort((a, b) => b.year - a.year);

  // Filter according to category
  const filteredItems = sortedItems.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  const thirdPartyItems = filteredItems.filter(
    (item) => !item.isInternalMilestone && item.category !== "Milestones"
  );
  const milestoneItems = filteredItems.filter(
    (item) => item.isInternalMilestone || item.category === "Milestones"
  );

  return (
    <div className="w-full">
      {/* Editorial Hero: Blended Photography with Clear Contrast (PDF Page 5) */}
      <section className="relative w-full h-[60vh] min-h-[480px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/capabilities/industrial-microgrids.jpg"
          alt="Fiza Engineering standards, industrial microgrids, and verified quality operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim Overlay: Visible photography + Crisp Legible Typography */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              linear-gradient(to right, rgba(20, 20, 18, 0.96) 0%, rgba(20, 20, 18, 0.85) 45%, rgba(20, 20, 18, 0.45) 75%, rgba(20, 20, 18, 0.25) 100%),
              linear-gradient(to top, rgba(20, 20, 18, 0.9) 0%, transparent 40%, rgba(20, 20, 18, 0.6) 100%)
            `
          }}
        />

        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14 md:pb-16">
          <div className="max-w-3xl">
            <h1 className="font-heading text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white leading-[1.08] mb-5">
              Certifications & Awards
            </h1>
            <p className="text-body-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              International ISO safety accreditations, continental infrastructure awards, and operational mining milestones earned across more than {SITE_FACTS.yearsInBusinessLower} of engineering delivery in Africa and the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Filter Navigation: Replaces boxy government buttons (PDF Page 5) */}
      <section className="w-full bg-[#181816] border-b border-slab-grey/25 py-3 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
            <span className="font-sans text-xs uppercase tracking-wider text-dust-tan font-semibold shrink-0">
              Filter By:
            </span>
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              {ACHIEVEMENT_CATEGORIES.map((cat) => {
                const href = cat === "ALL" ? "/achievements" : `/achievements?category=${cat}`;
                const isActive = selectedCategory === cat;

                return (
                  <Link
                    key={cat}
                    href={href}
                    scroll={false}
                    className={cn(
                      "editorial-tab text-xs uppercase tracking-wider py-2",
                      isActive
                        ? "text-oxide-red font-semibold border-b-2 border-oxide-red"
                        : "text-dust-tan/80 hover:text-iron-white border-b-2 border-transparent"
                    )}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Framed Grid Section (Replaces vertical timeline layout per user reference) */}
      <section className="w-full bg-[#EBE8E0] py-16 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {filteredItems.length === 0 ? (
            <div className="bg-iron-white border border-slab-grey p-12 text-center max-w-2xl mx-auto my-8 font-sans">
              <span className="text-xs text-oxide-red font-sans uppercase tracking-wider block mb-2 font-semibold">
                No Results Found
              </span>
              <h3 className="font-heading text-2xl font-medium text-earth-black mb-3">
                No credentials listed under {selectedCategory}
              </h3>
              <p className="text-sm text-quarry-grey mb-6 font-sans">
                All corporate credentials, third-party audits, and partnership agreements are submitted to rigorous review prior to public confirmation.
              </p>
              <Link
                href="/achievements"
                scroll={false}
                className="btn-secondary text-xs py-3 px-6 inline-block font-sans uppercase tracking-wider font-semibold"
              >
                View all categories
              </Link>
            </div>
          ) : selectedCategory === "ALL" ? (
            <div className="space-y-16">
              {/* Group 1: Third-Party Certifications, Awards & Partnerships */}
              {thirdPartyItems.length > 0 && (
                <div>
                  <div className="mb-10">
                    <span className="text-xs text-oxide-red font-sans uppercase tracking-wider block mb-1 font-semibold">
                      External Accreditations
                    </span>
                    <h2 className="font-heading text-display-md sm:text-[2.5rem] font-medium text-earth-black leading-tight">
                      Certifications & Industry Awards
                    </h2>
                  </div>

                  {/* Framed Side-by-Side Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {thirdPartyItems.map((item) => (
                      <AchievementCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {/* Group 2: Internal Milestones */}
              {milestoneItems.length > 0 && (
                <div className="pt-14 border-t border-slab-grey/60">
                  <div className="mb-10">
                    <span className="text-xs text-oxide-red font-sans uppercase tracking-wider block mb-1 font-semibold">
                      Operational Benchmarks
                    </span>
                    <h2 className="font-heading text-display-md sm:text-[2.5rem] font-medium text-earth-black leading-tight">
                      Operational Milestones
                    </h2>
                    <p className="text-sm text-quarry-grey max-w-xl mt-1.5 font-sans leading-relaxed">
                      Internal production thresholds, earthmoving volumes, and equipment availability benchmarks achieved across company operations.
                    </p>
                  </div>

                  {/* Framed Side-by-Side Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {milestoneItems.map((item) => (
                      <AchievementCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-10">
                <span className="text-xs text-oxide-red font-sans uppercase tracking-wider block mb-1 font-semibold">
                  Category: {selectedCategory}
                </span>
                <h2 className="font-heading text-display-md sm:text-[2.5rem] font-medium text-earth-black leading-tight">
                  {selectedCategory === "Milestones" ? "Operational Milestones" : selectedCategory}
                </h2>
              </div>

              {/* Framed Side-by-Side Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <AchievementCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
