import AboutSection from "@/app/components/sections/About";
import HomeSection from "@/app/components/sections/Home";
import MileStoneSection from "@/app/components/sections/MileStone";
import SkillsSection from "./components/sections/Skills";
import ProjectSection from "./components/sections/Projects";
import ConnectSection from "./components/sections/Connect";
import {
  BicepsFlexed,
  Briefcase,
  HomeIcon,
  MessageSquare,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { aldrich } from "./fonts/aldrich-font";
import Link from "next/link";

export default function Home() {
  return (
    <TooltipProvider>
      <main className="scroll-auto mx-1 mt-5 mb-20 md:container md:mx-auto selection:bg-fuchsia-300 selection:text-zinc-900 transition-all relative">
        <div className=" border-2 border-black dark:border-zinc-800 rounded-2xl p-2 m-auto md:max-w-[75rem]">
          <HomeSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-zinc-700" />
          <AboutSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-zinc-700" />
          <SkillsSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-zinc-700" />
          <MileStoneSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-zinc-700" />
          <ProjectSection />
          <hr className="max-w-[65rem] m-auto my-5 dark:border-zinc-700" />
          <ConnectSection />
        </div>
        <section className="fixed bottom-0 flex justify-center w-full left-0">
          <div className="flex gap-7 px-2 p-2 border-2 bg-neutral-100 rounded-lg mb-4 shadow-lg">
            <Tooltip>
              <TooltipTrigger>
                <Link href="#home-section">
                  <HomeIcon className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                Home
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#about-section">
                  <UserRound className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                About me
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#skill-section">
                  <BicepsFlexed className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                Skills & Tools
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#milestone-section">
                  <Sparkles className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                My Milestones
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#project-section">
                  <Briefcase className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                Projects
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href="#connect-section">
                  <MessageSquare className="m-1 hover:scale-[1.20] duration-150 transition-all" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className={cn(aldrich.className, "mb-2")}>
                Contact Me
              </TooltipContent>
            </Tooltip>
          </div>
        </section>
      </main>
    </TooltipProvider>
  );
}
