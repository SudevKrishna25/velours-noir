"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Sparkles } from "lucide-react";
import MobileMenuOverlay from "./MobileMenuOverlay";
import AmbientAudioToggle from "@/components/ui/AmbientAudioToggle";
import ScentProfilerModal from "@/components/ui/ScentProfilerModal";

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilerOpen, setProfilerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1D0A29]/95 backdrop-blur-2xl border-b border-[#B9955B]/20 py-2.5 sm:py-3.5 shadow-2xl shadow-black/70"
            : "bg-gradient-to-b from-[#12041A]/95 via-[#12041A]/60 to-transparent py-3 sm:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* LEFT ZONE: Brand Seal Monogram & Place Vendôme */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Link
              href="/"
              className="group flex items-center space-x-2.5 transition-transform duration-300 hover:scale-105 flex-shrink-0"
              aria-label="Velours Noir Home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 relative opacity-90 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/images/brand/vn_monogram.svg"
                  alt="Velours Noir Seal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden md:inline text-[9px] uppercase tracking-[0.3em] text-[#9B709F] font-mono border-l border-[#B9955B]/20 pl-2.5 whitespace-nowrap">
                Place Vendôme
              </span>
            </Link>
          </div>

          {/* CENTER ZONE: Completely Protected, Unencumbered Brand Wordmark */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center text-center px-2 sm:px-8 select-none">
            <Link
              href="/"
              className="inline-block group focus:outline-none focus:ring-1 focus:ring-[#B9955B]"
            >
              <h1 className="font-serif tracking-[0.2em] sm:tracking-[0.35em] md:tracking-[0.45em] text-sm sm:text-lg md:text-2xl font-light text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors duration-300 whitespace-nowrap">
                VELOURS NOIR
              </h1>
              <span className="block text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[#B9955B]/90 font-sans mt-0.5 opacity-90 whitespace-nowrap">
                Haute Parfumerie
              </span>
            </Link>
          </div>

          {/* RIGHT ZONE: Scent Profiler + Atmosphere + Menu Drawer Trigger */}
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-3.5 min-w-0">
            {/* Scent Profiler Pill Button (Desktop & Tablet) */}
            <button
              onClick={() => setProfilerOpen(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] text-[#B9955B] hover:text-[#F4EAF2] py-1.5 px-3 rounded-full border border-[#B9955B]/30 hover:border-[#B9955B] bg-[#3B174D]/35 hover:bg-[#3B174D]/70 transition-all flex-shrink-0"
            >
              <Sparkles className="w-3 h-3 text-[#B9955B]" />
              <span>Scent Profiler</span>
            </button>

            {/* Atelier Ambient Sound Toggle */}
            <AmbientAudioToggle />

            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="group flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#F4EAF2] hover:text-[#B9955B] transition-colors py-1.5 px-2.5 sm:px-3 border border-[#B9955B]/25 hover:border-[#B9955B]/60 rounded-full bg-[#12041A]/60 backdrop-blur-md flex-shrink-0"
            >
              <span className="hidden sm:inline font-mono text-[10px]">Menu</span>
              <Menu className="w-4 h-4 text-[#B9955B] transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen navigation drawer overlay */}
      <MobileMenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenProfiler={() => {
          setMenuOpen(false);
          setProfilerOpen(true);
        }}
      />

      {/* Scent Profiler Diagnosis Modal */}
      <ScentProfilerModal
        isOpen={profilerOpen}
        onClose={() => setProfilerOpen(false)}
      />
    </>
  );
}
