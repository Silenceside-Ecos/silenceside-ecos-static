"use client"

import Image from "next/image"

const principles = [
  {
    number: "01",
    title: "Propósito general",
    description: "Brindar espacios y herramientas para redescubrir el sentido de la vida, resignificar la historia y construir un proyecto vital consciente, en armonía con la esencia humana.",
  },
  {
    number: "02",
    title: "Visión",
    description: "Fomentar una cultura de consciencia y sabiduría que impulse la conexión interior, el bienestar y la prosperidad consciente.",
  },
  {
    number: "03",
    title: "Misión",
    description: "Empoderar al individuo para avanzar en su evolución personal a través del conocimiento de su historia y herencia ancestral.",
  },
  {
    number: "04",
    title: "Valores",
    description: "Consciencia integrada: vivir con presencia y responsabilidad interior. Autenticidad: honrar la verdad personal y colectiva. Sabiduría práctica: convertir el conocimiento en acción. Bienestar integral: armonizar mente, emoción, cuerpo y espíritu. Prosperidad consciente: crecer con equilibrio humano. Servicio: generar un impacto positivo en personas y comunidades.",
  },
  {
    number: "05",
    title: "Impactos",
    description: "Personal: Fortaleza, destreza y discernimiento. Grupal: Conexión y comunicación. Medio ambiente: Armonía y responsabilidad.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <Image src="/logo.png" alt="" width={600} height={600} className="h-[600px] w-auto" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div>
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Nuestra Filosofía
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase leading-tight text-balance">
              La Arquitectura de la Conciencia Integrada
            </h2>
            <p className="mt-8 font-sans text-lg text-muted-foreground leading-relaxed">
              Silenceside Ecos es una compañía que ofrece diversos servicios que contribuyen al
              mejoramiento del desarrollo de la Conciencia Integrada del Ser Humano.
            </p>
            <p className="mt-6 font-sans text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Silence</span> — estado de quietud.{" "}
              <span className="text-primary font-medium">Side</span> — la
              dimensión interior. <span className="text-primary font-medium">Ecos</span> — la
              resonancia que nace dentro y se expande hacia afuera.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300 group"
              >
                <span>Inicia Tu Viaje</span>
                <span className="h-px w-8 bg-current group-hover:w-12 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right - Principles */}
          <div className="space-y-0">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group flex gap-6 py-8 border-b border-border last:border-b-0 hover:bg-primary/[0.02] transition-colors duration-300 px-4 -mx-4"
              >
                <span className="font-serif text-2xl text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-2">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
