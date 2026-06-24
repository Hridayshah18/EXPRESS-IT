"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem, TiltCard } from "@/components/MotionPrimitives";
import { formatNumber } from "@/lib/utils";
import { programs, stats } from "@/lib/content";

function ProgramVisual({ accent }: { accent: string }) {
  return (
    <div
      className="relative aspect-[4/5] overflow-hidden"
      style={{
        background: `radial-gradient(circle at 24% 18%, ${accent}55, transparent 11rem), linear-gradient(145deg, #ffffff 0%, #f8fafc 45%, ${accent}22 100%)`,
      }}
      aria-hidden="true"
    >
      <div className="absolute left-5 top-5 h-24 w-24 rounded-[2rem] bg-white/80 shadow-soft" />
      <div
        className="absolute right-5 top-16 h-28 w-28 rounded-full shadow-soft"
        style={{ backgroundColor: `${accent}44` }}
      />
      <div className="absolute bottom-16 left-6 right-6 h-24 rounded-[2rem] bg-white/80 shadow-soft backdrop-blur-xl" />
      <div className="absolute bottom-28 left-12 h-5 w-36 rounded-full bg-slate-900/10" />
      <div
        className="absolute bottom-10 right-8 h-20 w-20 rounded-[1.7rem] shadow-soft"
        style={{ backgroundColor: accent }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
    </div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 18 });
  const rounded = useTransform(spring, (latest) => `${formatNumber(Math.round(latest))}${suffix}`);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function StatsAndPrograms() {
  return (
    <>
      <section className="section-shell bg-white" aria-labelledby="works-title">
        <div className="container-shell relative z-10">
          <SectionHeading
            eyebrow="Why it works"
            title={<span id="works-title">Numbers that feel human.</span>}
            copy="The skill review pushed this section toward clear visual hierarchy and lightweight animation: the counters reward scrolling without stealing attention."
          />

          <Stagger className="mt-12 grid gap-4 md:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <article className="glass-panel rounded-[1.75rem] p-6">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <p className="mt-8 font-display text-4xl font-black text-ink">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 font-bold text-slate-600">{stat.label}</p>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section id="programs" className="section-shell bg-[#F8FAFC]" aria-labelledby="programs-title">
        <div className="container-shell relative z-10">
          <SectionHeading
            eyebrow="Programs"
            title={<span id="programs-title">Browse growth like a streaming shelf.</span>}
            copy="Each program is a visual doorway with quick scanning, hover previews, and a strong call to learn more."
          />

          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-5 md:grid md:grid-cols-4 md:overflow-visible">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <TiltCard
                  key={program.title}
                  accent={program.accent}
                  className="min-w-[280px] snap-start rounded-[1.75rem] md:min-w-0"
                >
                  <article className="glass-panel h-full overflow-hidden rounded-[1.75rem]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <ProgramVisual accent={program.accent} />
                      <div
                        className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: program.accent }}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-bold uppercase tracking-normal text-white/75">
                          {program.audience}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-black">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm leading-6 text-slate-600">{program.description}</p>
                      <a
                        href="#contact"
                        className="touch-target mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-black text-white transition-colors duration-200 hover:bg-primary"
                      >
                        Learn More
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
