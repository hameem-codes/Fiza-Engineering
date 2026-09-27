import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function LatestNewsSection() {
  const featured = NEWS_ARTICLES[0];
  const secondary = NEWS_ARTICLES.slice(1, 3);

  return (
    <section className="w-full bg-iron-white">
      <SectionDivider />
      <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-display-lg font-medium text-earth-black leading-[1.08]">
              Latest News & Dispatches
            </h2>
          </div>
          <Link
            href="/news"
            className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wide inline-flex items-center gap-2 font-sans transition-colors"
          >
            Visit The Newsroom <span>→</span>
          </Link>
        </div>

        {/* 3-Column Layout: 1 Featured (Large, 2 cols) + 2 Smaller (Stacked, 1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Article (8 Cols) */}
          <Link
            href={`/news/${featured.slug}`}
            className="lg:col-span-8 group flex flex-col border border-slab-grey p-5 md:p-6 bg-[#EBE8E0] hover:border-earth-black transition-colors"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 bg-slab-grey">
              <Image
                src={featured.image}
                alt={featured.headline}
                fill
                className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute top-3 left-3 bg-earth-black text-iron-white text-[10px] font-sans uppercase tracking-wide px-2.5 py-1 font-semibold">
                FEATURED DISPATCH
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-sans text-quarry-grey mb-3">
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span className="text-oxide-red font-semibold">{featured.category}</span>
            </div>

            <h3 className="text-heading-2 md:text-heading-1 font-medium text-earth-black leading-tight group-hover:text-oxide-red transition-colors">
              {featured.headline}
            </h3>
          </Link>

          {/* 2 Secondary Articles (4 Cols Stacked) */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            {secondary.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group flex flex-col border border-slab-grey p-5 bg-iron-white hover:border-earth-black transition-colors h-full justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-slab-grey">
                  <Image
                    src={article.image}
                    alt={article.headline}
                    fill
                    className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3 text-xs font-sans text-quarry-grey mb-2">
                    <span>{formatDate(article.date)}</span>
                    <span>·</span>
                    <span className="text-earth-black font-semibold uppercase text-[10px]">
                      {article.category}
                    </span>
                  </div>

                  <h4 className="text-heading-3 font-medium text-earth-black leading-snug group-hover:text-oxide-red transition-colors">
                    {article.headline}
                  </h4>
                </div>

                <span className="mt-4 text-label text-oxide-red font-sans font-semibold uppercase tracking-wide inline-flex items-center gap-1">
                  Read Dispatch →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
