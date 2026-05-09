// ─── Store Products ───────────────────────────────────────────────────────────

export type ProductCategory = "libro" | "vela" | "guia" | "kit";

export type VelaCollection = "despertar" | "chispas" | "energia";

export interface Aceite {
  nombre: string;
  funcion: string;
}

interface BaseProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  featured?: boolean;
}

export interface LibroProduct extends BaseProduct {
  category: "Libro";
  series: string;
}

export interface VelaProduct extends BaseProduct {
  collection: VelaCollection;
  format: string;
  aceites: Aceite[];
  chakras: string;
  intencion: string;
  variantes?: string[];
}

export interface GuiaProduct extends BaseProduct {
  category: "Guía";
}

export interface KitProduct extends BaseProduct {
  category: "Colección de apoyo";
  contenido: string[];
}

export interface MaterialProduct extends BaseProduct {
  category: "Material";
}

export type Product =
  | LibroProduct
  | VelaProduct
  | GuiaProduct
  | KitProduct
  | MaterialProduct;
