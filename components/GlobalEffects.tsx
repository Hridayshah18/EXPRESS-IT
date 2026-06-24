"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export function GlobalEffects() {
  const [progress, setProgress] = useState(0);
  const [showCursorGlow, setShowCursorGlow] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowPowerDevice =
      navigator.hardwareConcurrency <= 4 ||
      ("deviceMemory" in navigator && Number(navigator.deviceMemory) <= 4);
    let lenis: Lenis | null = null;
    let raf = 0;

    setShowCursorGlow(!reduceMotion && !coarsePointer && !lowPowerDevice);

    if (!reduceMotion && !coarsePointer) {
      lenis = new Lenis({
        duration: 1.22,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
      });

      const tick = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const updatePointer = (event: PointerEvent) => {
      if (coarsePointer || lowPowerDevice) return;
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("pointermove", updatePointer);
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
      {showCursorGlow ? <div aria-hidden="true" className="cursor-glow" /> : null}
    </>
  );
}
