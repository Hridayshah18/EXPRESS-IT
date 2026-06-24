import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MindGym } from "@/components/sections/MindGym";

export const metadata: Metadata = {
  title: "Mind Gym | EXPRESS IT",
  description:
    "Use EXPRESS IT Mind Gym practice tools to build focus, self-awareness, emotional regulation, and calm decision-making.",
};

export default function MindGymPage() {
  return (
    <PageShell>
      <MindGym />
    </PageShell>
  );
}
