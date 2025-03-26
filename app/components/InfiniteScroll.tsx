"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

function arrayShuffler(arr: string[]): string[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function InfiniteScroll({
  items,
  initial,
  animate,
  className = "",
}: {
  items: string[];
  initial: string;
  animate: string;
  className: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden w-full relative whitespace-nowrap",
        className,
      )}
    >
      <motion.div
        className="flex gap-x-14"
        initial={{ x: initial }}
        animate={{ x: animate }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {arrayShuffler(items).map((item, index) => {
          return (
            <Image
              src={item}
              loading="lazy"
              alt=""
              width={80}
              height={80}
              key={index}
              className="object-cover"
            />
          );
        })}
      </motion.div>
    </div>
  );
}
