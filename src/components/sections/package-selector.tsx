"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown, ExternalLink, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Package = {
  id: string;
  name: string;
  icon: React.ReactNode;
  action: "open" | "copy";
};

const packages: Package[] = [
  {
    id: "v0",
    name: "v0",
    action: "open",
    icon: (
      <svg
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
      >
        <path
          d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
          fill="currentColor"
        />
        <path
          d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "bolt",
    name: "Bolt",
    action: "open",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3.5 w-3.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
  },
];

interface PackageSelectorProps {
  componentName: string;
  componentDescription?: string;
  onPackageSelect?: (packageId: string) => void;
}

function generatePrompt(
  componentName: string,
  description?: string,
): string {
  return `Create a React component called "${componentName}"${description ? ` that ${description}` : ""}.

Requirements:
- Use modern React with TypeScript
- Style with Tailwind CSS
- Make it fully responsive (mobile, tablet, desktop)
- Include smooth animations and transitions
- Add proper accessibility features (ARIA labels, keyboard navigation)
- Use Framer Motion for animations
- Include hover effects and interactive elements
- Follow modern design principles with clean, professional aesthetics

Component should be production-ready and easy to integrate into a Next.js application.`;
}

function getPlatformUrl(
  platform: string,
  componentName: string,
  description?: string,
): string {
  const prompt = generatePrompt(componentName, description);
  const encodedPrompt = encodeURIComponent(prompt);

  switch (platform) {
    case "v0":
      // v0.dev supports prompt parameter
      return `https://v0.dev/chat?q=${encodedPrompt}`;
    case "bolt":
      // Bolt.new supports prompt parameter
      return `https://bolt.new/?prompt=${encodedPrompt}`;
    default:
      return "";
  }
}

export function PackageSelector({
  componentName,
  componentDescription,
  onPackageSelect,
}: PackageSelectorProps) {
  const [selectedPackage, setSelectedPackage] = React.useState<Package>(
    packages[0],
  );
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const handleSelect = async (pkg: Package) => {
    setSelectedPackage(pkg);
    setOpen(false);

    if (pkg.action === "open") {
      // Generate the platform URL with the component prompt
      const platformUrl = getPlatformUrl(
        pkg.id,
        componentName,
        componentDescription,
      );

      // Open the platform in a new tab with the prompt
      window.open(platformUrl, "_blank", "noopener,noreferrer");
    } else if (pkg.action === "copy") {
      // Copy the prompt to clipboard
      const prompt = generatePrompt(componentName, componentDescription);
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }

    onPackageSelect?.(pkg.id);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="relative flex h-8 items-center gap-1.5 rounded-lg border border-neutral-200/60 bg-white px-2.5 text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
          title="Open in platform"
        >
          <span className="flex h-4 w-4 items-center justify-center">
            {selectedPackage.icon}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />

          {/* Copied feedback */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-xs text-white dark:bg-neutral-100 dark:text-neutral-900"
              >
                Prompt copied!
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {packages.map((pkg) => (
          <DropdownMenuItem
            key={pkg.id}
            onClick={() => handleSelect(pkg)}
            className="flex items-center justify-between gap-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center">
                {pkg.icon}
              </span>
              <span className="text-sm">{pkg.name}</span>
            </div>
            <div className="flex items-center gap-1">
              {pkg.action === "open" ? (
                <ExternalLink className="h-3 w-3 opacity-50" />
              ) : (
                <Copy className="h-3 w-3 opacity-50" />
              )}
              {selectedPackage.id === pkg.id && (
                <Check className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
