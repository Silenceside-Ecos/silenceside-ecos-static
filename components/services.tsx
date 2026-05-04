"use client"

import { Compass, ShoppingBag } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Compass,
    title: "Ecos",
    subtitle: "Espacios Educativos",
    description:
      "Espacios de exploración sensorial y de conciencia donde diferentes lenguajes sutiles —aroma, sonido y otros saberes— abren caminos hacia el bienestar y la evolución del Ser. A través de experiencias que despiertan la memoria profunda y la percepción, se activa el eco personal y ancestral que habita en cada persona, favoreciendo la armonía entre cuerpo, mente y espíritu.",
    href: "/espacios",
  },
  {
    icon: ShoppingBag,
    title: "Tienda",
    subtitle: "Artículos para tu Bienestar",
    description:
      "Cada recurso sirve como compañero en tu viaje hacia la sabiduría interior y el crecimiento personal. Libros, guías, cuadernos de trabajo y materiales didácticos elaborados con intención.",
    href: "/productos",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
            Nuestras Ofertas
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase text-balance">
            Caminos hacia la Conciencia
          </h2>
          <p className="mt-6 font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos diversos servicios que contribuyen a la mejora y desarrollo
            de la Conciencia Integrada del Ser Humano.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 lg:p-10 bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-serif text-5xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border border-primary/30 text-primary mb-6 group-hover:bg-primary/5 transition-colors duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-1">
                {service.title}
              </h3>
              <span className="font-sans text-sm text-primary tracking-wide">
                {service.subtitle}
              </span>
              <p className="mt-4 font-sans text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
              >
                <span>Explorar</span>
                <span className="h-px w-6 bg-current group-hover:w-10 transition-all duration-300" />
              </Link>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
