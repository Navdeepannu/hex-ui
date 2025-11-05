/**
 * Centralized Component Code Registry
 *
 * This file contains all code snippets for components displayed in CodePreview and InstallationTabs.
 * Add new components here to maintain a single source of truth for all code examples.
 */

export interface ComponentCodes {
  /** Demo/usage code shown in CodePreview */
  demoCode: string;
  /** CLI installation commands for different package managers */
  cliCodes: {
    npm: string;
    bun: string;
    pnpm: string;
    yarn: string;
  };
  /** Full component source code for manual installation */
  manualCode: string;
  /** Default filename for the component */
  fileName: string;
}

// ============================================================================
// Background Components
// ============================================================================

export const stripedBackgroundCodes: ComponentCodes = {
  demoCode: `import { StripedBackground } from "@/components/ui/striped-background";

export default function StripedBackgroundDemo() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <StripedBackground
        stripeWidth={30}
        fadeDirection="bottom"
        position="both"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="max-w-3xl space-y-8 px-4 text-center">
          <h2 className="from-foreground/10 via-foreground/90 to-foreground/10 bg-gradient-to-br bg-clip-text text-2xl leading-tight font-semibold tracking-tight text-balance text-transparent md:text-5xl">
            Striped Background Effect
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed tracking-tight text-balance md:text-base">
            Create stunning visual depth with animated diagonal stripes. Perfect for hero
            sections, cards, and feature areas that demand attention.
          </p>
        </div>
      </div>
    </div>
  );
}`,

  cliCodes: {
    npm: `npx shadcn@latest add https://hex-ui.com/r/striped-background.json`,
    bun: `bunx --bun shadcn@latest add https://hex-ui.com/r/striped-background.json`,
    pnpm: `pnpm dlx shadcn@latest add https://hex-ui.com/r/striped-background.json`,
    yarn: `yarn dlx shadcn@latest add https://hex-ui.com/r/striped-background.json`,
  },

  manualCode: `"use client";

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
  stripeWidth = 50,
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
                key={\`left-\${i}\`}
                className="h-full bg-gradient-to-l from-neutral-300/60 to-neutral-200/10 shadow-[-1px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[-1px_0_0_0_rgba(255,255,255,0.15)]"
                style={{
                  width: \`clamp(40px, \${stripeWidth}px, 20vw)\`,
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
                key={\`right-\${i}\`}
                className="h-full bg-gradient-to-r from-neutral-300/60 to-neutral-200/10 shadow-[2px_0_0_0_rgba(0,0,0,0.08)] dark:from-neutral-700/70 dark:to-neutral-900/10 dark:shadow-[2px_0_0_0_rgba(255,255,255,0.15)]"
                style={{
                  width: \`clamp(40px, \${stripeWidth}px, 20vw)\`,
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
}`,

  fileName: "striped-background.tsx",
};

export const backgroundRippleEffectCodes: ComponentCodes = {
  demoCode: `import { HexagonBackground } from "@/components/ui/background-ripple-effect";

export default function BackgroundDemo() {
  return (
    <div className="absolute top-0 right-0 left-0 h-[65vh] overflow-hidden">
      <HexagonBackground interactive={true} className="absolute inset-0" />

      {/* Faded mask for blur*/}
      <div className="via-background/30 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
      <div className="from-background via-background/80 pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent" />
    </div>
  );
}`,

  cliCodes: {
    npm: `npx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    bun: `bunx --bun shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    pnpm: `pnpm dlx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    yarn: `yarn dlx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
  },

  manualCode: `"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

type HexagonBackgroundProps = React.ComponentProps<"div"> & {
  hexagonProps?: React.ComponentProps<"div">;
  hexagonSize?: number;
  hexagonMargin?: number;
  interactive?: boolean;
};

function HexagonBackground({
  className,
  children,
  hexagonProps,
  hexagonSize = 75,
  hexagonMargin = 3,
  interactive = false,
  ...props
}: HexagonBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.8;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const defaultHexagonProps = {
    className:
      "hover:before:bg-[#cde0fe]/20 dark:hover:before:bg-[#cde0fe]/10 transition-all duration-500",
    ...hexagonProps,
  };

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  const [clickedHexagon, setClickedHexagon] = React.useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = React.useState(0);

  const updateGridDimensions = React.useCallback(() => {
    const rows = Math.ceil(window.innerHeight / rowSpacing);
    const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, hexagonWidth]);

  const handleHexagonClick = React.useCallback(
    (row: number, col: number) => {
      if (interactive) {
        setClickedHexagon({ row, col });
        setRippleKey((k) => k + 1);
      }
    },
    [interactive],
  );

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);
    return () => window.removeEventListener("resize", updateGridDimensions);
  }, [updateGridDimensions]);

  return (
    <div
      data-slot="hexagon-background"
      className={cn(
        "relative size-full overflow-hidden bg-neutral-100 dark:bg-neutral-900",
        className,
      )}
      {...props}
    >
      <style>{\`:root { --hexagon-margin: \${hexagonMargin}px; }\`}</style>
      <div className="absolute top-0 -left-0 size-full overflow-hidden">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={\`row-\${rowIndex}-\${rippleKey}\`}
            style={{
              marginTop: computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - 10,
            }}
            className="inline-flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => {
                const distance = clickedHexagon
                  ? Math.hypot(
                      clickedHexagon.row - rowIndex,
                      clickedHexagon.col - colIndex,
                    )
                  : 0;
                const delay = clickedHexagon ? Math.max(0, distance * 55) : 0;
                const duration = 150 + distance * 50;

                const rippleStyle = clickedHexagon
                  ? ({
                      "--delay": \`\${delay}ms\`,
                      "--duration": \` \${duration}ms\`,
                    } as React.CSSProperties)
                  : {};

                return (
                  <div
                    key={\`hexagon-\${rowIndex}-\${colIndex}\`}
                    {...defaultHexagonProps}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      marginLeft: hexagonMargin,
                      ...rippleStyle,
                      ...defaultHexagonProps?.style,
                    }}
                    onClick={
                      interactive
                        ? () => handleHexagonClick(rowIndex, colIndex)
                        : undefined
                    }
                    className={cn(
                      "relative transition-all duration-150",
                      "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-white before:opacity-100 before:transition-all before:duration-300 before:content-[''] dark:before:bg-neutral-950",
                      "after:absolute after:inset-[var(--hexagon-margin)] after:bg-white after:transition-none after:content-[''] dark:after:bg-neutral-950",
                      "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "hover:before:bg-neutral-500 hover:before:opacity-100 hover:before:duration-0 hover:after:bg-neutral-100 hover:after:opacity-100 hover:after:duration-0 dark:hover:before:bg-neutral-800 dark:hover:after:bg-neutral-900",
                      clickedHexagon &&
                        interactive &&
                        "before:animate-cell-ripple before:[animation-fill-mode:none]",
                      !interactive && "pointer-events-none",
                      defaultHexagonProps?.className,
                    )}
                  />
                );
              },
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { HexagonBackground, type HexagonBackgroundProps };`,

  fileName: "background-ripple-effect.tsx",
};

// ============================================================================
// Animation Components
// ============================================================================

export const animatedTextCodes: ComponentCodes = {
  demoCode: `import { TextEffect } from "@/components/showcase/animations/animated-text";

export default function AnimatedTextDemo() {
  return (
    <div className="space-y-8">
      {/* Fade Effect */}
      <TextEffect
        preset="fade"
        className="text-3xl font-semibold"
      >
        Smooth fade animation
      </TextEffect>

      {/* Slide Effect */}
      <TextEffect
        preset="slide"
        per="word"
        speedReveal={1.2}
        className="text-3xl font-bold"
      >
        Words slide up smoothly
      </TextEffect>

      {/* Blur Effect */}
      <TextEffect
        preset="blur"
        per="char"
        speedReveal={2}
        className="text-3xl font-bold"
      >
        Blur into focus
      </TextEffect>

      {/* Fade-in-Blur Effect */}
      <TextEffect
        preset="fade-in-blur"
        per="word"
        delay={0.1}
        className="text-3xl font-bold"
      >
        Fade and blur combined
      </TextEffect>

      {/* Scale Effect */}
      <TextEffect
        preset="scale"
        per="word"
        speedReveal={1.5}
        className="text-3xl font-bold"
      >
        Scale up animation
      </TextEffect>

      {/* Character by Character */}
      <TextEffect
        preset="slide"
        per="char"
        speedReveal={3}
        className="text-3xl font-mono font-bold"
      >
        Character by character
      </TextEffect>
    </div>
  );
}`,

  cliCodes: {
    npm: `npx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    bun: `bunx --bun shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    pnpm: `pnpm dlx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
    yarn: `yarn dlx shadcn@latest add https://hex-ui.com/r/animated-text.json`,
  },

  // Note: This is a very long code block - you can keep the existing MANUALCODE from animated-text/page.tsx
  manualCode: `'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import type {
  TargetAndTransition,
  Transition,
  Variant,
  Variants,
} from 'motion/react';
import React from 'react';

// See full implementation in the animated-text component file
// This is a placeholder - copy the full code from your existing page
export function TextEffect() {
  // ... implementation
}`,

  fileName: "animated-text.tsx",
};

// ============================================================================
// Helper function to get codes by component name
// ============================================================================

export type ComponentName =
  | "striped-background"
  | "background-ripple-effect"
  | "animated-text";

export const componentCodesRegistry: Record<ComponentName, ComponentCodes> = {
  "striped-background": stripedBackgroundCodes,
  "background-ripple-effect": backgroundRippleEffectCodes,
  "animated-text": animatedTextCodes,
};

/**
 * Get component codes by component name
 * @param name - The component name
 * @returns The component codes or null if not found
 */
export function getComponentCodes(name: ComponentName): ComponentCodes | null {
  return componentCodesRegistry[name] || null;
}
