"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Feather,
  Flame,
  Heart,
  Sparkles,
} from "lucide-react";
import type { Product } from "@/lib/types/productos";
import {
  computeKitPrice,
  getAceiteById,
  getProductById,
  getProductImages,
  getPrimaryProductImage,
} from "@/lib/services/registry";

function ProductFallbackIcon({ category }: { category: Product["category"] }) {
  if (category === "Libro") {
    return (
      <BookOpen size={64} strokeWidth={0.75} className="text-primary/35" />
    );
  }

  if (category === "Guía") {
    return <Feather size={64} strokeWidth={0.75} className="text-primary/35" />;
  }

  if (category === "Colección de apoyo") {
    return <Heart size={64} strokeWidth={0.75} className="text-primary/35" />;
  }

  if (category === "Cera Derretida" || category === "Vela Decorativa") {
    return (
      <Sparkles size={64} strokeWidth={0.75} className="text-primary/35" />
    );
  }

  return <Flame size={64} strokeWidth={0.75} className="text-primary/35" />;
}

export function ProductDetail({ product }: { product: Product }) {
  const images = useMemo(() => getProductImages(product), [product]);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    getPrimaryProductImage(product),
  );

  const price =
    product.category === "Colección de apoyo"
      ? computeKitPrice(product)
      : product.price;

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 font-sans text-sm text-primary hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          Volver a tienda
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <div className="aspect-square bg-card border border-border relative overflow-hidden">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ProductFallbackIcon category={product.category} />
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {images.map((image, index) => (
                  <button
                    key={`${product.id}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`aspect-square border overflow-hidden relative transition-colors ${
                      image === selectedImage
                        ? "border-primary"
                        : "border-border hover:border-primary/40"
                    }`}
                    aria-label={`Ver imagen ${index + 1} de ${product.title}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} imagen ${index + 1}`}
                      fill
                      sizes="(max-width: 1023px) 25vw, 12vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="font-sans text-xs text-primary tracking-[0.18em] uppercase">
              {product.category}
            </span>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-foreground uppercase leading-tight">
              {product.title}
            </h1>

            <p className="mt-6 font-sans text-muted-foreground leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex items-center gap-6 border-y border-border py-5">
              <span className="font-serif text-3xl text-primary">{`$${price.toFixed(2)}`}</span>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wide hover:bg-accent transition-colors"
              >
                Solicitar
                <ArrowRight size={14} />
              </Link>
            </div>

            {product.category === "Vela en Cristal" ||
            product.category === "Set de Velas" ||
            product.category === "Cera Derretida" ||
            product.category === "Vela Decorativa" ? (
              <div className="mt-8 space-y-4">
                <p className="font-sans text-sm text-foreground/90">
                  <strong>Colección:</strong> {product.collection}
                </p>
                <p className="font-sans text-sm text-foreground/90">
                  <strong>Formato:</strong> {product.format}
                </p>
                <p className="font-sans text-sm text-foreground/90">
                  <strong>Chakras:</strong> {product.chakras}
                </p>
                <p className="font-sans text-sm text-foreground/90 italic">
                  <strong>Intención:</strong> {product.intencion}
                </p>
                {product.aceites.length > 0 && (
                  <p className="font-sans text-sm text-foreground/90">
                    <strong>Aceites:</strong>{" "}
                    {product.aceites
                      .map((id) => getAceiteById(id)?.nombre ?? id)
                      .join(", ")}
                  </p>
                )}
              </div>
            ) : null}

            {product.category === "Colección de apoyo" && (
              <div className="mt-8">
                <p className="font-serif text-lg tracking-wide uppercase text-foreground">
                  Contenido del kit
                </p>
                <ul className="mt-3 space-y-2">
                  {product.contenido.map((id, i) => {
                    const relatedProduct = getProductById(id);
                    return (
                      <li
                        key={id ?? i}
                        className="font-sans text-sm text-muted-foreground"
                      >
                        <Link
                          href={`/productos/${id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedProduct?.title ?? id}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {product.category === "Libro" && (
              <p className="mt-8 font-sans text-sm text-foreground/90">
                <strong>Serie:</strong> {product.series}
              </p>
            )}

            <div className="mt-10">
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Seguir explorando productos
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
