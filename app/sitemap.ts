import type { MetadataRoute } from "next";

const baseUrl = "https://www.utdcyc.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/about/", "/services/", "/impact/", "/join/", "/contact/", "/team/"];
    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : ("monthly" as const),
        priority: path === "" ? 1 : 0.8,
    }));
}
