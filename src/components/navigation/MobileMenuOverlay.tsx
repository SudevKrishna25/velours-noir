"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { FRAGRANCES } from "@/data/fragrances";
import { MAISON_INFO } from "@/data/maison";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenuOverlay({
  isOpen,
  onClose,
}: MobileMenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#12041A]/98 backdrop-blur-2xl text-[#F4EAF2] p-6 sm:p-12 transition-all duration-500 animate-in fade-in"
    >
      {/* Top bar with Monogram and Close button */}
      <div className="flex items-center justify-between border-b border-[#B9955B]/20 pb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 relative opacity-90">
            <Image
              src="/images/brand/vn_monogram.svg"
              alt="Velours Noir Monogram"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif text-lg tracking-[0.25em] text-[#F4EAF2]">
            VELOURS NOIR
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#9B709F] hover:text-[#B9955B] transition-colors py-2 px-3 border border-[#B9955B]/20 rounded-full"
        >
          <span>Close</span>
          <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
        </button>
      </div>

      {/* Main navigation links */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-8">
        <div className="md:col-span-7 flex flex-col space-y-4 sm:space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] mb-2 font-mono">
            Navigation
          </span>
          <Link
            href="/"
            onClick={onClose}
            className="group flex items-baseline justify-between text-3xl sm:text-5xl font-serif text-[#F4EAF2] hover:text-[#B9955B] transition-all duration-300"
          >
            <span>Flagship Maison</span>
            <span className="text-xs uppercase tracking-widest text-[#9B709F] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
              01 — Home
            </span>
          </Link>

          <Link
            href="/collection"
            onClick={onClose}
            className="group flex items-baseline justify-between text-3xl sm:text-5xl font-serif text-[#F4EAF2] hover:text-[#B9955B] transition-all duration-300"
          >
            <span>The Collection</span>
            <span className="text-xs uppercase tracking-widest text-[#9B709F] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
              02 — All Scents
            </span>
          </Link>

          <Link
            href="/maison"
            onClick={onClose}
            className="group flex items-baseline justify-between text-3xl sm:text-5xl font-serif text-[#F4EAF2] hover:text-[#B9955B] transition-all duration-300"
          >
            <span>Our Maison</span>
            <span className="text-xs uppercase tracking-widest text-[#9B709F] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
              03 — Heritage
            </span>
          </Link>

          <Link
            href="/journal"
            onClick={onClose}
            className="group flex items-baseline justify-between text-3xl sm:text-5xl font-serif text-[#F4EAF2] hover:text-[#B9955B] transition-all duration-300"
          >
            <span>Journal</span>
            <span className="text-xs uppercase tracking-widest text-[#9B709F] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
              04 — Essays
            </span>
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="group flex items-baseline justify-between text-3xl sm:text-5xl font-serif text-[#F4EAF2] hover:text-[#B9955B] transition-all duration-300"
          >
            <span>Private Atelier</span>
            <span className="text-xs uppercase tracking-widest text-[#9B709F] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
              05 — Concierge
            </span>
          </Link>
        </div>

        {/* Right column: The 4 extraits previews */}
        <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#B9955B]/20 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block mb-4">
              Extraits de Parfum
            </span>
            <div className="space-y-4">
              {FRAGRANCES.map((frag) => (
                <Link
                  key={frag.slug}
                  href={`/fragrances/${frag.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between p-2.5 rounded hover:bg-[#3B174D]/40 transition-colors"
                >
                  <div>
                    <h4 className="font-serif text-lg text-[#F4EAF2] group-hover:text-[#B9955B] transition-colors">
                      {frag.name}
                    </h4>
                    <p className="text-xs text-[#9B709F] tracking-wide">
                      {frag.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#B9955B] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#B9955B]/15 text-xs text-[#9B709F]">
            <p className="font-serif italic text-sm text-[#F4EAF2]/90 mb-1">
              &ldquo;{MAISON_INFO.tagline}&rdquo;
            </p>
            <p className="tracking-widest uppercase text-[10px] text-[#B9955B]">
              {MAISON_INFO.contact.addressLine1}, {MAISON_INFO.contact.addressLine2}
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[#B9955B]/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9B709F] space-y-2 sm:space-y-0">
        <span>© 2026 Velours Noir Haute Parfumerie</span>
        <div className="flex space-x-6 text-[11px] uppercase tracking-widest">
          <Link href="/collection" onClick={onClose} className="hover:text-[#B9955B]">
            Collection
          </Link>
          <Link href="/maison" onClick={onClose} className="hover:text-[#B9955B]">
            Maison
          </Link>
          <Link href="/contact" onClick={onClose} className="hover:text-[#B9955B]">
            Concierge
          </Link>
        </div>
      </div>
    </div>
  );
}
