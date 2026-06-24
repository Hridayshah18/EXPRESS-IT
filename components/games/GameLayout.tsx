import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import { games, type Game } from "@/lib/content";
import { GameLauncher } from "@/components/games/GameLauncher";

export function GameLayout({ game }: { game: Game }) {
  const related = games.filter((item) => item.slug !== game.slug).slice(0, 3);
  const Icon = game.icon;

  return (
    <main id="main-content" className="min-h-screen bg-[#080A1A] px-4 pb-16 pt-28 text-white">
      <div className="container-shell">
        <Link
          href="/#mind-gym"
          className="touch-target mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-xl transition-colors duration-200 hover:bg-white hover:text-ink"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Back to Express It
        </Link>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className={`relative min-h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${game.bg} p-6`}>
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-normal text-white/75">
                    Express It game area
                  </p>
                  <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
                    {game.title}
                  </h1>
                </div>
                <div className="rounded-3xl bg-white/15 p-5 backdrop-blur-xl">
                  <Icon className="h-10 w-10" aria-hidden="true" />
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/20 bg-black/20 p-6 backdrop-blur-xl">
                <p className="text-lg font-bold">Game placeholder</p>
                <p className="mt-2 max-w-2xl leading-7 text-white/80">
                  The routing, layout, leaderboard slot, achievements, and return path are ready.
                  Gameplay will plug into this area without moving users outside Express It.
                </p>
              </div>
            </div>
          </div>

          <aside className="dark-glass rounded-[2rem] p-6">
            <h2 className="font-display text-3xl font-black">Mission Brief</h2>
            <p className="mt-4 leading-7 text-slate-200">{game.description}</p>
            <div className="mt-6 rounded-3xl bg-white/10 p-5">
              <p className="font-bold">Achievements</p>
              <div className="mt-4 grid gap-3">
                {["First run", "Focus streak", "Calm comeback"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
                    <Trophy className="h-5 w-5 text-amber-200" aria-hidden="true" />
                    <span className="font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-3xl bg-white/10 p-5">
              <p className="font-bold">Leaderboard Placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Future school, family, and personal-best boards will live here.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8 rounded-[2rem] bg-white p-6 text-ink">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-normal text-primary">
                Related challenges
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">Continue exploring</h2>
            </div>
            <Link
              href="/#framework"
              className="touch-target inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 font-black text-white"
            >
              Continue Exploring
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <div key={item.slug} className="rounded-3xl bg-slate-100 p-5">
                <p className="font-display text-xl font-black">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4">
                  <GameLauncher game={item} label="Open" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
