"use client";
import TypeWriter from "@/app/utils/TypeWriter";
import { cn } from "@/lib/utils";
import data from "@/public/data.json";
import { Github, Instagram, Linkedin, Moon, Sun, ThumbsUp } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconComponent from "../IconComponent";
import ImageComponent from "../ImageComponent";
import TextComponent from "../TextComponent";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase";
import { formatSiUnit } from "format-si-unit";

export default function HomeSection() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [mount, setMount] = useState<boolean>(false);

  async function handleLike() {
    if (isLiked) return;

    const docRef = doc(db, "portfolio-likes", "likes-count");
    await updateDoc(docRef, { count: increment(1) });
    setLikes((prev: number) => prev + 1);
    setIsLiked(true);
    localStorage.setItem("vertexbit-portfolio-likes", "true");
  }

  useEffect(() => {
    async function fetchLikes() {
      const checkLiked = localStorage.getItem("vertexbit-portfolio-likes");
      if (checkLiked == "true") setIsLiked(true);

      const docRef = doc(db, "portfolio-likes", "likes-count");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLikes(docSnap.data().count);
      }
    }
    fetchLikes();
  }, []);

  useEffect(() => {
    setMount(true);
    if (systemTheme) setTheme(systemTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  if (!mount) return null;

  return (
    <section
      id="#home"
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
          <TypeWriter
            texts={data.texts}
            typingSpeed={80}
            deleteSpeed={40}
            delay={800}
          />
        </TextComponent>
        <TextComponent className="w-full text-xl mb-5">
          Building innovative solutions for real-world challenges.
        </TextComponent>
        <div className="flex flex-wrap gap-4">
          <Link href={"https://www.linkedin.com/in/vivekv634"} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white">
              <Linkedin />
            </IconComponent>
          </Link>
          <Link href={"https://github.com/Vivekv634"} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-gray-900 hover:bg-gray-900 hover:text-white">
              <Github />
            </IconComponent>
          </Link>
          <Link href={"https://www.instagram.com/vertexbit"} target="_blank">
            <IconComponent className="p-3 dark:hover:bg-pink-500 hover:bg-pink-500 hover:text-white">
              <Instagram />
            </IconComponent>
          </Link>
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
          <IconComponent
            onClick={handleLike}
            className={cn(
              "flex gap-2 h-auto px-3",
              isLiked &&
                "transition duration-300 bg-rose-500 text-neutral-800 dark:bg-rose-500 dark:text-neutral-800",
            )}
          >
            <ThumbsUp /> <span className="text-lg">{formatSiUnit(likes)}</span>
          </IconComponent>
        </div>
      </div>
    </section>
  );
}
