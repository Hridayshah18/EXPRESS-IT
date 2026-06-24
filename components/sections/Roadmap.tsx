"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/MotionPrimitives";
import { roadmap } from "@/lib/content";

export function Roadmap() {
  return (
    <section className="section-shell bg-[#EEF2FF]" aria-labelledby="roadmap-title">
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Future roadmap"
          title={<span id="roadmap-title">A platform, not a brochure.</span>}
          copy="The roadmap is staged as a journey so visitors can see the ecosystem growing toward guided practice, parent support, and school wellbeing tools."
        />

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-primary/25 md:block" />
          <div className="grid gap-5">
            {roadmap.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <article className="glass-panel relative grid gap-4 rounded-[1.75rem] p-6 md:grid-cols-[160px_1fr] md:items-center md:pl-16">
                  <span className="absolute left-0 top-1/2 hidden h-4 w-4 -translate-x-[7px] -translate-y-1/2 rounded-full bg-primary shadow-glow md:block" />
                  <p className="font-display text-4xl font-black text-primary">{item.year}</p>
                  <div>
                    <h3 className="font-display text-2xl font-black text-ink">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
