"use client";

import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/MotionPrimitives";

const stories = [
  {
    title: "Student Stories",
    quote: "I finally had words for what I was feeling before exams.",
    person: "Class 9 student",
    color: "#4F46E5",
  },
  {
    title: "Parent Stories",
    quote: "Our conversations became calmer because we had a shared language.",
    person: "Parent of a teenager",
    color: "#F59E0B",
  },
  {
    title: "School Stories",
    quote: "The workshops felt engaging, structured, and useful beyond one session.",
    person: "School coordinator",
    color: "#22C55E",
  },
];

export function SuccessStories() {
  return (
    <section className="section-shell bg-white" aria-labelledby="stories-title">
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Success stories"
          title={<span id="stories-title">Tiny shifts. Big confidence.</span>}
          copy="The testimonials are intentionally concise, visual, and easy to scan, with clear placeholders for future real stories."
        />

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <StaggerItem key={story.title}>
              <article className="glass-panel relative min-h-[340px] overflow-hidden rounded-[2rem] p-7">
                <div
                  className="absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl"
                  style={{ backgroundColor: `${story.color}28` }}
                />
                <div className="relative z-10">
                  <div className="mb-7 h-20 w-20 rounded-full border border-slate-200 bg-gradient-to-br from-slate-100 to-white" />
                  <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-black text-ink">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-700">"{story.quote}"</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="font-bold text-slate-500">{story.person}</span>
                    <span className="flex text-amber-500" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
