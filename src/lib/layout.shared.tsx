import { IconBrandX, IconHexagons } from "@tabler/icons-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/navdeepannu",
    nav: {
      title: (
        <>
          <IconHexagons />
          Hex UI
        </>
      ),
      url: "/",
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "Documentation",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Components",
        url: "/components",
        active: "nested-url",
      },
      {
        text: "Templates",
        url: "/templates",
        active: "nested-url",
      },
      {
        icon: <IconBrandX />,
        type: "icon",
        url: "/twitter",
        text: "X",
        secondary: true,
      },
    ],
  };
}
