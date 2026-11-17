"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Calendar,
  Send,
} from "lucide-react";
import { MAISON_INFO } from "@/data/maison";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Private Olfactory Profiling",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.email.includes("@")) {
      setError("Please complete your full name and a valid email address.");
      return;
    }

    setError("");
    const code = `VN-VEN-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(code);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#12041A] text-[#F4EAF2] pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background ambient radial glow */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B174D]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#B9955B]/30 bg-[#3B174D]/30 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B9955B]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#B9955B] font-mono">
              Le Concierge • Place Vendôme
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-light text-[#F4EAF2] tracking-tight">
            PRIVATE ATELIER
            <br />
            <span className="italic font-normal gold-gradient-text">
              & CONCIERGE
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#9B709F] mt-3 sm:mt-4 max-w-xl mx-auto leading-relaxed px-2">
            By private appointment only. Experience our formulations in the
            seclusion of our salon overlooking the historic colonnades of Place
            Vendôme.
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Paris Atelier Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Concierge Reservation Form */}
          <div className="lg:col-span-7 bg-[#1D0A29]/60 border border-[#B9955B]/25 rounded-xl p-5 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-[#3B174D] border border-[#B9955B] flex items-center justify-center mx-auto text-[#B9955B]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9955B] font-mono">
                    Protocol Acknowledged
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F4EAF2]">
                    Votre Demande est Enregistrée
                  </h3>
                  <p className="font-serif italic text-base text-[#9B709F]">
                    &ldquo;The art of being remembered begins here.&rdquo;
                  </p>
                </div>

                {/* Reservation Token Plate */}
                <div className="p-6 bg-[#12041A] border border-[#B9955B]/40 rounded-lg max-w-md mx-auto text-left space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-[#9B709F] border-b border-white/10 pb-2">
                    <span>DEMO RESERVATION TOKEN</span>
                    <span className="text-[#B9955B] font-bold">
                      {reservationCode}
                    </span>
                  </div>
                  <p className="text-xs text-[#F4EAF2]/90">
                    Client: <span className="font-serif">{formData.name}</span>
                  </p>
                  <p className="text-xs text-[#F4EAF2]/90">
                    Dispatch Destination:{" "}
                    <span className="font-mono text-[11px] text-[#B9955B]">
                      {formData.email}
                    </span>
                  </p>
                  <p className="text-xs text-[#F4EAF2]/90">
                    Inquiry Nature:{" "}
                    <span className="font-serif">{formData.inquiryType}</span>
                  </p>
                  <p className="text-[10px] text-[#9B709F] pt-2 border-t border-white/5 italic">
                    Demonstration state. Our concierge simulation has recorded
                    your appointment request.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      inquiryType: "Private Olfactory Profiling",
                      preferredDate: "",
                      message: "",
                    });
                  }}
                  className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#B9955B] hover:text-[#F4EAF2] border-b border-[#B9955B]/40 pb-1 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EAF2] mb-1">
                    Request Atelier Appointment
                  </h3>
                  <p className="text-xs text-[#9B709F]">
                    Please allow 24 hours for confidential salon confirmation.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-rose-950/50 border border-rose-500/40 rounded text-xs text-rose-200">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B9955B] font-mono mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Éléonore Laurent"
                      className="w-full bg-[#12041A] border border-[#B9955B]/30 focus:border-[#B9955B] rounded p-3 text-xs text-[#F4EAF2] placeholder:text-[#9B709F]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B9955B] font-mono mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="concierge@domain.com"
                      className="w-full bg-[#12041A] border border-[#B9955B]/30 focus:border-[#B9955B] rounded p-3 text-xs text-[#F4EAF2] placeholder:text-[#9B709F]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B9955B] font-mono mb-2">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full bg-[#12041A] border border-[#B9955B]/30 focus:border-[#B9955B] rounded p-3 text-xs text-[#F4EAF2] focus:outline-none transition-colors"
                    >
                      <option value="Private Olfactory Profiling">
                        Private Olfactory Profiling (60 min)
                      </option>
                      <option value="Bespoke Flacon Commission">
                        Bespoke Flacon Commission
                      </option>
                      <option value="Collection Privée Acquisition">
                        Collection Privée Acquisition
                      </option>
                      <option value="Press & Editorial Inquiries">
                        Press & Editorial Inquiries
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B9955B] font-mono mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full bg-[#12041A] border border-[#B9955B]/30 focus:border-[#B9955B] rounded p-3 text-xs text-[#F4EAF2] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-[#B9955B] font-mono mb-2">
                    Personal Scent Preferences or Special Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe olfactive memories, preferred accords, or specific inquiries..."
                    className="w-full bg-[#12041A] border border-[#B9955B]/30 focus:border-[#B9955B] rounded p-3 text-xs text-[#F4EAF2] placeholder:text-[#9B709F]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3B174D] hover:bg-[#633A78] text-[#F4EAF2] text-xs uppercase tracking-[0.25em] font-medium rounded border border-[#B9955B]/50 hover:border-[#B9955B] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#B9955B]" />
                  <span>Submit Appointment Protocol</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Place Vendôme Atelier Dossier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#B9955B]/30 shadow-2xl">
              <Image
                src="/images/maison_atelier.jpg"
                alt="Place Vendôme Atelier"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12041A] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-[#B9955B] font-mono bg-black/70 px-2 py-0.5 rounded">
                Paris • Place Vendôme
              </div>
            </div>

            <div className="space-y-6 text-xs text-[#F4EAF2]/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#B9955B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F4EAF2] font-serif text-sm">
                    Maison Flagship Atelier
                  </strong>
                  <p className="text-[#9B709F] mt-0.5">
                    {MAISON_INFO.contact.addressLine1}
                    <br />
                    {MAISON_INFO.contact.addressLine2}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#B9955B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F4EAF2] font-serif text-sm">
                    Hours of Reception
                  </strong>
                  <p className="text-[#9B709F] mt-0.5">
                    {MAISON_INFO.contact.openingHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#B9955B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F4EAF2] font-serif text-sm">
                    Private Concierge
                  </strong>
                  <p className="text-[#9B709F] mt-0.5">
                    {MAISON_INFO.contact.conciergeEmail}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#B9955B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#F4EAF2] font-serif text-sm">
                    Direct Telephone
                  </strong>
                  <p className="text-[#9B709F] mt-0.5">
                    {MAISON_INFO.contact.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#1D0A29]/40 border border-white/10 rounded-lg text-xs text-[#9B709F] space-y-2">
              <p className="font-serif italic text-sm text-[#F4EAF2]">
                &ldquo;Discretion is the supreme hallmark of Haute
                Parfumerie.&rdquo;
              </p>
              <p>
                All consultations remain strictly confidential. Private salon
                rooms ensure an uninterrupted, bespoke olfactory experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
