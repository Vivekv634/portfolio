"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { aldrich } from "@/app/fonts/aldrich-font";
import { DisplayTypes } from "@/app/types/display.types";
import { cn } from "@/lib/utils";
import data from "@/public/data.json";
import { ArrowLeftCircleIcon, Github, Link2, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import IconComponent from "@/app/components/IconComponent";

export default function DisplayComponent({
  id,
  type,
}: {
  id: number;
  type: "projects" | "milestones";
}) {
  const [display, setDisplay] = useState<DisplayTypes | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (type == "milestones") {
      data.milestones.map((milestone: DisplayTypes) => {
        if (milestone.id == id) setDisplay(milestone);
      });
    } else {
      data.projects.map((project: DisplayTypes) => {
        if (project.id == id) setDisplay(project);
      });
    }
  }, [id, type]);

  if (!display) return null;

  return (
    <section className={cn(aldrich.className, "mb-32")}>
      <div
        className="flex gap-2 mt-3 mb-6 hover:underline hover:transform text-lg text-center items-center cursor-pointer w-fit"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon /> <span>Back</span>
      </div>
      <hr className="w-full p-3" />
      <Image
        className="rounded-md h-4/5 object-cover mb-4 shadow-2xl dark:shadow-neutral-600"
        priority={true}
        src={display.src}
        alt={display.title}
        width={1000}
        height={1000}
      />
      <div className="flex flex-wrap justify-end w-full gap-4 my-3">
        {display.linkedInLink && (
          <Link href={display.linkedInLink} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white">
              <Linkedin />
            </IconComponent>
          </Link>
        )}
        {display.githubLink && (
          <Link href={display.githubLink} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
              <Github />
            </IconComponent>
          </Link>
        )}
        {display.websiteLink && (
          <Link href={display.websiteLink} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-pink-500 hover:bg-pink-500 hover:text-white">
              <Link2 />
            </IconComponent>
          </Link>
        )}
      </div>
      <MarkdownPreview
        source={display.description}
        style={{ background: "inherit", color: "inherit" }}
      />
    </section>
  );
}
