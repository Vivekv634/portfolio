"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { aldrich } from "../fonts/aldrich-font";
import IconComponent from "./IconComponent";
import { Github, Link as LinkTag, Linkedin } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function DetailCard({ work, w, h }) {
  return (
    <>
      <TooltipProvider>
        <Dialog>
          <DialogTrigger>
            <Card className={cn("w-fit", aldrich.className)}>
              <CardContent className="rounded-lg shadow-2xl cursor-pointer hover:scale-[1.01] transition overflow-hidden w-fit p-0">
                <Image
                  src={work?.src}
                  alt={work?.title}
                  width={w}
                  height={h}
                  className="border-b-2"
                />
                <CardHeader>
                  <CardTitle>
                    {work?.title}{" "}
                    {work?.dev && (
                      <span className="uppercase p-1 border border-fuchsia-400 bg-fuchsia-300 rounded-lg w-fit">
                        under dev
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className={cn(aldrich.className)}>
            <DialogHeader>
              <DialogTitle>{work?.title}</DialogTitle>
              <DialogDescription className="hidden"></DialogDescription>
            </DialogHeader>
            <div>
              <Image
                className="rounded-lg border-2"
                src={work?.src}
                alt={work?.title}
                width={w}
                height={h}
              />
              <p className="p-2 text-justify">{work?.description}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              {work?.githubLink && (
                <Tooltip className={cn(!work?.githubLink && "hidden")}>
                  <TooltipTrigger>
                    <Link href={work.githubLink} target="_blank">
                      <IconComponent className="p-3 hover:bg-gray-900 hover:text-white">
                        <Github />
                      </IconComponent>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-sm">
                    Github repo
                  </TooltipContent>
                </Tooltip>
              )}
              {work?.websiteLink && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={work.websiteLink} target="_blank">
                      <IconComponent className="p-3 hover:bg-pink-400 hover:text-white">
                        <LinkTag />
                      </IconComponent>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-sm">
                    Website link
                  </TooltipContent>
                </Tooltip>
              )}
              {work?.linkedInLink && (
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={work.linkedInLink} target="_blank">
                      <IconComponent className="p-3 hover:bg-blue-500 hover:text-white">
                        <Linkedin />
                      </IconComponent>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="first-letter:capitalize font-semibold text-sm">
                    LinkedIn link
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    </>
  );
}
