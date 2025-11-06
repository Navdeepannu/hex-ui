"use client";

import * as React from "react";
import { Section } from "@/data/sections-registry";
import { cn } from "@/lib/utils";
import { Eye, Code2 } from "lucide-react";
import { IconCheck, IconCopy, IconMaximize } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { PackageSelector } from "./package-selector";
import {
  PackageManagerSelector,
  getInstallCommand,
  type PackageManager,
} from "./package-manager-selector";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SectionCodeViewer } from "./section-code-viewer";

interface SectionPreviewCardProps {
  section: Section;
  className?: string;
}

export function SectionPreviewCard({ section, className }: SectionPreviewCardProps) {
  const [copied, setCopied] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [packageManager, setPackageManager] = React.useState<PackageManager>("npx");

  const installCommand = getInstallCommand(packageManager, section.id);

  const handleCopyCommand = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenFullscreen = () => {
    window.open(`/preview/${section.id}`, "_blank");
  };

  const Component = section.component;

  return (
    <>
      {/* Compact bordered card with all controls */}
      <div className={cn("relative", className)}>
        <div className="">
          {/* Control Bar - All controls in one compact row */}
          <div className="border-accent mx-auto flex max-w-7xl items-center justify-between border-x bg-white px-4 py-3 dark:bg-black">
            {/* Left: View Toggles + Fullscreen */}
            <TooltipProvider delayDuration={300}>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1 rounded-lg border border-neutral-200/60 bg-white p-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                  <button
                    onClick={() => setShowCode(false)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-all duration-200",
                      !showCode ? "bg-accent" : ""
                    )}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => setShowCode(true)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200",
                      showCode ? "bg-accent" : ""
                    )}
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </button>
                </div>

                {/* Separator */}
                <div className="relative flex items-center">
                  <div className="h-6 w-px bg-linear-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-700"></div>
                  <div className="absolute left-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800"></div>
                  <div className="absolute bottom-0 left-0 h-2 w-px bg-neutral-200 dark:bg-neutral-800"></div>
                </div>

                {/* Fullscreen */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleOpenFullscreen}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200/60 bg-white text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
                    >
                      <IconMaximize className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open fullscreen</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            {/* Right: Action buttons */}
            <TooltipProvider delayDuration={300}>
              <div className="flex items-center gap-2">
                {/* Package Manager Selector */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <PackageManagerSelector
                        selected={packageManager}
                        onSelect={setPackageManager}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Change package manager</p>
                  </TooltipContent>
                </Tooltip>

                {/* CLI Install Command */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopyCommand}
                      className="group/copy relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg border border-neutral-200/60 bg-white px-3 py-1.5 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      <code className="hidden font-mono text-xs text-neutral-700 lg:block dark:text-neutral-300">
                        {installCommand}
                      </code>
                      <code className="font-mono text-xs text-neutral-700 lg:hidden dark:text-neutral-300">
                        Install
                      </code>
                      <div className="relative flex h-4 w-4 items-center justify-center">
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div
                              key="check"
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconCheck className="h-3.5 w-3.5" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ scale: 0, rotate: 90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: -90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconCopy className="h-3.5 w-3.5 text-neutral-600 transition-colors group-hover/copy:text-neutral-900 dark:text-neutral-400 dark:group-hover/copy:text-neutral-100" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy install command</p>
                  </TooltipContent>
                </Tooltip>

                {/* Package Selector */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <PackageSelector
                        componentName={section.name}
                        componentDescription={section.description}
                        onPackageSelect={(packageId) => {
                          console.log("Selected package:", packageId);
                        }}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open in v0 or Bolt</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          {/* Preview/Code Content */}
          <div className="border-accent relative overflow-hidden border">
            <div className="border-accent mx-auto max-w-7xl border-x">
              <AnimatePresence mode="wait">
                {!showCode ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative min-h-[600px] w-full overflow-hidden"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                  >
                    <Component />
                  </motion.div>
                ) : (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="min-h-[600px] overflow-hidden"
                  >
                    <SectionCodeViewer section={section} className="h-[600px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Section Separator */}
      <div className="border-accent bg-background relative flex items-center justify-center border-y p-8">
        <div className="border-accent absolute inset-0 mx-auto flex max-w-7xl items-center border-x"></div>
      </div>
    </>
  );
}
