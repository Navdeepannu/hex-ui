import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ComponentNavigation } from "@/components/ui/component-navigation";

export const metadata: Metadata = {
  title: "Introduction - Hex UI",
  description:
    "Learn what Hex UI is, how it's structured, and how to get started building beautiful interfaces.",
};

export default function IntroductionPage() {
  return (
    <>
      <article className="typography max-w-none">
        <h1>Introduction</h1>
        <p className="lead">
          Welcome to Hex UI—a modern component library built with React,
          Next.js, and Tailwind CSS. Get started in minutes and build beautiful,
          accessible interfaces.
        </p>

        <h2 className="">What is Hex UI?</h2>
        <p>
          Hex UI is a collection of beautifully designed, accessible React
          components with smooth animations and interactions. Built on top of
          industry-standard tools, it helps you create consistent, professional
          interfaces without starting from scratch.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>
            <strong>Copy & Paste Components</strong> — No package installations,
            just copy the code you need
          </li>
          <li>
            <strong>Fully Customizable</strong> — Built with Tailwind CSS for
            complete design control
          </li>
          <li>
            <strong>TypeScript First</strong> — Full type safety and
            IntelliSense support
          </li>
          <li>
            <strong>Accessible</strong> — ARIA patterns and keyboard navigation
            built-in
          </li>
          <li>
            <strong>Dark Mode</strong> — Beautiful themes for light and dark
            modes
          </li>
          <li>
            <strong>Animated</strong> — Smooth, performant animations using
            Framer Motion
          </li>
        </ul>

        <h2>Philosophy</h2>
        <p>
          Hex UI follows a copy-paste approach rather than an npm package. This
          gives you complete ownership and control over the components. Modify
          them to fit your needs, remove what you don&apos;t use, and keep your
          bundle size optimal.
        </p>

        <h2>Getting Started</h2>
        <p>Follow these steps to get up and running:</p>
        <ol>
          <li>
            <Link href="/docs/install-nextjs" className="font-medium">
              Install Next.js
            </Link>{" "}
            — Set up a new Next.js project
          </li>
          <li>
            <Link href="/docs/install-tailwindcss" className="font-medium">
              Install Tailwind CSS
            </Link>{" "}
            — Configure Tailwind in your project
          </li>
          <li>
            <Link href="/components" className="font-medium">
              Browse Components
            </Link>{" "}
            — Copy and paste the components you need
          </li>
        </ol>

        <h2>Tech Stack</h2>
        <p>Hex UI is built with modern, battle-tested technologies:</p>
        <ul>
          <li>
            <strong>React 19</strong> — Latest React features and improvements
          </li>
          <li>
            <strong>Next.js 15</strong> — App Router, Server Components, and
            more
          </li>
          <li>
            <strong>Tailwind CSS v4</strong> — Utility-first CSS framework
          </li>
          <li>
            <strong>Framer Motion</strong> — Production-ready animation library
          </li>
          <li>
            <strong>TypeScript</strong> — Type safety and better DX
          </li>
        </ul>

        <h2>Community & Support</h2>
        <p>
          Join our growing community of developers building with Hex UI. Get
          help, share your projects, and contribute to the library.
        </p>
      </article>

      <ComponentNavigation
        next={{
          title: "Install Next.js",
          href: "/docs/install-nextjs",
          description: "Set up a new Next.js project",
        }}
      />
    </>
  );
}
