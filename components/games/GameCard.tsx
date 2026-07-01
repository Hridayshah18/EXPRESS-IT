"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Game } from "@/lib/content";
import { GameLauncher } from "@/components/games/GameLauncher";
import { LottieIcon } from "@/components/ui/LottieIcon";

const gameAnimations: Record<string, string> = {
  patternmind: "/lottie/Memory Game.json",
  bollyverse: "/lottie/Movie Cut.json",
  "chain-reaction": "/lottie/BlockChain.json",
  "rainbow-flow": "/lottie/Loading Lottie Animation.json",
};

export function GameCard({ game }: { game: Game }) {
  const Icon = game.icon;
  const reduceMotion = useReducedMotion();
  const animationSrc = gameAnimations[game.slug];

  return (
    <motion.article
      className={`scanlines group relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${game.bg} p-5 text-white shadow-2xl md:min-h-[360px] md:rounded-[2rem]`}
      whileHover={reduceMotion ? undefined : { y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute bottom-10 left-8 h-24 w-24 rounded-full border border-white/20" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-2xl border border-white/25 bg-white/15 p-4 backdrop-blur-xl">
            {animationSrc ? (
              <LottieIcon
                src={animationSrc}
                ariaLabel={`${game.title} animation`}
                className="h-14 w-14 rounded-xl md:h-16 md:w-16"
                placeholderClassName="bg-white/20"
              />
            ) : (
              <Icon className="h-8 w-8" aria-hidden="true" />
            )}
          </div>
          <span className="rounded-full bg-black/20 px-3 py-2 text-xs font-black">
            {game.difficulty}
          </span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-black sm:text-3xl">{game.title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/85">{game.description}</p>
          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs font-bold text-white/75">
              <span>Progress</span>
              <span>{game.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-black/20">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${game.progress}%` }}
              />
            </div>
          </div>
          <div className="mt-6">
            <GameLauncher game={game} label="Open practice" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
