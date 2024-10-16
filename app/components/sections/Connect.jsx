import TextComponent from "@/app/components/TextComponent";
import { cn } from "@/lib/utils";
import { aldrich } from "@/app/fonts/aldrich-font";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ConnectSection() {
  return (
    <section id="connect-section" className="my-12 max-w-[65rem] mx-auto">
      <TextComponent className="text-3xl my-5 font-bold underline">
        Contact Me
      </TextComponent>
      <div
        className={cn(
          aldrich.className,
          "text-xl flex flex-col justify-center text-center align-center",
        )}
      >
        <div className="mb-3">
          Contact Me for collaboration, contribution, projects, hackathon or
          just say Hi!
        </div>
        <Button className="w-fit mx-auto py-3 px-6 text-md">
          Email Me <Mail className="ml-2" />
        </Button>
      </div>
    </section>
  );
}