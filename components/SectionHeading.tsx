import type { ReactNode } from "react";
import { Reveal } from "@/components/MotionPrimitives";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "relative z-10 max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "dark" ? "text-white" : "text-ink",
      )}
    >
      <p
        className={cn(
          "mb-4 font-mono text-xs font-bold uppercase tracking-normal",
          tone === "dark" ? "text-emerald-200" : "text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black leading-[1.02] md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-8 md:text-lg",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-slate-200" : "text-slate-600",
          )}
        >
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
