import type { MetadataRoute } from "next";

const siteUrl = "https://seserahanbymecca.snconnection.id";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/invoice", "/login"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
