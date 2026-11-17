"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CAMPAIGN_MOMENTS = [
  {
    title: "L'Ombre Nocturne",
    subtitle: "Shadows in Place Vendôme",
    image: "/images/campaign_1.jpg",
    location: "Paris • 02:40 AM",
  },
  {
    title: "Le Verre Sculpté",
    subtitle: "The Master Crystal Flacon",
    image: "/images/campaign_2.jpg",
    location: "Haute Cristallerie",
  },
  {
    title: "L'Heure Sauvage",
    subtitle: "Nocturnal Violet Bloom",
    image: "/images/campaign_3.jpg",
    location: "Grasse Botanical Vaults",
  },
];

export default function WorldOfVeloursNoir() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#160620] text-[#F4EAF2] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3B174D]/30 via-transparent to-[#12041A] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9955B]/20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block mb-2">
              05 — Campaign Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EAF2] tracking-tight">
              ENTER THE WORLD OF
              <br />
              <span className="italic font-normal gold-gradient-text">
                VELOURS NOIR.
              </span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-sans text-xs sm:text-sm text-[#9B709F] max-w-sm tracking-wide">
              A cinematic brand campaign exploring the threshold where dark
              romance, Parisian elegance, and sculptural perfumery meet.
            </p>
          </div>
        </div>

        {/* 3-Panel Campaign Film-Stills Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAMPAIGN_MOMENTS.map((moment, idx) => (
            <div
              key={moment.title}
              className="group relative rounded overflow-hidden border border-[#B9955B]/25 bg-[#12041A] shadow-xl hover:border-[#B9955B] transition-all duration-500"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12041A] via-[#12041A]/30 to-transparent" />

                {/* Top index badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#12041A]/80 backdrop-blur-md rounded border border-white/10 text-[9px] uppercase tracking-widest text-[#B9955B] font-mono">
                  Opus 0{idx + 1}
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="p-6 relative">
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#9B709F] font-mono mb-1">
                  {moment.location}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                  {moment.title}
                </h3>
                <p className="text-xs text-[#9B709F] mt-1 font-sans">
                  {moment.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Manifesto Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded border border-[#B9955B]/30 bg-[#1D0A29]/70 backdrop-blur-md flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block">
              Private Salon Inquiries
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#F4EAF2]">
              Experience our creations in person at 18 Place Vendôme.
            </p>
            <p className="text-xs text-[#9B709F]">
              Individual consultations conducted by appointment with our maison
              curators.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center px-6 py-3 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] rounded border border-[#B9955B]/50 transition-all font-medium"
          >
            <span>Request Atelier Visit</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
