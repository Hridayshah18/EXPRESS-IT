"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem, TiltCard } from "@/components/MotionPrimitives";
import { portals } from "@/lib/content";

export function WhoWeHelp() {
  return (
    <section className="section-shell bg-paper" aria-labelledby="who-title">
      <div className="noise" />
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Who we help"
          title={<span id="who-title">Three portals into growth.</span>}
          copy="Each audience gets a different doorway, but the same promise: expression becomes confidence when it is practiced safely."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <StaggerItem key={portal.title}>
                <TiltCard accent={portal.color} className="h-full rounded-[2rem]">
                  <article className="glass-panel relative h-full min-h-[380px] overflow-hidden rounded-[2rem] p-7">
                    <div
                      className="absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl"
                      style={{ backgroundColor: `${portal.color}33` }}
                    />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <div
                          className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] text-white shadow-soft"
                          style={{ backgroundColor: portal.color }}
                        >
                          <Icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <p className="font-mono text-xs font-bold uppercase tracking-normal text-slate-500">
                          {portal.range}
                        </p>
                        <h3 className="mt-3 font-display text-4xl font-black text-ink">
                          {portal.title}
                        </h3>
                        <p className="mt-5 text-base leading-7 text-slate-600">
                          {portal.description}
                        </p>
                      </div>
                      <a
                        href="#programs"
                        className="touch-target mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition-colors duration-200 hover:bg-primary"
                      >
                        Explore
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
