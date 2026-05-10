import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";
import {
  BookOpen,
  Feather,
  Flame,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  libros,
  velasDespertar,
  velasChispas,
  velasEnergia,
  guias,
  allProducts,
} from "@/lib/services/productos";
import { allAceites } from "@/lib/services/aceites";
import { ecos } from "@/lib/services/espacios";
import type { KitProduct } from "@/lib/types/productos";

export const metadata: Metadata = {
  title: "Tienda | Silenceside Ecos",
  description:
    "Libros, guías, cuadernos de trabajo, velas aromáticas y materiales didácticos elaborados con intención para tu viaje hacia la sabiduría interior.",
};

const categories = [
  {
    icon: BookOpen,
    title: "Libros",
    description: "Obras contemplativas para la reflexi\u00f3n profunda",
  },
  {
    icon: Feather,
    title: "Gu\u00edas y Cuadernos",
    description: "Materiales de trabajo para tu pr\u00e1ctica diaria",
  },
  {
    icon: Flame,
    title: "Velas Arom\u00e1ticas",
    description: "Aromaterapia para tu transformaci\u00f3n interior",
  },
  {
    icon: Heart,
    title: "Colecci\u00f3n de apoyo",
    description: "Todo lo necesario para iniciar tu camino",
  },
];
export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Artículos para tu Bienestar
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.10em] text-foreground uppercase leading-tight">
              Tienda
            </h1>
            <p className="mt-8 font-sans text-xl text-muted-foreground leading-relaxed">
              Cada recurso sirve como compañero en tu viaje hacia la sabiduría
              interior y el crecimiento personal. Libros, guías, velas
              aromáticas y materiales elaborados con intención.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary/5 transition-colors duration-300">
                  <category.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-lg tracking-[0.10em] text-foreground uppercase">
                  {category.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Serie Editorial */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Destacados
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Serie Editorial Despertar
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Nuestra colección &quot;Despertar&quot; representa el corazón de
              la filosofía Silenceside Ecos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {libros
              .filter((p) => p.featured)
              .map((product) => (
                <div
                  key={product.id}
                  id={product.id}
                  className="group grid md:grid-cols-2 gap-8 p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500"
                >
                  <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt={product.title}
                        width={80}
                        height={80}
                        className="opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-sans text-sm text-primary tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="mt-2 font-serif text-lg tracking-[0.05em] text-foreground uppercase leading-tight">
                      {product.title}
                    </h3>
                    <p className="mt-4 font-sans text-muted-foreground leading-relaxed text-sm">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <span className="font-serif text-2xl text-primary">
                        {`$${product.price.toFixed(2)}`}
                      </span>
                    </div>
                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
                    >
                      <span>Comprar</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Velas - Colección Despertar */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Velas Aromáticas
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Colección Despertar
            </h2>
            <p className="mt-6 max-w-3xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Velas en contenedores de cristal, seguras y fáciles de
              transportar. Se conservan mejor y su aroma se mantiene intacto.
              Cada vez que son prendidas, su aroma resulta como la primera vez
              de estar en contacto con sus esencias.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {velasDespertar.map((vela) => (
              <div
                key={vela.id}
                id={vela.id}
                className="group relative p-6 bg-background border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-square bg-muted relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame
                      size={40}
                      strokeWidth={0.5}
                      className="text-primary/40"
                    />
                  </div>
                  {vela.featured && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wide">
                      Destacado
                    </span>
                  )}
                </div>

                <span className="font-sans text-xs text-primary tracking-wide uppercase">
                  {vela.category}
                </span>
                <h3 className="mt-1 font-serif text-base tracking-[0.05em] text-foreground uppercase leading-tight">
                  {vela.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-muted-foreground line-clamp-3">
                  {vela.description}
                </p>
                <p className="mt-2 font-sans text-xs text-primary/70">
                  <strong>Aceites:</strong>{" "}
                  {vela.aceites
                    .map(
                      (id) => allAceites.find((a) => a.id === id)?.nombre ?? id,
                    )
                    .join(", ")}
                </p>
                <p className="mt-1 font-sans text-xs text-muted-foreground italic">
                  {vela.intencion}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-lg text-primary">
                    {`$${vela.price.toFixed(2)}`}
                  </span>
                  <Link
                    href="/#contact"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Comprar
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Velas - Colección Regalos Chispas de Luz */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Ceras y Decorativas
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Colección Regalos Chispas de Luz
            </h2>
            <p className="mt-6 max-w-3xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Ideal para aromaterapia y ambientación del hogar. Aportan
              fragancias agradables, sensación de calma y un toque decorativo
              único.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {velasChispas.map((vela) => (
              <div
                key={vela.id}
                id={vela.id}
                className="group relative p-4 bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-square bg-muted relative overflow-hidden mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles
                      size={28}
                      strokeWidth={0.5}
                      className="text-primary/40"
                    />
                  </div>
                </div>

                <span className="font-sans text-xs text-primary tracking-wide uppercase">
                  {vela.category}
                </span>
                <h3 className="mt-1 font-serif text-sm tracking-[0.05em] text-foreground uppercase leading-tight line-clamp-2">
                  {vela.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-muted-foreground line-clamp-2">
                  {vela.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-serif text-base text-primary">
                    {`$${vela.price.toFixed(2)}`}
                  </span>
                  <Link
                    href="/#contact"
                    className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Velas - Colección Energía Interior */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Velas Decorativas
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Colección Energía Interior
            </h2>
            <p className="mt-6 max-w-3xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Cada representación activa en tu memoria un mensaje silente que
              pulsa por salir a la luz. La esencia que la acompaña ayuda a esta
              apertura.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {velasEnergia.map((vela) => (
              <div
                key={vela.id}
                id={vela.id}
                className="group relative p-4 bg-background border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-square bg-muted relative overflow-hidden mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame
                      size={28}
                      strokeWidth={0.5}
                      className="text-primary/40"
                    />
                  </div>
                </div>

                <span className="font-sans text-xs text-primary tracking-wide uppercase">
                  {vela.category}
                </span>
                <h3 className="mt-1 font-serif text-sm tracking-[0.05em] text-foreground uppercase leading-tight line-clamp-2">
                  {vela.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-muted-foreground line-clamp-2">
                  {vela.description}
                </p>
                <p className="mt-1 font-sans text-xs italic text-primary/60 line-clamp-1">
                  {vela.intencion}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-serif text-base text-primary">
                    {`$${vela.price.toFixed(2)}`}
                  </span>
                  <Link
                    href="/#contact"
                    className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kits - Colecciones de Apoyo */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Paquetes Completos
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Colecciones de Apoyo
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Todo lo necesario para iniciar o profundizar tu camino de
              transformación interior.
            </p>
          </div>

          {/* Ecos del Ser kits */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.10em] text-foreground uppercase">
                Ecos del Ser
              </h3>
              <Link
                href="/espacios#ecos-del-ser"
                className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
              >
                <span>Ver Eco</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(
                ecos.find((e) => e.id === "ecos-del-ser")?.coleccionDeApoyo ??
                []
              )
                .map((id) => allProducts.find((p) => p.id === id) as KitProduct)
                .filter(Boolean)
                .map((kit) => (
                  <div
                    key={kit.id}
                    id={kit.id}
                    className="group relative p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Heart
                        size={20}
                        strokeWidth={1}
                        className="text-primary/50 shrink-0 mt-0.5"
                      />
                      <span className="font-serif text-base text-primary">
                        {`$${kit.contenido.reduce((sum, id) => sum + (allProducts.find((p) => p.id === id)?.price ?? 0), 0).toFixed(2)}`}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm tracking-[0.05em] text-foreground uppercase leading-tight">
                      {kit.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-muted-foreground">
                      {kit.description}
                    </p>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
            </div>
          </div>

          {/* Ecos de los Aromas kits */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.10em] text-foreground uppercase">
                Ecos de los Aromas
              </h3>
              <Link
                href="/espacios#ecos-de-los-aromas"
                className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
              >
                <span>Ver Eco</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(
                ecos.find((e) => e.id === "ecos-de-los-aromas")
                  ?.coleccionDeApoyo ?? []
              )
                .map((id) => allProducts.find((p) => p.id === id) as KitProduct)
                .filter(Boolean)
                .map((kit) => (
                  <div
                    key={kit.id}
                    id={kit.id}
                    className="group relative p-6 bg-background border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <Sparkles
                        size={20}
                        strokeWidth={1}
                        className="text-primary/50 shrink-0 mt-0.5"
                      />
                      <span className="font-serif text-base text-primary">
                        {`$${kit.contenido.reduce((sum, id) => sum + (allProducts.find((p) => p.id === id)?.price ?? 0), 0).toFixed(2)}`}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm tracking-[0.05em] text-foreground uppercase leading-tight">
                      {kit.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs text-muted-foreground">
                      {kit.description}
                    </p>
                    <ul className="mt-3 space-y-1">
                      {kit.contenido.map((id, i) => {
                        const label =
                          allProducts.find((p) => p.id === id)?.title ?? id;
                        return (
                          <li
                            key={id ?? i}
                            className="flex items-start gap-1.5"
                          >
                            <span className="text-primary/50 mt-0.5 shrink-0">
                              ·
                            </span>
                            <span className="font-sans text-xs text-foreground/80">
                              {label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="/espacios#ecos-de-los-aromas"
                        className="inline-flex items-center gap-1.5 font-sans text-xs text-primary uppercase tracking-wide hover:text-accent transition-colors"
                      >
                        <span>Más info</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
            </div>
          </div>

          {/* Store kits */}
          <div>
            <div className="mb-8 border-b border-border pb-4">
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.10em] text-foreground uppercase">
                Kits de Tienda
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts
                .filter(
                  (p): p is KitProduct =>
                    p.category === "Colección de apoyo" && !!p.featured,
                )
                .map((kit) => (
                  <div
                    key={kit.id}
                    id={kit.id}
                    className="group relative p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="aspect-square bg-muted relative overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Heart
                          size={32}
                          strokeWidth={0.5}
                          className="text-primary/40"
                        />
                      </div>
                      {kit.featured && (
                        <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wide">
                          Destacado
                        </span>
                      )}
                    </div>
                    <span className="font-sans text-xs text-primary tracking-wide uppercase">
                      {kit.category}
                    </span>
                    <h3 className="mt-1 font-serif text-base tracking-[0.05em] text-foreground uppercase leading-tight">
                      {kit.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-muted-foreground">
                      {kit.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-serif text-xl text-primary">
                        {`$${kit.contenido.reduce((sum, id) => sum + (allProducts.find((p) => p.id === id)?.price ?? 0), 0).toFixed(2)}`}
                      </span>
                      <Link
                        href="/#contact"
                        className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Comprar
                      </Link>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Libros y Guías */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Materiales de Estudio
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Libros y Guías
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...libros, ...guias].map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="group relative p-6 bg-background border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-square bg-muted relative overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {product.category === "Libro" && (
                      <BookOpen
                        size={32}
                        strokeWidth={0.5}
                        className="text-primary/30"
                      />
                    )}
                    {product.category === "Guía" && (
                      <Feather
                        size={32}
                        strokeWidth={0.5}
                        className="text-primary/30"
                      />
                    )}
                  </div>
                  {product.featured && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wide">
                      Destacado
                    </span>
                  )}
                </div>

                <span className="font-sans text-xs text-primary tracking-wide uppercase">
                  {product.category}
                </span>
                <h3 className="mt-1 font-serif text-sm tracking-[0.05em] text-foreground uppercase line-clamp-3 leading-tight">
                  {product.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-lg text-primary">
                    {`$${product.price.toFixed(2)}`}
                  </span>
                  <Link
                    href="/#contact"
                    className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ver más
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary/30 text-primary mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-8 h-8"
                >
                  <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-[0.10em] text-foreground uppercase mb-2">
                Envío Cuidadoso
              </h3>
              <p className="font-sans text-muted-foreground">
                Cada producto es empaquetado con intención y cuidado para llegar
                en perfectas condiciones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary/30 text-primary mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-8 h-8"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-[0.10em] text-foreground uppercase mb-2">
                Artesanal y Ecológico
              </h3>
              <p className="font-sans text-muted-foreground">
                Velas elaboradas artesanalmente con aceites aromáticos
                ecológicos cuidadosamente seleccionados.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary/30 text-primary mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-8 h-8"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg tracking-[0.10em] text-foreground uppercase mb-2">
                Hecho con Intención
              </h3>
              <p className="font-sans text-muted-foreground">
                Cada producto nace con una intención consciente de favorecer tu
                transformación interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] uppercase leading-tight">
            ¿Necesitas Orientación?
          </h2>
          <p className="mt-6 font-sans text-lg text-background/70 leading-relaxed max-w-2xl mx-auto">
            Si no sabes por dónde empezar, contáctanos y te ayudaremos a
            encontrar los materiales perfectos para tu momento de vida.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-block px-8 py-4 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
          >
            Contactar
          </Link>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
