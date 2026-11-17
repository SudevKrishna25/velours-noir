import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, ShieldCheck } from "lucide-react";
import { MAISON_INFO } from "@/data/maison";

export const metadata = {
  title: "The Maison | Velours Noir Haute Parfumerie Paris",
  description:
    "Explore the heritage, philosophy, and sculptural craftsmanship of Velours Noir on Place Vendôme, Paris.",
};

export default function MaisonPage() {
  return (
    <div className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background ambient radial glow */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#3B174D]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/30 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B9955B] font-mono">
              Haute Parfumerie Française
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-light text-[#F4EAF2] tracking-tight">
            THE MAISON
            <br />
            <span className="italic font-normal gold-gradient-text">
              HERITAGE
            </span>
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-[#9B709F] mt-3 sm:mt-4 px-2">
            &ldquo;{MAISON_INFO.manifesto.quote}&rdquo;
          </p>
        </div>

        {/* Hero Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-28 pb-12 sm:pb-20 border-b border-[#B9955B]/15">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block">
              Philosophy & Origin
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F4EAF2] leading-tight">
              SCENT IS THE MEMORY
              <br />
              <span className="italic font-normal gold-gradient-text">
                THAT REMAINS.
              </span>
            </h2>

            <div className="w-16 h-[1.5px] bg-[#B9955B]" />

            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#F4EAF2]/80 leading-relaxed">
              <p>
                Founded on the historic stones of Place Vendôme, Velours Noir
                was conceived as an intimate rebellion against industrial,
                mass-market perfumery. We believe that true luxury does not
                shout across crowded rooms; it invites intimacy through
                gravitational authority.
              </p>
              <p>
                Our formulation laboratory works exclusively in high-concentration
                extraits. Every fragrance requires eighteen to twenty-four months
                of creative gestation, allowing volatile molecules and heavy
                resins to harmonize into an unmistakable velvet sillage.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-4 bg-[#1D0A29]/60 border border-[#B9955B]/25 rounded text-xs text-[#9B709F] flex items-center space-x-3">
                <Compass className="w-4 h-4 text-[#B9955B] flex-shrink-0" />
                <span>
                  Head Atelier: {MAISON_INFO.contact.addressLine1},{" "}
                  {MAISON_INFO.contact.addressLine2}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-[#B9955B]/30 shadow-2xl">
              <Image
                src="/images/maison_atelier.jpg"
                alt="Velours Noir Atelier"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#12041A]/90 backdrop-blur-md rounded border border-white/10 text-xs text-[#F4EAF2]">
                <p className="font-serif italic text-xs">
                  The private salon overlooking the colonnades of Place Vendôme.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Pillars Section */}
        <div id="pillars" className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block mb-2">
              Artisanal Discipline
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F4EAF2]">
              The Three Pillars of Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MAISON_INFO.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-lg bg-[#1D0A29]/50 border border-[#B9955B]/20 hover:border-[#B9955B] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B9955B]">
                      Pillar {pillar.number}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#B9955B]" />
                  </div>

                  <h3 className="font-serif text-2xl text-[#F4EAF2] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#9B709F] mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#F4EAF2]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-widest text-[#B9955B] font-mono">
                    Artisanal Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Glasswork Visual Campaign Banner */}
        <div className="relative rounded-lg overflow-hidden border border-[#B9955B]/30 bg-[#1D0A29] p-8 sm:p-14 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono block">
                Haute Cristallerie
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2]">
                Architectural Glasswork
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9B709F] leading-relaxed max-w-xl">
                Each flacon is cast from ultra-dense French crystal, engineered
                with a dramatic bottom sham that refracts the deep plum and
                royal violet hues of our extraits. Topped with a solid brass cap
                electroplated in authentic Old Gold.
              </p>
              <div className="pt-2">
                <Link
                  href="/collection"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B9955B] hover:text-[#F4EAF2] font-medium"
                >
                  <span>Explore All 04 Opus Flacons</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-video lg:aspect-[4/3] rounded overflow-hidden border border-white/10">
              <Image
                src="/images/campaign_2.jpg"
                alt="Flacon Glasswork"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Atelier Appointment Banner */}
        <div className="text-center max-w-2xl mx-auto p-8 rounded border border-[#B9955B]/25 bg-[#12041A]">
          <h3 className="font-serif text-2xl text-[#F4EAF2] mb-2">
            The Private Salon on Place Vendôme
          </h3>
          <p className="text-xs text-[#9B709F] leading-relaxed mb-6">
            We welcome collectors and fragrance connoisseurs for private,
            unhurried olfactory profiling appointments in our Paris salon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] rounded border border-[#B9955B]/50 transition-all font-medium"
          >
            <span>Request an Appointment</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
