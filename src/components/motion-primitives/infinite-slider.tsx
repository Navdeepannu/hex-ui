"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InfiniteSliderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // pixels per second (approx via duration)
  speedOnHover?: number; // slower speed when parent .group is hovered
  gap?: number; // gap in pixels between items
  pauseOnHover?: boolean;
}

/*
  InfiniteSlider
  - Duplicates children to create a seamless marquee.
  - Uses CSS var --marquee-duration to control animation speed.
  - speed: lower is slower. duration is computed by container width.
*/
export function InfiniteSlider({
  className,
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 96,
  pauseOnHover,
  ...props
}: InfiniteSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const rowRef = React.useRef<HTMLDivElement>(null);
  const hoveredRef = React.useRef(false);
  const offsetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const speedCurrentRef = React.useRef(0);
  const rafRef = React.useRef<number | undefined>(undefined);

  // Measure width of a single row and keep it updated
  const measure = React.useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    widthRef.current = row.scrollWidth;
  }, []);

  React.useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure, children]);

  // Drive transform with rAF to avoid animation restarts on hover
  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const baseSpeed = Math.max(0, speed);
    const hoverSpeed = pauseOnHover ? 0 : Math.max(0, speedOnHover);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const smooth = 0.12; // smoothing factor for speed transitions

    let lastTs = performance.now();
    speedCurrentRef.current = prefersReduced ? 0 : baseSpeed;

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000); // clamp delta
      lastTs = ts;
      const target = hoveredRef.current ? hoverSpeed : baseSpeed;
      // Smoothly approach target speed
      speedCurrentRef.current = lerp(
        speedCurrentRef.current,
        prefersReduced ? 0 : target,
        smooth,
      );
      const w = widthRef.current || 0;
      if (w > 0) {
        offsetRef.current =
          (offsetRef.current + speedCurrentRef.current * dt) % w;
        const x = -offsetRef.current;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, speedOnHover, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          // Provide fallbacks via string index signature
          ["--marquee-gap" as unknown as string]: `${gap}px`,
        } as React.CSSProperties
      }
      {...props}
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
    >
      <div
        ref={trackRef}
        data-marquee-track
        className={cn(
          "flex w-max items-center [gap:var(--marquee-gap,96px)] will-change-transform",
        )}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        {/* first row */}
        <div
          ref={rowRef}
          className="flex items-center [gap:var(--marquee-gap,96px)]"
        >
          {children}
        </div>
        {/* duplicated row */}
        <div className="flex items-center [gap:var(--marquee-gap,96px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
