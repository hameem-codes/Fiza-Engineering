import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, Project } from "@/lib/projects";
import { Tag } from "@/components/ui/Tag";
import { ArrowRight, Newspaper, Layers, MapPin, Calendar } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project | Fiza Engineering",
    };
  }

  // Unique title and meta description per page (project name and country)
  const title = `${project.name} (${project.country}) | Fiza Engineering`;
  const description = `${project.summary} Heavy engineering project located in ${project.country}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/projects/${project.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.imageAlt || project.name,
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

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const years =
    project.timeline ||
    (project.endYear
      ? `${project.startYear} - ${project.endYear}`
      : `${project.startYear} - Present`);

  // JSON-LD Structured Data (schema.org/Project)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name,
    description: project.summary,
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: project.country,
      },
    },
    image: project.image,
    url: `https://fiza-one.vercel.app/projects/${project.slug}`,
  };

  return (
    <div className="w-full pt-[72px]">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Banner with Unique Image */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt || project.name}
          fill
          priority
          sizes="100vw"
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14">
          <Link
            href="/projects"
            className="text-label text-dust-tan font-sans uppercase tracking-wide inline-flex items-center gap-2 mb-4 hover:text-iron-white transition-colors font-semibold"
          >
            ← All Projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3 font-sans text-xs text-iron-white">
            <Tag active={project.status === "ACTIVE"}>
              {project.status === "IN_DEVELOPMENT" ? "IN DEVELOPMENT" : project.status}
            </Tag>
            <span className="flex items-center gap-1.5 bg-earth-black/80 px-2.5 py-0.5 uppercase tracking-wide text-[11px] font-medium">
              <MapPin size={12} className="text-oxide-red" />
              {project.country}
            </span>
            <span className="flex items-center gap-1.5 bg-earth-black/80 px-2.5 py-0.5 text-[11px] font-medium">
              <Calendar size={12} className="text-dust-tan" />
              {years}
            </span>
          </div>

          <h1 className="text-display-lg sm:text-[3.5rem] font-medium text-iron-white leading-[1.08] max-w-4xl">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Main Content Layout: Summary & Key Facts */}
      <section className="w-full bg-iron-white py-20 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Summary & Scope (8 Columns) */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="text-label text-oxide-red font-sans uppercase tracking-wide block mb-3 font-semibold">
                  Project Summary
                </span>
                <p className="text-body-lg text-earth-black leading-relaxed font-medium">
                  {project.summary}
                </p>
              </div>

              {/* Key Facts List */}
              <div className="border-t border-slab-grey pt-8">
                <span className="text-label text-earth-black font-sans uppercase tracking-wide block mb-4 font-semibold">
                  Key Operational Facts
                </span>
                <ul className="space-y-3 font-sans text-sm text-earth-black/90">
                  {project.keyFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-oxide-red inline-block mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contextual Narrative if existing */}
              {project.challenge && project.solution && (
                <div className="border-t border-slab-grey pt-8 space-y-6">
                  <div>
                    <span className="text-label text-earth-black font-sans uppercase tracking-wide block mb-2 font-semibold">
                      Operational Context
                    </span>
                    <p className="text-body text-quarry-grey leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-label text-earth-black font-sans uppercase tracking-wide block mb-2 font-semibold">
                      Engineering Delivery
                    </span>
                    <p className="text-body text-quarry-grey leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Metadata, Related Service, Related News, CTA (4 Columns) */}
            <aside className="lg:col-span-4 flex flex-col space-y-8">
              {/* Project Meta Card */}
              <div className="bg-[#EBE8E0] border border-slab-grey p-6 font-sans text-xs space-y-4">
                <span className="text-label text-earth-black uppercase tracking-wide block pb-2 border-b border-slab-grey font-bold">
                  Project Data
                </span>
                <div>
                  <span className="block text-quarry-grey uppercase text-[10px] mb-0.5 font-medium tracking-wide">Sector</span>
                  <span className="font-semibold text-earth-black text-sm">{project.sector}</span>
                </div>
                <div>
                  <span className="block text-quarry-grey uppercase text-[10px] mb-0.5 font-medium tracking-wide">Country / Location</span>
                  <span className="font-semibold text-earth-black text-sm">{project.country}</span>
                </div>
                <div>
                  <span className="block text-quarry-grey uppercase text-[10px] mb-0.5 font-medium tracking-wide">Operational Status</span>
                  <span className="font-semibold text-earth-black text-sm">
                    {project.status === "IN_DEVELOPMENT" ? "IN DEVELOPMENT" : project.status}
                  </span>
                </div>
                <div>
                  <span className="block text-quarry-grey uppercase text-[10px] mb-0.5 font-medium tracking-wide">Timeline</span>
                  <span className="font-semibold text-earth-black text-sm">{years}</span>
                </div>
                {project.client && (
                  <div>
                    <span className="block text-quarry-grey uppercase text-[10px] mb-0.5 font-medium tracking-wide">Contracting Entity</span>
                    <span className="font-semibold text-earth-black text-sm">{project.client}</span>
                  </div>
                )}
              </div>

              {/* Related Service Link */}
              {project.relatedServiceSlug && (
                <div className="bg-iron-white border border-slab-grey p-6">
                  <div className="flex items-center gap-2 mb-2 text-oxide-red font-sans text-xs uppercase tracking-wide font-semibold">
                    <Layers size={14} />
                    <span>Related Service</span>
                  </div>
                  <h4 className="text-heading-3 font-medium text-earth-black mb-3">
                    {project.relatedServiceName || "Operational Service"}
                  </h4>
                  <Link
                    href={`/capabilities/${project.relatedServiceSlug}`}
                    className="text-label font-bold text-oxide-red uppercase tracking-wide font-sans inline-flex items-center gap-1 hover:underline"
                  >
                    View service details <ArrowRight size={13} />
                  </Link>
                </div>
              )}

              {/* Related News Link (only rendered if news article exists) */}
              {project.relatedNewsSlug && (
                <div className="bg-iron-white border border-slab-grey p-6">
                  <div className="flex items-center gap-2 mb-2 text-earth-black font-sans text-xs uppercase tracking-wide font-semibold">
                    <Newspaper size={14} className="text-oxide-red" />
                    <span>Related Dispatch</span>
                  </div>
                  <h4 className="text-heading-3 font-medium text-earth-black mb-3 leading-snug">
                    {project.relatedNewsTitle}
                  </h4>
                  <Link
                    href={`/news/${project.relatedNewsSlug}`}
                    className="text-label font-bold text-oxide-red uppercase tracking-wide font-sans inline-flex items-center gap-1 hover:underline"
                  >
                    Read official news dispatch <ArrowRight size={13} />
                  </Link>
                </div>
              )}

              {/* Inquiry Callout */}
              <div className="bg-coal-dark text-iron-white p-6 border border-slab-grey">
                <h4 className="text-heading-3 text-iron-white mb-2">Project Inquiry</h4>
                <p className="text-dust-tan text-xs mb-5 leading-relaxed font-normal">
                  Connect with our commercial engineers regarding concession tenders or equipment fleet mobilization.
                </p>
                <Link
                  href={
                    project.relatedServiceSlug
                      ? `/contact?type=${project.relatedServiceSlug}`
                      : "/contact"
                  }
                  className="btn-primary !bg-oxide-red hover:!bg-iron-white hover:!text-earth-black text-iron-white w-full text-center text-xs py-3 font-sans uppercase tracking-wide font-semibold inline-block transition-colors"
                >
                  Contact project team →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
