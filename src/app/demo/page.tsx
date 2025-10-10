"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/acternity/sportlught";
import { cn } from "@/lib/utils";

export default function DemoPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductShowcase />
    </div>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      if (typeof window === "undefined") return;
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "About Us", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <motion.header
        initial={false}
        animate={{ y: scrolled ? 12 : 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto w-full max-w-6xl px-4",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-xl",
            scrolled
              ? "border-border/60 bg-background/40 supports-[backdrop-filter]:bg-background/30 border shadow-sm backdrop-blur-md"
              : undefined,
          )}
        >
          {/* Brand */}
          <Link href="#" className="flex items-center gap-2 px-2 py-2 md:px-3">
            <Image
              src="/images/cloudflow.png"
              alt="CloudFlow logo"
              loading="lazy"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="text-base font-semibold tracking-tight">
              CloudFlow
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden items-center gap-6 px-2 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 px-2 py-2 md:px-3">
            <Button
              asChild
              variant="ghost"
              className="border-accent hidden cursor-pointer rounded-lg border md:inline-flex"
            >
              <Link href="#login">Log in</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-9 cursor-pointer px-5 text-sm"
            >
              <Link href="#signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-28 pb-16 md:pt-36">
      <Spotlight />

      <div className="items-cente flex flex-col text-center">
        <div className="mb-4">
          <span className="border-primary/20 bg-primary/10 text-primary inline-flex items-center space-x-2 rounded-full border px-3 py-1 text-xs font-medium">
            Start Free 14-Day Trial
            <IconArrowRight className="size-6 rounded-full bg-black" />
          </span>
        </div>

        <h1 className="text-foreground mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
          Streamline Your Workflow Amplify Your Results
        </h1>

        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-sm text-pretty md:text-base">
          CloudFlow automates repetitive tasks and connects your favorite tools,
          helping teams save 15+ hours per week and boost productivity by 40%.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="px-6" variant="default">
            <Link href="#start">Start Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link href="#demo">Request a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mt-8">
        <div className="border-border/60 bg-card/70 supports-[backdrop-filter]:bg-card/50 relative overflow-hidden rounded-2xl border shadow-sm backdrop-blur">
          {/* Soften top edge only; remove restrictive center mask */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent dark:from-white/5" />

          {/* Skeleton demo in place of image */}
          <div className="relative aspect-[16/9] w-full p-2 md:p-3">
            <DashboardSkeleton />
          </div>
        </div>
      </div>
    </section>
  );
};

// A tasteful, subtle dashboard placeholder when no image is available.
const DashboardSkeleton = () => {
  return (
    <div className="border-border/60 from-background/60 to-background/30 h-full w-full rounded-xl border bg-gradient-to-b">
      {/* Header bar */}
      <div className="border-border/60 bg-card/70 flex items-center justify-between gap-4 border-b px-4 py-3">
        <div className="bg-foreground/10 h-5 w-24 rounded-md" />
        <div className="flex items-center gap-2">
          <div className="bg-foreground/10 h-8 w-8 rounded-md" />
          <div className="bg-foreground/10 h-8 w-8 rounded-md" />
          <div className="bg-foreground/10 h-8 w-8 rounded-md" />
        </div>
      </div>
      {/* Body grid */}
      <div className="grid h-[calc(100%-3rem)] grid-cols-12 gap-3 p-3 md:gap-4 md:p-4">
        {/* Sidebar */}
        <div className="border-border/50 col-span-3 hidden flex-col gap-2 rounded-md border border-dashed p-3 md:flex">
          <div className="bg-foreground/10 h-4 w-28 rounded" />
          <div className="bg-foreground/10 h-4 w-24 rounded" />
          <div className="bg-foreground/10 h-4 w-20 rounded" />
          <div className="bg-foreground/10 mt-2 h-4 w-16 rounded" />
          <div className="bg-foreground/10 h-4 w-24 rounded" />
        </div>
        {/* Main charts/cards */}
        <div className="col-span-12 flex flex-col gap-3 md:col-span-9 md:gap-4">
          <div className="border-border/60 bg-card/60 rounded-md border p-3 md:p-4">
            <div className="bg-foreground/10 mb-3 h-4 w-32 rounded" />
            <div className="bg-foreground/10 h-32 rounded" />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <div className="border-border/60 bg-card/60 rounded-md border p-3 md:p-4">
              <div className="bg-foreground/10 mb-3 h-4 w-24 rounded" />
              <div className="bg-foreground/10 h-16 rounded" />
            </div>
            <div className="border-border/60 bg-card/60 rounded-md border p-3 md:p-4">
              <div className="bg-foreground/10 mb-3 h-4 w-24 rounded" />
              <div className="bg-foreground/10 h-16 rounded" />
            </div>
            <div className="border-border/60 bg-card/60 rounded-md border p-3 md:p-4">
              <div className="bg-foreground/10 mb-3 h-4 w-24 rounded" />
              <div className="bg-foreground/10 h-16 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
