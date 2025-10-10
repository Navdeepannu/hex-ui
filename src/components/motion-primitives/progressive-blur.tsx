"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressiveBlurProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right";
  blurIntensity?: number; // 0..1
}

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
  ...props
}: ProgressiveBlurProps) {
  const grad =
    direction === "left"
      ? "linear-gradient(to right, var(--bg, hsl(var(--background))) 0%, transparent 100%)"
      : "linear-gradient(to left, var(--bg, hsl(var(--background))) 0%, transparent 100%)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none", className)}
      style={
        {
          backgroundImage: grad,
          filter: `blur(${Math.max(0, Math.min(1, blurIntensity)) * 0.5}rem)`,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
