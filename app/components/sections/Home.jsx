"use client";
import { Github, Instagram, Linkedin, Moon, Sun, ThumbsUp } from "lucide-react";
import IconComponent from "@/app/components/IconComponent";
import ImageComponent from "@/app/components/ImageComponent";
import TextComponent from "@/app/components/TextComponent";
import Typewriter from "@/app/components/Typewriter";
import Link from "next/link";
import { useTheme } from "next-themes";
import data from "@/app/data.json";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function HomeSection() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    setTheme(systemTheme);
  }, [mount, setTheme, systemTheme]);

  if (!mount) return null;

  return (
    <section
      id="home-section"
      className="my-12 md:flex md:items-center md:justify-around"
    >
      <ImageComponent
        src="/profile_image.jpg"
        className="m-auto mb-5"
        w={300}
        h={300}
      />
      <div className="px-2 md:m-auto md:w-1/2">
        <TextComponent className="mb-5 font-bold text-[2.5rem] w-full">
          Vivek Vaish
        </TextComponent>
        <TextComponent className="inline-block text-xl mb-5 w-full">
          <Typewriter
            texts={data.texts}
            typingSpeed={80}
            deleteSpeed={40}
            delay={800}
          />
        </TextComponent>
        <TextComponent className="w-full text-xl mb-5">
          Building innovative solutions for real-world challenges.
        </TextComponent>
        <div className="flex gap-4">
          <IconComponent className="p-3 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white">
            <Link href="https://www.linkedin.com/in/vivekv634" target="_blank">
              <Linkedin />
            </Link>
          </IconComponent>
          <IconComponent className="p-3 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
            <Link href="https://github.com/Vivekv634" target="_blank">
              <Github />
            </Link>
          </IconComponent>
          <IconComponent className="p-3 dark:hover:bg-pink-500 hover:bg-pink-500 hover:text-white">
            <Link href="https://www.instagram.com/vertexbit/" target="_blank">
              <Instagram />
            </Link>
          </IconComponent>
          <IconComponent
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className={cn(
              "p-3",
              theme === "dark"
                ? "dark:hover:bg-neutral-100 dark:hover:text-black"
                : "hover:bg-neutral-800 hover:text-white",
            )}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </IconComponent>
        </div>
      </div>
    </section>
  );
}
