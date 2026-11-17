"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MaisonManifesto() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#F4EAF2] text-[#12041A] overflow-hidden">
      {/* Subtle paper grain texture and decorative gold watermark */}
      <div className="absolute top-12 right-12 opacity-10 pointer-events-none select-none">
        <span className="font-serif text-[180px] leading-none text-[#3B174D]">
          VN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Editorial Sub-header */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="h-[1px] w-12 bg-[#B9955B]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#633A78] font-mono font-semibold">
            01 — The Maison Manifesto
          </span>
        </div>

        {/* Asymmetrical 2-Column Luxury Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Serif & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#12041A] font-light leading-[1.12] tracking-tight">
              SCENT IS THE MEMORY
              <br />
              <span className="italic font-normal text-[#633A78]">
                THAT REMAINS.
              </span>
            </h2>

            <div className="w-20 h-[1.5px] bg-[#B9955B]" />

            <p className="font-serif text-lg sm:text-2xl text-[#3B174D] font-light leading-relaxed max-w-xl">
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
                architectural glass bottles, each flacon is an invitation to
                create your own indelible imprint.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/maison"
                className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#12041A] hover:text-[#633A78] transition-colors"
              >
                <span>Read the Philosophy of the Maison</span>
                <span className="w-7 h-7 rounded-full border border-[#B9955B] flex items-center justify-center group-hover:bg-[#3B174D] group-hover:text-[#F4EAF2] group-hover:border-[#3B174D] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Macro Botanical Orchid & Crystal Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded overflow-hidden shadow-2xl shadow-[#3B174D]/30 border border-[#B9955B]/40 group">
              <Image
                src="/images/manifesto_orchid.jpg"
                alt="Velours Noir Botanical Macro Photography"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset luxury plate caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#12041A]/85 backdrop-blur-md rounded border border-[#B9955B]/30 text-[#F4EAF2]">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono mb-1">
                  Macro Extract № 07
                </p>
                <p className="font-serif italic text-xs text-[#F4EAF2]/90">
                  Night-blooming orchid petals bathed in Grasse morning dew.
                </p>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="hidden sm:block absolute -top-6 -left-6 bg-[#3B174D] text-[#F4EAF2] p-5 rounded border border-[#B9955B]/50 shadow-xl max-w-[180px]">
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
