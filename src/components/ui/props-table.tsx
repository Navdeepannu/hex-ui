import React from "react";
import { cn } from "@/lib/utils";

export interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  data: PropItem[];
  className?: string;
}

export function PropsTable({ data, className }: PropsTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border bg-background",
        className
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b dark:bg-[#262626] bg-muted">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Default
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((prop, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-muted px-2 py-1 text-sm font-mono text-foreground">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="text-xs text-red-500 font-medium">
                        *
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <code className="text-muted-foreground font-mono text-xs">
                    {prop.type}
                  </code>
                </td>
                <td className="px-6 py-4 text-sm">
                  {prop.default ? (
                    <code className="rounded bg-muted/50 px-2 py-1 text-xs font-mono text-muted-foreground">
                      {prop.default}
                    </code>
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
