"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for hover state on links/buttons/images
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const customCursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      const interactive = target.closest("a, button, [role='button'], input, textarea");

      if (customCursorEl) {
        const text = customCursorEl.getAttribute("data-cursor") || "EXPLORE";
        setCursorText(text);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Smooth lerp loop for the trailing outer circle
    let animationId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      circlePos.current.x = lerp(circlePos.current.x, mousePos.current.x, 0.18);
      circlePos.current.y = lerp(circlePos.current.y, mousePos.current.y, 0.18);

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Precision center pinpoint */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300 will-change-transform"
        style={{
          width: isHovered ? "4px" : "5px",
          height: isHovered ? "4px" : "5px",
          backgroundColor: isHovered ? "#B9955B" : "#F4EAF2",
          boxShadow: "0 0 10px rgba(185, 149, 91, 0.7)",
        }}
      />

      {/* Trailing luxury ring with magnetic fluidity */}
      <div
        ref={circleRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out will-change-transform"
        style={{
          width: cursorText ? "88px" : isHovered ? "48px" : "32px",
          height: cursorText ? "88px" : isHovered ? "48px" : "32px",
          border: cursorText
            ? "1px solid rgba(185, 149, 91, 0.9)"
            : isHovered
            ? "1px solid rgba(185, 149, 91, 0.6)"
            : "1px solid rgba(185, 149, 91, 0.3)",
          backgroundColor: cursorText
            ? "rgba(59, 23, 77, 0.85)"
            : isHovered
            ? "rgba(99, 58, 120, 0.2)"
            : "transparent",
          backdropFilter: cursorText ? "blur(6px)" : "none",
          boxShadow: cursorText
            ? "0 0 25px rgba(59, 23, 77, 0.6)"
            : "none",
        }}
      >
        {cursorText && (
          <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-medium text-[#F4EAF2] select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
