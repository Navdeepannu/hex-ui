"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
  /**
   * Which beams to render. "left" is most subtle and template-friendly.
   */
  variant?: "left" | "right" | "dual";
  /**
   * Global opacity applied to the effect for subtlety.
   */
  intensity?: number; // 0..1
  /**
   * Softens edges of beams.
   */
  blur?: number; // px
  /**
   * Blend mode to integrate with background.
   */
  blendMode?: React.CSSProperties["mixBlendMode"];
  /**
   * Feathered mask to avoid harsh edges.
   */
  feather?: boolean;
  /**
   * Pause animation (or auto-pauses when prefers-reduced-motion is set).
   */
  paused?: boolean;
  /**
   * Optional extra className for the wrapper.
   */
  className?: string;
  /**
   * Optional override for the wrapper CSS mask.
   */
  mask?: string;
  /**
   * Constrain effect within viewport width (default) or container only.
   * Use "viewport" to let the light extend beyond a narrow content column
   * without causing horizontal page scroll.
   */
  bounds?: "viewport" | "container";
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
  variant = "left",
  intensity = 0.6,
  blur = 8,
  blendMode = "screen",
  feather = true,
  paused = false,
  className,
  mask,
  bounds = "viewport",
}: SpotlightProps = {}) => {
  // Respect user accessibility settings for motion.
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(!!mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const isAnimated = !paused && !prefersReducedMotion;

  const wrapperMask =
    mask ??
    (feather
      ? "radial-gradient(120%_120%_at_50%_-10%, #000 40%, transparent 80%)"
      : undefined);

  const wrapperClass =
    bounds === "viewport"
      ? "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-screen overflow-x-hidden"
      : "pointer-events-none absolute inset-0 h-full w-full";

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className={cn(wrapperClass, className)}
      style={{
        opacity: intensity,
        // Feather the overall effect to avoid hard edges; include WebKit for Safari.
        maskImage: wrapperMask as any,
        WebkitMaskImage: wrapperMask as any,
      }}
    >
      {variant !== "right" && (
        <motion.div
          animate={isAnimated ? { x: [0, xOffset, 0] } : { x: 0 }}
          transition={{
            duration,
            repeat: isAnimated ? Infinity : 0,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute top-0 left-0 z-10 h-screen w-screen"
          style={{ mixBlendMode: blendMode, filter: `blur(${blur}px)` }}
        >
          <div
            style={{
              transform: `translateY(${translateY}px) rotate(-45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 left-0"}
          />

          <div
            style={{
              transform: "rotate(-45deg) translate(5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 left-0 origin-top-left"}
          />

          <div
            style={{
              transform: "rotate(-45deg) translate(-180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 left-0 origin-top-left"}
          />
        </motion.div>
      )}

      {(variant === "dual" || variant === "right") && (
        <motion.div
          animate={isAnimated ? { x: [0, -xOffset, 0] } : { x: 0 }}
          transition={{
            duration,
            repeat: isAnimated ? Infinity : 0,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute top-0 right-0 z-10 h-screen w-screen"
          style={{ mixBlendMode: blendMode, filter: `blur(${blur}px)` }}
        >
          <div
            style={{
              transform: `translateY(${translateY}px) rotate(45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 right-0"}
          />

          <div
            style={{
              transform: "rotate(45deg) translate(-5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 right-0 origin-top-right"}
          />

          <div
            style={{
              transform: "rotate(45deg) translate(180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
            className={"absolute top-0 right-0 origin-top-right"}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
