"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAMPAIGN_MOMENTS = [
  {
    title: "L'Ombre Nocturne",
    subtitle: "Shadows across Place Vendôme",
    image: "/images/campaign_1.jpg",
    location: "Paris • 02:40 AM",
    focus: "Nocturnal Architecture",
  },
  {
    title: "Le Verre Sculpté",
    subtitle: "The Master Crystal Flacon",
    image: "/images/campaign_2.jpg",
    location: "Haute Cristallerie",
    focus: "Heavy French Glass",
  },
  {
    title: "L'Heure Sauvage",
    subtitle: "Nocturnal Violet Bloom",
    image: "/images/campaign_3.jpg",
    location: "Grasse Botanical Vaults",
    focus: "Royal Violet Petals",
  },
];

export default function WorldOfVeloursNoir() {
  const containerRef = useRef<HTMLDivElement>(null);
  const expandImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !expandImageRef.current) return;

    const ctx = gsap.context(() => {
      // Expanding campaign image on scroll
      gsap.fromTo(
        expandImageRef.current,
        { scale: 0.94, filter: "brightness(0.6)" },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
          scale: 1,
          filter: "brightness(0.85)",
          ease: "power1.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campaign"
      ref={containerRef}
      className="relative py-28 sm:py-40 bg-[#160620] text-[#F4EAF2] overflow-hidden"
      data-cursor="EXPLORE"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3B174D]/35 via-transparent to-[#12041A] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Expanding Full-Viewport Campaign Banner */}
        <div
          ref={expandImageRef}
          className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#B9955B]/40 shadow-2xl mb-24 transition-all"
        >
          <Image
            src="/images/campaign_1.jpg"
            alt="Velours Noir Campaign Visual"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12041A] via-[#12041A]/40 to-transparent" />

          {/* Monumental Cinematic Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B9955B] font-mono mb-4">
              A World Beyond the Ordinary
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F4EAF2] tracking-wide leading-tight max-w-4xl">
              ENTER A WORLD
              <br />
              <span className="italic font-normal gold-gradient-text">
                BEYOND THE ORDINARY.
              </span>
            </h2>
          </div>
        </div>

        {/* Header for Moments Gallery */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B9955B]/20">
          <div>
            <div className="flex items-center space-x-2 text-[#B9955B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono">
                05 — Campaign Stills & Atmosphere
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2] tracking-tight">
              The Parisian Archive
            </h3>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-sans text-xs sm:text-sm text-[#9B709F] max-w-sm tracking-wide">
              Documenting the intersection of dark velvet romance, Place
              Vendôme architecture, and sculptural French glass.
            </p>
          </div>
        </div>

        {/* 3-Panel Campaign Film-Stills Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAMPAIGN_MOMENTS.map((moment, idx) => (
            <div
              key={moment.title}
              className="group relative rounded-xl overflow-hidden border border-[#B9955B]/25 bg-[#12041A] shadow-xl hover:border-[#B9955B] transition-all duration-500"
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
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#12041A]/85 backdrop-blur-md rounded border border-white/10 text-[9px] uppercase tracking-widest text-[#B9955B] font-mono">
                  Archive 0{idx + 1}
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="p-6 relative">
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#9B709F] font-mono mb-1">
                  {moment.location}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                  {moment.title}
                </h4>
                <p className="text-xs text-[#9B709F] mt-1 font-sans">
                  {moment.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Private Salon Atelier Reservation Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-xl border border-[#B9955B]/30 bg-[#1D0A29]/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between shadow-2xl">
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
            className="group inline-flex items-center px-6 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] rounded border border-[#B9955B]/50 hover:border-[#B9955B] transition-all font-medium"
          >
            <span>Request Atelier Visit</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
