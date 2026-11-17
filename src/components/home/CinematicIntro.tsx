"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import GoldParticles from "@/components/ui/GoldParticles";

interface CinematicIntroProps {
  onComplete?: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [scene, setScene] = useState<
    "darkness" | "monogram" | "reveal" | "curtain" | "finished"
  >("darkness");
  const [lineProgress, setLineProgress] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasSeenIntro = sessionStorage.getItem("vn_intro_v2");

    if (prefersReducedMotion || hasSeenIntro) {
      setIsVisible(false);
      setScene("finished");
      if (onComplete) onComplete();
      return;
    }

    // SCENE 1: Darkness & Atmospheric Light & Fine Gold Line Drawing (0ms - 800ms)
    const t0 = setTimeout(() => setLineProgress(true), 200);

    // SCENE 2: The Monogram Emerges from darkness (800ms - 1700ms)
    const t1 = setTimeout(() => setScene("monogram"), 800);

    // SCENE 3: The Typographic Reveal "VELOURS NOIR" + Tagline (1700ms - 2700ms)
    const t2 = setTimeout(() => setScene("reveal"), 1700);

    // SCENE 4: The Boutique Curtain Mask Transition (2700ms - 3500ms)
    const t3 = setTimeout(() => setScene("curtain"), 2700);

    // FINISHED: Removed from DOM (3500ms)
    const t4 = setTimeout(() => {
      setIsVisible(false);
      setScene("finished");
      sessionStorage.setItem("vn_intro_v2", "true");
      if (onComplete) onComplete();
    }, 3600);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setScene("finished");
    sessionStorage.setItem("vn_intro_v2", "true");
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to Velours Noir Flagship"
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#0D0312] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        scene === "curtain"
          ? "pointer-events-none -translate-y-full opacity-0"
          : "opacity-100"
      }`}
    >
      {/* Scene 1: Faint atmospheric light & gold particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3B174D]/50 via-[#180722]/80 to-[#0D0312] pointer-events-none" />

      {/* Floating Gold Particles in the opening darkness */}
      <GoldParticles count={30} />

      {/* Center Choreography Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        {/* Fine gold line drawing itself across the center */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent transition-all duration-800 ease-out mb-8 ${
            lineProgress ? "w-48 sm:w-72 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Scene 2: The VN Monogram emerging with metallic lighting */}
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 relative mb-6 transition-all duration-800 transform ${
            scene === "monogram" || scene === "reveal" || scene === "curtain"
              ? "opacity-100 scale-100 filter drop-shadow-[0_0_15px_rgba(185,149,91,0.5)]"
              : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/brand/vn_monogram.svg"
            alt="Velours Noir Seal"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Scene 3: Typographic reveal: VELOURS NOIR */}
        <div className="overflow-hidden mb-3">
          <h2
            className={`font-serif tracking-[0.45em] sm:tracking-[0.6em] text-2xl sm:text-4xl text-[#F4EAF2] font-light transition-transform duration-800 ease-out ${
              scene === "reveal" || scene === "curtain"
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            VELOURS NOIR
          </h2>
        </div>

        {/* Tagline Reveal: THE ART OF BEING REMEMBERED */}
        <div className="overflow-hidden">
          <p
            className={`text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#B9955B] font-sans font-medium transition-all duration-700 ease-out ${
              scene === "reveal" || scene === "curtain"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            THE ART OF BEING REMEMBERED.
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-20 text-[10px] uppercase tracking-[0.25em] text-[#9B709F] hover:text-[#B9955B] transition-colors py-1.5 px-4 border border-[#B9955B]/20 rounded-full bg-[#12041A]/50 backdrop-blur-sm"
      >
        Skip Opening →
      </button>
    </div>
  );
}
