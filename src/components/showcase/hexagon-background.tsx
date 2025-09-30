"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

type HexagonBackgroundProps = React.ComponentProps<"div"> & {
  hexagonProps?: React.ComponentProps<"div">;
  hexagonSize?: number; // value greater than 50
  hexagonMargin?: number;
  interactive?: boolean; // Enable ripple effect on click
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

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  // Ripple effect state
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
    [interactive]
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
        "relative size-full overflow-hidden dark:bg-neutral-900 bg-neutral-100",
        className
      )}
      {...props}
    >
      <style>{`:root { --hexagon-margin: ${hexagonMargin}px; }`}</style>
      <div className="absolute top-0 -left-0 size-full overflow-hidden">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}-${rippleKey}`}
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
                // Calculate ripple effect properties
                const distance = clickedHexagon
                  ? Math.hypot(
                      clickedHexagon.row - rowIndex,
                      clickedHexagon.col - colIndex
                    )
                  : 0;
                const delay = clickedHexagon ? Math.max(0, distance * 35) : 0; // Reduced from 55ms to 35ms
                const duration = 150 + distance * 50; // Reduced from 200 + 80ms to 150 + 50ms

                const rippleStyle = clickedHexagon
                  ? ({
                      "--delay": `${delay}ms`,
                      "--duration": `${duration}ms`,
                    } as React.CSSProperties)
                  : {};

                return (
                  <div
                    key={`hexagon-${rowIndex}-${colIndex}`}
                    {...hexagonProps}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      marginLeft: hexagonMargin,
                      ...rippleStyle,
                      ...hexagonProps?.style,
                    }}
                    onClick={
                      interactive
                        ? () => handleHexagonClick(rowIndex, colIndex)
                        : undefined
                    }
                    className={cn(
                      "relative transition-all duration-150",
                      "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] ",
                      "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full dark:before:bg-neutral-950 before:bg-white before:opacity-100 before:transition-all before:duration-300",
                      "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] dark:after:bg-neutral-950 after:bg-white after:transition-none",
                      "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "hover:before:bg-neutral-500 dark:hover:before:bg-neutral-800 hover:before:opacity-100 hover:before:duration-0 dark:hover:after:bg-neutral-900 hover:after:bg-neutral-100 hover:after:opacity-100 hover:after:duration-0",
                      clickedHexagon &&
                        interactive &&
                        "before:animate-cell-ripple before:[animation-fill-mode:none]",
                      interactive && "cursor-pointer",
                      !interactive && "pointer-events-none",
                      hexagonProps?.className
                    )}
                  />
                );
              }
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export { HexagonBackground, type HexagonBackgroundProps };
