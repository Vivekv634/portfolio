import { cn } from "@/lib/utils";
import TextComponent from "../TextComponent";
import { aldrich } from "@/app/fonts/aldrich-font";

export default function AboutSection() {
  return (
    <section id="about" className="my-12 max-w-[65rem] m-auto">
      <TextComponent className="text-3xl  my-5 font-bold underline">
        About Me
      </TextComponent>
      <p className={cn(aldrich.className, "dark:text-zinc-300 text-lg mx-7")}>
        I&apos;m a Full-Stack developer passionate about building innovative web
        application. I specialize in creating scalable, user-friendly solutions
        that combine both front-end and back-end technologies. I love solving
        complex problems and continuously learning, with the goal of delivering
        impactful, high-quality digital experience.
      </p>
    </section>
  );
}
