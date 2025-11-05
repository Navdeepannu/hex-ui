import CodePreview from "@/components/code-preview/code-preview";
import InstallationTabs from "@/components/code-preview/installation-tabs";
import { PropsTable, type PropItem } from "@/components/ui/props-table";
import { ComponentNavigation } from "@/components/ui/component-navigation";
import React from "react";
import { StripedBackground } from "@/components/sections/hero/hero-01/striped-background";
import { stripedBackgroundCodes } from "@/data/component-codes";

export const metadata = {
  title: "Stripped Background | Hex UI",
  description: "A striped background custom styling and directional effects.",
};

const page = () => {
  // Import codes from centralized registry
  const { demoCode, cliCodes, manualCode, fileName } = stripedBackgroundCodes;

  const propsData: PropItem[] = [
    {
      name: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes to apply to the container element.",
    },
    {
      name: "stripeWidth",
      type: "number",
      default: "50",
      description:
        "The width of each stripe in pixels. Controls the overall scale of the striped pattern.",
    },
    {
      name: "fadeDirection",
      type: '"bottom" | "top"',
      default: '"bottom"',
      description:
        "Direction of the fade gradient mask. 'bottom' fades from top to bottom, 'top' fades from bottom to top.",
    },
    {
      name: "position",
      type: '"left" | "right" | "both"',
      default: '"both"',
      description:
        "Position of the stripes on the screen. Can be 'left', 'right', or 'both' sides.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header Section */}
      <div className="mb-12">
        <div className="mb-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            Stripped Background
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg">
            Diagonal stripes that create stunning visual depth and dimension
          </p>
        </div>
      </div>

      {/* Demo Section */}
      <div className="mb-12">
        <CodePreview demoCode={demoCode} fileName="striped-background-demo.tsx">
          <div className="relative h-[600px] w-full overflow-hidden">
            <StripedBackground stripeWidth={30} fadeDirection="bottom" position="both" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-3xl space-y-8 px-4 text-center">
                <h2 className="from-foreground/50 via-foreground/90 to-foreground/10 bg-gradient-to-br bg-clip-text text-2xl leading-tight font-semibold tracking-tight text-balance text-transparent md:text-5xl">
                  Striped Background Effect
                </h2>

                <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed tracking-tight text-balance md:text-base">
                  Create stunning visual depth with animated diagonal stripes. Perfect for hero
                  sections, cards, and feature areas that demand attention.
                </p>
              </div>
            </div>
          </div>
        </CodePreview>
        <div className="text-muted-foreground/60 mt-4 flex items-center gap-2 text-xs italic">
          <span className="bg-accent rounded px-1.5 py-0.5 not-italic">
            TIP:
          </span>
          Dark mode recommended
        </div>
      </div>

      {/* Installation Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Installation</h2>
        <InstallationTabs cliCodes={cliCodes} manualCode={manualCode} fileName={fileName} />
      </div>

      {/* Props Section */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Props</h2>
        <p className="text-muted-foreground mb-6">
          The <code className="bg-muted rounded px-2 py-1 text-sm">StripedBackground</code>{" "}
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
