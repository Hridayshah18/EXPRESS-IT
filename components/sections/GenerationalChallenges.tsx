"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { challenges, type Challenge } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function ChallengeVisual({ challenge }: { challenge: Challenge }) {
  const Icon = challenge.icon;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center">
      <div
        className="absolute inset-8 rounded-full blur-3xl"
        style={{ backgroundColor: `${challenge.color}33` }}
      />
      <div className="absolute inset-10 rounded-full border border-white/15" />
      <div className="absolute inset-20 rounded-full border border-white/10" />

      {challenge.visual === "cubes" ? (
        <div className="relative grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
              style={{
                transform: `translateY(${(index % 3) * 8}px) rotate(${index * 4}deg)`,
              }}
            />
          ))}
        </div>
      ) : null}

      {challenge.visual === "fog" ? (
        <div className="absolute inset-12">
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className="absolute rounded-full bg-white/20 blur-xl"
              style={{
                left: `${8 + index * 12}%`,
                top: `${20 + (index % 3) * 18}%`,
                width: `${80 + index * 12}px`,
                height: `${44 + index * 6}px`,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 h-1 w-52 -translate-x-1/2 rounded-full bg-emerald-300/80 shadow-[0_0_30px_rgba(110,231,183,0.7)]" />
        </div>
      ) : null}

      {challenge.visual === "stairs" ? (
        <div className="relative flex h-72 w-72 rotate-[-18deg] flex-col-reverse gap-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="block h-5 rounded-full bg-white/15 shadow-lg"
              style={{ width: `${70 + index * 25}px`, marginLeft: `${index * 10}px` }}
            />
          ))}
        </div>
      ) : null}

      {challenge.visual === "lights" ? (
        <div className="relative h-80 w-80">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_22px_rgba(167,243,208,0.9)]"
              style={{
                left: `${50 + Math.cos(index) * 36}%`,
                top: `${50 + Math.sin(index * 1.35) * 36}%`,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 h-36 w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-emerald-200/60" />
          <div className="absolute left-1/2 top-1/2 h-36 w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-emerald-200/60" />
        </div>
      ) : null}

      {challenge.visual === "bubbles" ? (
        <div className="relative h-80 w-80">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="absolute rounded-[1.25rem] border border-white/25 bg-white/10"
              style={{
                left: `${14 + (index % 4) * 20}%`,
                top: `${16 + Math.floor(index / 4) * 42}%`,
                width: `${70 + (index % 2) * 34}px`,
                height: "44px",
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 h-px w-64 -translate-x-1/2 bg-rose-200/70" />
        </div>
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl">
          <Icon className="h-16 w-16" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export function GenerationalChallenges() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const chapters = gsap.utils.toArray<HTMLElement>(".challenge-chapter");
      const visuals = gsap.utils.toArray<HTMLElement>(".challenge-visual");
      const mm = gsap.matchMedia();

      const resetChapters = () => {
        gsap.set(chapters, {
          clearProps: "all",
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          pointerEvents: "auto",
        });
        gsap.set(visuals, { clearProps: "all", y: 0, scale: 1, opacity: 1 });
        gsap.set(".challenge-orbit", { clearProps: "all" });
      };

      mm.add("(min-width: 1024px)", () => {
        resetChapters();
        chapters.forEach((chapter, index) => {
          gsap.set(chapter, {
            opacity: index === 0 ? 1 : 0,
            y: index === 0 ? 0 : 56,
            pointerEvents: index === 0 ? "auto" : "none",
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${challenges.length * 82}%`,
            scrub: 0.65,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        chapters.forEach((chapter, index) => {
          if (index === 0) return;
          timeline
            .to(chapters[index - 1], {
              opacity: 0,
              y: -48,
              scale: 0.985,
              pointerEvents: "none",
              duration: 0.42,
            })
            .to(
              chapter,
              { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.58 },
              "<0.14",
            );
        });

        gsap.to(".challenge-orbit", {
          rotate: 18,
          scale: 1.035,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        resetChapters();
        chapters.forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 76%",
                end: "top 42%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        visuals.forEach((visual) => {
          gsap.fromTo(
            visual,
            { y: 16, scale: 0.985 },
            {
              y: -10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.9,
              },
            },
          );
        });

        gsap.to(".challenge-orbit", {
          rotate: 7,
          scale: 1.01,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        resetChapters();
        chapters.forEach((chapter) => {
          gsap.fromTo(
            chapter,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.62,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 84%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

        visuals.forEach((visual) => {
          gsap.fromTo(
            visual,
            { y: 8 },
            {
              y: -6,
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            },
          );
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      id="challenges"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#090A1A] text-white"
      aria-labelledby="challenges-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.28),transparent_34rem),radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.2),transparent_28rem)]" />
      <div className="noise opacity-20" />
      <div className="challenge-orbit absolute left-1/2 top-1/2 h-[72vw] max-h-[760px] w-[72vw] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 max-md:h-[120vw] max-md:w-[120vw]" />

      <div className="container-shell relative z-10 flex min-h-screen items-center py-20 md:py-24">
        <div className="absolute left-0 top-24 hidden font-mono text-xs font-bold uppercase tracking-normal text-emerald-200 md:block">
          Problems Gen Z is facing
        </div>

        <h2 id="challenges-title" className="sr-only">
          Problems Gen Z is facing
        </h2>

        <div className="relative grid w-full gap-12 lg:min-h-[620px]">
          {challenges.map((challenge) => (
            <motion.article
              key={challenge.title}
              className="challenge-chapter relative grid min-h-[auto] max-w-full items-center gap-8 py-8 md:py-14 lg:absolute lg:inset-0 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-0"
              initial={reduceMotion ? { opacity: 1, y: 0 } : false}
            >
              <div>
                <h3 className="font-display text-4xl font-black leading-none md:text-6xl lg:text-7xl">
                  {challenge.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
                  {challenge.description}
                </p>
              </div>
              <div className="challenge-visual min-w-0 max-w-full">
                <ChallengeVisual challenge={challenge} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
