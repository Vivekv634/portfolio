import Image from "next/image";
import TextComponent from "../TextComponent";
import data from "@/app/data.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { aldrich } from "@/app/fonts/aldrich-font";

export default function SkillsSection() {
  return (
    <TooltipProvider>
      <section id="skill-section" className="my-12 max-w-[65rem] mx-auto">
        <TextComponent className="text-3xl my-5 font-bold underline">
          Skills & Tools
        </TextComponent>
        <div className="flex flex-col gap-7">
          <div className="flex flex-wrap flex-row gap-4 mx-7">
            <div className="w-full">
              <TextComponent className="text-lg font-semibold underline">
                Languages
              </TextComponent>
            </div>
            {data.skills.languages.map((src, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={src}
                      key={index}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-[.70rem]">
                    {src.split("/")[7]}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          <div className="flex flex-wrap flex-row gap-4 mx-7">
            <div className="w-full">
              <TextComponent className="text-lg font-semibold underline">
                Library & Frameworks
              </TextComponent>
            </div>
            {data.skills.lib_frame.map((src, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={src}
                      key={index}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-[.70rem]">
                    {src.split("/")[7]}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          <div className="flex flex-wrap flex-row gap-4 mx-7">
            <div className="w-full">
              <TextComponent className="text-lg font-semibold underline">
                Development Tools
              </TextComponent>
            </div>
            {data.skills.dev_tools.map((src, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={src}
                      key={index}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-[.70rem]">
                    {src.split("/")[7]}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          <div className="flex flex-wrap flex-row gap-4 mx-7">
            <div className="w-full">
              <TextComponent className="text-lg font-semibold underline">
                Other&apos;s
              </TextComponent>
            </div>
            {data.skills.others.map((src, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={src}
                      key={index}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-[.70rem]">
                    {src.split("/")[7]}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
          <div className="flex flex-col mx-7">
            <div className="w-full pb-3">
              <TextComponent className="text-lg font-semibold underline">
                Soft skills
              </TextComponent>
            </div>
            <ul className="list-image-[url(/logos/check.svg)] marker:bg-green list-outside ml-7">
              {data.skills.soft_skills.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      aldrich.className,
                      "text-md dark:text-white mt-2",
                    )}
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
