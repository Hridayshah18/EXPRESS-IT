import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { GameLayout } from "@/components/games/GameLayout";
import { games } from "@/lib/content";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) {
    return {
      title: "Practice not found | EXPRESS IT",
    };
  }

  return {
    title: `${game.title} | EXPRESS IT Mind Gym`,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = games.find((item) => item.slug === slug);

  if (!game) notFound();

  return (
    <>
      <SiteNav compact />
      <GameLayout game={game} />
    </>
  );
}
