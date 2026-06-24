"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/MotionPrimitives";
import { ParentHubLottie, type ParentHubLottieKind } from "@/components/ParentHubLottie";

type ParentResource = {
  title: string;
  animation: ParentHubLottieKind;
  detail: string;
};

const resources: ParentResource[] = [
  {
    title: "Parenting Resources",
    animation: "book",
    detail: "Short guides for pressure, confidence, emotions, and screen habits.",
  },
  {
    title: "Communication Tips",
    animation: "speech",
    detail: "Conversation starters that lower defensiveness and raise clarity.",
  },
  {
    title: "Workshops",
    animation: "calendar",
    detail: "Live and school-linked sessions for families navigating modern childhood.",
  },
  {
    title: "Guides",
    animation: "path",
    detail: "Practical toolkits for recurring family challenges.",
  },
];

function ParentResourceCard({
  resource,
  index,
}: {
  resource: ParentResource;
  index: number;
}) {
  const [playSignal, setPlaySignal] = useState(0);

  const playAnimation = () => {
    setPlaySignal((value) => value + 1);
  };

  return (
    <article
      className="dark-glass rounded-[1.75rem] p-6"
      onFocusCapture={playAnimation}
      onMouseEnter={playAnimation}
      onPointerDown={playAnimation}
    >
      <ParentHubLottie
        kind={resource.animation}
        label={`${resource.title} animation`}
        playSignal={playSignal}
        delay={index * 180}
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
            {resources.map((resource, index) => (
              <StaggerItem key={resource.title}>
                <ParentResourceCard resource={resource} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
