"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LayeredImageBackgroundProps {
  className?: string;
  imageSrc: string;
  imageAlt?: string;
  stripeWidth?: number;
  fadeDirection?: "bottom" | "top";
  position?: "left" | "right" | "both";
  hoverEffect?: "scale" | "reveal" | "wave" | "shift";
  stripeCount?: number; // Allow manual override
  isHovered?: boolean; // Accept hover state from parent
}

export function LayeredImageBackground({
  className,
  imageSrc,
  imageAlt = "Background image",
  stripeWidth = 40,
  fadeDirection = "bottom",
  position = "both",
  hoverEffect = "reveal",
  stripeCount: manualStripeCount,
  isHovered: externalIsHovered,
}: LayeredImageBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stripeCount, setStripeCount] = useState(manualStripeCount || 3);
  const [internalIsHovered, setInternalIsHovered] = useState(false);

  // Use external hover state if provided, otherwise use internal
  const isHovered = externalIsHovered !== undefined ? externalIsHovered : internalIsHovered;

  useEffect(() => {
    if (manualStripeCount) return; // Skip if manual count is provided

    const updateStripeCount = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;

      // Calculate stripe count based on container width
      if (width >= 1200) {
        setStripeCount(6);
      } else if (width >= 800) {
        setStripeCount(5);
      } else if (width >= 500) {
        setStripeCount(4);
      } else if (width >= 300) {
        setStripeCount(3);
      } else {
        setStripeCount(2);
      }
    };

    updateStripeCount();
    window.addEventListener("resize", updateStripeCount);
    return () => window.removeEventListener("resize", updateStripeCount);
  }, [manualStripeCount]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-0 overflow-hidden", className)}
      onMouseEnter={() => externalIsHovered === undefined && setInternalIsHovered(true)}
      onMouseLeave={() => externalIsHovered === undefined && setInternalIsHovered(false)}
    >
      {/* Image Layer with layered stripe mask effect */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700 ease-out",
          hoverEffect === "scale" && isHovered && "scale-110",
          hoverEffect === "shift" && isHovered && "translate-x-4"
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            hoverEffect === "reveal" && !isHovered && "opacity-30",
            hoverEffect === "reveal" && isHovered && "opacity-80",
            hoverEffect !== "reveal" && "opacity-50"
          )}
          priority
        />

        {/* Stripe overlay on image for layered effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Fade mask for stripes */}
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
                className={cn(
                  "h-full bg-gradient-to-l from-neutral-300/60 to-neutral-200/10 shadow-[-1px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[-1px_0_0_0_rgba(255,255,255,0.15)]",
                  "transition-all duration-500 ease-out",
                  hoverEffect === "wave" && isHovered && "translate-y-2 opacity-70",
                  hoverEffect === "shift" && isHovered && "-translate-x-2"
                )}
                style={{
                  width: `${stripeWidth}px`,
                  transitionDelay: hoverEffect === "wave" ? `${i * 50}ms` : "0ms",
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
                className={cn(
                  "h-full bg-gradient-to-r from-neutral-300/60 to-neutral-200/10 shadow-[2px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[2px_0_0_0_rgba(255,255,255,0.15)]",
                  "transition-all duration-500 ease-out",
                  hoverEffect === "wave" && isHovered && "translate-y-2 opacity-70",
                  hoverEffect === "shift" && isHovered && "translate-x-2"
                )}
                style={{
                  width: `${stripeWidth}px`,
                  transitionDelay: hoverEffect === "wave" ? `${i * 50}ms` : "0ms",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Center fade - prevents stripes from colliding when on both sides */}
      {/* {position === "both" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] dark:via-black" />
      )} */}

      {/* Bottom radial fade for extra smoothness */}
      {/* <div className="pointer-events-none absolute bottom-0 left-1/2 h-[120%] w-[120%] -translate-x-1/2 [background:radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_25%,rgba(255,255,255,0.5)_50%,transparent_100%)] dark:[background:radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.8)_25%,rgba(0,0,0,0.5)_50%,transparent_100%)]" /> */}
    </div>
  );
}
