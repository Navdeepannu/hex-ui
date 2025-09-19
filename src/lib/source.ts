import { docs, components } from "@/.source";
import { loader } from "fumadocs-core/source";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

// Separate components source using its own collection
export const componentsSource = loader({
  baseUrl: "/components",
  source: components.toFumadocsSource(),
});

// Combined source for unified sidebar navigation
export const unifiedSource = {
  // Combine both page trees with section headers
  get pageTree() {
    try {
      const docsTree = source.pageTree;
      const componentsTree = componentsSource.pageTree;

      // Create a unified tree structure
      const unifiedTree = {
        name: "Documentation",
        children: [
          {
            type: "separator",
            name: "Getting Started",
          },
          // Spread docs pages
          ...(docsTree?.children || []),
          {
            type: "separator",
            name: "Components",
          },
          // Spread component pages
          ...(componentsTree?.children || []),
        ],
      };

      return unifiedTree;
    } catch (e) {
      console.error("Error creating unified page tree:", e);
      // Fallback to docs tree
      return source.pageTree;
    }
  },

  // Proxy methods to the appropriate source based on URL
  getPage(slug?: string[]) {
    // If no slug or starts with docs-related paths, use docs source
    if (!slug || slug.length === 0) {
      return source.getPage(slug);
    }

    // Route to appropriate source based on current path
    if (
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/components")
    ) {
      return componentsSource.getPage(slug);
    } else {
      return source.getPage(slug);
    }
  },

  generateParams() {
    try {
      const docsParams = source.generateParams() || [];
      const componentParams = componentsSource.generateParams() || [];
      return [...docsParams, ...componentParams];
    } catch (e) {
      return [];
    }
  },
};
