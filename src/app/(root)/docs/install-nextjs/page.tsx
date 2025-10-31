import * as React from "react";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/animate-ui/components/code-tabs";
import { ComponentNavigation } from "@/components/ui/component-navigation";

export const metadata: Metadata = {
  title: "Install Next.js - Hex UI",
  description:
    "Install Next.js with Create Next App using your preferred package manager",
};

const CODES = {
  npm: `npx create-next-app@latest my-app`,
  bun: `bun create next-app@latest my-app`,
  pnpm: `pnpm create next-app@latest my-app`,
  yarn: `yarn create next-app my-app`,
};

const RUNAPP = {
  npm: `npm run dev`,
  bun: `bun dev`,
  pnpm: `pnpm dev`,
  yarn: `yarn dev`,
};

export default function InstallNextjsPage() {
  return (
    <>
      <article className="typography max-w-none">
        <h1>Install Next.js</h1>
        <p className="lead">
          Set up a new Next.js project with your preferred package manager.
          This guide uses Create Next App, the official Next.js starter.
        </p>

        <h2>Create a new project</h2>
        <p>
          Run the following command to create a new Next.js application. The
          interactive CLI will guide you through the setup process.
        </p>
      </article>

      <CodeTabs codes={CODES} className="max-w-2xl mt-6" />

      <article className="typography mt-10 max-w-none">
        <h2>Configure your project</h2>
        <p>
          When prompted, configure your project with the following recommended
          settings for Hex UI:
        </p>
      </article>

      <div className="mt-6 max-w-2xl">
        <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden">
          <div className="p-6 font-mono text-sm space-y-3">
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>What is your project named?</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                my-app
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to use TypeScript?</span>
              <span className="text-muted-foreground">No / </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Yes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to use ESLint?</span>
              <span className="text-muted-foreground">No / </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Yes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to use Tailwind CSS?</span>
              <span className="text-muted-foreground">No / </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Yes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to use `src/` directory?</span>
              <span className="text-muted-foreground">No / </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Yes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to use App Router? (recommended)</span>
              <span className="text-muted-foreground">No / </span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Yes
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-muted-foreground">?</span>
              <span>Would you like to customize the import alias (@/*)?</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                No
              </span>
              <span className="text-muted-foreground"> / Yes</span>
            </div>
          </div>
        </div>
      </div>

      <article className="typography mt-10 max-w-none">
        <h2>Run the development server</h2>
        <p>
          Navigate to your project directory and start the development server:
        </p>
      </article>

      <CodeTabs codes={RUNAPP} className="max-w-2xl mt-6" />

      <article className="typography mt-10 max-w-none">
        <p>
          Open{" "}
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000
          </a>{" "}
          in your browser to see your application.
        </p>

        <h2>Next steps</h2>
        <p>
          Now that you have Next.js installed, the next step is to install and
          configure Tailwind CSS v4.
        </p>
      </article>

      <ComponentNavigation
        previous={{
          title: "Introduction",
          href: "/docs/introduction",
          description: "Learn about Hex UI",
        }}
        next={{
          title: "Install Tailwind CSS",
          href: "/docs/install-tailwindcss",
          description: "Configure Tailwind CSS v4",
        }}
      />
    </>
  );
}
