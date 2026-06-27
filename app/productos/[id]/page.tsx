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
import { absoluteUrl, buildBreadcrumbListJsonLd, SITE_NAME } from "@/lib/seo";

type PageParams = {
  id: string;
};

export function generateStaticParams(): PageParams[] {
  return allProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Producto no encontrado | Silenceside Ecos",
      description: "El producto solicitado no existe en nuestro catálogo.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const primaryImage = getPrimaryProductImage(product);
  const canonicalPath = `/productos/${product.id}/`;

  return {
    title: `${product.title} | Silenceside Ecos`,
    description: product.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      title: `${product.title} | Silenceside Ecos`,
      description: product.description,
      images: primaryImage ? [primaryImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Silenceside Ecos`,
      description: product.description,
      images: primaryImage ? [primaryImage] : undefined,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { id } = await params;
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
  const productUrl = absoluteUrl(`/productos/${product.id}/`);
  const imageUrls = images.map(absoluteUrl);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbListJsonLd(
        [
          { name: "Inicio", path: "/" },
          { name: "Tienda", path: "/productos/" },
          { name: product.title, path: `/productos/${product.id}/` },
        ],
        `/productos/${product.id}/`,
      ),
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        name: product.title,
        description: product.description,
        category: product.category,
        sku: product.id,
        image: imageUrls.length > 0 ? imageUrls : undefined,
        brand: {
          "@type": "Brand",
          name: SITE_NAME,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: price.toFixed(2),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: productUrl,
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
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
