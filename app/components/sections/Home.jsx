import { Github, Instagram, Linkedin } from "lucide-react";
import IconComponent from "@/app/components/IconComponent";
import ImageComponent from "@/app/components/ImageComponent";
import TextComponent from "@/app/components/TextComponent";
import Typewriter from "@/app/components/Typewriter";
import Link from "next/link";
import Image from "next/image";

export default function HomeSection() {
  const texts = [
    "I'm a Full-Stack Developer.",
    "I love building web apps.",
    "Let's create something amazing!",
  ];
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
      <div className="px-2 md:m-auto">
        <TextComponent className="mb-5 font-bold text-[2.5rem] w-full">
          Vivek Vaish
        </TextComponent>
        <TextComponent className="inline-block text-xl mb-5 w-full">
          <Typewriter
            texts={texts}
            typingSpeed={80}
            deleteSpeed={40}
            delay={800}
          />{" "}
        </TextComponent>
        <TextComponent className="w-full text-xl mb-5">
          Building innovative solutions for real-world challenges.
        </TextComponent>
        <div className="flex gap-4">
          <IconComponent className="p-3 hover:bg-blue-500 hover:text-white">
            <Link href="https://www.linkedin.com/in/vivekv634" target="_blank">
              <Linkedin />
            </Link>
          </IconComponent>
          <IconComponent className="p-3 hover:bg-zinc-300 hover:text-white">
            <Link href="https://leetcode.com/u/vaishvivek634/" target="_blank">
              <Image src="/logos/leetcode.png" alt="" width={25} height={25} />
            </Link>
          </IconComponent>
          <IconComponent className="p-3 hover:bg-gray-900 hover:text-white">
            <Link href="https://github.com/Vivekv634" target="_blank">
              <Github />
            </Link>
          </IconComponent>
          <IconComponent className="p-3 hover:bg-pink-500 hover:text-white">
            <Link href="https://www.instagram.com/vertexbit/" target="_blank">
              <Instagram />
            </Link>
          </IconComponent>
        </div>
      </div>
    </section>
  );
}
