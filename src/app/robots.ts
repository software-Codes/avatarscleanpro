import { MetadataRoute } from "next";

/**
 * Robots.txt Configuration
 * Controls how search engines crawl the site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://avatarcleanpro.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
