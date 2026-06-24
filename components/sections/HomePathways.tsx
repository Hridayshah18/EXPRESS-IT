"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, GraduationCap, HeartHandshake, Puzzle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem, TiltCard } from "@/components/MotionPrimitives";

const pathways = [
  {
    title: "Framework",
    detail: "A Five Stage World for Growth",
    href: "/framework",
    accent: "#4F46E5",
    icon: Compass,
  },
  {
    title: "Programs",
    detail: "Growth pathways for real life.",
    href: "/programs",
    accent: "#22C55E",
    icon: GraduationCap,
  },
  {
    title: "Mind Gym",
    detail: "Practice emotional skills in small moments.",
    href: "/mind-gym",
    accent: "#F43F5E",
    icon: Puzzle,
  },
  {
    title: "Parent Hub",
    detail: "Less panic. More language.",
    href: "/parent-hub",
    accent: "#F59E0B",
    icon: HeartHandshake,
  },
];

export function HomePathways() {
  return (
    <section className="section-shell bg-[#F8FAFC]" aria-labelledby="pathways-title">
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Explore the platform"
          title={<span id="pathways-title">Choose the space you need next.</span>}
          copy="Each page now focuses on one part of the EXPRESS IT journey while keeping the same visual language and flow."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <StaggerItem key={pathway.href}>
                <TiltCard accent={pathway.accent} className="h-full rounded-[1.75rem]">
                  <article className="glass-panel flex h-full min-h-[270px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6">
                    <div>
                      <div
                        className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1.25rem] text-white shadow-soft"
                        style={{ backgroundColor: pathway.accent }}
                      >
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-3xl font-black text-ink">{pathway.title}</h3>
                      <p className="mt-4 leading-7 text-slate-600">{pathway.detail}</p>
                    </div>
                    <Link
                      href={pathway.href}
                      className="touch-target mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-white transition-colors duration-200 hover:bg-primary"
                    >
                      Open page
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
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
