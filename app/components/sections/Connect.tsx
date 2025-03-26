import { cn } from "@/lib/utils";
import TextComponent from "../TextComponent";
import { aldrich } from "@/app/fonts/aldrich-font";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ConnectSection() {
  return (
    <section id="contact" className="my-12 max-w-[65rem] mx-auto mb-20">
      <TextComponent className="text-3xl my-3 font-bold underline">
        Contact Me
      </TextComponent>
      <div
        className={cn(
          aldrich.className,
          "text-xl my-14 flex flex-col justify-center align-center",
        )}
      >
        <div className="dark:text-white mx-auto">
          Contact Me for collaboration, contribution, projects, hackathon or
          just say Hi!
        </div>
        <Link
          href={"mailto:vivekvaish634@gmaill.com"}
          className="mx-auto"
          target="_blank"
        >
          <TextComponent className="flex mt-4">
            Email Me <Mail className="ml-2" />
          </TextComponent>
        </Link>
      </div>
    </section>
  );
}
