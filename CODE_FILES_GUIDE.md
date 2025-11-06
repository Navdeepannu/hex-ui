# How to Add Code Files to Sections

This guide shows you how to add code files to your section components so they display in the code viewer.

## Structure

Each section can have a `files` array containing code files to display. The codebase component will show:
- **Left side**: Simple file list with icons
- **Right side**: Syntax-highlighted code with copy button

## Adding Files to a Section

Open [src/data/sections-registry.ts](src/data/sections-registry.ts) and add the `files` array to any section:

```typescript
{
  id: "hero-02",
  name: "Hero Section 02",
  category: "hero",
  component: Hero02,
  description: "Your description...",
  dependencies: ["framer-motion", "lucide-react"],
  installCommand: "npx shadcn@latest add https://hex-ui.com/r/hero-02",
  tags: ["split-layout", "mockup", "stats", "hexagon"],
  featured: true,
  files: [
    {
      id: "hero-02-component",
      name: "hero-02.tsx",
      language: "tsx",
      code: `// Your component code here
export function Hero02() {
  return <div>Hero Component</div>;
}`,
    },
    {
      id: "hero-02-header",
      name: "hero-header.tsx",
      language: "tsx",
      code: `// Sub-component code
export function HeroHeader() {
  return <header>Header</header>;
}`,
    },
    {
      id: "hero-02-usage",
      name: "page.tsx",
      language: "tsx",
      code: `import { Hero02 } from "@/components/sections/hero/hero-02/hero-02";

export default function Page() {
  return <Hero02 />;
}`,
    },
  ],
}
```

## File Object Properties

Each file in the `files` array has:

- **id** (string, required): Unique identifier for the file
- **name** (string, required): Filename displayed in the UI (e.g., "hero-01.tsx")
- **language** (string, required): Language for syntax highlighting (e.g., "tsx", "typescript", "javascript", "json", "css")
- **code** (string, required): The actual code content
- **path** (string, optional): Not currently used in display, but useful for organization

## Supported Languages

The code viewer supports all languages from Shiki, including:
- `tsx`, `typescript`, `ts`
- `jsx`, `javascript`, `js`
- `json`
- `css`, `scss`, `sass`
- `html`
- `markdown`, `md`
- And many more!

## Example: Complete Section with Multiple Files

Here's the hero-01 section with multiple code files:

```typescript
{
  id: "hero-01",
  name: "Hero Section 01",
  category: "hero",
  component: Hero01,
  description: "A modern hero section with animated grid background...",
  dependencies: ["framer-motion", "lucide-react"],
  installCommand: "npx shadcn@latest add https://hex-ui.com/r/hero-01",
  tags: ["gradient", "animated", "centered", "modern"],
  featured: true,
  files: [
    {
      id: "hero-01-component",
      name: "hero-01.tsx",
      language: "tsx",
      code: `"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero01() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Your component code */}
    </section>
  );
}`,
    },
    {
      id: "hero-01-usage",
      name: "page.tsx",
      language: "tsx",
      code: `import { Hero01 } from "@/components/sections/hero/hero-01/hero-01";

export default function Page() {
  return (
    <main>
      <Hero01 />
    </main>
  );
}`,
    },
    {
      id: "hero-01-dependencies",
      name: "package.json",
      language: "json",
      code: `{
  "dependencies": {
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.545.0"
  }
}`,
    },
  ],
}
```

## Copy & Paste Template

Use this template to quickly add files to your sections:

```typescript
files: [
  {
    id: "SECTION_ID-main",
    name: "COMPONENT_NAME.tsx",
    language: "tsx",
    code: `// Add your code here`,
  },
  {
    id: "SECTION_ID-usage",
    name: "page.tsx",
    language: "tsx",
    code: `import { ComponentName } from "@/components/sections/CATEGORY/SECTION_ID";

export default function Page() {
  return <ComponentName />;
}`,
  },
],
```

## Notes

- If you don't add a `files` array, a default usage example will be shown automatically
- The file list on the left is clickable - users can switch between files
- Each file gets syntax highlighting based on the `language` property
- The copy button copies the entire file content to clipboard
- Files are displayed in the order you define them in the array

## Quick Start

1. Open [src/data/sections-registry.ts](src/data/sections-registry.ts)
2. Find the section you want to add files to
3. Add the `files` array after the `featured` property
4. Add your code files using the structure above
5. Save and rebuild - your code will now be viewable!
