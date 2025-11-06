"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { IconHexagon } from "@tabler/icons-react";

const menuItems = [
  { name: "About", href: "#link" },
  { name: "Solutions", href: "#link" },
  { name: "Features", href: "#link" },
  { name: "Pricing", href: "#link" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-4 pt-4 lg:px-6">
        <div className="shadow-premium-sm mx-auto flex max-w-7xl items-center justify-between gap-4 p-4 backdrop-blur-lg lg:px-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="home"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <IconHexagon />
            <span className="hidden sm:inline">Hex UI</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="absolute inset-0 m-auto hidden size-fit lg:flex">
            <ul className="flex items-center gap-8 text-sm">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-foreground block transition-colors duration-150"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden lg:flex">
            <Button asChild className="group relative rounded-none px-5">
              <Link href="#">
                <span>Login</span>
                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-full bg-linear-to-r from-transparent via-red-400 to-transparent"></span>
                <span className="absolute inset-x-0 bottom-0 mx-auto h-1 w-full bg-linear-to-r from-transparent via-red-300 to-transparent blur-sm group-hover:blur-lg"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            className="relative z-20 -m-2 block cursor-pointer p-2 lg:hidden"
          >
            <Menu className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
            <X className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "bg-background mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 lg:hidden",
            menuState ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
          )}
        >
          <div className="p-6">
            <ul className="space-y-4 text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground block transition-colors duration-150"
                    onClick={() => setMenuState(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild size="sm" className="w-full rounded-full">
                <Link href="#">
                  <span>Login</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
