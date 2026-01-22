import { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";

/**
 * Dynamic Sitemap Generator
 * Automatically generates sitemap with all routes and service categories
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avatarcleanpro.com";
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic service category pages (anchors)
  const serviceCategoryPages: MetadataRoute.Sitemap = serviceCategories.map(
    (category) => ({
      url: `${baseUrl}/services#${category.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...serviceCategoryPages];
}
