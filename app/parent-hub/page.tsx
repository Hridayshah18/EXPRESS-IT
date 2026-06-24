import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ParentHub } from "@/components/sections/ParentHub";

export const metadata: Metadata = {
  title: "Parent Hub | EXPRESS IT",
  description:
    "Find EXPRESS IT parent resources, communication tips, workshops, and guides for calmer family conversations.",
};

export default function ParentHubPage() {
  return (
    <PageShell>
      <ParentHub />
    </PageShell>
  );
}
