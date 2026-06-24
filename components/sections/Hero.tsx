"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  BrainCircuit,
  CircleGauge,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const words = [
  { label: "LEARN.", color: "#164E63" },
  { label: "EXPRESS.", color: "#4F46E5" },
  { label: "GROW.", color: "#16A34A" },
];

const signalCards = [
  {
    title: "Confidence",
    value: "rising",
    icon: ShieldCheck,
    color: "#4F46E5",
    position: "left-[4%] top-[16%]",
  },
  {
    title: "Voice",
    value: "clearer",
    icon: MessageCircle,
    color: "#0891B2",
    position: "right-[2%] top-[24%]",
  },
  {
    title: "Focus",
    value: "steady",
    icon: CircleGauge,
    color: "#22C55E",
    position: "bottom-[12%] left-[12%]",
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ECFEFF] px-4 pb-12 pt-28 text-cyan-950 md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(34,211,238,0.26),transparent_30rem),radial-gradient(circle_at_92%_78%,rgba(34,197,94,0.18),transparent_30rem),linear-gradient(180deg,#ECFEFF_0%,#F8FAFC_70%,#EEF2FF_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[64%] bg-gradient-to-r from-[#ECFEFF] via-[#ECFEFF]/96 to-transparent" />
      <div className="noise opacity-20" />

      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-[14%] h-56 w-56 rounded-full bg-cyan-200/35 blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, 18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[10%] left-[42%] h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-10 md:grid-cols-[1.02fr_0.88fr] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/82 px-4 py-2 text-sm font-bold text-cyan-800 shadow-soft backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Learn. Express. Grow.
          </motion.div>

          <h1 className="font-display text-5xl font-black leading-[0.96] md:text-7xl lg:text-8xl">
            {words.map((word, index) => (
              <motion.span
                key={word.label}
                className="block"
                style={{ color: word.color }}
                initial={reduceMotion ? false : { opacity: 0, y: 44, filter: "blur(10px)" }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.92, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {word.label}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-cyan-950/78 md:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            Helping children and teenagers build confidence, emotional intelligence,
            communication skills and resilience.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#mind-gym"
              className="touch-target inline-flex items-center justify-center rounded-full bg-[#22C55E] px-7 py-4 font-black text-white shadow-[0_18px_48px_rgba(34,197,94,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start Journey
            </a>
            <a
              href="#programs"
              className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 bg-white/82 px-7 py-4 font-black text-cyan-950 shadow-soft backdrop-blur-xl transition-colors duration-300 hover:bg-cyan-950 hover:text-white"
            >
              <Play className="h-5 w-5" aria-hidden="true" />
              Explore Programs
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto min-h-[440px] w-full max-w-[540px] md:min-h-[520px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-5 rounded-[2.5rem] border border-white/80 bg-white/56 shadow-[inset_0_0_80px_rgba(34,211,238,0.12),0_30px_90px_rgba(8,145,178,0.16)] backdrop-blur-2xl"
            animate={reduceMotion ? undefined : { borderRadius: ["2.4rem", "3.2rem", "2.4rem"] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 md:h-[380px] md:w-[380px]">
            {[0, 1, 2].map((ring) => (
              <motion.span
                key={ring}
                className="absolute inset-0 rounded-full border border-cyan-500/20"
                style={{ transform: `scale(${0.62 + ring * 0.18})` }}
                animate={reduceMotion ? undefined : { rotate: ring % 2 ? -360 : 360 }}
                transition={{ duration: 36 + ring * 10, repeat: Infinity, ease: "linear" }}
              />
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white bg-white/86 text-primary shadow-soft backdrop-blur-xl">
              <BrainCircuit className="h-14 w-14" aria-hidden="true" />
            </div>

            <span className="absolute left-[18%] top-[48%] h-px w-[64%] bg-gradient-to-r from-transparent via-cyan-600/30 to-transparent" />
            <span className="absolute left-[48%] top-[18%] h-[64%] w-px bg-gradient-to-b from-transparent via-emerald-600/30 to-transparent" />
          </div>

          {signalCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className={`absolute ${card.position} min-w-[148px] rounded-[1.4rem] border border-white/85 bg-white/82 p-4 shadow-soft backdrop-blur-xl`}
                animate={reduceMotion ? undefined : { y: [0, index % 2 ? -8 : 8, 0] }}
                transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: card.color }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-black text-cyan-950">
                      {card.title}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-normal text-cyan-800/70">
                      {card.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/80 bg-cyan-950/88 p-5 text-white shadow-soft backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-normal text-cyan-200">
                  Expression map
                </p>
                <p className="mt-2 font-display text-2xl font-black">
                  Feelings become skills.
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.42)]" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#challenges"
        className="absolute bottom-5 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-cyan-800"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: reduceMotion ? 0 : Infinity, delay: 1 }}
        aria-label="Scroll to today's generational challenges"
      >
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
