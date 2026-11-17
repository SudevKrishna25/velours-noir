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

  const navLinks = [
    { label: "COLLECTION", href: "/collection" },
    { label: "OUR MAISON", href: "/maison" },
    { label: "JOURNAL", href: "/journal" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1D0A29]/90 backdrop-blur-xl border-b border-[#B9955B]/20 py-3.5 shadow-2xl shadow-black/40"
            : "bg-gradient-to-b from-[#12041A]/90 via-[#12041A]/40 to-transparent py-5 sm:py-7 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Left: Brand Monogram & Scent Profiler Trigger */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
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
              <span className="hidden xl:inline text-[9px] uppercase tracking-[0.35em] text-[#9B709F] font-mono border-l border-[#B9955B]/20 pl-3">
                Paris • Place Vendôme
              </span>
            </Link>

            {/* Scent Finder Pill */}
            <button
              onClick={() => setProfilerOpen(true)}
              className="hidden md:inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.2em] text-[#B9955B] hover:text-[#F4EAF2] py-1 px-3 rounded-full border border-[#B9955B]/30 hover:border-[#B9955B] bg-[#3B174D]/30 transition-all"
            >
              <Sparkles className="w-3 h-3 text-[#B9955B]" />
              <span>Scent Profiler</span>
            </button>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="inline-block group focus:outline-none focus:ring-1 focus:ring-[#B9955B]"
            >
              <h1 className="font-serif tracking-[0.32em] sm:tracking-[0.42em] text-lg sm:text-2xl font-light text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors duration-300">
                VELOURS NOIR
              </h1>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.45em] text-[#B9955B]/80 font-sans mt-0.5 opacity-90">
                Haute Parfumerie
              </span>
            </Link>
          </div>

          {/* Right: Desktop Links, Ambient Audio & Menu Drawer Trigger */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <nav
              className="hidden lg:flex items-center space-x-7"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
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
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B9955B] to-transparent animate-in fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Ambient Atelier Sound Toggle */}
            <AmbientAudioToggle />

            {/* Menu Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#F4EAF2] hover:text-[#B9955B] transition-colors py-2 px-3 border border-[#B9955B]/25 hover:border-[#B9955B]/60 rounded-full bg-[#12041A]/50 backdrop-blur-md"
            >
              <span className="hidden sm:inline font-mono text-[10px]">Menu</span>
              <Menu className="w-4 h-4 text-[#B9955B] transition-transform duration-300 group-hover:scale-110" />
            </button>
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
