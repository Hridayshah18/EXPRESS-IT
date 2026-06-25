"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  compact?: boolean;
};

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Programs", href: "/programs" },
  { label: "Mind Gym", href: "/mind-gym" },
  { label: "Parent Hub", href: "/parent-hub" },
  { label: "Start Journey", href: "/programs" },
];

export function SiteNav({ compact = false }: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="mobile-motion-visible fixed left-4 right-4 top-4 z-40"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav
        aria-label="Primary navigation"
        className="glass-panel mx-auto flex min-h-[60px] max-w-7xl items-center justify-between rounded-full px-3 py-2 md:px-4"
      >
        <Link
          href="/"
          className="touch-target inline-flex items-center gap-3 rounded-full px-2 font-display font-black text-ink"
          aria-label="EXPRESS IT home"
        >
          {compact ? <ArrowLeft className="h-5 w-5" aria-hidden="true" /> : <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />}
          <span>EXPRESS IT</span>
        </Link>

        {!compact ? (
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="touch-target rounded-full px-4 py-3 text-sm font-bold text-slate-700 transition-colors duration-200 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}

        <Link
          href={compact ? "/mind-gym" : "/programs"}
          className="touch-target hidden items-center rounded-full bg-ink px-5 py-3 text-sm font-black text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
        >
          {compact ? "Explore Tools" : "Start Journey"}
        </Link>

        {!compact ? (
          <button
            type="button"
            className="touch-target relative z-50 inline-flex items-center justify-center rounded-full bg-white text-ink shadow-soft md:hidden"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        ) : null}
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="glass-panel relative z-50 mt-3 rounded-3xl p-3 shadow-2xl transition-all duration-200 ease-out md:hidden"
        >
          {mobileLinks.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={cn(
                "touch-target block rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-100",
                item.label === "Start Journey" && "mt-2 bg-ink text-white hover:bg-primary hover:text-white",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </motion.header>
  );
}
