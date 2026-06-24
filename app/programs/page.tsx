import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { StatsAndPrograms } from "@/components/sections/StatsAndPrograms";

export const metadata: Metadata = {
  title: "Programs | EXPRESS IT",
  description:
    "Discover EXPRESS IT programs for kids, teenagers, parents, and schools, built around practical emotional skills and confidence.",
};

export default function ProgramsPage() {
  return (
    <PageShell>
      <StatsAndPrograms />
    </PageShell>
  );
}
