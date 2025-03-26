import { ReactNode } from "react";
import { aldrich } from "../fonts/aldrich-font";
import { cn } from "@/lib/utils";

interface TextComponentProps {
  children: ReactNode;
  className?: string;
}

export default function TextComponent({
  children,
  className = "",
}: TextComponentProps) {
  return (
    <div
      className={cn(
        "bg-white text-black dark:text-neutral-300 dark:bg-neutral-900 border-neutral-900 border-2 rounded-lg w-fit h-fit relative after:content-[''] after:rounded-lg after:absolute after:w-full after:h-full after:bg-neutral-800 after:top-2 after:left-2 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out p-2 px-4",
        aldrich.className,
        className,
      )}
    >
      {children}
    </div>
  );
}
