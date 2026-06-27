import { productImageRoutes } from "@/lib/services/product-image-routes";
import { getProductById } from "@/lib/services/registry";
import type { Product } from "@/lib/types/productos";

const LEGACY_PRODUCT_IMAGE_PREFIX = "/productos/";
const PRODUCT_IMAGE_PREFIX = "/productos-media/";

function normalizeProductImageRoute(route: string): string {
  return route.startsWith(LEGACY_PRODUCT_IMAGE_PREFIX)
    ? route.replace(LEGACY_PRODUCT_IMAGE_PREFIX, PRODUCT_IMAGE_PREFIX)
    : route;
}

export function getProductImages(productOrId: Product | string): string[] {
  const product =
    typeof productOrId === "string" ? getProductById(productOrId) : productOrId;

  if (!product) {
    return [];
  }

  const gallery = [
    ...(productImageRoutes[product.id] ?? []),
    ...(product.images ?? []),
    product.image,
  ]
    .filter((value): value is string => Boolean(value))
    .map((value) => value.trim())
    .map(normalizeProductImageRoute)
    .filter((value) => value.length > 0);

  return Array.from(new Set(gallery));
}

export function getPrimaryProductImage(
  productOrId: Product | string,
): string | undefined {
  return getProductImages(productOrId)[0];
}
