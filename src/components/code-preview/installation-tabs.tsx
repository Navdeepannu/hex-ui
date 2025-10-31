"use client";

import React from "react";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "../animate-ui/primitives/animate/tabs";
import {
  Code,
  CodeBlock,
  CodeHeader,
} from "../animate-ui/components/animate/code";
import { CodeTabs } from "../animate-ui/components/code-tabs";
import { IconTerminal, IconFileCode } from "@tabler/icons-react";

interface InstallationTabsProps {
  cliCodes: Record<string, string>;
  manualCode: string;
  fileName?: string;
  defaultTab?: "cli" | "manual";
  className?: string;
}

const InstallationTabs = ({
  cliCodes,
  manualCode,
  fileName = "component.tsx",
  defaultTab = "cli",
  className,
}: InstallationTabsProps) => {
  return (
    <div className={className}>
      <Tabs defaultValue={defaultTab}>
        <TabsList className="mb-4 flex items-center gap-2">
          <TabsTrigger
            value="cli"
            className="text-muted-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-foreground flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all data-[state=active]:font-medium"
          >
            <IconTerminal
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            CLI
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className="text-muted-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-foreground flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all data-[state=active]:font-medium"
          >
            <IconFileCode
              size={18}
              className="transition-transform group-hover:scale-110"
            />
            Manual
          </TabsTrigger>
        </TabsList>

        <TabsContents>
          <TabsContent value="cli" className="overflow-hidden rounded-lg">
            <CodeTabs codes={cliCodes} className="max-w-full" />
          </TabsContent>

          <TabsContent value="manual" className="overflow-hidden rounded-lg">
            <Code className="rounded-lg" code={manualCode}>
              <CodeHeader icon={IconFileCode} copyButton>
                {fileName}
              </CodeHeader>
              <CodeBlock lang="tsx" />
            </Code>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
};

export default InstallationTabs;
