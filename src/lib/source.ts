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

// Export both sources for use in search API
// The search will handle combining results manually

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

  // Proxy methods to route to appropriate source based on context
  getPage(slug?: string[]) {
    // If no slug, return undefined
    if (!slug || slug.length === 0) {
      return undefined;
    }

    // Check if it's a component page by looking at current context
    // For server-side (search), try both sources
    const componentPage = componentsSource.getPage(slug);
    if (componentPage) {
      return componentPage;
    }

    // If not found in components, try docs source
    const docsPage = source.getPage(slug);
    if (docsPage) {
      return docsPage;
    }

    return undefined;
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
