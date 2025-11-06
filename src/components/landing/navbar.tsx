"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  IconBrandGithub,
  IconBrandX,
  IconMoon,
  IconSearch,
  IconMenu2,
  IconSun,
  IconHexagon,
} from "@tabler/icons-react";
import { useSidebar } from "@/components/ui/sidebar";
import { CommandPalette } from "@/components/command-palette";
import { Kbd, KbdGroup } from "../ui/kbd";
import { cn } from "@/lib/utils";

export function Navbar({ template, className }: { template?: boolean; className?: string }) {
  const { toggleSidebar } = useSidebar();
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll detection for template mode
  React.useEffect(() => {
    if (!template) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [template]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "/docs/introduction", label: "Documentation" },
    { href: "/components", label: "Components" },
    { href: "/templates", label: "Templates" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/docs/introduction") {
      return pathname?.startsWith("/docs");
    }
    if (href === "/components") {
      return pathname?.startsWith("/components");
    }
    if (href === "/templates") {
      return pathname?.startsWith("/templates");
    }
    return pathname === href;
  };

  return (
    <>
      <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />

      <nav
        className={cn(
          template
            ? "top-0 z-50 w-full bg-white/70 text-zinc-700 backdrop-blur-2xl dark:bg-black dark:text-white"
            : "sticky top-0 z-50 w-full bg-white/70 px-6 text-black backdrop-blur-xl dark:bg-black dark:text-white",
          className
        )}
      >
        <div className="mx-auto flex w-full items-center justify-between px-2 py-3 2xl:max-w-344">
          <div className="flex items-center space-x-4">
            <Link href="/" className="group flex items-center space-x-1">
              <IconHexagon strokeWidth={3} className="size-6" />
              <span className="hidden text-xl font-bold tracking-tight lg:flex">Hex UI</span>
            </Link>

            <div className="hidden space-x-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="group text-muted-foreground relative hidden items-center gap-2 rounded-lg border border-neutral-200 bg-white/50 px-3 py-1.5 text-sm backdrop-blur-sm transition-all hover:border-neutral-300 sm:flex dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
            >
              <IconSearch className="h-4 w-4" />
              <span className="flex-1 text-left">Search Components</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:text-foreground text-muted-foreground rounded-full transition-colors hover:bg-transparent"
            >
              {!mounted ? (
                <IconMoon className="h-5 w-5" />
              ) : resolvedTheme !== "dark" ? (
                <IconMoon className="h-5 w-5" />
              ) : (
                <IconSun className="h-5 w-5" />
              )}
            </Button>

            {/* mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="hover:text-foreground text-muted-foreground rounded-full transition-colors hover:bg-transparent md:hidden"
              aria-label="Open sidebar menu"
            >
              <IconMenu2 className="h-5 w-5" />
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-foreground text-muted-foreground hidden rounded-full transition-colors hover:bg-transparent md:inline-flex"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub className="h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-foreground text-muted-foreground hidden rounded-full transition-colors hover:bg-transparent md:inline-flex"
            >
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <IconBrandX className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
