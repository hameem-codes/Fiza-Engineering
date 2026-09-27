import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CAPABILITIES } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { PRODUCTS } from "@/lib/products";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const capability = CAPABILITIES.find((c) => c.slug === params.slug);
  if (!capability) {
    return {
      title: "Division Overview | Fiza Engineering",
    };
  }

  // Format: Page Name | Fiza Engineering (max 60 chars)
  const fullTitle = `${capability.title} | Fiza Engineering`;
  const title = fullTitle.length <= 60 ? fullTitle : `${capability.title.slice(0, 38)} | Fiza Engineering`;

  // Description: 120-155 characters
  const rawDesc = `${capability.tagline} ${capability.description}`;
  const description = rawDesc.length >= 120 && rawDesc.length <= 155
    ? rawDesc
    : rawDesc.length > 155
    ? `${rawDesc.slice(0, 151)}...`
    : `${rawDesc} Engineered for demanding remote African operations.`.slice(0, 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/capabilities/${capability.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/capabilities/${capability.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "website",
      images: [
        {
          url: capability.image,
          width: 1200,
          height: 630,
          alt: capability.title,
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

export default function CapabilityDetailPage({ params }: Props) {
  const capability = CAPABILITIES.find((c) => c.slug === params.slug);

  if (!capability) {
    notFound();
  }

  // Related projects tailored to this service
  const getRelatedProjects = (slug: string) => {
    switch (slug) {
      case "mining-services":
        return PROJECTS.filter(p => p.slug === "falea-bauxite-corridor" || p.slug === "katanga-copper-processing");
      case "mineral-trading":
        return PROJECTS.filter(p => p.slug === "falea-bauxite-corridor" || p.slug === "katanga-copper-processing");
      case "railway-solutions":
        return PROJECTS.filter(p => p.slug === "toamasina-bulk-rail-terminal" || p.slug === "falea-bauxite-corridor");
      case "infrastructure":
        return PROJECTS.filter(p => p.slug === "bamako-industrial-logistics-hub" || p.slug === "manono-lithium-infrastructure");
      case "turnkey-plants":
        return PROJECTS.filter(p => p.slug === "katanga-copper-processing" || p.slug === "sikasso-agro-processing");
      case "agriculture":
        return PROJECTS.filter(p => p.slug === "sikasso-agro-processing");
      case "equipment-procurement":
        return PROJECTS.filter(p => p.slug === "bamako-industrial-logistics-hub");
      case "industrial-power":
        return PROJECTS.filter(p => p.slug === "sikasso-agro-processing" || p.slug === "falea-bauxite-corridor");
      default:
        return PROJECTS.slice(0, 2);
    }
  };

  const relatedProjects = getRelatedProjects(capability.slug);
  const relatedProducts = PRODUCTS.slice(0, 2);

  return (
    <div className="w-full pt-[72px]">
      {/* Detail Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={capability.image}
          alt={capability.title}
          fill
          priority
          sizes="100vw"
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14">
          <Link
            href="/capabilities"
            className="text-label text-dust-tan font-sans uppercase tracking-wide inline-flex items-center gap-2 mb-3 hover:text-iron-white transition-colors font-semibold"
          >
            ← All Services
          </Link>
          <h1 className="text-display-lg sm:text-[3.5rem] font-medium text-iron-white leading-[1.08]">
            {capability.title}
          </h1>
          <p className="text-body-lg text-white/95 max-w-2xl mt-4 font-normal">
            {capability.tagline}
          </p>
          <div className="mt-6">
            <Link
              href={`/contact?type=${capability.slug}`}
              className="btn-primary !bg-oxide-red hover:!bg-earth-black text-iron-white text-xs py-3.5 px-6 font-sans uppercase tracking-wide font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Enquire about this service →
            </Link>
          </div>
        </div>
      </section>

      {/* Overview & Key Metrics Bar */}
      <section className="w-full bg-iron-white py-16 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-body-lg text-quarry-grey leading-relaxed">
                {capability.description}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#EBE8E0] p-6 border border-slab-grey">
              {capability.keyMetrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-heading-2 font-medium text-earth-black leading-none mb-1">
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-sans text-quarry-grey uppercase tracking-wide font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List (Left Column) with Descriptions (Right Column) */}
      <section className="w-full bg-[#E8E5DD] py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <h2 className="text-display-lg font-medium text-earth-black leading-[1.08]">
              Core Scope & Deliverables
            </h2>
          </div>

          <div className="divide-y divide-slab-grey border-t border-b border-slab-grey">
            {capability.scope.map((service, idx) => (
              <div
                key={idx}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-iron-white px-6 md:px-8"
              >
                <div className="lg:col-span-5 flex items-baseline gap-4">
                  <span className="text-display-lg font-medium text-oxide-red leading-none">
                    0{idx + 1}
                  </span>
                  <h3 className="text-heading-3 font-medium text-earth-black">
                    {service}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-body-sm text-quarry-grey leading-relaxed">
                    Delivered with direct company equipment, structured project management, and qualified technical supervisors managing on-site execution.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="w-full bg-iron-white py-20 border-b border-slab-grey">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-heading-1 font-medium text-earth-black leading-[1.08]">
                  Related Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wide font-sans"
              >
                All Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <Link
                  key={proj.id}
                  href={`/projects/${proj.slug}`}
                  className="group border border-slab-grey p-6 bg-[#EBE8E0] hover:border-earth-black transition-colors"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-slab-grey">
                    <Image
                      src={proj.image}
                      alt={proj.imageAlt || proj.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="font-sans text-xs text-oxide-red uppercase tracking-wide block mb-1 font-medium">
                    {proj.country} · {proj.sector}
                  </span>
                  <h3 className="text-heading-3 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-2">
                    {proj.name}
                  </h3>
                  <p className="text-body-sm text-quarry-grey leading-relaxed">
                    {proj.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Equipment */}
      <section className="w-full bg-[#EBE8E0] py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-label text-oxide-red font-sans uppercase tracking-wide block mb-2 font-semibold">
                Plant & Equipment
              </span>
              <h2 className="text-heading-1 font-medium text-earth-black">
                Machinery Deployed in Sector
              </h2>
            </div>
            <Link
              href="/products"
              className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wide font-sans"
            >
              Equipment Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className="group border border-slab-grey p-6 bg-iron-white hover:border-earth-black transition-colors"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-slab-grey">
                  <Image
                    src={prod.heroImage}
                    alt={prod.imageAlt || prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="font-sans text-xs text-oxide-red uppercase tracking-wide block mb-1 font-medium">
                  {prod.category}
                </span>
                <h3 className="text-heading-3 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-2">
                  {prod.name}
                </h3>
                <p className="text-body-sm text-quarry-grey leading-relaxed">
                  {prod.overview}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full bg-coal-dark py-16 text-iron-white border-t border-slab-grey/20">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-label text-dust-tan font-sans uppercase tracking-wide block mb-2 font-semibold">
              Start an Inquiry
            </span>
            <h2 className="text-heading-1 font-medium text-iron-white">
              Tell us about your project
            </h2>
            <p className="text-body-sm text-dust-tan max-w-xl mt-2 font-normal">
              Direct consultation with our engineering and commercial teams. We review site specifications, logistics constraints, and project timelines.
            </p>
          </div>
          <Link
            href={`/contact?type=${capability.slug}`}
            className="btn-primary !bg-oxide-red hover:!bg-iron-white hover:!text-earth-black text-iron-white text-xs py-4 px-8 font-sans uppercase tracking-wide font-semibold whitespace-nowrap transition-colors"
          >
            Tell us about your project →
          </Link>
        </div>
      </section>
    </div>
  );
}
