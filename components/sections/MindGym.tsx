"use client";

import { Trophy, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GameCard } from "@/components/games/GameCard";
import { GameLauncher } from "@/components/games/GameLauncher";
import { games } from "@/lib/content";

export function MindGym() {
  const featured = games[0];

  return (
    <section
      id="mind-gym"
      className="section-shell bg-[#080A1A] text-white"
      aria-labelledby="mind-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(124,58,237,0.36),transparent_30rem),radial-gradient(circle_at_90%_58%,rgba(244,63,94,0.28),transparent_34rem)]" />
      <div className="noise opacity-20" />
      <div className="container-shell relative z-10">
        <SectionHeading
          eyebrow="Mind Gym"
          title={<span id="mind-title">Practice emotional skills in small moments.</span>}
          copy="Short interactive challenges help students build focus, self-awareness, and calm decision-making without making the platform feel like entertainment."
          tone="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className={`scanlines relative min-h-[470px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${featured.bg} p-7 shadow-2xl`}>
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-black">
                  Featured Practice
                </span>
                <span className="rounded-full bg-black/20 px-4 py-2 text-sm font-black">
                  Coming Soon
                </span>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-normal text-white/75">
                  Continue practicing
                </p>
                <h3 className="mt-3 font-display text-5xl font-black md:text-7xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-white/85">
                  {featured.description}
                </p>
                <div className="mt-8">
                  <GameLauncher game={featured} />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="dark-glass rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <Trophy className="h-7 w-7 text-amber-200" aria-hidden="true" />
                <h3 className="font-display text-2xl font-black">Achievements</h3>
              </div>
              <div className="mt-5 grid gap-3">
                {["Focus streak", "First expression", "Puzzle path"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4 font-bold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </article>
            <article className="dark-glass rounded-[2rem] p-6">
              <div className="flex items-center gap-3">
                <Zap className="h-7 w-7 text-emerald-200" aria-hidden="true" />
                <h3 className="font-display text-2xl font-black">Coming Soon</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-200">
                Guided calm sessions, family reflection prompts, school cohorts, and progress profiles.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
