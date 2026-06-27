import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/services/productos";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/productos",
  "/experiencias",
  "/espacios",
  "/privacidad",
  "/terminos",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: absoluteUrl(`/productos/${product.id}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...productEntries];
}
