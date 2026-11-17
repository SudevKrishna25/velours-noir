"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Filter, Eye } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";

export default function CollectionPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const families = [
    { id: "all", label: "All Flacons (04)" },
    { id: "Woody Ambery", label: "Woody Ambery" },
    { id: "Floral Woody", label: "Floral Powdery" },
    { id: "Solar Amber", label: "Solar Amber" },
    { id: "Chypre", label: "Chypre Fruity" },
  ];

  const filtered =
    selectedFilter === "all"
      ? FRAGRANCES
      : FRAGRANCES.filter((f) =>
          f.olfactiveFamily.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-32 pb-24">
      {/* Background radial violet glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#3B174D]/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Page Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
              Opus Flacons • Haute Parfumerie
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#F4EAF2] tracking-tight">
            THE COLLECTION
            <br />
            <span className="italic font-normal gold-gradient-text">
              PRIVÉE
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-4 max-w-xl mx-auto leading-relaxed">
            Four distinct olfactory architectures, each formulated in high
            extrait concentration with noble Grasse raw materials and poured
            into heavy hand-polished French crystal.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16 border-y border-[#B9955B]/15 py-4">
          <div className="hidden sm:flex items-center space-x-2 text-[#9B709F] text-[11px] uppercase tracking-wider font-mono mr-4">
            <Filter className="w-3.5 h-3.5 text-[#B9955B]" />
            <span>Filter Family:</span>
          </div>

          {families.map((fam) => {
            const isSelected = selectedFilter === fam.id;
            return (
              <button
                key={fam.id}
                onClick={() => setSelectedFilter(fam.id)}
                className={`text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-all duration-300 ${
                  isSelected
                    ? "bg-[#3B174D] text-[#F4EAF2] border border-[#B9955B] font-medium"
                    : "bg-[#1D0A29]/50 text-[#9B709F] hover:text-[#F4EAF2] border border-transparent hover:border-white/10"
                }`}
              >
                {fam.label}
              </button>
            );
          })}
        </div>

        {/* The Flacon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filtered.map((frag, idx) => (
            <div
              key={frag.slug}
              className="group relative bg-[#1D0A29]/50 border border-[#B9955B]/20 rounded-lg overflow-hidden hover:border-[#B9955B] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Bottle Showcase Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#160620]">
                <Image
                  src={frag.image}
                  alt={frag.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D0A29] via-transparent to-transparent pointer-events-none" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#12041A]/85 backdrop-blur-md rounded border border-[#B9955B]/40 text-[9px] uppercase tracking-widest text-[#B9955B] font-mono">
                    {frag.id}
                  </span>
                  <span className="px-2.5 py-1 bg-[#12041A]/85 backdrop-blur-md rounded border border-white/10 text-[9px] uppercase tracking-widest text-[#F4EAF2] font-mono">
                    {frag.volume}
                  </span>
                </div>
              </div>

              {/* Fragrance Meta Details */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#9B709F] font-mono mb-2">
                    <span>{frag.olfactiveFamily}</span>
                    <span>•</span>
                    <span className="text-[#B9955B]">{frag.personality}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                    {frag.name}
                  </h2>

                  <p className="font-serif italic text-sm text-[#9B709F] mt-1">
                    &ldquo;{frag.headlineQuote}&rdquo;
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#F4EAF2]/80 mt-4 line-clamp-3 leading-relaxed">
                    {frag.shortDescription}
                  </p>
                </div>

                {/* Key Accords Tags */}
                <div className="pt-2 border-t border-white/5">
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono mb-2">
                    Dominant Accords
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {frag.keyAccords.map((accord) => (
                      <span
                        key={accord}
                        className="px-2.5 py-1 rounded bg-[#12041A]/80 border border-white/5 text-[10px] text-[#F4EAF2]/80 font-serif"
                      >
                        {accord}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href={`/fragrances/${frag.slug}`}
                    className="group/btn inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[#B9955B] hover:text-[#F4EAF2] font-medium"
                  >
                    <Eye className="w-4 h-4 text-[#B9955B]" />
                    <span>Explore Formulation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <span className="text-[10px] text-[#9B709F] uppercase tracking-widest font-mono">
                    {frag.concentration.split("(")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Salon Atelier Reservation Banner */}
        <div className="mt-24 p-8 sm:p-12 rounded-lg border border-[#B9955B]/30 bg-[#1D0A29]/80 backdrop-blur-md text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2] mb-2">
            The Bespoke Consultation
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#9B709F] max-w-lg mx-auto mb-6 leading-relaxed">
            Unsure which creation reflects your presence? Reserve an individual
            olfactory profiling appointment with our curators at 18 Place
            Vendôme.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] rounded border border-[#B9955B]/50 transition-all font-medium"
          >
            <span>Request Salon Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
