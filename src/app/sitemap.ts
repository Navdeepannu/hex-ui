import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hex-ui.com";

  const routes = [
    "",
    "/templates",
    "/pricing",
    "/docs",
    "/docs/introduction",
    "/docs/install-nextjs",
    "/docs/install-tailwindcss",
    "/components",
    "/components/background-ripple-effect",
    "/components/animated-text",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/templates" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/templates" || route === "/pricing" ? 0.9 : 0.7,
  }));
}
