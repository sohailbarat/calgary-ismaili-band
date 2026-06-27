import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { instruments } from "@/data/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/learn",
    "/tutorials",
    "/gallery",
    "/videos",
    "/events",
    "/book-the-band",
    "/registration",
    "/donate",
    "/contact",
  ];

  const instrumentPages = instruments.map(
    (instrument) => `/learn/${instrument.slug}`
  );

  const allPages = [...staticPages, ...instrumentPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/learn/") ? 0.7 : 0.8,
  }));
}
