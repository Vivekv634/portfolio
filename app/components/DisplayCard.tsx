"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { aldrich } from "../fonts/aldrich-font";
import { cn } from "@/lib/utils";
import { DisplayTypes } from "../types/display.types";

export default function DisplayCard({
  display,
  type,
}: {
  display: DisplayTypes;
  type: "projects" | "milestones";
}) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "relative shadow-2xl dark:shadow-neutral-800 rounded-2xl",
        aldrich.className,
      )}
      onClick={() => router.push(`/${type}/${display.id}`)}
    >
      <Image
        width={500}
        height={500}
        src={display.src}
        alt={display.title}
        className="p-0 md:h-72 h-full w-full rounded-2xl object-cover m-0"
      />
      <div className="absolute text-center text-black dark:text-white text-2xl font-extrabold cursor-pointer bg-white dark:bg-neutral-950 opacity-0 hover:opacity-60 duration-300 z-10 inset-0 flex items-center justify-center">
        {display.title}
      </div>
    </div>
  );
}
