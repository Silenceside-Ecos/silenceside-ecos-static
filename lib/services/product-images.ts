import { productImageRoutes } from "@/lib/services/product-image-routes";
import { getProductById } from "@/lib/services/registry";
import type { Product } from "@/lib/types/productos";

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
    .filter((value) => value.length > 0);

  return Array.from(new Set(gallery));
}

export function getPrimaryProductImage(
  productOrId: Product | string,
): string | undefined {
  return getProductImages(productOrId)[0];
}
