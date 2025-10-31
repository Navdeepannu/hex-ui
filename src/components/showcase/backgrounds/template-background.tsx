"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

type TemplateBackgroundProps = React.ComponentProps<"div"> & {
  hexagonProps?: React.ComponentProps<"div">;
  hexagonSize?: number;
  hexagonMargin?: number;
  highlightProbability?: number;
};

function TemplateBackground({
  className,
  children,
  hexagonProps,
  hexagonSize = 75,
  hexagonMargin = 3,
  highlightProbability = 0.15,
  ...props
}: TemplateBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.8;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const defaultHexagonProps = {
    ...hexagonProps,
  };

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });

  const [highlightedHexagons, setHighlightedHexagons] = React.useState<
    Set<string>
  >(new Set());

  const updateGridDimensions = React.useCallback(() => {
    const rows = Math.ceil(window.innerHeight / rowSpacing);
    const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, hexagonWidth]);

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);
    return () => window.removeEventListener("resize", updateGridDimensions);
  }, [updateGridDimensions]);

  const shouldHighlight = React.useCallback(
    (row: number, col: number): boolean => {
      const hash = ((row * 73856093) ^ (col * 19349663)) % 1000;
      return hash / 1000 < highlightProbability;
    },
    [highlightProbability],
  );

  React.useEffect(() => {
    if (gridDimensions.rows > 0 && gridDimensions.columns > 0) {
      const highlighted = new Set<string>();
      for (let row = 0; row < gridDimensions.rows; row++) {
        for (let col = 0; col < gridDimensions.columns; col++) {
          if (shouldHighlight(row, col)) {
            highlighted.add(`${row}-${col}`);
          }
        }
      }
      setHighlightedHexagons(highlighted);
    }
  }, [gridDimensions, shouldHighlight]);

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
            key={`row-${rowIndex}`}
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
                const isHighlighted = highlightedHexagons.has(
                  `${rowIndex}-${colIndex}`,
                );

                return (
                  <div
                    key={`hexagon-${rowIndex}-${colIndex}`}
                    {...defaultHexagonProps}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      marginLeft: hexagonMargin,
                      ...defaultHexagonProps?.style,
                    }}
                    className={cn(
                      "pointer-events-none relative",
                      "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:opacity-100 before:content-[''] dark:before:bg-neutral-950",
                      "after:absolute after:inset-[var(--hexagon-margin)] after:content-[''] dark:after:bg-neutral-950",
                      "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                      isHighlighted
                        ? "before:bg-neutral-200 after:bg-neutral-100 dark:before:bg-neutral-800 dark:after:bg-neutral-900"
                        : "before:bg-white after:bg-white dark:before:bg-neutral-950 dark:after:bg-neutral-950",
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

export { TemplateBackground, type TemplateBackgroundProps };
