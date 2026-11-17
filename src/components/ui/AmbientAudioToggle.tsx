"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  useEffect(() => {
    return () => {
      // Cleanup audio nodes on unmount
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioContextClass) return;

        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Master gain - very soft and gentle
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a warm, contemplative luxury ambient chord (Deep Plum resonance: D2, A2, F#3, C#4)
        const freqs = [73.42, 110.0, 185.0, 277.18];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();

          osc.type = idx === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(450, ctx.currentTime);

          // Subtle LFO modulation for breathing movement
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscNodesRef.current = oscs;
        setIsPlaying(true);
      } catch (err) {
        console.warn("Web Audio not supported or blocked", err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + 1.2
        );
        setTimeout(() => {
          oscNodesRef.current.forEach((o) => {
            try {
              o.stop();
            } catch {
              // ignore
            }
          });
          oscNodesRef.current = [];
          if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
            audioCtxRef.current.close();
          }
          setIsPlaying(false);
        }, 1200);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Atelier Atmosphere" : "Awaken Atelier Atmosphere"}
      className="group flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#9B709F] hover:text-[#B9955B] transition-colors py-1.5 px-3 rounded-full border border-[#B9955B]/20 hover:border-[#B9955B]/40 bg-[#12041A]/60 backdrop-blur-md"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end space-x-0.5 h-3 w-3">
            <span className="w-0.5 bg-[#B9955B] h-full animate-pulse" />
            <span
              className="w-0.5 bg-[#B9955B] h-2/3 animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-0.5 bg-[#B9955B] h-4/5 animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span className="hidden sm:inline text-[10px] text-[#B9955B]">Atmosphere</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#9B709F] group-hover:text-[#B9955B]" />
          <span className="hidden sm:inline text-[10px]">Atmosphere</span>
        </>
      )}
    </button>
  );
}
