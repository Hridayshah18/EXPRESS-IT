import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/sections/Contact";
import { ExpressFramework } from "@/components/sections/ExpressFramework";
import { GenerationalChallenges } from "@/components/sections/GenerationalChallenges";
import { Hero } from "@/components/sections/Hero";
import { HomePathways } from "@/components/sections/HomePathways";
import { Roadmap } from "@/components/sections/Roadmap";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <GenerationalChallenges />
      <WhoWeHelp />
      <ExpressFramework />
      <HomePathways />
      <SuccessStories />
      <Roadmap />
      <Contact />
    </PageShell>
  );
}
