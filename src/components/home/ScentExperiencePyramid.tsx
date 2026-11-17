"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Clock, Compass } from "lucide-react";

interface PyramidLevel {
  id: "top" | "heart" | "base";
  label: string;
  shortLabel: string;
  timeframe: string;
  frenchTitle: string;
  heading: string;
  shortHeading: string;
  description: string;
  botanicals: string[];
  image: string;
  percentage: string;
}

const PYRAMID_DATA: PyramidLevel[] = [
  {
    id: "top",
    label: "TOP NOTES",
    shortLabel: "TOP",
    frenchTitle: "Notes de Tête",
    timeframe: "0 — 20 Minutes",
    heading: "The First Impression",
    shortHeading: "First Impression",
    description:
      "The initial celestial flourish that greets the senses upon release. Highly volatile, sparkling molecules composed of frosted bergamot, violet leaf dew, and rare Persian saffron noir that captivate the air immediately.",
    botanicals: [
      "Calabrian Bergamot",
      "Persian Saffron Stigmas",
      "Violet Leaf Absolute",
      "Pink Peppercorn",
    ],
    image: "/images/top_note.jpg",
    percentage: "25% Volatility Curve",
  },
  {
    id: "heart",
    label: "HEART NOTES",
    shortLabel: "HEART",
    frenchTitle: "Notes de Cœur",
    timeframe: "20 Min — 4 Hours",
    heading: "The Soul of the Composition",
    shortHeading: "The Soul",
    description:
      "As top notes softly yield, the true identity and emotional core of Velours Noir emerges. Velvety Grasse May rose, nocturnal midnight orchids, and rare 5-year aged Florentine orris butter bloom in rich harmony.",
    botanicals: [
      "Florentine Orris Butter",
      "Grasse May Rose",
      "Black Orchid Accord",
      "Royal Violet Blossom",
    ],
    image: "/images/heart_note.jpg",
    percentage: "45% Structural Core",
  },
  {
    id: "base",
    label: "BASE NOTES",
    shortLabel: "BASE",
    frenchTitle: "Notes de Fond",
    timeframe: "4 — 24+ Hours",
    heading: "The Memory That Remains",
    shortHeading: "The Memory",
    description:
      "The profound foundation and lasting signature that anchors the sillage. Heavy molecular weights of charred bourbon vanilla pods, ancient cistus amber, and smoked Mysore sandalwood that fuse with human skin warmth.",
    botanicals: [
      "Madagascan Black Vanilla",
      "Smoked Mysore Sandalwood",
      "Cistus Amber Tears",
      "Dark Velvet Musk",
    ],
    image: "/images/base_note.jpg",
    percentage: "30% Enduring Memory",
  },
];

export default function ScentExperiencePyramid() {
  const [activeLevel, setActiveLevel] = useState<"top" | "heart" | "base">(
    "heart"
  );

  const current = PYRAMID_DATA.find((p) => p.id === activeLevel)!;

  return (
    <section
      id="pyramid"
      className="relative py-16 sm:py-36 bg-[#160620] text-[#F4EAF2] overflow-hidden border-t border-[#B9955B]/15"
      data-cursor="EXPLORE"
    >
      {/* Background soft ambient radial violet glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#633A78]/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/25 bg-[#3B174D]/40 mb-3 sm:mb-4">
            <Compass className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B9955B] font-mono">
              03 — The Olfactory Architecture
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EAF2] leading-tight">
            EVERY SCENT TELLS
            <br />
            <span className="italic gold-gradient-text">
              A DIFFERENT STORY.
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed px-2">
            A luxury fragrance is a temporal sculpture unfolding across three
            sacred movements.
          </p>
        </div>

        {/* 3-Stage Interactive Selector with Mobile-Optimized Layout */}
        <div className="grid grid-cols-3 max-w-3xl mx-auto mb-10 sm:mb-16 border-b border-[#B9955B]/20 pb-3 sm:pb-4">
          {PYRAMID_DATA.map((lvl) => {
            const isSelected = lvl.id === activeLevel;
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
                className="group relative flex flex-col items-center text-center px-1 sm:px-2 py-2 sm:py-3 focus:outline-none transition-all"
              >
                <span
                  className={`text-[8.5px] sm:text-[10px] font-mono uppercase tracking-[0.18em] sm:tracking-[0.25em] transition-colors ${
                    isSelected
                      ? "text-[#B9955B] font-medium"
                      : "text-[#9B709F] group-hover:text-[#F4EAF2]"
                  }`}
                >
                  <span className="sm:hidden">{lvl.shortLabel}</span>
                  <span className="hidden sm:inline">{lvl.label}</span>
                </span>
                <span className="font-serif italic text-[11px] sm:text-sm text-[#F4EAF2]/90 mt-0.5 sm:mt-1 truncate max-w-full">
                  <span className="sm:hidden">{lvl.shortHeading}</span>
                  <span className="hidden sm:inline">{lvl.heading}</span>
                </span>

                {isSelected && (
                  <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-12 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent shadow-lg shadow-[#B9955B]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Stage Visual & Olfactory Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#1D0A29]/60 border border-[#B9955B]/30 rounded-xl p-5 sm:p-10 lg:p-16 backdrop-blur-xl shadow-2xl">
          {/* Left: Atmospheric Botanical Portrait */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full rounded-lg overflow-hidden border border-[#B9955B]/40 shadow-2xl bg-[#12041A]">
              <Image
                src={current.image}
                alt={current.heading}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/90 via-[#12041A]/20 to-transparent" />

              {/* Inset metadata tag */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-xs text-[#F4EAF2] border-t border-white/10 pt-3 sm:pt-4">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#B9955B]" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#9B709F]">
                    {current.timeframe}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#B9955B]">
                  {current.percentage}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Notes breakdown & Sensorial Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 text-[#B9955B]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-mono">
                {current.frenchTitle}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F4EAF2] font-light">
              {current.heading}
            </h3>

            <div className="w-16 h-[1.5px] bg-[#B9955B]" />

            <p className="font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed">
              {current.description}
            </p>

            {/* Botanicals list */}
            <div className="pt-2 sm:pt-4">
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#B9955B] font-mono mb-2.5">
                Key Olfactory Botanicals
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {current.botanicals.map((botanical) => (
                  <div
                    key={botanical}
                    className="flex items-center space-x-2.5 p-2.5 sm:p-3.5 rounded bg-[#12041A]/85 border border-[#B9955B]/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B9955B] flex-shrink-0" />
                    <span className="font-serif text-xs sm:text-sm text-[#F4EAF2]">
                      {botanical}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] text-[#9B709F] italic pt-1">
              All botanicals are macerated in our dark Grasse chambers for six
              months to ensure complete molecular harmony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
