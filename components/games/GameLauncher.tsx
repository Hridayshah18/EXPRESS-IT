import { ArrowUpRight } from "lucide-react";
import type { Game } from "@/lib/content";

export function GameLauncher({ game, label = "Open practice" }: { game: Game; label?: string }) {
  return (
    <a
      href={game.href}
      className="touch-target inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-ink shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
    >
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
