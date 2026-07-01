"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { LottieRefCurrentProps } from "lottie-react";

const LottiePlayer = dynamic(async () => (await import("lottie-react")).default, {
  ssr: false,
});

type LottieIconProps = {
  src: string;
  ariaLabel: string;
  className?: string;
  placeholderClassName?: string;
  loop?: boolean;
};

export function LottieIcon({
  src,
  ariaLabel,
  className = "h-16 w-16",
  placeholderClassName = "bg-white/15",
  loop = true,
}: LottieIconProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const reduceMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        setIsVisible(visible);
        if (visible) setShouldLoad(true);
      },
      { rootMargin: "160px", threshold: 0.15 },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || animationData || hasError) return;

    const controller = new AbortController();

    fetch(src, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load ${src}`);
        return response.json() as Promise<object>;
      })
      .then((data) => setAnimationData(data))
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setHasError(true);
      });

    return () => controller.abort();
  }, [animationData, hasError, shouldLoad, src]);

  useEffect(() => {
    if (!lottieRef.current || reduceMotion) return;

    if (isVisible) {
      lottieRef.current.play();
      return;
    }

    lottieRef.current.pause();
  }, [isVisible, reduceMotion]);

  return (
    <div
      ref={shellRef}
      className={`relative shrink-0 overflow-hidden ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      {animationData && !hasError ? (
        <LottiePlayer
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={!reduceMotion && isVisible}
          loop={!reduceMotion && loop}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet", progressiveLoad: true }}
          className="h-full w-full"
        />
      ) : (
        <span className={`block h-full w-full rounded-[inherit] ${placeholderClassName}`} />
      )}
    </div>
  );
}
