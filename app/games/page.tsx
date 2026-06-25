"use client";

import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { GameCard } from "@/components/games/GameCard";
import { games } from "@/lib/content";

export default function GamesIndexPage() {
  return (
    <>
      <SiteNav compact />
      <main id="main-content" className="min-h-dvh bg-[#080A1A] px-4 pb-16 pt-24 text-white md:min-h-screen md:pt-28">
        <div className="container-shell">
          <p className="font-mono text-xs font-bold uppercase tracking-normal text-emerald-200">
            Express It practice tools
          </p>
          <h1 className="mt-3 font-display text-4xl font-black sm:text-5xl md:text-7xl">
            Mind Gym Library
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
            Internal routes are prepared for future guided practice. Preview how each tool will support emotional skills and reflection.
          </p>
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
          <Link
            href="/mind-gym"
            className="touch-target mt-10 inline-flex items-center rounded-full bg-white px-5 py-3 font-black text-ink"
          >
            Back to Mind Gym
          </Link>
        </div>
      </main>
    </>
  );
}
