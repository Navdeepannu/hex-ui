import {
  IconBrandX,
  IconHexagon,
  IconHexagonFilled,
  IconHexagonLetterE,
  IconHexagonLetterH,
  IconHexagonLetterHFilled,
  IconHexagonLetterX,
} from "@tabler/icons-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { LogoCompact } from "@/components/ui/logo";
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
        <div className="flex items-center gap-2">
          <LogoCompact size={24} />
          <span className="font-semibold">Hex UI</span>
        </div>
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
