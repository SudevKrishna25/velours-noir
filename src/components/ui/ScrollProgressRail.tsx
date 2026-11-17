"use client";

import React, { useState, useEffect } from "react";

const CHAPTERS = [
  { id: "hero", label: "I. The Campaign", target: "#hero" },
  { id: "manifesto", label: "II. The Manifesto", target: "#manifesto" },
  { id: "collection", label: "III. Collection Privée", target: "#collection" },
  { id: "pyramid", label: "IV. Olfactive Pyramid", target: "#pyramid" },
  { id: "composition", label: "V. Art of Composition", target: "#composition" },
  { id: "campaign", label: "VI. The World", target: "#campaign" },
  { id: "finale", label: "VII. Final Impression", target: "#finale" },
];

export default function ScrollProgressRail() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentProgress = Math.min(
        100,
        Math.max(0, (window.scrollY / totalScroll) * 100)
      );
      setScrollProgress(currentProgress);

      // Determine active chapter based on scroll position
      const chapterIndex = Math.min(
        CHAPTERS.length - 1,
        Math.floor((currentProgress / 100) * CHAPTERS.length)
      );
      setActiveChapter(chapterIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Flagship Experience Chapters"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 select-none pointer-events-auto"
    >
      {/* Micro Percentage Indicator */}
      <span className="text-[9px] font-mono tracking-widest text-[#B9955B]/80 font-light">
        {Math.round(scrollProgress)}%
      </span>

      {/* Vertical Track Rail */}
      <div className="relative w-[1px] h-48 bg-[#B9955B]/15">
        {/* Dynamic Gold Fill */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#B9955B] to-[#D4AF6E] transition-all duration-200"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Chapter Markers */}
        <div className="absolute inset-0 flex flex-col justify-between py-1 items-center">
          {CHAPTERS.map((ch, idx) => {
            const isPassed = idx <= activeChapter;
            const isCurrent = idx === activeChapter;

            return (
              <button
                key={ch.id}
                onClick={() => scrollToSection(ch.target)}
                onMouseEnter={() => setHoveredChapter(ch.label)}
                onMouseLeave={() => setHoveredChapter(null)}
                aria-label={`Jump to ${ch.label}`}
                className="group relative flex items-center justify-center p-1 -mx-2 focus:outline-none"
              >
                {/* Marker Dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isCurrent
                      ? "bg-[#B9955B] scale-125 shadow-md shadow-[#B9955B]"
                      : isPassed
                      ? "bg-[#B9955B]/70"
                      : "bg-[#9B709F]/30 group-hover:bg-[#B9955B]/50"
                  }`}
                />

                {/* Hover Label Tooltip (Right-aligned floating to the left) */}
                {hoveredChapter === ch.label && (
                  <span className="absolute right-6 px-2.5 py-1 bg-[#1D0A29]/95 backdrop-blur-md rounded border border-[#B9955B]/30 text-[10px] font-serif text-[#F4EAF2] whitespace-nowrap shadow-xl animate-in fade-in slide-in-from-right-1 duration-200">
                    {ch.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <span className="text-[8px] uppercase tracking-[0.3em] text-[#9B709F]/70 font-mono rotate-90 mt-2">
        Opus
      </span>
    </aside>
  );
}
