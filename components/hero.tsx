"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-24">
        {/* Logo Symbol */}
        <div className="flex justify-center mb-12">
          <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
            <Image 
              src="/logo.png" 
              alt="Silenceside Ecos" 
              fill
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 256px"
              priority
              quality={100}
              className="object-contain animate-fade-in drop-shadow-md" 
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="mb-4">
          <span className="block font-serif text-4xl md:text-6xl lg:text-7xl tracking-[0.20em] text-foreground uppercase">
            Silenceside
          </span>
          <span className="relative inline-flex items-center gap-4 mt-4">
            <span className="h-px w-12 md:w-20 bg-primary/60" />
            <span className="font-serif text-lg md:text-2xl tracking-[0.28em] text-primary uppercase">
              Ecos
            </span>
            <span className="h-px w-12 md:w-20 bg-primary/60" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-8 font-sans text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-balance">
          El lado del silencio donde nacen los ecos del alma
        </p>

        {/* Subtitle */}
        <p className="mt-6 font-sans text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Desarrollo de Conciencia Integrada · Crecimiento Humano · Profundidad Espiritual
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-4 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
          >
            Explorar y Desplegar
          </a>
          <a
            href="#philosophy"
            className="px-8 py-4 border border-primary text-primary font-serif text-sm tracking-[0.15em] uppercase hover:bg-primary/5 transition-colors duration-300"
          >
            Nuestra Filosofía
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-primary/60 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
