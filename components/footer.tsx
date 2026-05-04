"use client"

import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Instagram, Facebook } from "lucide-react"

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Ecos", href: "/espacios" },
      { label: "Tienda", href: "/productos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Filosofía", href: "#philosophy" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  {
    title: "Editorial",
    links: [
      { label: "Colección Despertar", href: "/productos" },
      { label: "Libros y Guías", href: "/productos" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Silenceside Ecos" width={56} height={56} className="h-14 w-auto invert opacity-80" />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.20em] text-background uppercase">
                  Silenceside
                </span>
                <span className="font-serif text-[0.45em] tracking-[0.28em] text-background/60 uppercase mt-0.5">
                  Ecos
                </span>
              </div>
            </div>
            <p className="mt-6 font-sans text-background/60 leading-relaxed max-w-sm">
              El lado del silencio donde nacen los ecos del alma. Desarrollo de conciencia
              integrada para el crecimiento humano y la profundidad espiritual.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-serif text-sm tracking-[0.15em] text-background/80 uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-background/50 hover:text-background transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-background/40">
            © {new Date().getFullYear()} Silenceside Ecos LLC. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacidad"
              className="font-sans text-sm text-background/40 hover:text-background/70 transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-sans text-sm text-background/40 hover:text-background/70 transition-colors duration-300"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
