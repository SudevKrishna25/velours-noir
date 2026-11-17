"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MAISON_INFO } from "@/data/maison";

export default function MaisonStory() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#12041A] text-[#F4EAF2] overflow-hidden border-t border-[#B9955B]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Striking Visual of Atelier / Parisian Glasswork */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full rounded overflow-hidden border border-[#B9955B]/30 shadow-2xl group">
              <Image
                src="/images/maison_atelier.jpg"
                alt="Velours Noir Parisian Atelier on Place Vendôme"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Inset Plate */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#12041A]/90 backdrop-blur-md rounded border border-[#B9955B]/30">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono mb-1">
                  Maison Archive • Paris
                </p>
                <p className="font-serif italic text-xs text-[#F4EAF2]/90">
                  Where volatile emotions take permanent structural form.
                </p>
              </div>
            </div>

            {/* Floating Gold Crest Monogram Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 bg-[#3B174D] border border-[#B9955B]/50 rounded-full p-4 shadow-2xl flex items-center justify-center">
              <div className="w-14 h-14 relative">
                <Image
                  src="/images/brand/vn_monogram.svg"
                  alt="VN Seal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Storytelling */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/25 bg-[#3B174D]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                06 — The Maison Story
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EAF2] leading-tight">
              BEAUTY IN
              <br />
              <span className="italic font-normal gold-gradient-text">
                THE UNSEEN.
              </span>
            </h2>

            <div className="w-16 h-[1.5px] bg-[#B9955B]" />

            <p className="font-serif text-lg sm:text-xl text-[#F4EAF2]/90 font-light leading-relaxed">
              &ldquo;Velours Noir is an exploration of the invisible — the way a
              fragrance transforms a moment, expresses an emotion and leaves
              something unforgettable behind.&rdquo;
            </p>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#9B709F] leading-relaxed">
              <p>
                Conceived at the intersection of haute couture draping and
                classical Grasse perfumery, Velours Noir rejects the mass-market
                trend of immediate synthetic sweetness. We work with heavy
                natural absolutes that require time, patience, and warmth to
                unfold.
              </p>
              <p>
                Our philosophy is simple yet uncompromising: luxury is not about
                being noticed immediately upon entering; it is about leaving a
                presence that continues to linger long after you have departed.
              </p>
            </div>

            {/* Three key pillars preview */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#B9955B]/15">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#B9955B] font-mono block">
                  Pillar 01
                </span>
                <p className="font-serif text-xs text-[#F4EAF2] mt-0.5">
                  Rare Extraits
                </p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#B9955B] font-mono block">
                  Pillar 02
                </span>
                <p className="font-serif text-xs text-[#F4EAF2] mt-0.5">
                  Master Glasswork
                </p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#B9955B] font-mono block">
                  Pillar 03
                </span>
                <p className="font-serif text-xs text-[#F4EAF2] mt-0.5">
                  Intimate Sillage
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/maison"
                className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9955B] hover:text-[#F4EAF2] transition-colors py-2"
              >
                <span>Discover the Complete Heritage</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
