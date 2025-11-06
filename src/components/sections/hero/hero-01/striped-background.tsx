"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StripedBackgroundProps {
  className?: string;
  stripeWidth?: number;
  fadeDirection?: "bottom" | "top";
  position?: "left" | "right" | "both";
}

export function StripedBackground({
  className,
  stripeWidth = 80,
  fadeDirection = "bottom",
  position = "both",
}: StripedBackgroundProps) {
  const [stripeCount, setStripeCount] = useState(5);

  useEffect(() => {
    const updateStripeCount = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        // 2xl and above
        setStripeCount(8);
      } else if (width >= 1280) {
        // xl
        setStripeCount(7);
      } else if (width >= 1024) {
        // lg
        setStripeCount(6);
      } else if (width >= 768) {
        // md
        setStripeCount(4);
      } else if (width >= 640) {
        // sm
        setStripeCount(3);
      } else {
        // xs
        setStripeCount(2);
      }
    };

    updateStripeCount();
    window.addEventListener("resize", updateStripeCount);
    return () => window.removeEventListener("resize", updateStripeCount);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white dark:bg-black",
        className
      )}
    >
      {/* Top gradient blur to prevent visibility behind navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/95 to-transparent backdrop-blur-xl dark:from-black dark:via-black/95" />

      {/* Fade mask for bottom */}
      <div
        className={cn(
          "absolute inset-0",
          fadeDirection === "bottom"
            ? "[mask-image:linear-gradient(to_bottom,transparent_0%,white_15%,white_40%,transparent_100%)]"
            : "[mask-image:linear-gradient(to_top,white_0%,white_85%,transparent_100%)]"
        )}
      >
        {/* Left stripes */}
        {(position === "left" || position === "both") && (
          <div className="absolute top-0 left-0 flex h-full flex-row-reverse overflow-hidden">
            {Array.from({ length: stripeCount }).map((_, i) => (
              <div
                key={`left-${i}`}
                className="h-full bg-gradient-to-l from-neutral-300/60 to-neutral-200/10 shadow-[-1px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[-1px_0_0_0_rgba(255,255,255,0.15)]"
                style={{
                  width: `clamp(40px, ${stripeWidth}px, 20vw)`,
                }}
              />
            ))}
          </div>
        )}

        {/* Right stripes */}
        {(position === "right" || position === "both") && (
          <div className="absolute top-0 right-0 flex h-full flex-row-reverse overflow-hidden">
            {Array.from({ length: stripeCount }).map((_, i) => (
              <div
                key={`right-${i}`}
                className="h-full bg-gradient-to-r from-neutral-300/60 to-neutral-200/10 shadow-[2px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[2px_0_0_0_rgba(255,255,255,0.15)]"
                style={{
                  width: `clamp(40px, ${stripeWidth}px, 20vw)`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Center fade - prevents stripes from colliding when on both sides */}
      {position === "both" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] dark:via-black" />
      )}

      {/* Bottom radial fade for extra smoothness */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[120%] w-[120%] -translate-x-1/2 [background:radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_25%,rgba(255,255,255,0.5)_50%,transparent_100%)] dark:[background:radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_25%,rgba(0,0,0,0.5)_50%,transparent_100%)]" />
    </div>
  );
}
