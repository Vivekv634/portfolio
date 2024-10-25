import Image from "next/image";
import { aldrich } from "../fonts/aldrich-font";

export default function ImageComponent({ className, w, h, src, alt = "" }) {
  return (
    <div
      className={`bg-white text-black dark:bg-neutral-900 dark:border-neutral-900 w-fit h-fit rounded-lg relative after:content-[''] after:rounded-lg after:absolute after:w-width-inherit after:h-height-inherit after:bg-neutral-900 after:border-neutral-800 after:top-2 after:left-1 z-10 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out ${aldrich.className} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="overflow-hidden rounded-lg border-1 border-transparent dark:border-transparent"
      />
    </div>
  );
}
