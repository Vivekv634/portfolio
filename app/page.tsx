import { TooltipProvider } from "@/components/ui/tooltip";
import TooltipHelper from "./utils/TooltipHelper";
import HomeSection from "./components/sections/Home";
import AboutSection from "./components/sections/About";
import MileStoneSection from "./components/sections/Milestones";
import ConnectSection from "./components/sections/Connect";
import {
  BicepsFlexed,
  Briefcase,
  HomeIcon,
  MessageSquare,
  Sparkles,
  UserRound,
} from "lucide-react";
import SkillsSection from "./components/sections/Skills";
import ProjectsSection from "./components/sections/Projects";

export default function Home() {
  return (
    <TooltipProvider>
      <main className="scroll-auto mx-1 mt-5 mb-20 md:container md:mx-auto selection:bg-fuchsia-300 selection:text-zinc-900 transition-all relative">
        <div className="border-2 border-black dark:border-zinc-800 rounded-2xl p-2 m-auto md:max-w-[75rem]">
          <HomeSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-r-zinc-700" />
          <AboutSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-r-zinc-700" />
          <SkillsSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-r-zinc-700" />
          <MileStoneSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-r-zinc-700" />
          <ProjectsSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-r-zinc-700" />
          <ConnectSection />
        </div>
        <section className="fixed bottom-0 flex justify-center w-full left-0 z-10">
          <div className="flex gap-7 px-2 p-2 border-2 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 rounded-lg mb-4 shadow-xl dark:shadow-neutral-800">
            <TooltipHelper Icon={HomeIcon} id="#home" label="Home" />
            <TooltipHelper Icon={UserRound} id="#about" label="About me" />
            <TooltipHelper
              Icon={BicepsFlexed}
              id="#skills"
              label="Skill & Tools"
            />
            <TooltipHelper
              Icon={Sparkles}
              id="#milestones"
              label="My Milestones"
            />
            <TooltipHelper Icon={Briefcase} id="#projects" label="Projects" />
            <TooltipHelper
              Icon={MessageSquare}
              id="#contact"
              label="Contact Me"
            />
          </div>
        </section>
      </main>
    </TooltipProvider>
  );
}
