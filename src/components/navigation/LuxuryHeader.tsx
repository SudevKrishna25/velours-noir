"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import MobileMenuOverlay from "./MobileMenuOverlay";
import AmbientAudioToggle from "@/components/ui/AmbientAudioToggle";
import ScentProfilerModal from "@/components/ui/ScentProfilerModal";

export default function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilerOpen, setProfilerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { label: "COLLECTION", href: "/collection" },
    { label: "OUR MAISON", href: "/maison" },
  ];

  const rightNavLinks = [
    { label: "JOURNAL", href: "/journal" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1D0A29]/92 backdrop-blur-xl border-b border-[#B9955B]/20 py-3.5 shadow-2xl shadow-black/50"
            : "bg-gradient-to-b from-[#12041A]/95 via-[#12041A]/60 to-transparent py-4 sm:py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
          {/* 3-Column Grid Layout: Guarantees Zero Collisions across all viewports */}
          <div className="grid grid-cols-12 items-center">
            {/* LEFT ZONE (Cols 1-4): Monogram + Left Symmetrical Nav */}
            <div className="col-span-3 sm:col-span-4 flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/"
                className="group flex items-center space-x-2.5 transition-transform duration-300 hover:scale-105 flex-shrink-0"
                aria-label="Velours Noir Home"
              >
                <div className="w-8 h-8 relative opacity-90 group-hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brand/vn_monogram.svg"
                    alt="Velours Noir Monogram"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="hidden 2xl:inline text-[9px] uppercase tracking-[0.3em] text-[#9B709F] font-mono border-l border-[#B9955B]/20 pl-2.5">
                  Place Vendôme
                </span>
              </Link>

              {/* Symmetrical Left Nav Links (Visible on large screens) */}
              <nav
                className="hidden xl:flex items-center space-x-6"
                aria-label="Collection and Maison Navigation"
              >
                {leftNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-[11px] font-sans uppercase tracking-[0.22em] transition-all duration-300 py-1 ${
                        isActive
                          ? "text-[#B9955B] font-medium"
                          : "text-[#F4EAF2]/80 hover:text-[#B9955B]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* CENTER ZONE (Cols 5-8): Isolated Brand Wordmark (Protected from overlap) */}
            <div className="col-span-6 sm:col-span-4 flex flex-col items-center justify-center text-center px-2">
              <Link
                href="/"
                className="inline-block group focus:outline-none focus:ring-1 focus:ring-[#B9955B] select-none"
              >
                <h1 className="font-serif tracking-[0.3em] sm:tracking-[0.42em] text-base sm:text-xl md:text-2xl font-light text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors duration-300 whitespace-nowrap">
                  VELOURS NOIR
                </h1>
                <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-[#B9955B]/80 font-sans mt-0.5 opacity-90 whitespace-nowrap">
                  Haute Parfumerie
                </span>
              </Link>
            </div>

            {/* RIGHT ZONE (Cols 9-12): Right Symmetrical Nav + Atmosphere + Profiler + Menu */}
            <div className="col-span-3 sm:col-span-4 flex items-center justify-end space-x-2.5 sm:space-x-4 lg:space-x-5">
              {/* Symmetrical Right Nav Links (Visible on large screens) */}
              <nav
                className="hidden xl:flex items-center space-x-6 mr-2"
                aria-label="Journal and Contact Navigation"
              >
                {rightNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative text-[11px] font-sans uppercase tracking-[0.22em] transition-all duration-300 py-1 ${
                        isActive
                          ? "text-[#B9955B] font-medium"
                          : "text-[#F4EAF2]/80 hover:text-[#B9955B]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Scent Profiler Pill Button */}
              <button
                onClick={() => setProfilerOpen(true)}
                className="hidden md:inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] text-[#B9955B] hover:text-[#F4EAF2] py-1.5 px-3 rounded-full border border-[#B9955B]/30 hover:border-[#B9955B] bg-[#3B174D]/30 transition-all flex-shrink-0"
              >
                <Sparkles className="w-3 h-3 text-[#B9955B]" />
                <span className="hidden lg:inline">Scent Profiler</span>
                <span className="lg:hidden">Diagnose</span>
              </button>

              {/* Atelier Ambient Sound Toggle */}
              <AmbientAudioToggle />

              {/* Full-screen Menu Trigger */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className="group flex items-center space-x-1.5 text-[11px] uppercase tracking-[0.2em] text-[#F4EAF2] hover:text-[#B9955B] transition-colors py-1.5 px-3 border border-[#B9955B]/25 hover:border-[#B9955B]/60 rounded-full bg-[#12041A]/60 backdrop-blur-md flex-shrink-0"
              >
                <span className="hidden sm:inline font-mono text-[10px]">Menu</span>
                <Menu className="w-4 h-4 text-[#B9955B] transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen navigation drawer overlay */}
      <MobileMenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Scent Profiler Diagnosis Modal */}
      <ScentProfilerModal
        isOpen={profilerOpen}
        onClose={() => setProfilerOpen(false)}
      />
    </>
  );
}
