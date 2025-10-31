import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  title: string;
  href: string;
  description?: string;
}

interface ComponentNavigationProps {
  previous?: NavigationItem;
  next?: NavigationItem;
  className?: string;
}

export function ComponentNavigation({
  previous,
  next,
  className,
}: ComponentNavigationProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:justify-between",
        "py-8 mb-10",
        className
      )}
    >
      {previous ? (
        <Link href={previous.href} className="flex-1">
          <Button
            variant="default"
            className="w-full cursor-pointer h-auto p-4 justify-start text-left group hover:bg-muted bg-muted/50 hover:shadow-none shadow-sm border dark:border-neutral-700 border-neutral-200"
          >
            <div className="flex items-center gap-3">
              <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">
                  Previous
                </div>
                <div className="font-medium text-foreground">
                  {previous.title}
                </div>
                {previous.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {previous.description}
                  </div>
                )}
              </div>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link href={next.href} className="flex-1">
          <Button
            variant="default"
            className="w-full h-auto p-4 justify-end text-right group hover:bg-muted bg-muted/50 cursor-pointer shadow-sm hover:shadow-none border border-neutral-200 transition duration-200 ease-in-out dark:border-neutral-700/90"
          >
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Next</div>
                <div className="font-medium text-foreground">{next.title}</div>
                {next.description && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {next.description}
                  </div>
                )}
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
