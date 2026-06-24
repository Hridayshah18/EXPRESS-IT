"use client";

import { X } from "lucide-react";
import type { Game } from "@/lib/content";

export function GameModal({
  game,
  open,
  onClose,
}: {
  game: Game;
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-md">
      <div className="dark-glass max-w-xl rounded-[2rem] p-6 text-white">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-normal text-emerald-200">
              Practice launcher
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">{game.title}</h2>
          </div>
          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-full bg-white/10"
            aria-label="Close practice launcher"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 leading-7 text-slate-200">
          This modal is prepared for future guided practice loading, save states, and session handoff.
          Today, each practice opens on its own internal Express It route.
        </p>
      </div>
    </div>
  );
}
