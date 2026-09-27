import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NEWS_ARTICLES, NewsArticle } from "@/lib/news";
import { PROJECTS } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "News | Fiza Engineering",
    };
  }

  const title = `${article.title} | News | Fiza Engineering`;
  const description = article.summary.length <= 155
    ? article.summary
    : `${article.summary.slice(0, 151)}...`;

  return {
    title,
    description,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/news/${article.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "article",
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.slug !== params.slug).slice(0, 2);
  const relatedProject = article.relatedProjectSlug
    ? PROJECTS.find((p) => p.slug === article.relatedProjectSlug)
    : null;

  // JSON-LD structured data for NewsArticle
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "image": [article.image],
    "datePublished": article.date,
    "dateModified": article.date,
    "author": [
      {
        "@type": "Person",
        "name": article.author.name,
        "jobTitle": article.author.role,
      },
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Fiza Engineering Corporation",
      "url": "https://fiza-one.vercel.app",
    },
  };

  const articleUrl = `https://fiza-one.vercel.app/news/${article.slug}`;

  return (
    <div className="w-full pt-[72px]">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Bar */}
      <section className="bg-iron-white py-16 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Link
            href="/news"
            className="text-label text-oxide-red font-sans uppercase tracking-wide inline-flex items-center gap-2 mb-4 hover:underline font-semibold"
          >
            ← Back To News
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-quarry-grey mb-4 font-medium">
            <span className="bg-earth-black text-iron-white px-2 py-0.5 uppercase tracking-wide text-[10px] font-semibold">
              {article.category}
            </span>
            <span>PUBLISHED {formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="text-display-lg sm:text-[3rem] font-medium text-earth-black leading-[1.08] max-w-4xl mb-4">
            {article.title}
          </h1>
          <div className="text-sm font-sans text-quarry-grey">
            By <span className="font-semibold text-earth-black">{article.author.name}</span>, {article.author.role}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full bg-[#E8E5DD] py-8 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] w-full bg-slab-grey border border-slab-grey overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              priority
              sizes="100vw"
              className="img-cover"
            />
            <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white font-sans text-[10px] px-2.5 py-1 uppercase tracking-wide font-medium">
              OFFICIAL DISPATCH ARCHIVE · {article.category}
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Body Column + Sidebar */}
      <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Body */}
            <article className="lg:col-span-8 max-w-[720px]">
              <p className="text-body-lg text-earth-black font-medium leading-relaxed mb-8 pb-6 border-b border-slab-grey">
                {article.summary}
              </p>

              {/* Formatted Body with Subheadings */}
              <div className="space-y-8 text-quarry-grey text-body leading-relaxed">
                {article.sections && article.sections.length > 0 ? (
                  article.sections.map((sec, i) => (
                    <div key={i} className="space-y-4">
                      <h3 className="text-heading-2 font-medium text-earth-black text-xl pt-2">
                        {sec.heading}
                      </h3>
                      {sec.content.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  ))
                ) : (
                  article.body.map((p, i) => <p key={i}>{p}</p>)
                )}
              </div>

              {/* Pull Quote */}
              {article.pullQuote && (
                <div className="pull-quote my-12 p-6 bg-[#F5F3ED] border-l-4 border-oxide-red font-sans">
                  <p className="font-heading text-xl md:text-2xl font-normal italic text-earth-black leading-snug">
                    &ldquo;{article.pullQuote.quote}&rdquo;
                  </p>
                  <span className="block text-label font-sans not-italic text-quarry-grey uppercase tracking-wide mt-3 text-xs font-medium">
                    — {article.pullQuote.author}
                  </span>
                </div>
              )}

              {/* Audit Statement */}
              <div className="mt-8 pt-6 border-t border-slab-grey text-xs text-quarry-grey">
                <p>
                  All project milestones are audited by third-party engineering inspectors and verified against ISO standards for structural, environmental, and worker safety protocols.
                </p>
              </div>

              {/* Share Links */}
              <div className="mt-10 pt-6 border-t border-slab-grey flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
                <span className="text-earth-black font-semibold uppercase tracking-wide">
                  Share Dispatch:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag hover:bg-earth-black hover:text-iron-white text-xs"
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag hover:bg-earth-black hover:text-iron-white text-xs"
                  >
                    Share on LinkedIn
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(articleUrl)}`}
                    className="tag hover:bg-earth-black hover:text-iron-white text-xs"
                  >
                    Email
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 flex flex-col space-y-8">
              {/* Related Project Card */}
              {relatedProject && (
                <div className="bg-[#EBE8E0] p-6 border border-slab-grey font-sans text-xs">
                  <span className="text-label text-earth-black uppercase tracking-wide block mb-2 font-bold pb-2 border-b border-slab-grey">
                    Related Project
                  </span>
                  <div className="relative aspect-[16/10] w-full overflow-hidden my-3 border border-slab-grey">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.imageAlt || relatedProject.name}
                      fill
                      className="img-cover"
                    />
                  </div>
                  <span className="font-sans text-[10px] text-oxide-red uppercase tracking-wide block mb-1 font-medium">
                    {relatedProject.country} · {relatedProject.sector}
                  </span>
                  <h4 className="text-heading-3 font-medium text-earth-black text-sm mb-3 leading-snug font-sans">
                    {relatedProject.name}
                  </h4>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="text-label font-bold text-oxide-red uppercase tracking-wide hover:underline block font-sans"
                  >
                    View project →
                  </Link>
                </div>
              )}

              {/* Corporate Dispatches Inquiries */}
              <div className="bg-[#EBE8E0] p-6 border border-slab-grey font-sans text-xs">
                <span className="text-label text-earth-black uppercase tracking-wide block mb-3 pb-2 border-b border-slab-grey font-bold">
                  Media & Press Desk
                </span>
                <p className="text-quarry-grey leading-relaxed mb-4 font-sans text-xs">
                  For press inquiries, technical documentation requests, or photographic assets, contact our corporate communications desk.
                </p>
                <Link
                  href="/contact"
                  className="text-label font-bold text-oxide-red uppercase tracking-wide hover:underline block font-sans"
                >
                  Media Relations Inquiry →
                </Link>
              </div>

              {/* Related Stories */}
              {relatedArticles.length > 0 && (
                <div>
                  <span className="text-label text-earth-black font-sans uppercase tracking-wide block mb-4 font-bold text-xs">
                    More News
                  </span>
                  <div className="space-y-4">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/news/${rel.slug}`}
                        className="group block p-4 border border-slab-grey bg-iron-white hover:border-earth-black transition-colors"
                      >
                        <span className="font-sans text-[10px] text-oxide-red uppercase tracking-wide block mb-1 font-medium">
                          {rel.category}
                        </span>
                        <h4 className="text-heading-3 font-medium text-earth-black text-sm group-hover:text-oxide-red transition-colors leading-snug font-sans">
                          {rel.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
