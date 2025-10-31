"use client";
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
                      "--delay": `${delay}ms`,
                      "--duration": ` ${duration}ms`,
                    } as React.CSSProperties)
                  : {};

                return (
                  <div
                    key={`hexagon-${rowIndex}-${colIndex}`}
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

export { HexagonBackground, type HexagonBackgroundProps };
