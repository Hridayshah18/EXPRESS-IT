import { Sparkles } from "lucide-react";

const links = ["Programs", "Games", "Resources", "Contact", "Social"];

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
            <a
              key={link}
              href={link === "Contact" ? "#contact" : `#${link.toLowerCase().replace(" ", "-")}`}
              className="touch-target rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-slate-200 hover:bg-white hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
