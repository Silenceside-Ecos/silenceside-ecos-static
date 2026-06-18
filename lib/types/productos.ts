// ─── Store Products ───────────────────────────────────────────────────────────

export type ProductCategory = "libro" | "vela" | "guia" | "kit" | "material";

export type ProductDisplayCategory =
  | "Libro"
  | "Vela en Cristal"
  | "Set de Velas"
  | "Cera Derretida"
  | "Vela Decorativa"
  | "Guía"
  | "Colección de apoyo"
  | "Material";

export type VelaCollection = "despertar" | "chispas" | "energia";

export interface Aceite {
  id: string;
  nombre: string;
  funcion: string;
}

interface BaseProduct {
  id: string;
  title: string;
  category: ProductDisplayCategory;
  price: number;
  description: string;
  image?: string;
  images?: string[];
  featured?: boolean;
}

export interface LibroProduct extends BaseProduct {
  category: "Libro";
  series: string;
}

export interface VelaProduct extends BaseProduct {
  category:
    | "Vela en Cristal"
    | "Set de Velas"
    | "Cera Derretida"
    | "Vela Decorativa";
  collection: VelaCollection;
  format: string;
  aceites: string[];
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
