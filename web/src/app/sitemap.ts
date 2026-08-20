import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abovecapture.com",
      lastModified: "2026-08-19",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
