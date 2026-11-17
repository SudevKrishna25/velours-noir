"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CinematicIntroProps {
  onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [stage, setStage] = useState<
    "line" | "monogram" | "wordmark" | "tagline" | "curtain" | "done"
  >("line");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check reduced motion or previous dismissal in session
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasSeenIntro = sessionStorage.getItem("vn_intro_seen");

    if (prefersReducedMotion || hasSeenIntro) {
      setIsVisible(false);
      setStage("done");
      if (onComplete) onComplete();
      return;
    }

    // Choreographed timeline
    // 0ms: fine gold line starts drawing
    const t1 = setTimeout(() => setStage("monogram"), 600);
    const t2 = setTimeout(() => setStage("wordmark"), 1400);
    const t3 = setTimeout(() => setStage("tagline"), 2200);
    const t4 = setTimeout(() => setStage("curtain"), 3200);
    const t5 = setTimeout(() => {
      setIsVisible(false);
      setStage("done");
      sessionStorage.setItem("vn_intro_seen", "true");
      if (onComplete) onComplete();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setStage("done");
    sessionStorage.setItem("vn_intro_seen", "true");
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to Velours Noir"
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#12041A] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        stage === "curtain"
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Background subtle radial plum light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B174D]/40 via-[#1D0A29]/80 to-[#12041A] pointer-events-none" />

      {/* Center choreographed container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        {/* Step 1: Fine gold hairline animation */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent transition-all duration-700 ease-out mb-8 ${
            stage !== "line" ? "w-48 sm:w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Step 2: VN Monogram fade and scale */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 relative mb-6 transition-all duration-700 transform ${
            stage === "monogram" ||
            stage === "wordmark" ||
            stage === "tagline" ||
            stage === "curtain"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/brand/vn_monogram.svg"
            alt="Velours Noir Monogram"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Step 3: Typography Reveal: VELOURS NOIR */}
        <div className="overflow-hidden mb-3">
          <h2
            className={`font-serif tracking-[0.45em] sm:tracking-[0.6em] text-2xl sm:text-4xl text-[#F4EAF2] font-light transition-transform duration-700 ease-out ${
              stage === "wordmark" || stage === "tagline" || stage === "curtain"
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            VELOURS NOIR
          </h2>
        </div>

        {/* Step 4: Tagline: "THE ART OF BEING REMEMBERED." */}
        <div className="overflow-hidden">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B9955B] font-sans font-medium transition-all duration-700 ease-out ${
              stage === "tagline" || stage === "curtain"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            THE ART OF BEING REMEMBERED.
          </p>
        </div>
      </div>

      {/* Skip button for immediate access */}
      <button
        onClick={handleSkip}
        className="absolute bottom-10 right-8 sm:right-12 z-20 text-[10px] uppercase tracking-[0.25em] text-[#9B709F] hover:text-[#B9955B] transition-colors py-1 px-3 border border-[#B9955B]/20 rounded-full"
      >
        Skip Opening →
      </button>
    </div>
  );
}
