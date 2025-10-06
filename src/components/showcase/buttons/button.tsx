import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ButtonCta = () => {
  return (
    <Link
      href="#"
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-2",
        "text-xs font-medium sm:text-sm dark:bg-neutral-950 dark:text-neutral-200",
        "border border-black/10 text-black/80 dark:border-white/10",
        "shadow-[inset_0px_1px_2px_#ffffff50,0_4px_8px_#00000015]",
        "whitespace-nowrap",
      )}
    >
      <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-3/5 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-lg dark:blur-sm" />

      <span>Contact</span>
    </Link>
  );
};

export default ButtonCta;
