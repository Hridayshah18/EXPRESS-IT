"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem, TiltCard } from "@/components/MotionPrimitives";
import { portals } from "@/lib/content";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section-shell bg-paper" aria-labelledby="who-title">
      <div className="noise" />
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Who we help"
          title={<span id="who-title">Three portals into growth.</span>}
          copy="Each audience gets a different doorway, but the same promise: expression becomes confidence when it is practiced safely."
        />

        <Stagger className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3">
          {portals.map((portal) => {
            const Icon = portal.icon;

            return (
              <StaggerItem key={portal.title}>
                <TiltCard accent={portal.color} className="h-full rounded-[2rem]">
                  <article className="group/portal relative h-full min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/35 bg-ink p-5 text-white shadow-soft md:min-h-[440px] md:rounded-[2rem] md:p-7">
                    <Image
                      src={portal.image}
                      alt={portal.imageAlt}
                      fill
                      loading="eager"
                      quality={88}
                      sizes="(min-width: 1280px) 390px, (min-width: 768px) 32vw, calc(100vw - 2rem)"
                      className="absolute inset-0 object-cover transition-transform duration-500 ease-out will-change-transform group-hover/portal:scale-105"
                      style={{ objectPosition: portal.imagePosition }}
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500 ease-out group-hover/portal:opacity-85"
                      style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.72) 100%), linear-gradient(135deg, ${portal.color}18 0%, transparent 44%, ${portal.color}22 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-70 mix-blend-soft-light transition-opacity duration-500 group-hover/portal:opacity-50"
                      style={{
                        background: `radial-gradient(circle at 24% 18%, rgba(255,255,255,0.2), transparent 16rem), radial-gradient(circle at 80% 88%, ${portal.color}55, transparent 18rem)`,
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex h-full flex-col">
                      <div
                        className="inline-flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-white/35 text-white shadow-soft backdrop-blur-xl"
                        style={{ backgroundColor: `${portal.color}CC` }}
                      >
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </div>

                      <div className="mt-auto pt-16 [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] md:pt-24">
                        <div
                          className="mb-4 h-px w-16"
                          style={{ backgroundColor: portal.color }}
                          aria-hidden="true"
                        />
                        <p className="font-mono text-xs font-bold uppercase tracking-normal text-white/78">
                          {portal.range}
                        </p>
                        <h3 className="mt-3 font-display text-3xl font-black text-white md:text-4xl">
                          {portal.title}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/88 md:mt-5 md:text-base md:leading-7">
                          {portal.description}
                        </p>
                        <Link
                          href="/programs"
                          className="touch-target mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink shadow-soft transition-colors duration-300 hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-fit md:mt-9"
                        >
                          Explore
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
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
