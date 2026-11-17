"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MaisonManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageMaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Line by line / masked reveal on scroll
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.children,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "top 30%",
              scrub: 0.8,
            },
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Expanding image mask on scroll
      if (imageMaskRef.current) {
        gsap.fromTo(
          imageMaskRef.current,
          { clipPath: "inset(12% 8% 12% 8% round 4px)", scale: 0.94 },
          {
            scrollTrigger: {
              trigger: imageMaskRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: 1,
            },
            clipPath: "inset(0% 0% 0% 0% round 4px)",
            scale: 1,
            ease: "power1.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-28 sm:py-40 bg-[#F4EAF2] text-[#12041A] overflow-hidden transition-colors duration-700"
      data-cursor="VIEW"
    >
      {/* Subtle paper grain texture and decorative gold watermark */}
      <div className="absolute top-12 right-12 opacity-[0.07] pointer-events-none select-none">
        <span className="font-serif text-[240px] leading-none text-[#3B174D]">
          VN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Editorial Sub-header */}
        <div className="flex items-center space-x-4 mb-10">
          <span className="h-[1.5px] w-12 bg-[#B9955B]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#633A78] font-mono font-semibold">
            01 — The Maison Manifesto
          </span>
        </div>

        {/* Asymmetrical 2-Column Luxury Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Serif & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h2
              ref={headlineRef}
              className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#12041A] font-light leading-[1.08] tracking-tight"
            >
              <span className="block">SCENT IS THE MEMORY</span>
              <span className="italic font-normal text-[#633A78] block mt-1">
                THAT REMAINS.
              </span>
            </h2>

            <div className="w-20 h-[1.5px] bg-[#B9955B]" />

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#3B174D] font-light leading-relaxed max-w-xl">
              &ldquo;Some impressions disappear with time. Others become a part
              of us. Velours Noir explores the invisible language of fragrance
              — intimate, expressive and profoundly personal.&rdquo;
            </p>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#3B174D]/80 leading-relaxed max-w-lg">
              <p>
                In a world crowded with fleeting digital noise, a fragrance is
                the only medium that commands the air you inhabit. It doesn&apos;t
                compete for attention—it claims presence through quiet majesty.
              </p>
              <p>
                Crafted in our Paris atelier with noble Grasse extraits and
                architectural crystal flacons, each creation is an invitation to
                leave an indelible imprint.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/maison"
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#12041A] hover:text-[#633A78] transition-colors"
              >
                <span>Read the Philosophy of the Maison</span>
                <span className="w-8 h-8 rounded-full border border-[#B9955B] flex items-center justify-center group-hover:bg-[#3B174D] group-hover:text-[#F4EAF2] group-hover:border-[#3B174D] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Macro Botanical Orchid & Expanding Mask Visual */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageMaskRef}
              className="relative aspect-[3/4] w-full rounded overflow-hidden shadow-2xl shadow-[#3B174D]/25 border border-[#B9955B]/40 group"
            >
              <Image
                src="/images/manifesto_orchid.jpg"
                alt="Velours Noir Botanical Macro Photography"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset luxury plate caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#12041A]/90 backdrop-blur-md rounded border border-[#B9955B]/30 text-[#F4EAF2]">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono mb-1">
                  Macro Extract № 07
                </p>
                <p className="font-serif italic text-xs text-[#F4EAF2]/90">
                  Night-blooming orchid petals bathed in Grasse morning dew.
                </p>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#3B174D] text-[#F4EAF2] p-5 rounded border border-[#B9955B]/50 shadow-xl max-w-[190px]">
              <span className="block text-[8px] uppercase tracking-[0.3em] text-[#B9955B] font-mono mb-1">
                Art Direction
              </span>
              <p className="font-serif text-xs leading-snug">
                Dark Romance × Parisian Elegance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
