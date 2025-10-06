"use client";

import React from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFiles,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
  CodeBlockData,
} from "@/components/ui/kibo-ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BundledLanguage } from "shiki";

import {
  IconCode,
  IconEye,
  IconSourceCode,
  IconExternalLink,
  IconReload,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
type BlockConfig = {
  data: CodeBlockData[];
  defaultValue?: string; // language key matching CodeBlockData.language
};

export type CodePreviewProps = HTMLAttributes<HTMLDivElement> & {
  initialTab?: "preview" | "source" | "code";
  preview?: ReactNode;
  source?: BlockConfig;
  code?: BlockConfig;
  lineNumbers?: boolean;
  codeHeight?: number | string; // fixed height for code panes; enables vertical scroll
  // Optional initial width for preview device (in px). If omitted, uses full width.
  initialPreviewWidth?: number;
  componentName?: string;
};

export function CodePreview({
  className,
  initialTab = "preview",
  preview,
  source,
  code,
  lineNumbers = true,
  codeHeight,
  ...props
}: CodePreviewProps) {
  const [reloadKey, setReloadKey] = React.useState(0);

  const showSource = Boolean(source?.data?.length);
  const showCode = Boolean(code?.data?.length);
  const viewportHeight =
    typeof codeHeight === "number"
      ? `${codeHeight}px`
      : (codeHeight ?? "400px");

  // Function to handle preview reload
  const handleReload = () => {
    setReloadKey((prev) => prev + 1);
  };

  // Function to handle v0 opening
  const handleOpenInV0 = () => {
    // Get the first code block content for v0
    const rawCode = code?.data?.[0]?.code || source?.data?.[0]?.code || "";

    // Format the code for v0 - ensure it's a complete, renderable component
    const formattedPrompt = `Create this React component:

\`\`\`tsx
${rawCode}
\`\`\`

Please render this component and show me the preview.`;

    // Create v0 URL with the formatted prompt
    const v0Url = `https://v0.dev/chat?q=${encodeURIComponent(formattedPrompt)}`;
    window.open(v0Url, "_blank");
  };

  // Determine default tab based on provided content
  const defaultTab = ((): "preview" | "source" | "code" => {
    if (
      initialTab &&
      ((initialTab === "source" && showSource) ||
        (initialTab === "code" && showCode) ||
        initialTab === "preview")
    )
      return initialTab;
    if (preview) return "preview";
    if (showSource) return "source";
    return "code";
  })();

  const contentWidthStyle: CSSProperties = { width: "100%" };

  return (
    <div
      className={cn(
        "w-full rounded-lg border dark:border-neutral-800",
        className,
      )}
      {...props}
    >
      <Tabs defaultValue={defaultTab}>
        <div className="flex items-center justify-between gap-2">
          <TabsList className="bg-accent flex-1 flex-wrap border-b dark:border-neutral-800">
            {preview && (
              <TabsTrigger value="preview">
                <IconEye className="mr-1 size-5" />
                Preview
              </TabsTrigger>
            )}
            {showSource && (
              <TabsTrigger value="source">
                <IconSourceCode className="mr-1 size-5" /> Source
              </TabsTrigger>
            )}
            {showCode && (
              <TabsTrigger value="code">
                <IconCode className="mr-1 size-5" /> Code
              </TabsTrigger>
            )}
          </TabsList>
        </div>

        {preview && (
          <TabsContent value="preview">
            <div style={{ height: viewportHeight }} className="relative">
              {/* Action buttons positioned at top-right inside preview */}
              <div className="absolute top-4 right-4 z-[5] flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleReload}
                  className="h-8 cursor-pointer px-2 text-xs shadow-md"
                  title="Reload preview"
                >
                  <IconReload className="size-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleOpenInV0}
                  className="h-8 px-2 text-xs shadow-md"
                  title="Open in v0"
                >
                  Open in v0
                  <IconExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>

              {/* Preview content - centered */}
              <div className="bg-background relative flex h-full w-full items-center justify-center rounded-b-lg">
                <div
                  key={reloadKey}
                  className="flex h-full w-full items-center justify-center"
                >
                  {preview}
                </div>
              </div>
            </div>
          </TabsContent>
        )}

        {showSource && (
          <TabsContent value="source">
            <div className="flex justify-center">
              <div style={contentWidthStyle} className="w-full">
                <CodeBlock
                  defaultValue={
                    source?.defaultValue ?? source!.data[0].language
                  }
                  data={source!.data}
                >
                  <CodeBlockHeader className="justify-between">
                    <CodeBlockFiles
                      childrenAction={({
                        language,
                        filename,
                      }: CodeBlockData) => (
                        <CodeBlockFilename key={language} value={language}>
                          {filename}
                        </CodeBlockFilename>
                      )}
                    />
                    <div className="flex items-center gap-1">
                      <CodeBlockSelect>
                        <CodeBlockSelectTrigger>
                          <CodeBlockSelectValue
                            placeholder={
                              source?.defaultValue ?? source!.data[0].language
                            }
                          />
                        </CodeBlockSelectTrigger>
                        <CodeBlockSelectContent
                          childrenAction={({
                            language,
                            filename,
                          }: CodeBlockData) => (
                            <CodeBlockSelectItem
                              key={language}
                              value={language}
                            >
                              {filename}
                            </CodeBlockSelectItem>
                          )}
                        />
                      </CodeBlockSelect>
                      <CodeBlockCopyButton />
                    </div>
                  </CodeBlockHeader>
                  <CodeBlockBody
                    childrenAction={({ language, code }: CodeBlockData) => (
                      <CodeBlockItem
                        key={language}
                        value={language}
                        lineNumbers={lineNumbers}
                        style={
                          {
                            maxHeight:
                              typeof codeHeight === "number"
                                ? `${codeHeight}px`
                                : (codeHeight ?? "380px"),
                            overflow: "auto",
                          } as CSSProperties
                        }
                      >
                        <CodeBlockContent
                          language={language as BundledLanguage}
                        >
                          {code}
                        </CodeBlockContent>
                      </CodeBlockItem>
                    )}
                  />
                </CodeBlock>
              </div>
            </div>
          </TabsContent>
        )}

        {showCode && (
          <TabsContent value="code">
            <div className="flex justify-center">
              <div style={contentWidthStyle} className="w-full">
                {/* Show just the first code block directly without selection */}
                <CodeBlock
                  defaultValue={code!.data[0].language}
                  data={[code!.data[0]]} // Only show the first code block
                >
                  <CodeBlockHeader className="justify-end">
                    <div className="flex items-center gap-1">
                      <CodeBlockCopyButton />
                    </div>
                  </CodeBlockHeader>
                  <CodeBlockBody
                    childrenAction={({
                      language,
                      code: codeContent,
                    }: CodeBlockData) => (
                      <CodeBlockItem
                        key={language}
                        value={language}
                        lineNumbers={lineNumbers}
                        style={
                          {
                            maxHeight:
                              typeof codeHeight === "number"
                                ? `${codeHeight}px`
                                : (codeHeight ?? "380px"),
                            overflow: "auto",
                          } as CSSProperties
                        }
                      >
                        <CodeBlockContent
                          language={language as BundledLanguage}
                        >
                          {codeContent}
                        </CodeBlockContent>
                      </CodeBlockItem>
                    )}
                  />
                </CodeBlock>
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
      {/* Fullscreen overlay removed: redirect button now opens /preview/{componentName} */}
    </div>
  );
}

export default CodePreview;
