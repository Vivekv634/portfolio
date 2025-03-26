import TextComponent from "../TextComponent";
import data from "@/public/data.json";
import DisplayCard from "../DisplayCard";
import { DisplayTypes } from "@/app/types/display.types";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="projects" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        Projects
      </TextComponent>
      <div className="md:grid md:grid-cols-2 md:gap-4 flex gap-7 flex-wrap">
        {data.projects.map((project: DisplayTypes, index: number) => {
          return (
            <DisplayCard display={project} type={"projects"} key={index} />
          );
        })}
      </div>
      <Link href={"https://github.com/Vivekv634"} target="_blank">
        <TextComponent className="my-10 text-md mx-auto font-bold hover:bg-rose-500 dark:hover:bg-rose-500 transition-colors duration-150 underline">
          See more projects
        </TextComponent>
      </Link>
    </section>
  );
}
