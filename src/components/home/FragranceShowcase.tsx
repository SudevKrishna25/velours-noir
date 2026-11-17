"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";

export default function FragranceShowcase() {
  const [activeFragrance, setActiveFragrance] = useState<Fragrance>(
    FRAGRANCES[0]
  );
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section className="relative py-28 sm:py-36 bg-[#12041A] text-[#F4EAF2] overflow-hidden">
      {/* Background ambient plum glow focused on active fragrance */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[140px] opacity-35 transition-colors duration-1000"
        style={{ backgroundColor: activeFragrance.dominantColor }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9955B]/20">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B9955B]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                02 — The Collection Privée
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F4EAF2]">
              THE ART OF SCENT
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-2 max-w-lg tracking-wide">
              Discover fragrances composed to become part of your signature.
              Each flacon holds an immortal conversation between rare botanicals
              and twilight.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/collection"
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9955B] hover:text-[#F4EAF2] transition-colors py-2 px-4 rounded-full border border-[#B9955B]/30 hover:border-[#B9955B]"
            >
              <span>View All 04 Opus Flacons</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Desktop Interactive Editorial Switcher Tabs */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-12">
          {FRAGRANCES.map((frag, idx) => {
            const isSelected = activeFragrance.slug === frag.slug;
            return (
              <button
                key={frag.slug}
                onClick={() => setActiveFragrance(frag)}
                onMouseEnter={() => setHoveredSlug(frag.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className={`text-left p-6 rounded transition-all duration-500 relative border ${
                  isSelected
                    ? "bg-[#1D0A29] border-[#B9955B] shadow-lg shadow-[#3B174D]/50"
                    : "bg-[#1D0A29]/40 border-white/10 hover:border-[#B9955B]/40 hover:bg-[#1D0A29]/70"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent" />
                )}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B9955B] mb-2">
                  <span>№ 0{idx + 1}</span>
                  <span className="opacity-70">{frag.volume}</span>
                </div>
                <h3 className="font-serif text-xl text-[#F4EAF2] mb-1 font-normal">
                  {frag.name}
                </h3>
                <p className="text-xs text-[#9B709F] line-clamp-1">
                  {frag.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Fragrance Cinematic Showcase Stage */}
        <div className="relative bg-[#1D0A29]/60 border border-[#B9955B]/25 rounded-lg p-6 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Bottle Imagery with Chiaroscuro Reflections */}
            <div
              className="lg:col-span-6 relative flex justify-center group cursor-pointer"
              data-cursor="explore"
            >
              <div className="relative aspect-[4/5] w-full max-w-md rounded-md overflow-hidden border border-[#B9955B]/30 shadow-2xl shadow-black/80">
                <Image
                  src={activeFragrance.image}
                  alt={activeFragrance.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Subtle sheen reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#12041A]/70 via-transparent to-[#F4EAF2]/10 pointer-events-none" />

                {/* Badge on Bottle */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#12041A]/85 backdrop-blur-md border border-[#B9955B]/40 rounded text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
                  {activeFragrance.concentration}
                </div>
              </div>

              {/* Secondary Floating Accord Visual preview on hover */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 w-36 h-48 rounded overflow-hidden border border-[#B9955B]/50 shadow-2xl opacity-90 transition-transform duration-500 hover:scale-105">
                <Image
                  src={activeFragrance.detailImage}
                  alt={`${activeFragrance.name} Detail`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12041A] via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.2em] text-[#B9955B] font-mono">
                  Detail View
                </span>
              </div>
            </div>

            {/* Right: Rich Editorial Content & Olfactory Notes breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-4 h-4 text-[#B9955B]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                  {activeFragrance.personality}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-5xl font-light text-[#F4EAF2] tracking-wide">
                  {activeFragrance.name}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-[#9B709F] mt-1">
                  &ldquo;{activeFragrance.headlineQuote}&rdquo;
                </p>
              </div>

              <div className="w-16 h-[1px] bg-[#B9955B]" />

              <p className="font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed">
                {activeFragrance.longDescription}
              </p>

              {/* Notes Pyramid Snapshot */}
              <div className="space-y-3 pt-2">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
                  Olfactory Composition
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[#12041A]/70 rounded border border-white/5">
                    <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                      Top Notes
                    </span>
                    <p className="font-serif text-xs text-[#F4EAF2] mt-1">
                      {activeFragrance.notes.top.map((n) => n.name).join(", ")}
                    </p>
                  </div>
                  <div className="p-3 bg-[#12041A]/70 rounded border border-white/5">
                    <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                      Heart Notes
                    </span>
                    <p className="font-serif text-xs text-[#F4EAF2] mt-1">
                      {activeFragrance.notes.heart.map((n) => n.name).join(", ")}
                    </p>
                  </div>
                  <div className="p-3 bg-[#12041A]/70 rounded border border-white/5">
                    <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                      Base Notes
                    </span>
                    <p className="font-serif text-xs text-[#F4EAF2] mt-1">
                      {activeFragrance.notes.base.map((n) => n.name).join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href={`/fragrances/${activeFragrance.slug}`}
                  className="group inline-flex items-center justify-center px-6 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.22em] font-medium rounded border border-[#B9955B]/60 hover:border-[#B9955B] transition-all"
                >
                  <Eye className="w-3.5 h-3.5 mr-2 text-[#B9955B]" />
                  <span>Discover Full Fragrance</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent hover:bg-white/5 text-xs uppercase tracking-[0.22em] text-[#9B709F] hover:text-[#B9955B] border border-white/10 rounded transition-colors"
                >
                  Request Private Sample
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Cards Grid for full responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 mt-12">
          {FRAGRANCES.map((frag) => (
            <Link
              key={frag.slug}
              href={`/fragrances/${frag.slug}`}
              className="group block bg-[#1D0A29]/70 border border-[#B9955B]/25 rounded overflow-hidden p-4 hover:border-[#B9955B] transition-all"
            >
              <div className="relative aspect-[3/4] w-full rounded overflow-hidden mb-4">
                <Image
                  src={frag.image}
                  alt={frag.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#B9955B] font-mono mb-1">
                <span>{frag.id}</span>
                <span>{frag.volume}</span>
              </div>
              <h4 className="font-serif text-lg text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                {frag.name}
              </h4>
              <p className="text-xs text-[#9B709F] mt-0.5 line-clamp-2">
                {frag.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
