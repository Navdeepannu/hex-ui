"use client";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  type CodeBlockProps,
} from "@/components/kibo-ui/code-block";
import { cn } from "@/lib/utils";
import { FileCode, FileJson, FileText, FileType } from "lucide-react";
import { useState } from "react";

export interface CodeFile {
  id: string;
  name: string;
  language: string;
  code: string;
  path?: string;
}

export interface CodebaseSimpleProps {
  files: CodeFile[];
  defaultSelectedFile?: string;
  className?: string;
}

/**
 * Get the appropriate file icon based on the file extension
 */
function getFileIcon(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "json":
      return <FileJson className="h-4 w-4" />;
    case "md":
    case "txt":
      return <FileText className="h-4 w-4" />;
    case "tsx":
    case "ts":
    case "jsx":
    case "js":
      return <FileCode className="h-4 w-4" />;
    default:
      return <FileType className="h-4 w-4" />;
  }
}

export function CodebaseSimple({
  files,
  defaultSelectedFile,
  className,
}: CodebaseSimpleProps) {
  // Use filename for selection (matching CodeBlock's expectations)
  const defaultFile = files.find((f) => f.id === defaultSelectedFile) || files[0];
  const [selectedFile, setSelectedFile] = useState<string>(
    defaultFile?.name || ""
  );

  // Convert files to the format expected by CodeBlock
  const codeData: CodeBlockProps["data"] = files.map((file) => ({
    filename: file.name,
    language: file.language,
    code: file.code,
  }));

  return (
    <div
      className={cn(
        "grid size-full grid-cols-[280px_1fr] divide-x divide-neutral-200 dark:divide-neutral-800",
        className
      )}
    >
      {/* Simple File List */}
      <div className="size-full overflow-y-auto bg-neutral-50 p-4 dark:bg-neutral-950">
        <div className="space-y-1">
          <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Files
          </h3>
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setSelectedFile(file.name)}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors",
                selectedFile === file.name
                  ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
              )}
            >
              <span className="text-neutral-500 dark:text-neutral-400">
                {getFileIcon(file.name)}
              </span>
              <span className="truncate font-mono text-xs">{file.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Code Viewer */}
      <CodeBlock
        className="size-full overflow-y-auto rounded-none border-none bg-white dark:bg-black"
        data={codeData}
        onValueChange={(filename) => {
          setSelectedFile(filename);
        }}
        value={selectedFile}
      >
        <CodeBlockHeader className="border-b border-neutral-200 dark:border-neutral-800">
          <CodeBlockFiles>
            {(item) => (
              <CodeBlockFilename key={item.filename} value={item.filename}>
                {item.filename}
              </CodeBlockFilename>
            )}
          </CodeBlockFiles>
          <CodeBlockCopyButton />
        </CodeBlockHeader>
        <CodeBlockBody className="h-[calc(100%-3rem)]">
          {(item) => (
            <CodeBlockItem key={item.filename} value={item.filename}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>
    </div>
  );
}
