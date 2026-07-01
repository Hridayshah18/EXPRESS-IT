"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/MotionPrimitives";
import { LottieIcon } from "@/components/ui/LottieIcon";

type ParentResource = {
  title: string;
  animation: string;
  detail: string;
};

const resources: ParentResource[] = [
  {
    title: "Parenting Resources",
    animation: "/lottie/support system.json",
    detail: "Short guides for pressure, confidence, emotions, and screen habits.",
  },
  {
    title: "Communication Tips",
    animation: "/lottie/support system.json",
    detail: "Conversation starters that lower defensiveness and raise clarity.",
  },
  {
    title: "Workshops",
    animation: "/lottie/support system.json",
    detail: "Live and school-linked sessions for families navigating modern childhood.",
  },
  {
    title: "Guides",
    animation: "/lottie/support system.json",
    detail: "Practical toolkits for recurring family challenges.",
  },
];

function ParentResourceCard({ resource }: { resource: ParentResource }) {
  return (
    <article className="dark-glass rounded-[1.75rem] p-6">
      <LottieIcon
        src={resource.animation}
        ariaLabel={`${resource.title} animation`}
        className="h-20 w-20 rounded-[1.6rem] border border-white/20 bg-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:h-24 sm:w-24"
        placeholderClassName="bg-white/10"
      />
      <h3 className="mt-7 font-display text-2xl font-black">{resource.title}</h3>
      <p className="mt-3 leading-7 text-slate-200">{resource.detail}</p>
      <Link
        href="/#contact"
        className="touch-target mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-ink"
      >
        Request access
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

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
            {resources.map((resource) => (
              <StaggerItem key={resource.title}>
                <ParentResourceCard resource={resource} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
