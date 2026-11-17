"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import GoldParticles from "@/components/ui/GoldParticles";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const xPercent = (e.clientX / clientWidth - 0.5) * 2;
      const yPercent = (e.clientY / clientHeight - 0.5) * 2;
      setTilt({ x: xPercent * 6, y: yPercent * 6 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#12041A] pt-24 pb-16"
      data-cursor="explore"
    >
      {/* Background cinematic chiaroscuro image with slow ambient zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="relative w-full h-full transform transition-transform duration-1000 ease-out will-change-transform scale-105"
          style={{
            transform: `scale(1.06) translate3d(${tilt.x * 0.4}px, ${tilt.y * 0.4}px, 0)`,
          }}
        >
          <Image
            src="/images/hero_bottle.jpg"
            alt="Velours Noir Luxury Flacon Campaign"
            fill
            priority
            className="object-cover object-center filter brightness-[0.72] contrast-[1.15]"
          />
        </div>

        {/* Deep Plum & Mauve Atmospheric Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12041A] via-[#12041A]/50 to-[#12041A]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B174D]/35 via-transparent to-[#12041A]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-[#633A78]/10 mix-blend-color pointer-events-none" />
      </div>

      {/* Gold Dust particles drifting in atmosphere */}
      <GoldParticles count={38} />

      {/* Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9955B] animate-ping" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#F4EAF2] font-mono">
            Place Vendôme • Collection Privée
          </span>
        </div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.06em] text-[#F4EAF2] leading-[1.08] max-w-5xl">
            BEYOND FRAGRANCE.
            <br />
            <span className="italic font-normal gold-gradient-text block mt-1 sm:mt-2">
              AN UNFORGETTABLE PRESENCE.
            </span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#F4EAF2]/80 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Discover a world where scent becomes emotion, elegance becomes
          identity, and every impression tells a story. Formulated in Paris with
          uncompromising artistic restraint.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <Link
            href="/collection"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] font-medium rounded border border-[#B9955B]/50 hover:border-[#B9955B] transition-all duration-300 shadow-xl shadow-[#3B174D]/40"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>DISCOVER THE COLLECTION</span>
              <ArrowRight className="w-4 h-4 text-[#B9955B] transition-transform group-hover:translate-x-1.5" />
            </span>
            <div className="absolute inset-0 rounded bg-gradient-to-r from-[#B9955B]/0 via-[#B9955B]/15 to-[#B9955B]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/maison"
            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#1D0A29]/60 text-[#F4EAF2]/90 hover:text-[#B9955B] text-xs uppercase tracking-[0.25em] font-medium rounded border border-white/15 hover:border-[#B9955B]/40 transition-all duration-300 backdrop-blur-sm"
          >
            <Compass className="w-4 h-4 mr-2 text-[#9B709F] group-hover:text-[#B9955B] transition-colors" />
            <span>EXPLORE THE MAISON</span>
          </Link>
        </div>

        {/* Editorial Footnote Details */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 border-t border-[#B9955B]/15 pt-8 w-full max-w-4xl text-left">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              Concentration
            </span>
            <p className="font-serif text-sm sm:text-base text-[#F4EAF2] mt-0.5">
              Extrait de Parfum (32%)
            </p>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              Master Atelier
            </span>
            <p className="font-serif text-sm sm:text-base text-[#F4EAF2] mt-0.5">
              18 Place Vendôme
            </p>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              Flacon Design
            </span>
            <p className="font-serif text-sm sm:text-base text-[#F4EAF2] mt-0.5">
              Heavy French Crystal
            </p>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              Artistic Opus
            </span>
            <p className="font-serif text-sm sm:text-base text-[#F4EAF2] mt-0.5">
              04 Signature Natures
            </p>
          </div>
        </div>
      </div>

      {/* Gentle Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#9B709F] mb-1.5 font-mono">
          Scroll to enter
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#B9955B] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
