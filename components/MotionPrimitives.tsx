"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("mobile-motion-visible", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.86, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("mobile-motion-visible", className)}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("mobile-motion-visible", className)}
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y: 24, scale: 0.985 },
        visible: reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({
  children,
  className,
  accent = "#4F46E5",
}: {
  children: ReactNode;
  className?: string;
  accent?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("group relative transform-gpu", className)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              rotateX: 1.5,
              rotateY: -1.5,
            }
      }
      transition={{ type: "spring", stiffness: 170, damping: 26, mass: 0.8 }}
      style={{ "--accent": accent } as CSSProperties}
    >
      <div className="absolute inset-0 rounded-[inherit] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40 bg-[var(--accent)]" />
      <div className="relative h-full rounded-[inherit]">{children}</div>
    </motion.div>
  );
}
