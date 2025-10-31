"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionNavLink {
  id: string;
  label: string;
}

interface SectionNavbarProps {
  items: SectionNavLink[];
  activeId?: string;
  onItemClick?: (id: string) => void;
}

export function SectionNavbar({
  items,
  activeId,
  onItemClick,
}: SectionNavbarProps) {
  return (
    <div className="border border-neutral-300 bg-neutral-50 border-dotted">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav className="flex items-center gap-8 overflow-x-auto py-4">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick?.(item.id)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap text-sm font-medium transition-colors",
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-neutral-900" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

