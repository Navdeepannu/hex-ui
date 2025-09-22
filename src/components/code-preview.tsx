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

import { IconCode, IconEye, IconSourceCode } from "@tabler/icons-react";
// removed unused Tabler icon imports
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
  const showSource = Boolean(source?.data?.length);
  const showCode = Boolean(code?.data?.length);
  const viewportHeight =
    typeof codeHeight === "number"
      ? `${codeHeight}px`
      : (codeHeight ?? "400px");

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
        className
      )}
      {...props}
    >
      <Tabs defaultValue={defaultTab}>
        <div className="flex items-center justify-between gap-2">
          <TabsList className="bg-accent border-b dark:border-neutral-800 flex-1 flex-wrap">
            {preview && (
              <TabsTrigger value="preview">
                <IconEye className="mr-1 size-5" />
                Preview
              </TabsTrigger>
            )}
            {showSource && (
              <TabsTrigger value="source">
                <IconSourceCode className="mr-1 size-5 " /> Source
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
            <div style={{ height: viewportHeight }}>
              <div className="bg-background flex h-full w-full items-center justify-center rounded-b-lg">
                {preview}
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
                <CodeBlock
                  defaultValue={code?.defaultValue ?? code!.data[0].language}
                  data={code!.data}
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
                              code?.defaultValue ?? code!.data[0].language
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
      </Tabs>
      {/* Fullscreen overlay removed: redirect button now opens /preview/{componentName} */}
    </div>
  );
}

export default CodePreview;
