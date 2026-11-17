"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, X, ArrowRight, RotateCcw } from "lucide-react";
import { FRAGRANCES, Fragrance } from "@/data/fragrances";

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    fragranceSlug: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What atmosphere commands your spirit?",
    options: [
      {
        label: "Twilight Whispers & Velvet Shadows",
        description: "Dark salons, candlelight, smoky warmth.",
        fragranceSlug: "nuit-de-velours",
      },
      {
        label: "Moonlit Botanical Conservatory",
        description: "Cool powdery petals, misty glass, orris root.",
        fragranceSlug: "fleur-dombre",
      },
      {
        label: "Gilded Sunset over Place Vendôme",
        description: "Molten amber, warm solar saffron, precious woods.",
        fragranceSlug: "eclat-dor",
      },
      {
        label: "The Violet Parisian Dusk",
        description: "Tart blackcurrant liqueur, nocturnal orchids, musk.",
        fragranceSlug: "lheure-violette",
      },
    ],
  },
  {
    id: 2,
    question: "Which sensory texture speaks to your soul?",
    options: [
      {
        label: "Heavy Silk Velvet",
        description: "Dense, tactile, mysterious, warm.",
        fragranceSlug: "nuit-de-velours",
      },
      {
        label: "Glove-Soft White Suede",
        description: "Intimate, delicate, powdery, restrained.",
        fragranceSlug: "fleur-dombre",
      },
      {
        label: "Melted Gold & Sandalwood",
        description: "Luminous, aristocratic, enveloping comfort.",
        fragranceSlug: "eclat-dor",
      },
      {
        label: "Royal Violet Brocade",
        description: "Extravagant, romantic, melancholic, unforgettable.",
        fragranceSlug: "lheure-violette",
      },
    ],
  },
  {
    id: 3,
    question: "How do you wish your presence to be remembered?",
    options: [
      {
        label: "An Enigma in the Shadow",
        description: "They cannot name what you wore, but they cannot forget it.",
        fragranceSlug: "nuit-de-velours",
      },
      {
        label: "A Poetic Memory",
        description: "A delicate whisper of timeless elegance and grace.",
        fragranceSlug: "fleur-dombre",
      },
      {
        label: "A Warm Radiance",
        description: "A luminous aura of gold and aristocratic confidence.",
        fragranceSlug: "eclat-dor",
      },
      {
        label: "A Seductive Mystery",
        description: "A lingering Parisian romance between dusk and midnight.",
        fragranceSlug: "lheure-violette",
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
      // Calculate most frequent slug
      const counts: Record<string, number> = {};
      nextAnswers.forEach((s) => {
        counts[s] = (counts[s] || 0) + 1;
      });
      const topSlug = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      const match = FRAGRANCES.find((f) => f.slug === topSlug) || FRAGRANCES[0];
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
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-[#12041A]/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-2xl bg-[#1D0A29] border border-[#B9955B]/40 rounded-xl p-6 sm:p-10 shadow-2xl overflow-hidden text-[#F4EAF2]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close profiler"
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-[#B9955B] text-[#9B709F] hover:text-[#B9955B] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {recommendedFragrance ? (
          /* Result View */
          <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/40 text-xs text-[#B9955B] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Signature Diagnosis</span>
            </div>

            <div className="relative w-40 h-48 mx-auto rounded-lg overflow-hidden border border-[#B9955B]/40 shadow-xl">
              <Image
                src={recommendedFragrance.image}
                alt={recommendedFragrance.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
                {recommendedFragrance.personality}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2] mt-1">
                {recommendedFragrance.name}
              </h3>
              <p className="font-serif italic text-sm text-[#9B709F] mt-1">
                &ldquo;{recommendedFragrance.headlineQuote}&rdquo;
              </p>
            </div>

            <p className="text-xs text-[#F4EAF2]/80 max-w-md mx-auto leading-relaxed">
              {recommendedFragrance.shortDescription}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/fragrances/${recommendedFragrance.slug}`}
                onClick={onClose}
                className="inline-flex items-center px-6 py-3 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.2em] rounded border border-[#B9955B]/60 font-medium"
              >
                <span>Explore Formulation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>

              <button
                onClick={handleReset}
                className="inline-flex items-center text-xs text-[#9B709F] hover:text-[#B9955B] transition-colors py-2 px-3"
              >
                <RotateCcw className="w-3 h-3 mr-1.5" />
                <span>Diagnose Again</span>
              </button>
            </div>
          </div>
        ) : (
          /* Question View */
          <div>
            <div className="flex items-center justify-between text-[10px] text-[#B9955B] font-mono mb-4 border-b border-white/10 pb-3">
              <span>OLFACTORY PROFILING PROTOCOL</span>
              <span>
                0{currentStep + 1} / 0{QUESTIONS.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2] mb-6">
              {QUESTIONS[currentStep].question}
            </h3>

            <div className="space-y-3">
              {QUESTIONS[currentStep].options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.fragranceSlug)}
                  className="w-full text-left p-4 rounded-lg bg-[#12041A]/70 border border-white/10 hover:border-[#B9955B] hover:bg-[#3B174D]/30 transition-all duration-300 group"
                >
                  <p className="font-serif text-base text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-[#9B709F] mt-0.5 font-sans">
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
