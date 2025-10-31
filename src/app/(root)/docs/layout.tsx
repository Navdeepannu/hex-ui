"use client";

import * as React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/landing/navbar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Navbar />
      {/* Mobile-only sidebar mount to power the Sheet */}
      <div className="px-4 md:hidden">
        <AppSidebar />
      </div>
      <div className="mx-auto w-full 2xl:max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,16rem)_1fr] lg:grid-cols-[minmax(0,18rem)_1fr]">
          {/* Left: sticky desktop sidebar; hidden on mobile */}
          <aside className="sticky top-[var(--sidebar-top)] z-10 hidden h-[calc(100vh-var(--sidebar-top))] md:block">
            <div className="py-6 pr-4 pl-6">
              <AppSidebar collapsible="none" />
            </div>
          </aside>

          {/* Right: main content */}
          <main className="w-full min-w-0 px-6 py-10 lg:px-12 lg:py-12">
            <div className="max-w-4xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
