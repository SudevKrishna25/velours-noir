import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Droplet,
  Compass,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { FRAGRANCES, getFragranceBySlug } from "@/data/fragrances";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FRAGRANCES.map((f) => ({
    slug: f.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const fragrance = getFragranceBySlug(slug);

  if (!fragrance) {
    return {
      title: "Fragrance Not Found | Velours Noir",
    };
  }

  return {
    title: `${fragrance.name} | Velours Noir Haute Parfumerie`,
    description: fragrance.shortDescription,
  };
}

export default async function FragranceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const fragrance = getFragranceBySlug(slug);

  if (!fragrance) {
    notFound();
  }

  const relatedFragrances = FRAGRANCES.filter((f) =>
    fragrance.relatedSlugs.includes(f.slug)
  );

  return (
    <div className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-28 pb-24">
      {/* Background ambient plum glow */}
      <div
        className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[160px] opacity-25"
        style={{ backgroundColor: fragrance.dominantColor }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#B9955B]/15">
          <Link
            href="/collection"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#9B709F] hover:text-[#B9955B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Collection</span>
          </Link>

          <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
            {fragrance.id} • {fragrance.concentration.split("(")[0]}
          </span>
        </div>

        {/* Hero Product Split: Flacon on Left, Haute Editorial on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Heavy Glass Flacon Visual & Detail Shots */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-[#B9955B]/30 shadow-2xl bg-[#160620]">
              <Image
                src={fragrance.image}
                alt={fragrance.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/70 via-transparent to-transparent pointer-events-none" />

              {/* Volume and Concentration seal */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#12041A]/85 backdrop-blur-md rounded border border-[#B9955B]/25 flex items-center justify-between text-xs text-[#F4EAF2]">
                <div className="flex items-center space-x-2">
                  <Droplet className="w-4 h-4 text-[#B9955B]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9B709F]">
                    {fragrance.concentration}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B9955B]">
                  {fragrance.volume}
                </span>
              </div>
            </div>

            {/* Atmosphere Secondary Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video rounded overflow-hidden border border-white/10">
                <Image
                  src={fragrance.detailImage}
                  alt="Detail"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-widest text-[#F4EAF2] bg-black/60 px-1.5 py-0.5 rounded font-mono">
                  Crystal Facet
                </span>
              </div>
              <div className="relative aspect-video rounded overflow-hidden border border-white/10">
                <Image
                  src={fragrance.atmosphereImage}
                  alt="Atmosphere"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-widest text-[#F4EAF2] bg-black/60 px-1.5 py-0.5 rounded font-mono">
                  Botanical Origin
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Olfactory Specification */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles className="w-4 h-4 text-[#B9955B]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                  {fragrance.personality}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F4EAF2] tracking-wide">
                {fragrance.name}
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#9B709F] mt-2">
                &ldquo;{fragrance.headlineQuote}&rdquo;
              </p>
            </div>

            <div className="w-20 h-[1.5px] bg-[#B9955B]" />

            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed">
              <p>{fragrance.longDescription}</p>
            </div>

            {/* Sensory Metric Profile */}
            <div className="p-6 bg-[#1D0A29]/60 border border-[#B9955B]/20 rounded-lg space-y-4">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
                Sensory Character & Performance
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between text-[#9B709F] font-mono text-[10px] mb-1">
                    <span>Sillage (Projection Radius)</span>
                    <span className="text-[#F4EAF2]">
                      {fragrance.sensoryProfile.sillage}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#633A78] to-[#B9955B]"
                      style={{ width: `${fragrance.sensoryProfile.sillage}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#9B709F] font-mono text-[10px] mb-1">
                    <span>Longevity on Skin (Hours)</span>
                    <span className="text-[#F4EAF2]">
                      {fragrance.sensoryProfile.longevity}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#633A78] to-[#B9955B]"
                      style={{ width: `${fragrance.sensoryProfile.longevity}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#9B709F] font-mono text-[10px] mb-1">
                    <span>Nocturnal Mystery</span>
                    <span className="text-[#F4EAF2]">
                      {fragrance.sensoryProfile.mystery}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#633A78] to-[#B9955B]"
                      style={{ width: `${fragrance.sensoryProfile.mystery}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Application Ritual */}
            <div className="p-6 bg-[#1D0A29]/30 border border-white/10 rounded-lg">
              <div className="flex items-center space-x-2 text-[#B9955B] text-[10px] font-mono uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>The Ritual of Application</span>
              </div>
              <p className="font-serif italic text-sm text-[#F4EAF2]/90 leading-relaxed">
                &ldquo;{fragrance.ritualOfApplication}&rdquo;
              </p>
            </div>

            {/* Atelier Private Inquiry CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="group flex-1 inline-flex items-center justify-center px-8 py-4 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] font-medium rounded border border-[#B9955B]/60 hover:border-[#B9955B] transition-all"
              >
                <span>Reserve Private Atelier Session</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Scent Pyramid Architecture */}
        <div className="my-24 p-8 sm:p-14 bg-[#1D0A29]/60 border border-[#B9955B]/25 rounded-lg backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block mb-2">
              Olfactory Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2]">
              The Three Temporal Movements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Top Notes */}
            <div className="p-6 bg-[#12041A]/80 border border-[#B9955B]/20 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono block mb-1">
                  Movement 01 • Top Notes
                </span>
                <h3 className="font-serif text-xl text-[#F4EAF2] mb-4">
                  The Awakening
                </h3>
                <ul className="space-y-4">
                  {fragrance.notes.top.map((note) => (
                    <li key={note.name} className="border-t border-white/5 pt-3">
                      <strong className="block font-serif text-sm text-[#F4EAF2]">
                        {note.name}
                      </strong>
                      <span className="text-xs text-[#9B709F] font-sans">
                        {note.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/5 mt-6 text-[10px] text-[#9B709F] font-mono flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#B9955B]" />
                <span>Active 0 — 20 minutes</span>
              </div>
            </div>

            {/* Heart Notes */}
            <div className="p-6 bg-[#12041A]/80 border border-[#B9955B]/30 rounded-lg flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono block mb-1">
                  Movement 02 • Heart Notes
                </span>
                <h3 className="font-serif text-xl text-[#F4EAF2] mb-4">
                  The Identity
                </h3>
                <ul className="space-y-4">
                  {fragrance.notes.heart.map((note) => (
                    <li key={note.name} className="border-t border-white/5 pt-3">
                      <strong className="block font-serif text-sm text-[#F4EAF2]">
                        {note.name}
                      </strong>
                      <span className="text-xs text-[#9B709F] font-sans">
                        {note.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/5 mt-6 text-[10px] text-[#9B709F] font-mono flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#B9955B]" />
                <span>Active 20 min — 4 hours</span>
              </div>
            </div>

            {/* Base Notes */}
            <div className="p-6 bg-[#12041A]/80 border border-[#B9955B]/20 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono block mb-1">
                  Movement 03 • Base Notes
                </span>
                <h3 className="font-serif text-xl text-[#F4EAF2] mb-4">
                  The Imprint
                </h3>
                <ul className="space-y-4">
                  {fragrance.notes.base.map((note) => (
                    <li key={note.name} className="border-t border-white/5 pt-3">
                      <strong className="block font-serif text-sm text-[#F4EAF2]">
                        {note.name}
                      </strong>
                      <span className="text-xs text-[#9B709F] font-sans">
                        {note.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/5 mt-6 text-[10px] text-[#9B709F] font-mono flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#B9955B]" />
                <span>Active 4 — 24+ hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Creations */}
        {relatedFragrances.length > 0 && (
          <div className="border-t border-[#B9955B]/20 pt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2]">
                Harmonious Creations
              </h3>
              <Link
                href="/collection"
                className="text-xs uppercase tracking-widest text-[#B9955B] hover:text-[#F4EAF2] transition-colors"
              >
                All Fragrances →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedFragrances.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/fragrances/${rel.slug}`}
                  className="group flex flex-col sm:flex-row items-center bg-[#1D0A29]/50 border border-[#B9955B]/20 rounded p-6 hover:border-[#B9955B] transition-all"
                >
                  <div className="relative w-28 h-36 rounded overflow-hidden flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
                      {rel.personality}
                    </span>
                    <h4 className="font-serif text-2xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#9B709F] line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
