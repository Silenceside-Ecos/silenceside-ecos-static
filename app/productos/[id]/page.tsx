import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import { ProductDetail } from "@/components/product-detail";
import { allProducts } from "@/lib/services/productos";
import {
  computeKitPrice,
  resolveAceiteLabel,
  resolveProductTitle,
  getProductById,
} from "@/lib/services/registry";
import {
  getProductImages,
  getPrimaryProductImage,
} from "@/lib/services/product-images";

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

  const images = getProductImages(product);
  const primaryImage = images[0];
  const price =
    product.category === "Colección de apoyo"
      ? computeKitPrice(product)
      : product.price;
  const aceiteLabels =
    "aceites" in product ? product.aceites.map(resolveAceiteLabel) : [];
  const relatedProducts =
    product.category === "Colección de apoyo"
      ? product.contenido.map((relatedId) => ({
          id: relatedId,
          title: resolveProductTitle(relatedId),
        }))
      : [];

  return (
    <main className="min-h-screen">
      <PageHeader />
      <ProductDetail
        product={product}
        images={images}
        primaryImage={primaryImage}
        price={price}
        aceiteLabels={aceiteLabels}
        relatedProducts={relatedProducts}
      />
      <PageFooter />
    </main>
  );
}
