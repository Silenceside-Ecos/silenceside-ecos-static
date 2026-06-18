import { allAceites } from "@/lib/services/aceites";
import {
  allProducts,
  kitsApoyo,
  velasChispas,
  velasDespertar,
  velasEnergia,
} from "@/lib/services/productos";
import type {
  Aceite,
  KitProduct,
  Product,
  VelaProduct,
} from "@/lib/types/productos";

const productMaps = {
  all: new Map<string, Product>(
    allProducts.map((product) => [product.id, product]),
  ),
  kit: new Map<string, KitProduct>(kitsApoyo.map((kit) => [kit.id, kit])),
  vela: new Map<string, VelaProduct>(
    [...velasDespertar, ...velasChispas, ...velasEnergia].map((vela) => [
      vela.id,
      vela,
    ]),
  ),
};

export const aceitesById = new Map<string, Aceite>(
  allAceites.map((aceite) => [aceite.id, aceite]),
);

export function getProductById(id: string): Product | undefined {
  return productMaps.all.get(id);
}

export function getKitById(id: string): KitProduct | undefined {
  return productMaps.kit.get(id);
}

export function getVelaById(id: string): VelaProduct | undefined {
  return productMaps.vela.get(id);
}

export function getAceiteById(id: string): Aceite | undefined {
  return aceitesById.get(id);
}

export function selectProductsByIds(ids: readonly string[]): Product[] {
  return ids
    .map((id) => getProductById(id))
    .filter((item): item is Product => item != null);
}

export function selectKitsByIds(ids: readonly string[]): KitProduct[] {
  return ids
    .map((id) => getKitById(id))
    .filter((item): item is KitProduct => item != null);
}

export function selectVelasByIds(ids: readonly string[]): VelaProduct[] {
  return ids
    .map((id) => getVelaById(id))
    .filter((item): item is VelaProduct => item != null);
}

export function computeKitPrice(kit: KitProduct): number {
  return selectProductsByIds(kit.contenido).reduce(
    (sum, product) => sum + product.price,
    0,
  );
}

export function resolveProductTitle(id: string): string {
  return getProductById(id)?.title ?? id;
}

export function resolveAceiteLabel(id: string): string {
  return getAceiteById(id)?.nombre ?? id;
}
