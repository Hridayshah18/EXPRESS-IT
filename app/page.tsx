import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import { BrainLab } from "@/components/sections/BrainLab";
import { Contact } from "@/components/sections/Contact";
import { ExpressFramework } from "@/components/sections/ExpressFramework";
import { GenerationalChallenges } from "@/components/sections/GenerationalChallenges";
import { Hero } from "@/components/sections/Hero";
import { MindGym } from "@/components/sections/MindGym";
import { ParentHub } from "@/components/sections/ParentHub";
import { Roadmap } from "@/components/sections/Roadmap";
import { StatsAndPrograms } from "@/components/sections/StatsAndPrograms";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <GenerationalChallenges />
        <WhoWeHelp />
        <ExpressFramework />
        <StatsAndPrograms />
        <MindGym />
        <BrainLab />
        <SuccessStories />
        <ParentHub />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
