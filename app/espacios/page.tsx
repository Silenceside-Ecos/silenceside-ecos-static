"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";
import { Users, Calendar, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ecos as spaces, programs } from "@/lib/services/espacios";
import type {
  InformacionEcosSer,
  FormacionEcosSer,
  InformacionEcosAromas,
  FormacionEcosAromas,
} from "@/lib/types/espacios";
import { allProducts } from "@/lib/services/productos";
import { allAceites } from "@/lib/services/aceites";
import type { KitProduct, VelaProduct } from "@/lib/types/productos";

const aceitesMap = new Map(allAceites.map((a) => [a.id, a]));

export default function EspaciosPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (spaceId: string, feature: string) => {
    const key = `${spaceId}-${feature}`;
    setExpandedFeature(expandedFeature === key ? null : key);
  };

  // Renderizar contenido de Información para Ecos del Ser
  const renderInformacionEcosSer = (informacion: InformacionEcosSer) => (
    <div className="space-y-6 p-4 bg-background/50 border border-border mt-4">
      {/* ¿Qué es Ecos del Ser? */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            ¿Qué es Ecos del Ser?
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 space-y-4 text-sm text-foreground">
          <p className="italic text-primary">{informacion.queEs.intro}</p>
          <p>{informacion.queEs.descripcion}</p>
          <div>
            <p className="font-medium mb-2">¿Qué ofrece Ecos del Ser?</p>
            <ul className="list-disc pl-5 space-y-1">
              {informacion.queEs.ofrece.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Nuestro eje de trabajo</p>
            <p className="mb-2">{informacion.queEs.ejeTrabajoIntro}</p>
            <ul className="list-disc pl-5 space-y-1">
              {informacion.queEs.ejeTrabajo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Beneficios del proceso</p>
            <ul className="list-disc pl-5 space-y-1">
              {informacion.queEs.beneficios.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      {/* Nuestros profesores / asesores */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Nuestros profesores / asesores
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 space-y-4">
          <p className="text-sm text-foreground mb-4">
            Silenceside Ecos cuenta con varios asesores-profesores con una larga
            experiencia sobre el tema del desarrollo de la conciencia humana,
            algunos con más de 30 años de trabajo.
          </p>
          {informacion.profesores.map((prof, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-4 py-2">
              <p className="font-medium text-foreground">{prof.nombre}</p>
              <p className="text-xs text-primary mb-1">{prof.cargo}</p>
              <p className="text-sm text-foreground">{prof.bio}</p>
            </div>
          ))}
        </div>
      </details>

      {/* Dirigido a */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Dirigido a
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 text-sm text-foreground space-y-3">
          <p>{informacion.dirigidoA.intro}</p>
          <ul className="list-disc pl-5 space-y-1">
            {informacion.dirigidoA.requisitos.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="font-medium mt-4">
            Elementos básicos que favorecen el aprendizaje:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {informacion.dirigidoA.elementosBasicos.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </details>

      {/* Valores de la marca */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Valores de la marca
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 text-sm text-foreground">
          <p className="mb-3">
            Ecos del Ser favorece el encuentro, rescate y reforzamiento de
            valores humanos imprescindibles para el salto cuántico de la
            conciencia humana.
          </p>
          <div className="flex flex-wrap gap-2">
            {informacion.valores.map((valor, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </details>

      {/* Preguntas frecuentes */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Preguntas frecuentes
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 space-y-3">
          {informacion.preguntasFrecuentes.map((faq, i) => (
            <details
              key={i}
              className="group/faq border-l-2 border-primary/20 pl-3"
            >
              <summary className="cursor-pointer text-sm font-medium text-foreground hover:text-primary">
                {faq.pregunta}
              </summary>
              <p className="text-sm text-foreground mt-2 pl-2">
                {faq.respuesta}
              </p>
            </details>
          ))}
        </div>
      </details>

      {/* Información interesante */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Información interesante
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 space-y-4">
          <p className="text-sm font-medium text-foreground">Sabías que...</p>
          {informacion.infoInteresante.sabias.map((item, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-4">
              <p className="font-medium text-sm text-foreground">
                {item.titulo}
              </p>
              <p className="text-sm text-foreground mt-1">{item.contenido}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );

  // Renderizar contenido de Formación para Ecos del Ser
  const renderFormacionEcosSer = (formacion: FormacionEcosSer) => (
    <div className="space-y-4 p-4 bg-background/50 border border-border mt-4">
      {formacion.niveles.map((nivel) => (
        <details key={nivel.title} className="group/nivel border border-border">
          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-primary/5 transition-colors">
            <span className="font-serif text-sm tracking-wide text-foreground uppercase">
              {nivel.title}
            </span>
            <ChevronDown
              size={16}
              className="text-primary transition-transform group-open/nivel:rotate-180"
            />
          </summary>
          <div className="p-4 pt-0 space-y-4">
            <p className="text-sm text-foreground italic border-l-2 border-primary/30 pl-3 mb-4">
              {nivel.resumen}
            </p>
            {nivel.series.map((serie) => (
              <details
                key={serie.title}
                className="group/serie border-l-2 border-primary/20 pl-4"
              >
                <summary className="cursor-pointer font-medium text-sm text-foreground hover:text-primary py-2">
                  {serie.title}
                </summary>
                <div className="space-y-3 mt-2">
                  {serie.talleres.map((taller) => (
                    <details
                      key={taller.nombre}
                      className="group/taller bg-secondary/30 p-3"
                    >
                      <summary className="cursor-pointer text-sm font-medium text-foreground hover:text-primary">
                        {taller.nombre}
                      </summary>
                      <div className="mt-3 pt-3 border-t border-border/50 space-y-2 text-sm">
                        <div className="text-foreground">
                          <p className="font-medium mb-2">Contenido:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {taller.contenido.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-foreground mt-3">
                          <span>
                            <strong>Encuentros:</strong> {taller.duracion}
                          </span>
                          <span>
                            <strong>Modalidad:</strong> {taller.modalidad}
                          </span>
                        </div>
                        <p className="text-xs text-foreground">
                          <strong>Dirigido a:</strong> {taller.publico}
                        </p>
                        <p className="text-xs italic text-primary mt-2">
                          &ldquo;{taller.cierre}&rdquo;
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </details>
      ))}

      {/* Actividades complementarias */}
      <div className="mt-6 pt-4 border-t border-border">
        <p className="font-serif text-sm tracking-wide text-foreground uppercase mb-4">
          Actividades Complementarias
        </p>
        <div className="grid grid-cols-2 gap-3">
          {formacion.actividadesComplementarias.map((act) => (
            <div key={act.title} className="p-3 bg-secondary/30">
              <p className="font-medium text-sm text-foreground">{act.title}</p>
              <p className="text-xs text-foreground mt-1">{act.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Renderizar contenido de Colección de apoyo para Ecos del Ser
  const renderColeccionEcosSer = (kits: KitProduct[]) => (
    <div className="space-y-3 p-4 bg-background/50 border border-border mt-4">
      {kits.map((kit) => (
        <details key={kit.id} className="group/kit border border-border">
          <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/5 transition-colors">
            <Link
              href={`/productos#${kit.id}`}
              className="font-sans text-sm text-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {kit.title}
            </Link>
            <ChevronDown
              size={14}
              className="text-primary transition-transform group-open/kit:rotate-180"
            />
          </summary>
          <div className="p-3 pt-0 text-sm text-foreground">
            <p className="italic text-foreground mb-2">{kit.description}</p>
            <ul className="list-disc pl-5 space-y-1">
              {kit.contenido.map((id, i) => {
                const product = allProducts.find((p) => p.id === id);
                const label = product?.title ?? id;
                return (
                  <li key={id ?? i}>
                    <Link
                      href={`/productos#${id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );

  // Renderizar contenido de Colección de apoyo para Ecos de los Aromas
  const renderColeccionEcosAromas = (kits: KitProduct[]) => (
    <div className="space-y-4 p-4 bg-background/50 border border-border mt-4">
      <p className="text-sm text-foreground">
        Kits especialmente diseñados para complementar tu experiencia con los
        aromas y velas de Silenceside Ecos. Todos los productos están
        disponibles en nuestra tienda.
      </p>

      {kits.map((kit) => (
        <details
          key={kit.id}
          className="group/kit border border-border bg-card"
        >
          <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3">
              <Link
                href={`/productos#${kit.id}`}
                className="font-medium text-sm text-foreground hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {kit.title}
              </Link>
              <span className="text-xs text-primary font-medium">
                {`$${kit.contenido.reduce((sum, id) => sum + (allProducts.find((p) => p.id === id)?.price ?? 0), 0).toFixed(2)}`}
              </span>
            </div>
            <ChevronDown
              size={14}
              className="text-primary transition-transform group-open/kit:rotate-180"
            />
          </summary>
          <div className="p-4 pt-2 text-sm text-foreground space-y-3">
            <p className="italic">{kit.description}</p>

            <div>
              <p className="font-medium text-xs mb-2">Contenido del kit:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {kit.contenido.map((id, i) => {
                  const label =
                    allProducts.find((p) => p.id === id)?.title ?? id;
                  return (
                    <li key={id ?? i}>
                      <Link
                        href={`/productos#${id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-primary/5 p-3 border-l-2 border-primary">
              <p className="font-medium text-xs mb-1">
                Velas incluidas relacionadas:
              </p>
              <div className="flex flex-wrap gap-2">
                {kit.contenido
                  .map((id) => allProducts.find((p) => p.id === id))
                  .filter(
                    (p): p is VelaProduct => p != null && "collection" in p,
                  )
                  .map((vela, i) => (
                    <Link
                      key={i}
                      href={`/productos#${vela.id}`}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs hover:bg-primary/20 transition-colors"
                    >
                      {vela.title}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              href={`/productos#${kit.id}`}
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
            >
              Ver en tienda <ArrowRight size={12} />
            </Link>
          </div>
        </details>
      ))}

      <div className="mt-4 p-4 bg-secondary/20 text-center">
        <p className="text-sm text-foreground mb-3">
          Visita nuestra tienda para ver el catálogo completo de velas y kits de
          aromaterapia.
        </p>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-serif tracking-wide uppercase hover:bg-accent transition-colors"
        >
          Ir a la Tienda <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );

  // Renderizar contenido de Información para Ecos de los Aromas
  const renderInformacionEcosAromas = (informacion: InformacionEcosAromas) => (
    <div className="space-y-6 p-4 bg-background/50 border border-border mt-4">
      {/* ¿Qué es Ecos de los Aromas? */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            ¿Qué es Ecos de los Aromas?
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 text-sm text-foreground space-y-4">
          <p>{informacion.queEs.descripcion}</p>
          <div className="bg-primary/5 p-4 border-l-2 border-primary">
            <p className="font-medium mb-2">Línea de Velas Silenceside Ecos</p>
            <p className="text-sm">{informacion.queEs.introVelas}</p>
            <div className="mt-3">
              <p className="text-xs font-medium mb-1">Formatos disponibles:</p>
              <ul className="list-disc pl-5 text-xs space-y-1">
                {informacion.formatosVelas.map((formato, i) => (
                  <li key={i}>{formato}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </details>

      {/* Beneficios */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Beneficios de la directriz Aroma-Emoción
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 text-sm text-foreground">
          <ul className="list-disc pl-5 space-y-1">
            {informacion.beneficios.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </details>

      {/* CATÁLOGO DE VELAS */}
      {informacion.catalogoVelas.map((coleccion) => (
        <details key={coleccion.nombre} className="group/detail">
          <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
            <span className="font-serif text-sm tracking-wide text-foreground">
              {coleccion.nombre}
            </span>
            <ChevronDown
              size={14}
              className="text-primary transition-transform group-open/detail:rotate-180"
            />
          </summary>
          <div className="p-4 space-y-4">
            <p className="text-sm text-foreground">{coleccion.descripcion}</p>
            {coleccion.velas.map((vela, i) => (
              <details
                key={i}
                className="group/vela border border-border bg-card"
              >
                <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-primary/5 transition-colors">
                  <span className="font-medium text-sm text-foreground">
                    {vela.title}
                  </span>
                  <ChevronDown
                    size={12}
                    className="text-primary transition-transform group-open/vela:rotate-180"
                  />
                </summary>
                <div className="p-4 pt-2 space-y-3 text-sm text-foreground">
                  <p>{vela.description}</p>

                  {vela.aceites.length > 0 && (
                    <div className="bg-secondary/20 p-3">
                      <p className="font-medium text-xs mb-2">
                        Aceites esenciales:
                      </p>
                      <div className="space-y-2">
                        {vela.aceites.map((id, j) => {
                          const aceite = aceitesMap.get(id);
                          if (!aceite) return null;
                          return (
                            <div key={j} className="text-xs">
                              <span className="font-medium text-primary">
                                {aceite.nombre}:
                              </span>{" "}
                              <span>{aceite.funcion}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {vela.variantes && (
                    <div className="bg-secondary/20 p-3">
                      <p className="font-medium text-xs mb-2">
                        Variantes disponibles:
                      </p>
                      <ul className="list-disc pl-4 text-xs space-y-1">
                        {vela.variantes.map((variante, j) => (
                          <li key={j}>{variante}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {vela.chakras && (
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="px-2 py-1 bg-primary/10 text-primary">
                        Chakras: {vela.chakras}
                      </span>
                    </div>
                  )}

                  <p className="text-xs italic text-primary border-l-2 border-primary pl-3">
                    {vela.intencion}
                  </p>

                  <Link
                    href="/productos"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                  >
                    Ver en tienda <ArrowRight size={12} />
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </details>
      ))}

      {/* Información interesante */}
      <details className="group/detail">
        <summary className="flex items-center justify-between cursor-pointer hover:bg-primary/5 p-3 transition-colors">
          <span className="font-serif text-sm tracking-wide text-foreground">
            Información interesante sobre aceites
          </span>
          <ChevronDown
            size={14}
            className="text-primary transition-transform group-open/detail:rotate-180"
          />
        </summary>
        <div className="p-4 space-y-4">
          <p className="text-sm font-medium text-foreground">Sabías que...</p>
          {informacion.infoInteresante.sabias.map((item, i) => (
            <div key={i} className="border-l-2 border-primary/30 pl-4">
              <p className="font-medium text-sm text-foreground">
                {item.titulo}
              </p>
              {item.cita && (
                <p className="text-xs italic text-primary my-1">{item.cita}</p>
              )}
              <p className="text-sm text-foreground mt-1">{item.contenido}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );

  // Renderizar contenido de Formación para Ecos de los Aromas
  const renderFormacionEcosAromas = (formacion: FormacionEcosAromas) => (
    <div className="space-y-4 p-4 bg-background/50 border border-border mt-4">
      <p className="text-sm text-foreground">{formacion.intro}</p>

      {formacion.talleres.map((taller) => (
        <details
          key={taller.nombre}
          className="group/taller border border-border"
        >
          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-primary/5 transition-colors">
            <span className="font-serif text-sm tracking-wide text-foreground">
              {taller.nombre}
            </span>
            <ChevronDown
              size={16}
              className="text-primary transition-transform group-open/taller:rotate-180"
            />
          </summary>
          <div className="p-4 pt-0 space-y-3 text-sm text-foreground">
            <div>
              <p className="font-medium mb-2">Objetivos:</p>
              <ul className="list-disc pl-5 space-y-1">
                {taller.objetivos.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Contenido:</p>
              <ul className="list-disc pl-5 space-y-1">
                {taller.contenido.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-foreground mt-3">
              <span>
                <strong>Duración:</strong> {taller.duracion}
              </span>
              <span>
                <strong>Modalidad:</strong> {taller.modalidad}
              </span>
            </div>
            <p className="text-xs text-foreground">
              <strong>Materiales:</strong> {taller.materiales}
            </p>
          </div>
        </details>
      ))}
    </div>
  );

  return (
    <main className="min-h-screen">
      <PageHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Espacios Educativos
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.10em] text-foreground uppercase leading-tight">
              Ecos
            </h1>
            <p className="mt-8 font-sans text-xl text-foreground leading-relaxed">
              Espacios de exploración sensorial y de conciencia donde diferentes
              lenguajes sutiles —aroma, sonido y otros saberes— abren caminos
              hacia el bienestar y la evolución del Ser. A través de
              experiencias que despiertan la memoria profunda y la percepción,
              se activa el eco personal y ancestral que habita en cada persona,
              favoreciendo la armonía entre cuerpo, mente y espíritu.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Espacios Ecos" },
              { value: "+500", label: "Participantes" },
              { value: "+50", label: "Programas" },
              { value: "+15", label: "Años de experiencia" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="font-serif text-4xl lg:text-5xl text-primary">
                  {stat.value}
                </span>
                <p className="mt-2 font-sans text-sm text-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Spaces */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Nuestros Espacios
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Ecos
            </h2>
          </div>

          <div className="space-y-24">
            {spaces.map((space, index) => (
              <div
                key={space.id}
                id={space.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] bg-secondary/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      className="object-contain p-8"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-[0.10em] text-foreground uppercase">
                    {space.title}
                  </h3>
                  <p className="mt-6 font-sans text-foreground leading-relaxed">
                    {space.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-foreground">
                    <Users size={16} className="text-primary" />
                    <span>{space.capacity}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {space.features.map((feature) => {
                      const isExpandable = space.kind !== "sonido";
                      const isExpanded =
                        expandedFeature === `${space.id}-${feature}`;

                      if (isExpandable) {
                        return (
                          <button
                            key={feature}
                            onClick={() => toggleFeature(space.id, feature)}
                            className={`px-3 py-1.5 text-sm font-sans transition-colors ${
                              isExpanded
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/50 text-foreground hover:bg-primary/20"
                            }`}
                          >
                            {feature}
                          </button>
                        );
                      }
                      return (
                        <span
                          key={feature}
                          className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm font-sans"
                        >
                          {feature}
                        </span>
                      );
                    })}
                  </div>

                  {/* Contenido expandible */}
                  {space.kind === "ser" &&
                    expandedFeature === `${space.id}-Información` &&
                    renderInformacionEcosSer(space.informacion)}
                  {space.kind === "ser" &&
                    expandedFeature === `${space.id}-Formación` &&
                    renderFormacionEcosSer(space.formacion)}
                  {space.kind === "ser" &&
                    expandedFeature === `${space.id}-Colección de apoyo` &&
                    renderColeccionEcosSer(
                      (space.coleccionDeApoyo ?? [])
                        .map(
                          (id) =>
                            allProducts.find((p) => p.id === id) as KitProduct,
                        )
                        .filter(Boolean),
                    )}
                  {space.kind === "aromas" &&
                    expandedFeature === `${space.id}-Información` &&
                    renderInformacionEcosAromas(space.informacion)}
                  {space.kind === "aromas" &&
                    expandedFeature === `${space.id}-Formación` &&
                    renderFormacionEcosAromas(space.formacion)}
                  {space.kind === "aromas" &&
                    expandedFeature === `${space.id}-Colección de apoyo` &&
                    renderColeccionEcosAromas(
                      (space.coleccionDeApoyo ?? [])
                        .map(
                          (id) =>
                            allProducts.find((p) => p.id === id) as KitProduct,
                        )
                        .filter(Boolean),
                    )}

                  {/* Links */}
                  <div className="flex gap-4 mt-6">
                    <Link
                      href="/espacios#enfoques"
                      className="text-xs font-serif tracking-wider text-primary uppercase hover:text-accent transition-colors"
                    >
                      Ver Enfoques
                    </Link>
                    <Link
                      href="/productos"
                      className="text-xs font-serif tracking-wider text-primary uppercase hover:text-accent transition-colors"
                    >
                      Biblioteca
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <section id="enfoques" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Enseñanza
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Enfoques Integrados del Ser
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group p-8 bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Calendar size={20} className="text-primary" />
                  <div className="text-sm text-foreground">
                    <span>{program.duration}</span>
                    <span className="mx-2">·</span>
                    <span>{program.sessions}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl tracking-[0.08em] text-foreground uppercase mb-4 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="font-sans text-sm text-foreground mb-6">
                  {program.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-serif tracking-wider text-primary uppercase">
                  Más información
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <PageFooter />
    </main>
  );
}
