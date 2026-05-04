"use client"

import { useState } from "react"
import Image from "next/image"
import { Send, Mail, MapPin, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
              Conectar
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.10em] text-foreground uppercase leading-tight text-balance">
              Inicia Tu Viaje
            </h2>
            <p className="mt-8 font-sans text-lg text-muted-foreground leading-relaxed">
              ¿Listo para experimentar nuestros servicios? Estamos aquí para guiarte en tu camino
              hacia la conciencia integrada y el bienestar emocional. Contáctanos y
              comencemos a planificar juntos.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-sans text-sm text-muted-foreground">Correo</span>
                  <span className="font-sans text-foreground">Silencesideecos@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-sans text-sm text-muted-foreground">WhatsApp</span>
                  <a href="https://wa.me/" className="font-sans text-foreground hover:text-primary transition-colors">Escríbenos por WhatsApp</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block font-sans text-sm text-muted-foreground">Ubicación</span>
                  <span className="font-sans text-foreground">Estados Unidos</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-start">
              <Image src="/logo.png" alt="Silenceside Ecos" width={80} height={80} className="h-20 w-auto opacity-30" />
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card p-8 lg:p-12 border border-border">
            <h3 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-8">
              Enviar un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-sans text-sm text-muted-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 font-sans"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-sans text-sm text-muted-foreground mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 font-sans"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm text-muted-foreground mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 font-sans"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm text-muted-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 font-sans resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <span>Enviar Mensaje</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
