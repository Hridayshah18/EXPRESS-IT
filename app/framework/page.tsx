import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ExpressFramework } from "@/components/sections/ExpressFramework";

export const metadata: Metadata = {
  title: "Framework | EXPRESS IT",
  description:
    "Explore the five-stage EXPRESS IT growth framework for emotional awareness, communication, confidence, and real-world life skills.",
};

export default function FrameworkPage() {
  return (
    <PageShell>
      <ExpressFramework />
    </PageShell>
  );
}
