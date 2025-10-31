"use client";

import * as React from "react";
import Link from "next/link";
import { IconExternalLink, IconCopy, IconCheck } from "@tabler/icons-react";
import { Template } from "@/data/templates";
import { cn } from "@/lib/utils";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyCommand = async () => {
    await navigator.clipboard.writeText(template.cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      {/* Preview Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {template.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={template.image}
            alt={template.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-muted-foreground">Preview coming soon</span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40">
          <div className="flex h-full items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {template.demoUrl && (
              <Link
                href={template.demoUrl}
                target="_blank"
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105 dark:bg-neutral-900 dark:text-white"
              >
                <IconExternalLink size={16} />
                View Full Screen
              </Link>
            )}
          </div>
        </div>

        {/* New Badge */}
        {template.isNew && (
          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-blue-500 px-2.5 py-1 text-xs font-medium text-white">
              New
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {template.title}
          </h3>
          <span className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-muted-foreground dark:bg-neutral-800">
            {template.category}
          </span>
        </div>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {template.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-muted-foreground dark:bg-neutral-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CLI Command */}
        <div className="relative">
          <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-800/50">
            <code className="flex-1 overflow-x-auto text-xs text-foreground">
              {template.cliCommand}
            </code>
            <button
              onClick={handleCopyCommand}
              className={cn(
                "shrink-0 rounded-md p-1.5 transition-colors",
                copied
                  ? "bg-green-500/10 text-green-500"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-700"
              )}
              title="Copy command"
            >
              {copied ? (
                <IconCheck size={16} />
              ) : (
                <IconCopy size={16} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
