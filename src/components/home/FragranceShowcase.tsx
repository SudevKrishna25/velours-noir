"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FRAGRANCES } from "@/data/fragrances";

export default function FragranceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Only apply pinned horizontal scrolling on large desktop screens
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isDesktop || prefersReducedMotion || !containerRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${totalScrollWidth + 300}`,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const index = Math.min(3, Math.floor(self.progress * 4));
          setActiveSlide(index);
        },
      });

      gsap.to(track, {
        x: () => -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth + 300}`,
          scrub: 1,
        },
      });

      return () => {
        st.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="collection"
      ref={containerRef}
      className="relative bg-[#12041A] text-[#F4EAF2] overflow-hidden"
      data-cursor="DISCOVER"
    >
      {/* Dynamic Background Atmosphere Glow reacting to active fragrance */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full blur-[180px] opacity-35 transition-colors duration-1000"
        style={{ backgroundColor: FRAGRANCES[activeSlide]?.dominantColor || "#3B174D" }}
      />

      {/* DESKTOP PINNED HORIZONTAL STORYTELLING (lg+) */}
      <div className="hidden lg:flex flex-col h-screen justify-between py-12 px-12 relative z-10">
        {/* Top Header Bar inside the pinned stage */}
        <div className="flex items-center justify-between pb-6 border-b border-[#B9955B]/20">
          <div className="flex items-center space-x-4">
            <span className="w-2 h-2 rounded-full bg-[#B9955B] animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
              02 — Pinned Fragrance Showcase
            </span>
            <span className="text-xs text-[#9B709F] font-mono">
              [Scroll to traverse 04 Opus Flacons]
            </span>
          </div>

          {/* 4-Stage Progress Indicator */}
          <div className="flex items-center space-x-6">
            {FRAGRANCES.map((frag, idx) => (
              <div
                key={frag.slug}
                className={`flex items-center space-x-2 transition-all duration-500 ${
                  activeSlide === idx
                    ? "text-[#B9955B] font-medium"
                    : "text-[#9B709F]/50"
                }`}
              >
                <span className="font-mono text-[10px]">0{idx + 1}</span>
                <span className="font-serif text-xs hidden xl:inline">
                  {frag.name}
                </span>
                {activeSlide === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B9955B]" />
                )}
              </div>
            ))}
          </div>

          <Link
            href="/collection"
            className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9955B] hover:text-[#F4EAF2] transition-colors py-1.5 px-4 rounded-full border border-[#B9955B]/30"
          >
            <span>Catalog Grid</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal Track holding the 4 Full-Screen Fragrance Panes */}
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center will-change-transform h-[calc(100vh-180px)]"
        >
          {FRAGRANCES.map((frag, idx) => (
            <div
              key={frag.slug}
              className="w-screen flex-shrink-0 flex items-center justify-center px-16 xl:px-24"
            >
              <div className="max-w-6xl w-full grid grid-cols-12 gap-12 xl:gap-16 items-center bg-[#1D0A29]/75 border border-[#B9955B]/30 rounded-xl p-10 xl:p-14 backdrop-blur-xl shadow-2xl">
                {/* Left: Monumental Flacon Visual */}
                <div className="col-span-6 relative flex justify-center group">
                  <div className="relative aspect-[4/5] w-full max-w-md rounded-lg overflow-hidden border border-[#B9955B]/40 shadow-2xl bg-[#160620]">
                    <Image
                      src={frag.image}
                      alt={frag.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#12041A]/70 via-transparent to-[#F4EAF2]/10 pointer-events-none" />

                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#12041A]/85 backdrop-blur-md border border-[#B9955B]/40 rounded text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
                      {frag.concentration}
                    </div>
                  </div>

                  {/* Secondary Facet Visual Preview */}
                  <div className="absolute -bottom-4 -right-4 w-36 h-48 rounded overflow-hidden border border-[#B9955B]/50 shadow-2xl opacity-90 hidden xl:block transition-transform duration-500 hover:scale-105">
                    <Image
                      src={frag.detailImage}
                      alt={`${frag.name} Facet`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 text-[8px] uppercase tracking-[0.2em] text-[#B9955B] font-mono bg-black/60 px-1 rounded">
                      Facet View
                    </span>
                  </div>
                </div>

                {/* Right: Fragrance Story, Accords & Direct Link */}
                <div className="col-span-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-4 h-4 text-[#B9955B]" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                      Opus 0{idx + 1} • {frag.personality}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-4xl xl:text-5xl font-light text-[#F4EAF2] tracking-wide">
                      {frag.name}
                    </h3>
                    <p className="font-serif italic text-lg text-[#9B709F] mt-1">
                      &ldquo;{frag.headlineQuote}&rdquo;
                    </p>
                  </div>

                  <div className="w-16 h-[1.5px] bg-[#B9955B]" />

                  <p className="font-sans text-xs xl:text-sm text-[#F4EAF2]/80 leading-relaxed">
                    {frag.longDescription}
                  </p>

                  {/* Notes Pyramid Snapshot */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-[#12041A]/80 rounded border border-white/5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                        Top Notes
                      </span>
                      <p className="font-serif text-xs text-[#F4EAF2] mt-1 line-clamp-1">
                        {frag.notes.top.map((n) => n.name).join(", ")}
                      </p>
                    </div>
                    <div className="p-3 bg-[#12041A]/80 rounded border border-white/5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                        Heart Notes
                      </span>
                      <p className="font-serif text-xs text-[#F4EAF2] mt-1 line-clamp-1">
                        {frag.notes.heart.map((n) => n.name).join(", ")}
                      </p>
                    </div>
                    <div className="p-3 bg-[#12041A]/80 rounded border border-white/5">
                      <span className="block text-[9px] uppercase tracking-wider text-[#9B709F] font-mono">
                        Base Notes
                      </span>
                      <p className="font-serif text-xs text-[#F4EAF2] mt-1 line-clamp-1">
                        {frag.notes.base.map((n) => n.name).join(", ")}
                      </p>
                    </div>
                  </div>

                  {/* Direct Link */}
                  <div className="pt-4 flex items-center space-x-4">
                    <Link
                      href={`/fragrances/${frag.slug}`}
                      className="group/btn inline-flex items-center px-7 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] font-medium rounded border border-[#B9955B]/60 hover:border-[#B9955B] transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 mr-2 text-[#B9955B]" />
                      <span>Discover Formulation</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Rail */}
        <div className="flex items-center justify-between pt-4 border-t border-[#B9955B]/15 text-xs text-[#9B709F]">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9955B]">
            {FRAGRANCES[activeSlide]?.volume} • {FRAGRANCES[activeSlide]?.olfactiveFamily}
          </span>
          <span className="font-serif italic text-[#F4EAF2]">
            &ldquo;{FRAGRANCES[activeSlide]?.tagline}&rdquo;
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest">
            0{activeSlide + 1} / 04
          </span>
        </div>
      </div>

      {/* MOBILE / TABLET REFINED VERTICAL STORYTELLING (< lg) */}
      <div className="lg:hidden py-16 sm:py-24 px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block mb-2">
            02 — The Collection Privée
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EAF2] font-light">
            THE ART OF SCENT
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-2 px-2">
            Explore the four immortal extraits of Velours Noir.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {FRAGRANCES.map((frag, idx) => (
            <div
              key={frag.slug}
              className="bg-[#1D0A29]/75 border border-[#B9955B]/30 rounded-xl overflow-hidden p-5 sm:p-8 shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden mb-6 bg-[#160620]">
                <Image
                  src={frag.image}
                  alt={frag.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#12041A]/90 rounded text-[9px] uppercase tracking-widest text-[#B9955B] font-mono border border-white/10">
                  Opus 0{idx + 1} • {frag.volume}
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-[10px] text-[#B9955B] font-mono">
                  <span>{frag.personality}</span>
                  <span className="text-[#9B709F]">{frag.olfactiveFamily}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2]">
                  {frag.name}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#9B709F]">
                  &ldquo;{frag.headlineQuote}&rdquo;
                </p>
                <p className="font-sans text-xs text-[#F4EAF2]/80 leading-relaxed">
                  {frag.shortDescription}
                </p>

                {/* Notes Snapshot on Mobile */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px]">
                  <div className="p-2 bg-[#12041A]/80 rounded border border-white/5">
                    <span className="text-[8px] uppercase font-mono text-[#9B709F] block">Top</span>
                    <span className="font-serif text-[#F4EAF2] line-clamp-1">{frag.notes.top[0]?.name}</span>
                  </div>
                  <div className="p-2 bg-[#12041A]/80 rounded border border-white/5">
                    <span className="text-[8px] uppercase font-mono text-[#9B709F] block">Heart</span>
                    <span className="font-serif text-[#F4EAF2] line-clamp-1">{frag.notes.heart[0]?.name}</span>
                  </div>
                  <div className="p-2 bg-[#12041A]/80 rounded border border-white/5">
                    <span className="text-[8px] uppercase font-mono text-[#9B709F] block">Base</span>
                    <span className="font-serif text-[#F4EAF2] line-clamp-1">{frag.notes.base[0]?.name}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/fragrances/${frag.slug}`}
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-[11px] uppercase tracking-wider rounded border border-[#B9955B]/40 font-medium transition-colors"
                  >
                    <span>View Fragrance Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#B9955B]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
