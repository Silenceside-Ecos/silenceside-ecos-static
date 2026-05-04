"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Servicios",
    href: "#services",
    submenu: [
      { label: "Ecos", href: "/espacios" },
      { label: "Tienda", href: "/productos" },
    ],
  },
  { label: "Filosofía", href: "#philosophy" },
  { label: "Eventos", href: "#events" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Silenceside Ecos"
                fill
                sizes="(max-width: 768px) 56px, 64px"
                priority
                quality={100}
                className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl tracking-[0.20em] text-foreground uppercase font-medium">
                Silenceside
              </span>
              <span className="font-serif text-xs tracking-[0.30em] text-primary uppercase mt-0.5">
                Ecos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="font-sans text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 py-2 bg-background border border-border shadow-lg min-w-[160px] transition-all duration-200 ${openSubmenu === item.label ? "opacity-100 visible" : "opacity-0 invisible"}`}
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 font-sans text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="font-sans text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
            >
              Iniciar Viaje
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <span className="font-sans text-base tracking-wide text-foreground py-2 block">
                        {item.label}
                      </span>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            onClick={() => setIsOpen(false)}
                            className="font-sans text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 py-1 block"
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-sans text-base tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 py-2 block"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-serif text-sm tracking-[0.15em] uppercase text-center"
              >
                Iniciar Viaje
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
