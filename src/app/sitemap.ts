import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllProjectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...getAllProjectSlugs().map((slug) => ({
      url: `${siteConfig.url}/projects/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
