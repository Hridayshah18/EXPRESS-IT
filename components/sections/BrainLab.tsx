"use client";

import { Lock } from "lucide-react";
import { LottieSignal } from "@/components/LottieSignal";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/MotionPrimitives";
import { labChallenges } from "@/lib/content";

export function BrainLab() {
  return (
    <section id="brain-lab" className="section-shell bg-[#F0FDFA]" aria-labelledby="brain-title">
      <div className="noise" />
      <div className="container-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Brain Lab"
              title={<span id="brain-title">Tests are coming. The lab is ready.</span>}
              copy="Interactive challenge slots are structured now, without pretending the games are already functional."
            />
            <div className="mt-8 glass-panel flex w-fit items-center gap-4 rounded-[2rem] p-4">
              <LottieSignal />
              <div>
                <p className="font-display text-2xl font-black text-ink">Placeholder mode</p>
                <p className="mt-1 text-sm font-bold text-slate-600">Architecture first, gameplay later.</p>
              </div>
            </div>
          </div>

          <Stagger className="grid gap-4 md:grid-cols-2">
            {labChallenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <StaggerItem key={challenge.title}>
                  <article className="glass-panel group relative min-h-[250px] overflow-hidden rounded-[1.75rem] p-6">
                    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-teal-300/30 blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-xs font-black text-white">
                          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                          {challenge.status}
                        </span>
                      </div>
                      <h3 className="mt-8 font-display text-2xl font-black text-ink">
                        {challenge.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">{challenge.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
