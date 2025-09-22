import { source, componentsSource } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// Create search handlers for both sources
const docsSearch = createFromSource(source, {
  language: "english",
});

const componentsSearch = createFromSource(componentsSource, {
  language: "english",
});

// Combined search handler
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return Response.json([]);
  }

  try {
    // Search both sources in parallel
    const [docsResponse, componentsResponse] = await Promise.all([
      docsSearch.GET(request),
      componentsSearch.GET(request),
    ]);

    // Parse responses
    const docsResults = await docsResponse.json();
    const componentsResults = await componentsResponse.json();

    // Combine results - fumadocs returns array directly
    const combinedResults = [
      ...(Array.isArray(docsResults) ? docsResults : []),
      ...(Array.isArray(componentsResults) ? componentsResults : []),
    ];

    return Response.json(combinedResults);
  } catch (error) {
    console.error("Search error:", error);
    return Response.json([]);
  }
}
