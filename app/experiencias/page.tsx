import { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PageFooter } from "@/components/page-footer";
import {
  Music,
  Eye,
  Moon,
  Sun,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiencias | Silenceside Ecos",
  description:
    "Viajes sonoros, experiencias transformadoras y testimonios de quienes han vivido nuestros talleres.",
};

const experienceTypes = [
  {
    icon: Music,
    title: "Viajes Sonoros",
    description:
      "Experiencias auditivas inmersivas que guían hacia estados expandidos de conciencia.",
  },
  {
    icon: Eye,
    title: "Revelaciones",
    description: "Descubrimientos profundos que emergen del trabajo interior.",
  },
  {
    icon: Moon,
    title: "Testimonios",
    description:
      "Voces de quienes han transformado su vida a través de nuestros talleres.",
  },
  {
    icon: Sun,
    title: "Talleres",
    description: "Espacios de aprendizaje y crecimiento personal.",
  },
];

const experiences = [
  {
    title: "Viaje Sonoro: Paisajes Interiores",
    type: "Viaje Sonoro",
    description:
      "Una experiencia auditiva inmersiva de 2.5 horas diseñada para guiarte a través de los paisajes de tu mundo interior. Utilizamos cuencos tibetanos, gongs y instrumentos ancestrales.",
    nextDate: "15 de Mayo, 2026",
    location: "Donde los Ecos comienzan a resonar",
    capacity: "12 plazas",
    price: "$65",
    featured: true,
  },
  {
    title: "El Lenguaje silenciado del malestar",
    type: "Taller",
    description:
      "Un taller para explorar y entender lo silenciado arraigado en la memoria profunda del Ser.",
    nextDate: "Sábados de Mayo 2026",
    location: "Donde los Ecos comienzan a resonar",
    capacity: "15 plazas",
    price: "$55",
    featured: true,
  },
  {
    title: "Danza del Silencio",
    type: "Experiencia",
    description:
      "Una experiencia de movimiento consciente donde el cuerpo se convierte en instrumento de expresión silenciosa. No requiere experiencia previa en danza.",
    nextDate: "5 de Junio, 2026",
    location: "Donde los Ecos comienzan a resonar",
    capacity: "15 plazas",
    price: "$55",
    featured: true,
  },
  {
    title: "Baño de Sonido: Resonancia",
    type: "Viaje Sonoro",
    description:
      "Ceremonia de cuencos de cristal y gong de 90 minutos para la alineación energética y la liberación de bloqueos emocionales.",
    nextDate: "12 de Junio, 2026",
    location: "Online",
    capacity: "Sin límite",
    price: "$30",
    featured: false,
  },
  {
    title: "Retiro de Silencio: 3 Días",
    type: "Inmersión",
    description:
      "Una experiencia intensiva de desconexión total y reconexión con tu esencia. Incluye alojamiento, comidas conscientes y guía personalizada.",
    nextDate: "19-21 de Junio, 2026",
    location: "Retiro especial",
    capacity: "8 plazas",
    price: "$450",
    featured: true,
  },
];

const testimonials = [
  {
    quote:
      "Después de este taller hubo un antes y un después en mi vida. El Lenguaje silenciado del malestar me ayudó a comprender patrones que llevaba años sin poder descifrar.",
    author: "María L.",
    experience: "Lenguaje silenciado del Malestar",
  },
  {
    quote:
      "Tuve la oportunidad de entender qué significa el lenguaje celular silenciado y cómo los conflictos que impactan en los llamados 4 cerebros se relacionan con los malestares que experimentamos en nuestras vidas.",
    author: "Irma Esperanza Castro Méndez",
    experience: "Lenguaje silenciado del Malestar",
  },
  {
    quote:
      "Compré dos velas, me encantaron, desprenden un olor con una fragancia exquisita, las volveré a comprar.",
    author: "Rosa M.",
    experience: "Ecos del Aroma",
  },
];

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Revelaciones y Testimonios
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl tracking-[0.10em] text-foreground uppercase leading-tight">
              Experiencias
            </h1>
            <p className="mt-8 font-sans text-xl text-muted-foreground leading-relaxed">
              Descubra cómo nuestros talleres han transformado la vida de
              quienes los han vivido. Viajes sonoros, experiencias
              transformadoras y testimonios de crecimiento personal.
            </p>
          </div>

          {/* Visual element */}
          <div className="mt-16 flex justify-center hidden">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-primary/30 rounded-full" />
              <div className="absolute inset-8 border border-primary/40 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Music size={48} strokeWidth={0.5} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Types */}
      <section className="py-16 bg-card border-y border-border hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {experienceTypes.map((type) => (
              <div
                key={type.title}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary/5 transition-colors duration-300">
                  <type.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-lg tracking-[0.10em] text-foreground uppercase">
                  {type.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-24 lg:py-32 hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Destacadas
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Próximas Experiencias
            </h2>
          </div>

          <div className="space-y-8">
            {experiences
              .filter((e) => e.featured)
              .map((experience) => (
                <div
                  key={experience.title}
                  className="group grid lg:grid-cols-3 gap-8 p-8 lg:p-12 bg-card border border-border hover:border-primary/30 transition-all duration-500"
                >
                  {/* Image/Visual */}
                  <div className="aspect-[4/3] lg:aspect-auto bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {experience.type === "Viaje Sonoro" && (
                        <Music
                          size={64}
                          strokeWidth={0.5}
                          className="text-primary/30"
                        />
                      )}
                      {experience.type === "Taller" && (
                        <Eye
                          size={64}
                          strokeWidth={0.5}
                          className="text-primary/30"
                        />
                      )}
                      {experience.type === "Experiencia" && (
                        <Moon
                          size={64}
                          strokeWidth={0.5}
                          className="text-primary/30"
                        />
                      )}
                      {experience.type === "Inmersión" && (
                        <Sun
                          size={64}
                          strokeWidth={0.5}
                          className="text-primary/30"
                        />
                      )}
                    </div>
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-wide">
                      {experience.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl lg:text-3xl tracking-[0.10em] text-foreground uppercase">
                      {experience.title}
                    </h3>
                    <p className="mt-4 font-sans text-muted-foreground leading-relaxed text-lg">
                      {experience.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        {experience.nextDate}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users size={16} className="text-primary" />
                        {experience.capacity}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-primary font-medium">
                      {experience.location}
                    </p>

                    <div className="mt-8 flex items-center gap-6">
                      <span className="font-serif text-3xl text-primary">
                        {experience.price}
                      </span>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
                      >
                        <span>Reservar</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 lg:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Testimonios
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Voces de Transformación
            </h2>
            <p className="mt-6 max-w-2xl mx-auto font-sans text-lg text-muted-foreground leading-relaxed">
              Descubra cómo nuestros talleres han transformado la vida de
              quienes los han vivido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">
                  &ldquo;
                </div>
                <p className="font-sans text-muted-foreground leading-relaxed italic relative z-10">
                  {testimonial.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="block font-serif text-foreground">
                    {testimonial.author}
                  </span>
                  <span className="font-sans text-sm text-primary">
                    {testimonial.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300"
            >
              <span>Comparte tu experiencia</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* All Experiences Grid */}
      <section className="py-24 lg:py-32 hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Catálogo
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase">
              Todas las Experiencias
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <div
                key={experience.title}
                className="group relative p-6 bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-sans uppercase tracking-wide mb-4">
                  {experience.type}
                </span>

                <h3 className="font-serif text-lg tracking-[0.10em] text-foreground uppercase">
                  {experience.title}
                </h3>

                <p className="mt-3 font-sans text-sm text-muted-foreground line-clamp-3">
                  {experience.description}
                </p>

                <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} className="text-primary" />
                    {experience.nextDate}
                  </span>
                  <span className="text-primary font-medium">
                    {experience.location}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-xl text-primary">
                    {experience.price}
                  </span>
                  <Link
                    href="/#contact"
                    className="font-serif text-sm tracking-[0.10em] text-muted-foreground hover:text-primary uppercase transition-colors"
                  >
                    Reservar
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-0 group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] uppercase leading-tight">
            Experiencias Personalizadas
          </h2>
          <p className="mt-6 font-sans text-lg text-background/70 leading-relaxed max-w-2xl mx-auto">
            ¿Tienes una visión específica para tu grupo, evento corporativo o
            celebración especial? Diseñamos experiencias a medida que se ajustan
            a tus necesidades y objetivos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
            >
              Solicitar Propuesta
            </Link>
            <Link
              href="/#events"
              className="px-8 py-4 border border-background/30 text-background font-serif text-sm tracking-[0.15em] uppercase hover:bg-background/10 transition-colors duration-300"
            >
              Ver Calendario
            </Link>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
