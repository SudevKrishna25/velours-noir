"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { MAISON_INFO } from "@/data/maison";
import { FRAGRANCES } from "@/data/fragrances";

export default function LuxuryFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#12041A] text-[#F4EAF2] border-t border-[#B9955B]/20 pt-20 pb-12 overflow-hidden">
      {/* Decorative top gold hairline glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#B9955B]/60 to-transparent" />

      {/* Atmospheric plum aura behind footer */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#3B174D]/25 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Section: Wordmark, Tagline, & Crest */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-[#B9955B]/15">
          <div className="w-16 h-16 relative mb-6 opacity-90">
            <Image
              src="/images/brand/vn_monogram.svg"
              alt="Velours Noir Seal"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="font-serif tracking-[0.45em] sm:tracking-[0.55em] text-3xl sm:text-5xl font-light text-[#F4EAF2] mb-3">
            VELOURS NOIR
          </h2>

          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B9955B] font-sans font-medium mb-3">
            {MAISON_INFO.tagline}
          </p>

          <p className="font-serif italic text-sm text-[#9B709F] max-w-md">
            &ldquo;{MAISON_INFO.subTagline}&rdquo;
          </p>
        </div>

        {/* Middle Grid: Columns for Navigation, Fragrances, Newsletter, and Concierge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b border-[#B9955B]/15 text-sm">
          {/* Col 1: Fragrance Collection */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              The Fragrances
            </h4>
            <ul className="space-y-2.5">
              {FRAGRANCES.map((frag) => (
                <li key={frag.slug}>
                  <Link
                    href={`/fragrances/${frag.slug}`}
                    className="group flex items-baseline justify-between text-xs text-[#F4EAF2]/80 hover:text-[#B9955B] transition-colors"
                  >
                    <span>{frag.name}</span>
                    <span className="text-[10px] text-[#9B709F] font-mono">
                      {frag.id}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/collection"
                  className="inline-flex items-center text-[11px] uppercase tracking-wider text-[#B9955B] hover:text-[#F4EAF2] transition-colors group"
                >
                  <span>Explore Full Collection</span>
                  <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: The Maison Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4EAF2]/80">
              <li>
                <Link
                  href="/maison"
                  className="hover:text-[#B9955B] transition-colors block"
                >
                  Philosophy & Heritage
                </Link>
              </li>
              <li>
                <Link
                  href="/maison#pillars"
                  className="hover:text-[#B9955B] transition-colors block"
                >
                  Glasswork & Formulation
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="hover:text-[#B9955B] transition-colors block"
                >
                  Les Carnets Noirs (Journal)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#B9955B] transition-colors block"
                >
                  Private Atelier Appointments
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-[#9B709F] mb-1 font-mono">
                Place Vendôme Atelier
              </h5>
              <p className="text-xs text-[#F4EAF2]/70 leading-relaxed">
                {MAISON_INFO.contact.addressLine1}
                <br />
                {MAISON_INFO.contact.addressLine2}
              </p>
            </div>
          </div>

          {/* Col 3: Newsletter & Invitation */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-[#B9955B] font-mono">
              The Circle of Velours Noir
            </h4>
            <p className="text-xs text-[#9B709F] leading-relaxed max-w-md">
              Receive confidential dispatches on limited extrait reserves,
              olfactory exhibitions, and private salon appointments in Paris.
            </p>

            {submitted ? (
              <div className="p-4 bg-[#3B174D]/40 border border-[#B9955B]/40 rounded text-xs text-[#F4EAF2] flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-[#B9955B]/20 flex items-center justify-center text-[#B9955B]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="font-serif italic text-sm text-[#F4EAF2]">
                    Bienvenue dans le cercle.
                  </p>
                  <p className="text-[11px] text-[#9B709F]">
                    Your invitation dispatch will arrive at {email}.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    aria-label="Email address for private dispatches"
                    className="flex-grow bg-[#1D0A29]/90 border border-[#B9955B]/30 focus:border-[#B9955B] rounded py-3 px-4 text-xs text-[#F4EAF2] placeholder:text-[#9B709F]/60 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] hover:text-[#B9955B] text-[10px] uppercase tracking-[0.2em] rounded border border-[#B9955B]/30 transition-all font-medium flex items-center justify-center space-x-1"
                  >
                    <span>Request Protocol</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-rose-300">{error}</p>}
                <p className="text-[10px] text-[#9B709F]/70 italic">
                  Demonstration dispatch state. Discretion is absolute.
                </p>
              </form>
            )}

            {/* Social Channels */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-[#9B709F]">
              {MAISON_INFO.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  className="hover:text-[#B9955B] transition-colors text-[11px] uppercase tracking-wider"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance, and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9B709F] space-y-4 sm:space-y-0">
          <div>
            <span>
              © 2026 {MAISON_INFO.legalName}. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[10px] uppercase tracking-widest text-[#B9955B]/70">
              Paris • Grasse • Place Vendôme
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center space-x-1.5 text-[11px] uppercase tracking-widest hover:text-[#B9955B] transition-colors p-1"
            >
              <span>Ascend</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
