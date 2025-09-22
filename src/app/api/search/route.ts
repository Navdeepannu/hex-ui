import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// Start with just docs search to test if text visibility works
export const { GET } = createFromSource(source, {
  language: "english",
});
