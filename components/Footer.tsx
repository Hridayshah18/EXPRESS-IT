import { Sparkles } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Programs", href: "/programs" },
  { label: "Mind Gym", href: "/mind-gym" },
  { label: "Parent Hub", href: "/parent-hub" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#080A1A] px-4 py-12 text-white">
      <div className="container-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3 font-display text-2xl font-black">
            <Sparkles className="h-6 w-6 text-emerald-300" aria-hidden="true" />
            EXPRESS IT
          </div>
          <p className="mt-2 font-bold text-slate-300">Learn. Express. Grow.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="touch-target rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
