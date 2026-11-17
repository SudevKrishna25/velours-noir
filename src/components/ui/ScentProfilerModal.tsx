"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X, ArrowRight, RotateCcw, Compass } from "lucide-react";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";

interface Question {
  id: number;
  question: string;
  subtext: string;
  options: {
    label: string;
    description: string;
    fragranceSlug: string;
    moodNote: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What nocturnal atmosphere commands your spirit?",
    subtext: "Consider the hour and setting where you feel most magnetic.",
    options: [
      {
        label: "Twilight Whispers & Velvet Shadows",
        description: "Secluded salons, candlelight, charred woods, warm bourbon vanilla.",
        fragranceSlug: "nuit-de-velours",
        moodNote: "Nocturnal & Enigmatic",
      },
      {
        label: "Moonlit Botanical Conservatory",
        description: "Cool powdery petals, misty glass, orris butter, white suede.",
        fragranceSlug: "fleur-dombre",
        moodNote: "Poetic & Contemplative",
      },
      {
        label: "Gilded Sunset over Place Vendôme",
        description: "Molten amber, warm solar saffron, sacred Mysore sandalwood.",
        fragranceSlug: "eclat-dor",
        moodNote: "Luminous & Aristocratic",
      },
      {
        label: "The Violet Parisian Dusk",
        description: "Dark blackcurrant nectar, royal violet blossom, velvet musk.",
        fragranceSlug: "lheure-violette",
        moodNote: "Avant-Garde & Romantic",
      },
    ],
  },
  {
    id: 2,
    question: "Which sensory texture speaks to your presence?",
    subtext: "The physical tactile feeling that mirrors your aesthetic.",
    options: [
      {
        label: "Heavy Silk Black Velvet",
        description: "Dense, tactile, mysterious, cloaking warmth that commands silence.",
        fragranceSlug: "nuit-de-velours",
        moodNote: "Tactile Velvet",
      },
      {
        label: "Glove-Soft White Kidskin Suede",
        description: "Intimate, delicate, powdery, restrained elegance close to the skin.",
        fragranceSlug: "fleur-dombre",
        moodNote: "Supple Suede",
      },
      {
        label: "Melted Gold & Sandalwood Grain",
        description: "Luminous, warm, comforting architectural richness.",
        fragranceSlug: "eclat-dor",
        moodNote: "Polished Gold",
      },
      {
        label: "Royal Violet Brocade",
        description: "Extravagant, romantic, melancholic, unforgettable French draping.",
        fragranceSlug: "lheure-violette",
        moodNote: "Nocturnal Brocade",
      },
    ],
  },
  {
    id: 3,
    question: "How do you wish your sillage to be remembered?",
    subtext: "The lingering aura left in the room after you depart.",
    options: [
      {
        label: "An Enigma in the Shadow",
        description: "They cannot name what you wore, but they can never forget your presence.",
        fragranceSlug: "nuit-de-velours",
        moodNote: "Deep Sillage",
      },
      {
        label: "An Ethereal Floral Whisper",
        description: "A delicate, haunting impression of timeless grace and poetic distance.",
        fragranceSlug: "fleur-dombre",
        moodNote: "Intimate Whisper",
      },
      {
        label: "A Warm Aristocratic Radiance",
        description: "A solar trail of golden confidence that warms the atmosphere.",
        fragranceSlug: "eclat-dor",
        moodNote: "Solar Warmth",
      },
      {
        label: "A Seductive Parisian Mystery",
        description: "A twilight kiss between day and night that sparks longing.",
        fragranceSlug: "lheure-violette",
        moodNote: "Magnetic Allure",
      },
    ],
  },
];

export default function ScentProfilerModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendedFragrance, setRecommendedFragrance] =
    useState<Fragrance | null>(null);

  if (!isOpen) return null;

  const handleSelect = (slug: string) => {
    const nextAnswers = [...answers, slug];
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate match
      const counts: Record<string, number> = {};
      nextAnswers.forEach((s) => {
        counts[s] = (counts[s] || 0) + 1;
      });
      const topSlug = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      const match =
        FRAGRANCES.find((f) => f.slug === topSlug) || FRAGRANCES[0];
      setRecommendedFragrance(match);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendedFragrance(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-[#0D0312]/92 backdrop-blur-2xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#1D0A29]/95 border border-[#B9955B]/40 rounded-2xl p-5 sm:p-10 md:p-12 shadow-2xl text-[#F4EAF2]">
        {/* Subtle radial plum ambient backdrop glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B174D]/40 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close scent profiler"
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-[#B9955B] text-[#9B709F] hover:text-[#B9955B] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {recommendedFragrance ? (
          /* RESULT VIEW */
          <div className="text-center space-y-6 animate-in zoom-in-95 duration-500 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#B9955B]/40 bg-[#3B174D]/50 text-xs text-[#B9955B] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Olfactive Diagnosis</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center text-left my-4 bg-[#12041A]/70 border border-[#B9955B]/25 rounded-xl p-6">
              <div className="sm:col-span-5 relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-[#B9955B]/40">
                <Image
                  src={recommendedFragrance.image}
                  alt={recommendedFragrance.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="sm:col-span-7 space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
                  {recommendedFragrance.concentration}
                </span>
                <h3 className="font-serif text-3xl text-[#F4EAF2]">
                  {recommendedFragrance.name}
                </h3>
                <p className="font-serif italic text-sm text-[#9B709F]">
                  &ldquo;{recommendedFragrance.headlineQuote}&rdquo;
                </p>
                <p className="font-sans text-xs text-[#F4EAF2]/80 leading-relaxed">
                  {recommendedFragrance.shortDescription}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[#B9955B]">
                  Accords: {recommendedFragrance.keyAccords.join(" • ")}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/fragrances/${recommendedFragrance.slug}`}
                onClick={onClose}
                className="inline-flex items-center px-8 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] rounded border border-[#B9955B]/60 font-medium"
              >
                <span>Explore Full Formulation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>

              <button
                onClick={handleReset}
                className="inline-flex items-center text-xs text-[#9B709F] hover:text-[#B9955B] transition-colors py-2 px-3"
              >
                <RotateCcw className="w-3 h-3 mr-1.5" />
                <span>Begin Another Diagnosis</span>
              </button>
            </div>
          </div>
        ) : (
          /* QUESTION VIEW */
          <div className="relative z-10">
            {/* Header / Protocol tracker */}
            <div className="flex items-center justify-between text-[10px] text-[#B9955B] font-mono mb-6 border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Compass className="w-3.5 h-3.5 text-[#B9955B]" />
                <span>DISCOVER YOUR OLFACTIVE SIGNATURE</span>
              </div>
              <span>
                Movement 0{currentStep + 1} / 0{QUESTIONS.length}
              </span>
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2] mb-1 leading-snug">
                {QUESTIONS[currentStep].question}
              </h3>
              <p className="font-sans text-xs text-[#9B709F]">
                {QUESTIONS[currentStep].subtext}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3.5">
              {QUESTIONS[currentStep].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.fragranceSlug)}
                  className="w-full text-left p-4 sm:p-5 rounded-xl bg-[#12041A]/70 border border-white/10 hover:border-[#B9955B] hover:bg-[#3B174D]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-serif text-base sm:text-lg text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                      {opt.label}
                    </p>
                    <span className="text-[9px] font-mono text-[#B9955B] opacity-75">
                      {opt.moodNote}
                    </span>
                  </div>
                  <p className="text-xs text-[#9B709F] font-sans leading-relaxed">
                    {opt.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
