"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "INSPIRATION",
    subtitle: "The Genesis of Emotion",
    description:
      "A Velours Noir fragrance never begins with an ingredient list; it begins with an atmospheric memory. The chill of Parisian cobblestones after rain, the whisper of black velvet against bare shoulders, or twilight sinking into the Seine.",
    image: "/images/art_inspiration.jpg",
    quote: "We compose for the memory you have not yet lived.",
    compositionNotes: "Cold rain • Smoked air • Nocturnal violet petals",
  },
  {
    step: "02",
    title: "COMPOSITION",
    subtitle: "The Architecture of Contrast",
    description:
      "True luxury is found in harmonic tension. Over hundreds of laboratory trials, our perfumers balance light against shadow—cutting deep, resinous bourbon vanilla with sharp saffron and cold violet leaf dew.",
    image: "/images/art_composition.jpg",
    quote: "Balance is not neutrality; it is the breathtaking suspension of opposing forces.",
    compositionNotes: "Macerated Bourbon vanilla • Cistus amber • Hand-cut crystal",
  },
  {
    step: "03",
    title: "SIGNATURE",
    subtitle: "The Invisible Presence",
    description:
      "A fragrance reaches completion only when applied to living skin. It adapts to your individual chemistry, releasing an unmistakable trail that lingers in doorways and memories long after you have moved on.",
    image: "/images/art_signature.jpg",
    quote: "You do not wear Velours Noir. You inhabit it.",
    compositionNotes: "Intimate sillage • 24hr skin warmth • Indelible memory",
  },
];

export default function ArtOfComposition() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="composition"
      className="relative py-28 sm:py-40 bg-[#12041A] text-[#F4EAF2] overflow-hidden border-t border-[#B9955B]/15"
      data-cursor="VIEW"
    >
      {/* Background Deep Plum Ambient Aura */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#3B174D]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/25 bg-[#3B174D]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
              04 — The Creative Philosophy
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EAF2] leading-tight">
            AN ART FORM
            <br />
            <span className="italic font-normal gold-gradient-text">
              YOU CAN FEEL.
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-3 max-w-lg mx-auto">
            The journey from an elusive memory to an immortal olfactory
            masterpiece.
          </p>
        </div>

        {/* 3 Interactive Stages Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stage Selectors */}
          <div className="lg:col-span-5 space-y-6">
            {STAGES.map((s, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 sm:p-8 rounded-lg cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? "bg-[#1D0A29] border-[#B9955B] shadow-2xl shadow-[#3B174D]/50"
                      : "bg-[#1D0A29]/30 border-white/10 hover:border-[#B9955B]/40 hover:bg-[#1D0A29]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B9955B]">
                      Movement {s.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#B9955B] animate-ping" />
                    )}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4EAF2]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#9B709F] uppercase tracking-wider mt-0.5 font-mono">
                    {s.subtitle}
                  </p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#B9955B]/20 animate-in fade-in duration-300">
                      <p className="font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed">
                        {s.description}
                      </p>
                      <p className="font-serif italic text-xs text-[#B9955B] mt-3">
                        &ldquo;{s.quote}&rdquo;
                      </p>
                      <div className="mt-3 text-[10px] font-mono text-[#9B709F]">
                        {s.compositionNotes}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Photographic Stage Window */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#B9955B]/40 shadow-2xl bg-[#160620]">
              <Image
                src={STAGES[activeStep].image}
                alt={STAGES[activeStep].title}
                fill
                className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/85 via-transparent to-transparent pointer-events-none" />

              {/* Floating Quote Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#12041A]/90 backdrop-blur-md rounded-lg border border-[#B9955B]/30 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#B9955B] font-mono block">
                    Movement {STAGES[activeStep].step}
                  </span>
                  <p className="font-serif text-sm sm:text-base italic text-[#F4EAF2] mt-0.5">
                    {STAGES[activeStep].quote}
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-1 text-[10px] uppercase tracking-widest text-[#9B709F] font-mono">
                  <span>Step {activeStep + 1} of 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
