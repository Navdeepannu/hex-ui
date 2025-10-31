import * as React from "react";
import type { Metadata } from "next";
import { CodeTabs } from "@/components/animate-ui/components/code-tabs";

export const metadata: Metadata = {
  title: "Install Tailwind CSS",
  description:
    "Install Tailwind CSS v4 and v3 in your Next.js project with step-by-step instructions",
};

const INSTALL_V4 = {
  npm: `npm install tailwindcss@next @tailwindcss/postcss@next`,
  bun: `bun add tailwindcss@next @tailwindcss/postcss@next`,
  pnpm: `pnpm add tailwindcss@next @tailwindcss/postcss@next`,
  yarn: `yarn add tailwindcss@next @tailwindcss/postcss@next`,
};

const INSTALL_V3 = {
  npm: `npm install -D tailwindcss postcss autoprefixer`,
  bun: `bun add -D tailwindcss postcss autoprefixer`,
  pnpm: `pnpm add -D tailwindcss postcss autoprefixer`,
  yarn: `yarn add -D tailwindcss postcss autoprefixer`,
};

const INIT_V3 = {
  npm: `npx tailwindcss init -p`,
  bun: `bunx tailwindcss init -p`,
  pnpm: `pnpm dlx tailwindcss init -p`,
  yarn: `yarn dlx tailwindcss init -p`,
};

export default function InstallTailwinCSS() {
  return (
    <div>
      <article
        className=" 
      typography"
      >
        <h2 className="border-none">Install Tailwind CSS</h2>

        <h2 className="border-none">Tailwind CSS v4</h2>
      </article>

      <CodeTabs codes={INSTALL_V4} className="max-w-2xl" />

      <article className="typography mt-10">
        <h3>Configure PostCSS (v4)</h3>
        <p>
          Create a <code>postcss.config.mjs</code> file in your project root:
        </p>
      </article>

      <div>
        <div className="bg-muted/50 rounded-xl border overflow-hidden max-w-2xl">
          <div className="bg-muted border-b border-border/75 px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              postcss.config.mjs
            </span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre>
              <code>{`const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;`}</code>
            </pre>
          </div>
        </div>
      </div>

      <article className="typography mt-10">
        <h3 className="text-lg font-medium">Add Tailwind to your CSS (v4)</h3>
        <p>
          Add the Tailwind directives to your CSS file (e.g.,{" "}
          <code>globals.css</code>):
        </p>
      </article>

      <div>
        <div className="bg-muted/50 rounded-xl border overflow-hidden max-w-2xl">
          <div className="bg-muted border-b border-border/75 px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              app/globals.css
            </span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre>
              <code>{`@import "tailwindcss";`}</code>
            </pre>
          </div>
        </div>
      </div>

      <article className="typography mt-10">
        <h2 className="border-none">Tailwind CSS v3 (Stable)</h2>
      </article>

      <div className="my-6">
        <CodeTabs codes={INSTALL_V3} className="max-w-2xl" />
      </div>

      <article className="typograohy">
        <h3>Initialize Tailwind CSS (v3)</h3>
      </article>

      <div className="my-6">
        <CodeTabs codes={INIT_V3} className="max-w-2xl" />
      </div>

      <article className="typography">
        <section className="space-y-4">
          <p>
            Update your <code>tailwind.config.js</code> file to include paths to
            your template files:
          </p>
        </section>
      </article>

      <div className="my-6 max-w-2xl">
        <div className="bg-muted/50 rounded-xl border overflow-hidden">
          <div className="bg-muted border-b border-border/75 px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              tailwind.config.js
            </span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre>
              <code>{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <article className="typography">
        <section className="space-y-4">
          <h3>Add Tailwind to your CSS (v3)</h3>
        </section>
      </article>

      <div className="my-6 max-w-2xl">
        <div className="bg-muted/50 rounded-xl border overflow-hidden">
          <div className="bg-muted border-b border-border/75 px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              app/globals.css
            </span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <pre>
              <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
            </pre>
          </div>
        </div>
      </div>

      <article className="typography">
        <section className="mt-8 space-y-4">
          <h2 className="border-none">Verify Installation</h2>
          <p>
            Start your development server and add some Tailwind classes to
            verify everything is working:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto ">
            <code>{`<h1 className="text-3xl font-bold underline text-blue-600">
  Hello world!
</h1>`}</code>
          </pre>
          <p>
            If the text appears blue, bold, and underlined, Tailwind CSS is
            working correctly!
          </p>
        </section>
      </article>
    </div>
  );
}
