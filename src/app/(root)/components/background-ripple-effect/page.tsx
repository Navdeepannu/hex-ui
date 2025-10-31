import CodePreview from "@/components/code-preview/code-preview";
import InstallationTabs from "@/components/code-preview/installation-tabs";
import { HexagonBackground } from "@/components/showcase/backgrounds/background-ripple-effect";
import { PropsTable, type PropItem } from "@/components/ui/props-table";
import { ComponentNavigation } from "@/components/ui/component-navigation";
import React from "react";

export const metadata = {
  title: "Hexagon Background - Hex UI",
  description:
    "An interactive hexagonal grid background with ripple effects on click.",
};

const page = () => {
  const CODE = `import { HexagonBackground } from "@/components/ui/background-ripple-effect";

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
}
`;

  const CLICODE = {
    npm: `npx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    bun: `bunx --bun shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    pnpm: `pnpm dlx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
    yarn: `yarn dlx shadcn@latest add https://hex-ui.com/r/background-ripple-effect.json`,
  };

  const MANUALCODE = `"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HexagonBackgroundProps {
  hexagonSize?: number;
  hexagonMargin?: number;
  interactive?: boolean;
  hexagonProps?: React.ComponentProps<"div">;
  className?: string;
  children?: React.ReactNode;
}

export const HexagonBackground = ({
  hexagonSize = 75,
  hexagonMargin = 3,
  interactive = false,
  hexagonProps,
  className,
  children,
}: HexagonBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const hexagons = container.querySelectorAll(".hexagon");

    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.classList.add("clicked");

      setTimeout(() => {
        target.classList.remove("clicked");
      }, 600);
    };

    if (interactive) {
      hexagons.forEach((hexagon) => {
        hexagon.addEventListener("click", handleClick);
      });
    }

    return () => {
      hexagons.forEach((hexagon) => {
        hexagon.removeEventListener("click", handleClick);
      });
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={cn("hexagon-background", className)}
      style={{
        "--hexagon-size": \`\${hexagonSize}px\`,
        "--hexagon-margin": \`\${hexagonMargin}px\`,
      } as React.CSSProperties}
    >
      {/* Render hexagons here */}
      {children}
    </div>
  );
};`;

  const propsData: PropItem[] = [
    {
      name: "hexagonSize",
      type: "number",
      default: "75",
      description:
        "The size of each hexagon in pixels. Controls the overall scale of the hexagonal grid.",
    },
    {
      name: "hexagonMargin",
      type: "number",
      default: "3",
      description:
        "The margin between hexagons in pixels. Creates spacing between individual hexagon elements.",
    },
    {
      name: "interactive",
      type: "boolean",
      default: "false",
      description:
        "Whether hexagons respond to click interactions with ripple effects. When true, clicking creates animated ripples.",
    },
    {
      name: "hexagonProps",
      type: "React.ComponentProps<'div'>",
      default: "—",
      description:
        "Additional props to pass to individual hexagon elements. Useful for custom styling or event handlers.",
    },
    {
      name: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes to apply to the container element.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "—",
      description:
        "Content to be rendered on top of the hexagon background. Positioned absolutely within the container.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-12">
        <div className="mb-4">
          <h1 className="md:text-4xl text-3xl font-bold tracking-tight mb-2">
            Hexagon Background
          </h1>
          <p className="md:text-lg text-sm text-muted-foreground">
            An interactive hexagonal grid background with ripple effects on
            click.
          </p>
        </div>
      </div>

      {/* Demo Section */}
      <div className="mb-12">
        <CodePreview demoCode={CODE} fileName="hexgon-background-demo.tsx">
          <div className="relative w-full h-[400px] overflow-hidden">
            <HexagonBackground
              interactive={true}
              className="absolute inset-0"
            />
          </div>
        </CodePreview>
      </div>

      {/* Installation Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Installation
        </h2>
        <InstallationTabs
          cliCodes={CLICODE}
          manualCode={MANUALCODE}
          fileName="background-ripple-effect.tsx"
        />
      </div>

      {/* Props Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Props</h2>
        <p className="text-muted-foreground mb-6">
          The{" "}
          <code className="rounded bg-muted px-2 py-1 text-sm">
            HexagonBackground
          </code>{" "}
          component accepts the following props:
        </p>
        <PropsTable data={propsData} />
      </div>

      {/* Navigation */}
      <ComponentNavigation
        previous={{
          title: "Install TailwindCSS",
          href: "/docs/install-tailwindcss",
        }}
        next={{
          title: "Animated Avatar",
          href: "/components/animated-avatar",
        }}
      />
    </div>
  );
};

export default page;
