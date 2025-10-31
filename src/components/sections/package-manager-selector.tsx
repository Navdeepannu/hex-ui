"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, ChevronDown } from "lucide-react";

export type PackageManager = "npx" | "bun" | "pnpm" | "yarn";

type PackageManagerOption = {
  id: PackageManager;
  name: string;
  command: string;
};

const packageManagers: PackageManagerOption[] = [
  {
    id: "npx",
    name: "npx",
    command: "npx shadcn@latest add",
  },
  {
    id: "bun",
    name: "bun",
    command: "bunx --bun shadcn@latest add",
  },
  {
    id: "pnpm",
    name: "pnpm",
    command: "pnpm dlx shadcn@latest add",
  },
  {
    id: "yarn",
    name: "yarn",
    command: "yarn dlx shadcn@latest add",
  },
];

interface PackageManagerSelectorProps {
  selected: PackageManager;
  onSelect: (manager: PackageManager) => void;
}

export function PackageManagerSelector({
  selected,
  onSelect,
}: PackageManagerSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const selectedManager =
    packageManagers.find((pm) => pm.id === selected) || packageManagers[0];

  const handleSelect = (manager: PackageManagerOption) => {
    onSelect(manager.id);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex h-8 items-center gap-1.5 rounded-lg border border-neutral-200/60 bg-white px-2.5 text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
          title="Change package manager"
        >
          <span className="font-mono text-xs font-medium">
            {selectedManager.name}
          </span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-32">
        {packageManagers.map((pm) => (
          <DropdownMenuItem
            key={pm.id}
            onClick={() => handleSelect(pm)}
            className="flex items-center justify-between gap-2 cursor-pointer font-mono text-xs"
          >
            <span>{pm.name}</span>
            {selected === pm.id && (
              <Check className="h-3.5 w-3.5 text-neutral-900 dark:text-neutral-100" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function getInstallCommand(
  packageManager: PackageManager,
  componentId: string,
): string {
  const pm = packageManagers.find((m) => m.id === packageManager);
  return `${pm?.command} https://hex-ui.com/r/${componentId}.json`;
}
