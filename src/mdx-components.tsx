import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Button } from "@/components/ui/button";
import { CodePreview } from "@/components/code-preview";
import { Input } from "@/components/ui/input";
import SnippetDemo from "@/components/ui/kibo-ui/snippet/snippet-demo";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    CodePreview,
    Button,
    Input,
    SnippetDemo,
    ...components,
  };
}
