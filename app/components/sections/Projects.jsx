import { Button } from "@/components/ui/button";
import DetailCard from "../DetailCard";
import TextComponent from "../TextComponent";
import data from "@/app/data.json";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section id="project-section" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        Projects
      </TextComponent>
      <div className="flex flex-row flex-wrap gap-7 justify-center md:mx-7 md:justify-start">
        {data.projects?.map((project, index) => {
          return <DetailCard work={project} w={450} h={450} key={index} />;
        })}
      </div>
      <div className="flex justify-center md:justify-end my-3 md:mx-20">
        <Link href="https://www.github.com/Vivekv634" target="_blank">
          <Button className="bg-fuchsia-500 underline hover:bg-fuchsia-400">
            see all projects
          </Button>
        </Link>
      </div>
    </section>
  );
}
