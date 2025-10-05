"use client";

import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/ui/kibo-ui/snippet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconHexagon } from "@tabler/icons-react";
import ShadcnLogo from "../../shadcn-logo";
import React, { useState } from "react";

const packageManagers = [
  { value: "npx", label: "npm" },
  { value: "bunx --bun", label: "bun" },
  { value: "pnpm dlx", label: "pnpm" },
  { value: "yarn dlx", label: "yarn" },
];

const getCommands = (packageManager: string, componentName: string) => [
  {
    label: "shadcn",
    icon: ShadcnLogo,
    code: `${packageManager} shadcn@latest add https://hex-ui.com/r/${componentName}.json`,
  },
  {
    label: "Namespace",
    icon: IconHexagon,
    code: `${packageManager} hex-ui@latest add ${componentName}`,
  },
];

interface SnippetBlockProps {
  componentName: string;
}

const SnippetBlock = ({ componentName }: SnippetBlockProps) => {
  const [packageManager, setPackageManager] = useState("npx");
  const commands = getCommands(packageManager, componentName);
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  // Update active command when package manager or component name changes
  React.useEffect(() => {
    const newCommands = getCommands(packageManager, componentName);
    const currentCommand = newCommands.find((cmd) => cmd.label === value);
    if (!currentCommand) {
      setValue(newCommands[0].label);
    }
  }, [packageManager, componentName, value]);

  return (
    <Snippet onValueChange={setValue} value={value}>
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger key={command.label} value={command.label}>
              <command.icon size={14} />
              <span>{command.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <div className="flex items-center gap-2">
          <Select value={packageManager} onValueChange={setPackageManager}>
            <SelectTrigger className="h-8 min-w-[80px]">
              <SelectValue placeholder="Package Manager" />
            </SelectTrigger>
            <SelectContent>
              {packageManagers.map((pm) => (
                <SelectItem key={pm.value} value={pm.value}>
                  {pm.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {activeCommand && (
            <SnippetCopyButton
              onCopy={() =>
                console.log(`Copied "${activeCommand.code}" to clipboard`)
              }
              onError={() =>
                console.error(
                  `Failed to copy "${activeCommand.code}" to clipboard`,
                )
              }
              value={activeCommand.code}
            />
          )}
        </div>
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};

export default SnippetBlock;
