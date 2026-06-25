"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export function GlobalEffects() {
  const [showCursorGlow, setShowCursorGlow] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lowPowerDevice =
      navigator.hardwareConcurrency <= 4 ||
      ("deviceMemory" in navigator && Number(navigator.deviceMemory) <= 4);
    let lenis: Lenis | null = null;
    let raf = 0;
    let progressFrame = 0;
    let pointerFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight * 0.35;
    const progressBar = document.querySelector<HTMLElement>("[data-scroll-progress]");

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
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressBar?.style.setProperty("transform", `scaleX(${progress})`);
    };

    const scheduleProgressUpdate = () => {
      if (progressFrame) return;

      progressFrame = requestAnimationFrame(() => {
        progressFrame = 0;
        updateProgress();
      });
    };

    const updatePointer = (event: PointerEvent) => {
      if (reduceMotion || coarsePointer || lowPowerDevice) return;

      pointerX = event.clientX;
      pointerY = event.clientY;

      if (pointerFrame) return;

      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        document.documentElement.style.setProperty("--cursor-x", `${pointerX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${pointerY}px`);
      });
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("resize", scheduleProgressUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleProgressUpdate);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("resize", scheduleProgressUpdate);
      if (raf) cancelAnimationFrame(raf);
      if (progressFrame) cancelAnimationFrame(progressFrame);
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        data-scroll-progress
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-secondary to-accent will-change-transform"
      />
      {showCursorGlow ? <div aria-hidden="true" className="cursor-glow" /> : null}
    </>
  );
}
