import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import { ProductDetail } from "@/components/product-detail";
import { allProducts } from "@/lib/services/productos";
import {
  getPrimaryProductImage,
  getProductById,
} from "@/lib/services/registry";

type PageParams = {
  id: string;
};

export function generateStaticParams(): PageParams[] {
  return allProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { id } = params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Producto no encontrado | Silenceside Ecos",
      description: "El producto solicitado no existe en nuestro catálogo.",
    };
  }

  const primaryImage = getPrimaryProductImage(product);

  return {
    title: `${product.title} | Silenceside Ecos`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Silenceside Ecos`,
      description: product.description,
      images: primaryImage ? [primaryImage] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { id } = params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <PageHeader />
      <ProductDetail product={product} />
      <PageFooter />
    </main>
  );
}
