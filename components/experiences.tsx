"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Despertar",
    subtitle: "Serie Editorial",
    description:
      "Una serie de libros que exploran las profundidades de las memorias del Ser. Cada volumen te guía por un viaje que termina en un nuevo renacer.",
    image: "/logo.png",
    href: "/productos",
  },
  {
    title: "Testimonios",
    subtitle: "Revelaciones",
    description:
      "Descubra cómo nuestros talleres han transformado la vida de quienes los han vivido.",
    image: "/testimonios.jpg",
    href: "/experiencias#testimonios",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-card hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
            Destacado
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase text-balance">
            Experiencias Transformadoras
          </h2>
        </div>

        {/* Experiences List */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className="group relative grid md:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-12 bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div
                className={`aspect-[4/3] bg-muted relative overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {experience.image === "/logo.png" ? (
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      width={150}
                      height={150}
                      className="opacity-70"
                    />
                  ) : (
                    <svg
                      viewBox="0 0 120 140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-auto opacity-20"
                    >
                      <path
                        d="M60 10 L110 120 L10 120 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      />
                      <ellipse
                        cx="60"
                        cy="70"
                        rx="20"
                        ry="12"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-sans text-sm text-primary tracking-wide">
                  {experience.subtitle}
                </span>
                <h3 className="mt-2 font-serif text-2xl lg:text-3xl tracking-[0.10em] text-foreground uppercase">
                  {experience.title}
                </h3>
                <p className="mt-4 font-sans text-muted-foreground leading-relaxed text-lg">
                  {experience.description}
                </p>
                <Link
                  href={experience.href}
                  className="mt-6 inline-flex items-center gap-2 font-serif text-sm tracking-[0.15em] text-primary uppercase hover:text-accent transition-colors duration-300 group/link"
                >
                  <span>Saber Más</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Number */}
              <span className="absolute top-8 right-8 font-serif text-6xl lg:text-8xl text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
