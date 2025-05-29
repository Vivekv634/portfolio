import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { aldrich } from "../fonts/aldrich-font";

export default function TooltipHelper({
  id,
  label,
  Icon,
}: {
  id: string;
  label: string;
  Icon: LucideIcon;
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href={id}>
          <Icon className="m-1 hover:scale-[1.20] hover:text-rose-500 duration-150 transition-all" />
        </Link>
      </TooltipTrigger>
      <TooltipContent className={cn(aldrich.className, "mb-2 hidden lg:block")}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
