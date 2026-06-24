"use client";

import { ArrowRight, BookOpen, CalendarCheck, MessageSquareHeart, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/MotionPrimitives";

const resources = [
  { title: "Parenting Resources", icon: BookOpen, detail: "Short guides for pressure, confidence, emotions, and screen habits." },
  { title: "Communication Tips", icon: MessageSquareHeart, detail: "Conversation starters that lower defensiveness and raise clarity." },
  { title: "Workshops", icon: CalendarCheck, detail: "Live and school-linked sessions for families navigating modern childhood." },
  { title: "Guides", icon: Wrench, detail: "Practical toolkits for recurring family challenges." },
];

export function ParentHub() {
  return (
    <section id="parent-hub" className="section-shell bg-[#0F172A] text-white" aria-labelledby="parent-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.22),transparent_30rem),radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.22),transparent_34rem)]" />
      <div className="container-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Parent Hub"
            title={<span id="parent-title">Less panic. More language.</span>}
            copy="A more mature zone for parents: calmer colors, direct resources, and tools that make difficult moments easier to approach."
            tone="dark"
          />

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <StaggerItem key={resource.title}>
                  <article className="dark-glass rounded-[1.75rem] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 p-3 text-ink">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-7 font-display text-2xl font-black">{resource.title}</h3>
                    <p className="mt-3 leading-7 text-slate-200">{resource.detail}</p>
                    <a
                      href="#contact"
                      className="touch-target mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-ink"
                    >
                      Request access
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
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
