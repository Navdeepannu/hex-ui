"use client";

import React, { useState } from "react";
import {
  Code,
  CodeBlock,
  CodeHeader,
} from "../animate-ui/components/animate/code";
import {
  IconBrandReact,
  IconCode,
  IconEye,
  IconRefresh,
  IconExternalLink,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CodePreviewProps {
  children: React.ReactNode;
  demoCode: string;
  fileName: string;
  minPreviewHeight?: string;
  minCodeHeight?: string;
  defaultTab?: "preview" | "code";
}

const CodePreview = ({
  children,
  demoCode,
  fileName,
  minPreviewHeight = "400px",
  minCodeHeight = "350px",
  defaultTab = "preview",
}: CodePreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">(defaultTab);
  const [previewKey, setPreviewKey] = useState(0);

  const handleReload = () => {
    setPreviewKey((prev) => prev + 1);
  };

  const handleOpenInV0 = () => {
    const v0Url = `https://v0.dev/chat?q=${encodeURIComponent(demoCode)}`;
    window.open(v0Url, "_blank");
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
              activeTab === "preview"
                ? "bg-accent text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <IconEye
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
              activeTab === "code"
                ? "bg-accent text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <IconCode
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            Code
          </button>
        </div>

        {/* Action Buttons */}
        {activeTab === "preview" && (
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleReload}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent flex items-center justify-center rounded-lg p-2 text-sm transition-all"
                >
                  <IconRefresh size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Reload
              </TooltipContent>
            </Tooltip>
            <button
              onClick={handleOpenInV0}
              className="text-muted-foreground hover:text-foreground hover:bg-accent flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all"
              title="Open in v0"
            >
              <IconExternalLink size={16} />
              Open in v0
            </button>
          </div>
        )}
      </div>

      <div>
        {activeTab === "preview" && (
          <div
            key={previewKey}
            className="relative overflow-hidden rounded-lg border-2 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
            style={{ minHeight: minPreviewHeight }}
          >
            <div>{children}</div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="overflow-hidden rounded-lg">
            <Code
              className="rounded-lg"
              code={demoCode}
              style={{ minHeight: minCodeHeight }}
            >
              <CodeHeader icon={IconBrandReact} copyButton>
                {fileName}
              </CodeHeader>
              <CodeBlock lang="tsx" />
            </Code>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
