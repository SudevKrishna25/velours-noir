"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoldParticles from "@/components/ui/GoldParticles";

export default function FinalBrandExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bottleRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Bottle illuminated with gold rim light & scale on scroll
      gsap.fromTo(
        bottleRef.current,
        { scale: 0.9, opacity: 0.6, y: 30 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 25%",
            scrub: 1,
          },
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="finale"
      ref={containerRef}
      className="relative py-36 sm:py-52 bg-[#0D0312] text-[#F4EAF2] overflow-hidden flex items-center justify-center text-center"
      data-cursor="INQUIRE"
    >
      {/* Background Deep Plum Vignette & Soft Ambient Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B174D]/45 via-[#180722]/80 to-[#0D0312] pointer-events-none" />

      {/* Gold Dust Particles */}
      <GoldParticles count={32} />

      <div
        ref={textRef}
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center"
      >
        {/* Central Flacon Spotlight Silhouette with Gold Rim Lighting */}
        <div
          ref={bottleRef}
          className="relative w-48 h-64 sm:w-56 sm:h-72 mb-10 rounded-xl overflow-hidden border border-[#B9955B]/50 shadow-[0_0_50px_rgba(185,149,91,0.25)]"
        >
          <Image
            src="/images/hero_bottle.jpg"
            alt="Velours Noir Flacon Finale"
            fill
            className="object-cover filter contrast-[1.2] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0312] via-transparent to-[#F4EAF2]/10 pointer-events-none" />
          <div className="absolute inset-0 border border-[#B9955B]/40 rounded-xl pointer-events-none" />
        </div>

        {/* Small Tagline */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/40 mb-6">
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

        {/* Brand Wordmark Sign-off */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B9955B]/60 to-transparent mb-6" />
          <span className="font-serif tracking-[0.45em] text-lg sm:text-xl text-[#F4EAF2] font-light">
            VELOURS NOIR
          </span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#B9955B]/80 font-mono mt-1">
            Paris • Place Vendôme
          </span>
        </div>
      </div>
    </section>
  );
}
