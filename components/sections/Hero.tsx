"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef, type ComponentType } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  Lightbulb,
  Network,
  Smile,
  Sparkles,
  Target,
  type LucideProps,
} from "lucide-react";

type DomainNode = {
  label: string;
  icon: ComponentType<LucideProps>;
  color: string;
  position: string;
  delay: number;
};

type Particle = {
  left: string;
  top: string;
  size: string;
  color: string;
  delay: number;
};

type BrainVisualProps = {
  reduceMotion: boolean;
  rotate: MotionValue<number>;
  y: MotionValue<number>;
  glowOpacity: MotionValue<number>;
};

const domainNodes: DomainNode[] = [
  {
    label: "Study",
    icon: BookOpen,
    color: "#38BDF8",
    position: "left-[2%] top-[11%] sm:left-[5%] sm:top-[12%]",
    delay: 0,
  },
  {
    label: "Goals",
    icon: Target,
    color: "#F59E0B",
    position: "right-[7%] top-[7%] sm:right-[10%] sm:top-[8%]",
    delay: 0.18,
  },
  {
    label: "Health",
    icon: HeartPulse,
    color: "#84CC16",
    position: "left-[0%] top-[43%] sm:left-[1%] sm:top-[42%]",
    delay: 0.36,
  },
  {
    label: "Social Life",
    icon: Network,
    color: "#FB3EA8",
    position: "right-[0%] top-[42%] sm:right-[2%] sm:top-[40%]",
    delay: 0.54,
  },
  {
    label: "Creativity",
    icon: Lightbulb,
    color: "#A855F7",
    position: "left-[12%] bottom-[10%] sm:left-[16%] sm:bottom-[11%]",
    delay: 0.72,
  },
  {
    label: "Emotions",
    icon: Smile,
    color: "#22C55E",
    position: "right-[10%] bottom-[13%] sm:right-[13%] sm:bottom-[12%]",
    delay: 0.9,
  },
];

const particles: Particle[] = [
  { left: "7%", top: "14%", size: "h-1 w-1", color: "bg-cyan-300/70", delay: 0 },
  { left: "16%", top: "77%", size: "h-1.5 w-1.5", color: "bg-emerald-300/60", delay: 0.4 },
  { left: "27%", top: "24%", size: "h-1 w-1", color: "bg-violet-300/70", delay: 0.8 },
  { left: "34%", top: "66%", size: "h-1.5 w-1.5", color: "bg-pink-300/60", delay: 1.2 },
  { left: "48%", top: "12%", size: "h-1 w-1", color: "bg-amber-300/70", delay: 1.6 },
  { left: "56%", top: "82%", size: "h-1.5 w-1.5", color: "bg-cyan-300/60", delay: 2 },
  { left: "67%", top: "28%", size: "h-1 w-1", color: "bg-emerald-300/70", delay: 2.4 },
  { left: "74%", top: "70%", size: "h-1.5 w-1.5", color: "bg-violet-300/60", delay: 2.8 },
  { left: "86%", top: "19%", size: "h-1 w-1", color: "bg-pink-300/70", delay: 3.2 },
  { left: "91%", top: "84%", size: "h-1.5 w-1.5", color: "bg-amber-300/60", delay: 3.6 },
  { left: "12%", top: "43%", size: "h-1 w-1", color: "bg-sky-300/70", delay: 4 },
  { left: "44%", top: "49%", size: "h-1.5 w-1.5", color: "bg-lime-300/60", delay: 4.4 },
  { left: "82%", top: "51%", size: "h-1 w-1", color: "bg-fuchsia-300/70", delay: 4.8 },
];

const brainPaths = [
  {
    d: "M156 214 C128 198 125 158 154 141 C156 108 188 91 216 108 C237 78 284 82 300 116 C329 104 365 122 368 158 C401 171 402 218 371 235 C371 269 336 287 309 270 C287 301 237 298 220 263 C194 277 159 258 156 214",
    color: "url(#brainBlue)",
    width: 5,
  },
  {
    d: "M196 119 C176 135 172 168 195 186 C173 196 170 230 194 245 C212 258 235 252 244 232",
    color: "#38BDF8",
    width: 4,
  },
  {
    d: "M255 104 C240 127 244 152 268 169 C242 180 237 212 259 231 C282 250 314 238 319 208",
    color: "#A855F7",
    width: 4,
  },
  {
    d: "M313 119 C340 132 346 165 326 186 C354 193 360 229 337 249 C320 264 295 257 285 236",
    color: "#F97316",
    width: 4,
  },
  {
    d: "M170 201 C208 186 249 185 289 200 C319 211 343 208 370 190",
    color: "#FB3EA8",
    width: 4,
  },
  {
    d: "M201 263 C224 297 269 308 303 281 C316 304 346 323 371 323",
    color: "#22C55E",
    width: 4,
  },
  {
    d: "M284 277 C281 314 292 344 324 364 C343 375 354 393 354 414",
    color: "#A855F7",
    width: 5,
  },
];

const neuralNodes = [
  { cx: 170, cy: 154, color: "#38BDF8", delay: 0 },
  { cx: 206, cy: 117, color: "#38BDF8", delay: 0.4 },
  { cx: 255, cy: 132, color: "#A855F7", delay: 0.8 },
  { cx: 307, cy: 119, color: "#F97316", delay: 1.2 },
  { cx: 341, cy: 171, color: "#F97316", delay: 1.6 },
  { cx: 327, cy: 237, color: "#FB3EA8", delay: 2 },
  { cx: 271, cy: 215, color: "#FB3EA8", delay: 2.4 },
  { cx: 216, cy: 232, color: "#38BDF8", delay: 2.8 },
  { cx: 257, cy: 286, color: "#22C55E", delay: 3.2 },
  { cx: 316, cy: 316, color: "#A855F7", delay: 3.6 },
];

function BackgroundParticles({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={`absolute rounded-full ${particle.size} ${particle.color} shadow-[0_0_18px_currentColor]`}
          style={{ left: particle.left, top: particle.top }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.28, 0.9, 0.28],
                  y: [0, index % 2 ? -18 : 18, 0],
                  x: [0, index % 3 ? 10 : -10, 0],
                }
          }
          transition={{
            duration: 7 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

function BrainVisualization({ reduceMotion, rotate, y, glowOpacity }: BrainVisualProps) {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[620px]"
      style={reduceMotion ? undefined : { rotate, y }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.95, y: 22 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.05, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),rgba(168,85,247,0.09)_42%,transparent_70%)] blur-2xl"
        style={{ opacity: reduceMotion ? 0.82 : glowOpacity }}
      />

      <motion.div
        className="absolute inset-[7%] rounded-full border border-cyan-300/10 bg-white/[0.03] shadow-[inset_0_0_90px_rgba(56,189,248,0.06)]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-fuchsia-300/10"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />

      <svg
        className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_0_24px_rgba(56,189,248,0.34)]"
        viewBox="0 0 520 520"
        role="presentation"
      >
        <defs>
          <linearGradient id="brainBlue" x1="120" x2="390" y1="120" y2="270">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="42%" stopColor="#A855F7" />
            <stop offset="72%" stopColor="#FB3EA8" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
          <filter id="neuralGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.85 0"
              result="glow"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="brainCore" cx="52%" cy="45%" r="46%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="54%" stopColor="rgba(56,189,248,0.05)" />
            <stop offset="100%" stopColor="rgba(3,7,18,0)" />
          </radialGradient>
        </defs>

        <ellipse
          cx="260"
          cy="410"
          rx="170"
          ry="34"
          fill="none"
          stroke="rgba(168,85,247,0.28)"
          strokeWidth="1.5"
        />
        <ellipse
          cx="260"
          cy="410"
          rx="112"
          ry="20"
          fill="none"
          stroke="rgba(56,189,248,0.22)"
          strokeWidth="1"
        />
        <path
          d="M127 178 C141 92 240 56 317 86 C396 117 427 212 384 279 C334 359 202 359 151 283 C133 257 122 219 127 178Z"
          fill="url(#brainCore)"
        />

        {brainPaths.map((path, index) => (
          <motion.path
            key={path.d}
            d={path.d}
            fill="none"
            stroke={path.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={path.width}
            filter="url(#neuralGlow)"
            initial={reduceMotion ? false : { pathLength: 0.2, opacity: 0.55 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    pathLength: [0.35, 1, 0.72],
                    opacity: [0.62, 1, 0.72],
                  }
            }
            transition={{
              duration: 5.8 + index * 0.38,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.16,
            }}
          />
        ))}

        <motion.path
          d="M158 214 C203 204 232 160 260 169 C287 177 295 231 333 238 C356 242 373 226 390 207"
          fill="none"
          stroke="rgba(255,255,255,0.46)"
          strokeDasharray="8 16"
          strokeLinecap="round"
          strokeWidth="2"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -96] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: "linear" }}
        />

        {neuralNodes.map((node) => (
          <motion.circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r="4.5"
            fill={node.color}
            filter="url(#neuralGlow)"
            animate={
              reduceMotion
                ? undefined
                : {
                    r: [3.5, 6.5, 3.5],
                    opacity: [0.58, 1, 0.58],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}
      </svg>

      {domainNodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            className={`absolute ${node.position} z-10`}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 12 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, index % 2 ? -9 : 9, 0],
                    x: [0, index % 3 === 0 ? 5 : -5, 0],
                  }
            }
            transition={{
              opacity: { duration: 0.55, delay: 0.62 + node.delay },
              scale: { duration: 0.55, delay: 0.62 + node.delay },
              y: { duration: 6.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 7.4 + index * 0.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/62 px-3 py-2 text-xs font-black uppercase tracking-normal text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4 sm:py-2.5 sm:text-sm">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10"
                style={{
                  color: node.color,
                  boxShadow: `0 0 28px ${node.color}55`,
                  background: `${node.color}16`,
                }}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {node.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = Boolean(useReducedMotion());
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const brainRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const brainY = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 0.55]);
  const particleY = useTransform(scrollYProgress, [0, 1], [0, -56]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#020617] px-4 pb-14 pt-28 text-white md:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(168,85,247,0.22),transparent_30rem),radial-gradient(circle_at_62%_58%,rgba(56,189,248,0.14),transparent_34rem),radial-gradient(circle_at_18%_82%,rgba(34,197,94,0.12),transparent_26rem),linear-gradient(135deg,#020617_0%,#06111F_48%,#020617_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#050712]" />
      <div className="noise opacity-[0.08]" />
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: particleY }}
        aria-hidden="true"
      >
        <BackgroundParticles reduceMotion={reduceMotion} />
      </motion.div>

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M90 680 C275 510 398 580 548 388 C672 230 854 287 1010 170 C1150 64 1270 109 1370 56"
          fill="none"
          stroke="url(#heroNetwork)"
          strokeWidth="1.2"
        />
        <path
          d="M80 240 C248 329 342 162 492 250 C680 360 760 478 938 420 C1130 356 1205 520 1364 456"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeDasharray="9 18"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="heroNetwork" x1="0" x2="1440" y1="0" y2="0">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="42%" stopColor="#A855F7" />
            <stop offset="70%" stopColor="#FB3EA8" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-bold text-cyan-100 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            Emotional intelligence for real life
          </motion.div>

          <h1 className="font-display text-5xl font-black leading-[0.98] text-white md:text-6xl lg:text-[4.65rem] xl:text-[5.05rem]">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 42, filter: "blur(10px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.92, ease: [0.22, 1, 0.36, 1] }}
            >
              Helping Young Minds Navigate
            </motion.span>
            <motion.span
              className="mt-2 block bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-emerald-200 bg-clip-text text-transparent"
              initial={reduceMotion ? false : { opacity: 0, y: 42, filter: "blur(10px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.92, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              The Real World
            </motion.span>
          </h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-200/82 md:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            Building emotional awareness, confidence, communication skills and resilience for
            life.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/programs"
              className="touch-target inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-black text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Programs
            </Link>
            <Link
              href="/mind-gym"
              className="touch-target inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 font-black text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-colors duration-300 hover:bg-white hover:text-slate-950"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              Enter Mind Gym
            </Link>
          </motion.div>
        </div>

        <BrainVisualization
          reduceMotion={reduceMotion}
          rotate={brainRotate}
          y={brainY}
          glowOpacity={glowOpacity}
        />
      </div>

      <motion.a
        href="#challenges"
        className="absolute bottom-5 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-cyan-100/82"
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
