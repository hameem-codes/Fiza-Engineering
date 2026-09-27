"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { getVisibleArticles } from "@/lib/news";
import { EXTERNAL_COVERAGE, ExternalMention } from "@/lib/externalCoverage";
import { formatDate } from "@/lib/utils";
import { ArrowRight, ExternalLink, Linkedin, Instagram, Twitter, Newspaper, Landmark } from "lucide-react";

function SourceIcon({ source }: { source: ExternalMention["source"] }) {
  switch (source) {
    case "LinkedIn":
      return <Linkedin size={14} className="text-[#0A66C2]" />;
    case "Instagram":
      return <Instagram size={14} className="text-[#E4405F]" />;
    case "X / Twitter":
      return <Twitter size={14} className="text-[#1DA1F2]" />;
    case "Ministry of Mines":
      return <Landmark size={14} className="text-oxide-red" />;
    case "Industry Journal":
    default:
      return <Newspaper size={14} className="text-earth-black" />;
  }
}

function NewsContent() {
  const officialArticles = getVisibleArticles();
  const externalMentions = EXTERNAL_COVERAGE;

  return (
    <div className="w-full">
      {/* 1. Hero: Rich Blended Photography with Crystal Clear Contrast (Fixes 2 PDF Page 3) */}
      <section className="relative w-full h-[62vh] min-h-[500px] flex items-end overflow-hidden bg-coal-dark">
        <Image
          src="/images/capabilities/railway-solutions.jpg"
          alt="Fiza Engineering heavy-haul rail logistics, locomotives, and mineral transport operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Directional Scrim Overlay: Visible heavy-haul railway while guaranteeing 100% white text readability */}
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
              News & Field Dispatches
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-2xl leading-relaxed font-normal">
              Official company releases, heavy infrastructure progress reports, and external verified media coverage across African mining corridors.
            </p>
          </div>
        </div>
      </section>

      {/* COVERAGE SCOPE COMPLETELY REMOVED AS EXPLICITLY DIRECTED BY FIXES 2 PDF PAGE 3 ("Remove that coverage scope things all") */}

      {/* 2. Differentiated Two-Column News Layout: Official Fiza News on LEFT (7 cols), External Coverage on RIGHT (5 cols) (PDF Page 4) */}
      <section className="w-full bg-[#F4F2EC] py-16 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* LEFT / PRIMARY AREA (7 cols): Official Fiza Corporate Dispatches */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border-b border-slab-grey pb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-oxide-red inline-block" />
                    <span className="font-sans text-xs uppercase tracking-wider text-oxide-red font-semibold">
                      Corporate Announcements & Operations
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-medium text-earth-black">
                    Official Fiza News
                  </h2>
                </div>
                <span className="font-sans text-xs text-quarry-grey font-medium">
                  {officialArticles.length} Dispatches
                </span>
              </div>

              <div className="space-y-8">
                {officialArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="bg-iron-white border border-slab-grey p-7 md:p-8 transition-all duration-300 hover:border-earth-black hover:shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      {/* Authentic Industrial Photography Banner */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey/40 border border-slab-grey/60 mb-6">
                        <Image
                          src={article.image}
                          alt={article.imageAlt || article.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute top-3.5 left-3.5 bg-[#141412]/90 text-iron-white text-xs font-sans uppercase tracking-wider px-3 py-1 border border-white/10 font-semibold backdrop-blur-sm">
                          {article.category}
                        </div>
                      </div>

                      {/* Article Metadata */}
                      <div className="flex items-center gap-2.5 text-xs font-sans text-quarry-grey mb-3 font-medium">
                        <span>{formatDate(article.date)}</span>
                        <span>·</span>
                        <span>{article.readingTime}</span>
                        <span>·</span>
                        <span className="text-oxide-red font-semibold uppercase tracking-wider text-[11px]">Official Fiza Dispatch</span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-[1.75rem] font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-3 leading-snug">
                        <Link href={`/news/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-sm font-sans text-quarry-grey leading-relaxed mb-6 font-normal">
                        {article.summary}
                      </p>

                      <div className="text-xs font-sans text-quarry-grey mb-6 pt-3 border-t border-slab-grey/40">
                        Authored by <span className="font-semibold text-earth-black">{article.author.name}</span>, {article.author.role}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slab-grey/60 flex items-center justify-between">
                      <Link
                        href={`/news/${article.slug}`}
                        className="font-sans text-xs font-semibold uppercase tracking-wider text-earth-black group-hover:text-oxide-red inline-flex items-center gap-2 transition-colors group/cta"
                      >
                        <span>Read Full Dispatch</span>
                        <ArrowRight size={14} className="transition-transform group-hover/cta:translate-x-1" />
                      </Link>
                      <span className="text-[11px] font-sans text-quarry-grey uppercase tracking-wider">
                        Official Release
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* RIGHT / SECONDARY AREA (5 cols): Verified External Media Coverage & Field Logs */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-b border-slab-grey pb-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-oxide-red inline-block" />
                    <span className="font-sans text-xs uppercase tracking-wider text-oxide-red font-semibold">
                      Public Sector & Verified Media
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-medium text-earth-black">
                    External Coverage & Field Logs
                  </h2>
                </div>
                <span className="font-sans text-xs text-quarry-grey font-medium">
                  {externalMentions.length} Mentions
                </span>
              </div>

              <div className="space-y-6">
                {externalMentions.map((mention) => (
                  <article
                    key={mention.id}
                    className="bg-iron-white border border-slab-grey p-6 transition-all duration-300 hover:border-earth-black hover:shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      {/* Header: Platform Badge, Handle, Date */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slab-grey/40">
                        <div className="flex items-center gap-2">
                          <div className="p-1 bg-[#F4F2EC] border border-slab-grey/60 flex items-center justify-center">
                            <SourceIcon source={mention.source} />
                          </div>
                          <span className="font-sans text-xs font-semibold text-earth-black uppercase tracking-wider">
                            {mention.source}
                          </span>
                        </div>
                        <span className="font-sans text-xs text-quarry-grey font-medium">
                          {mention.date}
                        </span>
                      </div>

                      <div className="font-sans text-xs text-quarry-grey mb-2 font-medium">
                        {mention.authorOrHandle}
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="font-heading text-lg sm:text-xl font-medium text-earth-black mb-2.5 leading-snug group-hover:text-oxide-red transition-colors">
                        {mention.title}
                      </h3>

                      <p className="text-xs font-sans text-quarry-grey leading-relaxed mb-5 font-normal">
                        {mention.excerpt}
                      </p>

                      {/* Supporting Real Industrial Photography */}
                      {mention.image && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey/40 border border-slab-grey/60 mb-5">
                          <Image
                            src={mention.image}
                            alt={mention.imageAlt || mention.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute bottom-2.5 left-2.5 bg-[#141412]/90 text-iron-white text-[11px] font-sans uppercase tracking-wider px-2 py-0.5 border border-white/10 font-semibold">
                            {mention.tag}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer: Outbound Link */}
                    <div className="pt-3.5 border-t border-slab-grey/40 flex items-center justify-between">
                      <span className="text-[11px] font-sans text-quarry-grey font-medium">
                        External Reference
                      </span>
                      <a
                        href={mention.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs font-semibold uppercase tracking-wider text-oxide-red hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>View Source</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function NewsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-[100px] text-center font-sans text-xs font-medium text-quarry-grey">
          Loading newsroom...
        </div>
      }
    >
      <NewsContent />
    </Suspense>
  );
}
