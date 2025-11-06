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
import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@/components/kibo-ui/tree";
import { FileCode, FileJson, FileText, FileType, Folder } from "lucide-react";
import { useState } from "react";

export interface CodeFile {
  id: string;
  name: string;
  language: string;
  code: string;
  path?: string;
}

export interface CodebaseProps {
  files: CodeFile[];
  defaultSelectedFile?: string;
  className?: string;
}

interface TreeNode {
  name: string;
  type: "file" | "folder";
  id?: string;
  children?: TreeNode[];
}

/**
 * Build a hierarchical tree structure from flat file paths
 */
function buildFileTree(files: CodeFile[]): TreeNode[] {
  const root: TreeNode = { name: "root", type: "folder", children: [] };

  files.forEach((file) => {
    const parts = file.path ? file.path.split("/") : [file.name];
    let current = root;

    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;

      if (!current.children) {
        current.children = [];
      }

      let node = current.children.find((child) => child.name === part);

      if (!node) {
        node = {
          name: part,
          type: isLast ? "file" : "folder",
          id: isLast ? file.id : undefined,
          children: isLast ? undefined : [],
        };
        current.children.push(node);
      }

      if (!isLast) {
        current = node;
      }
    });
  });

  return root.children || [];
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

/**
 * Recursively render tree nodes
 */
function renderTreeNode(
  node: TreeNode,
  level: number = 0,
  isLast: boolean = false
): React.ReactNode {
  if (node.type === "file" && node.id) {
    return (
      <TreeNode key={node.id} nodeId={node.id} level={level} isLast={isLast}>
        <TreeNodeTrigger>
          <TreeExpander />
          <TreeIcon icon={getFileIcon(node.name)} />
          <TreeLabel>{node.name}</TreeLabel>
        </TreeNodeTrigger>
      </TreeNode>
    );
  }

  if (node.type === "folder" && node.children) {
    const folderId = `folder-${node.name}-${level}`;
    return (
      <TreeNode key={folderId} nodeId={folderId} level={level} isLast={isLast}>
        <TreeNodeTrigger>
          <TreeExpander hasChildren />
          <TreeIcon hasChildren icon={<Folder className="h-4 w-4" />} />
          <TreeLabel>{node.name}</TreeLabel>
        </TreeNodeTrigger>
        <TreeNodeContent hasChildren>
          {node.children.map((child, index) =>
            renderTreeNode(
              child,
              level + 1,
              index === node.children!.length - 1
            )
          )}
        </TreeNodeContent>
      </TreeNode>
    );
  }

  return null;
}

/**
 * Get all folder IDs for default expansion
 */
function getAllFolderIds(nodes: TreeNode[], level: number = 0): string[] {
  const ids: string[] = [];
  nodes.forEach((node) => {
    if (node.type === "folder") {
      ids.push(`folder-${node.name}-${level}`);
      if (node.children) {
        ids.push(...getAllFolderIds(node.children, level + 1));
      }
    }
  });
  return ids;
}

export function Codebase({
  files,
  defaultSelectedFile,
  className,
}: CodebaseProps) {
  // Use filename for selection (matching CodeBlock's expectations)
  const defaultFile = files.find((f) => f.id === defaultSelectedFile) || files[0];
  const [selectedFile, setSelectedFile] = useState<string>(
    defaultFile?.name || ""
  );

  // Build the file tree structure
  const fileTree = buildFileTree(files);

  // Get all folder IDs for default expansion
  const defaultExpandedIds = getAllFolderIds(fileTree);

  // Convert files to the format expected by CodeBlock
  const codeData: CodeBlockProps["data"] = files.map((file) => ({
    filename: file.name,
    language: file.language,
    code: file.code,
  }));

  const handleFileSelect = (fileId: string) => {
    const file = files.find((f) => f.id === fileId);
    if (file) {
      setSelectedFile(file.name);
    }
  };

  // Get the currently selected file ID for tree selection
  const selectedFileId = files.find((f) => f.name === selectedFile)?.id || "";

  return (
    <div
      className={className || "grid size-full grid-cols-[300px_1fr] divide-x"}
    >
      {/* File Explorer */}
      <div className="size-full overflow-y-auto bg-neutral-50 dark:bg-neutral-950">
        <TreeProvider
          defaultExpandedIds={defaultExpandedIds}
          onSelectionChange={(ids) => {
            if (ids.length > 0) {
              handleFileSelect(ids[0]);
            }
          }}
          selectedIds={selectedFileId ? [selectedFileId] : []}
        >
          <TreeView className="p-4">
            {fileTree.map((node, index) =>
              renderTreeNode(node, 0, index === fileTree.length - 1)
            )}
          </TreeView>
        </TreeProvider>
      </div>

      {/* Code Viewer */}
      <CodeBlock
        className="size-full overflow-y-auto rounded-none border-none"
        data={codeData}
        onValueChange={(filename) => {
          setSelectedFile(filename);
        }}
        value={selectedFile}
      >
        <CodeBlockHeader>
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
