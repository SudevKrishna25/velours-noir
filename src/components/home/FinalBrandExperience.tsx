"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import GoldParticles from "@/components/ui/GoldParticles";

export default function FinalBrandExperience() {
  return (
    <section className="relative py-36 sm:py-48 bg-[#12041A] text-[#F4EAF2] overflow-hidden flex items-center justify-center text-center">
      {/* Background Deep Plum Vignette & Soft Ambient Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B174D]/40 via-[#1D0A29]/70 to-[#12041A] pointer-events-none" />

      {/* Gold Dust Particles */}
      <GoldParticles count={30} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="w-16 h-16 relative mb-8 opacity-85">
          <Image
            src="/images/brand/vn_monogram.svg"
            alt="Velours Noir Monogram"
            fill
            className="object-contain"
          />
        </div>

        {/* Small Tagline */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#B9955B] font-mono">
            The Final Impression
          </span>
        </div>

        {/* Monumental Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-[#F4EAF2] leading-[1.05] mb-6">
          LEAVE SOMETHING
          <br />
          <span className="italic font-normal gold-gradient-text block mt-1">
            UNFORGETTABLE.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base text-[#9B709F] max-w-lg mb-10 font-light tracking-wide leading-relaxed">
          Discover the art of Velours Noir. An invisible signature that commands
          the room without uttering a sound.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/collection"
            className="group relative inline-flex items-center px-10 py-4 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] font-medium rounded border border-[#B9955B]/60 hover:border-[#B9955B] transition-all duration-300 shadow-2xl shadow-[#3B174D]/60"
          >
            <span>EXPLORE THE COLLECTION</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#B9955B] transition-transform group-hover:translate-x-1.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/5 text-[#F4EAF2]/90 hover:text-[#B9955B] text-xs uppercase tracking-[0.25em] font-medium rounded border border-white/15 hover:border-[#B9955B]/40 transition-colors"
          >
            Reserve Private Atelier Session
          </Link>
        </div>

        {/* Final Fine Gold Accent Hairline */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B9955B]/60 to-transparent mt-16" />
      </div>
    </section>
  );
}
