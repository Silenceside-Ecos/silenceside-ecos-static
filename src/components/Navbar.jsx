import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  // { href: '/features', label: 'Features' },
  // { href: '/pricing', label: 'Pricing' },
  // { href: '/testimonials', label: 'Testimonials' },
  // { href: '/faq', label: 'FAQ' },
  { href: "/", label: "Inicio" },
  { href: "/contact", label: "Contacto" },
  { href: "/espacios_e", label: "Espacios_e" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container flex items-center justify-between py-3">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight text-xl"
        >
          {/* Company Logo */}
          <img
            src="./favicon.png"
            alt="Silenceside-Ecos Logo"
            className="h-10 w-10"
          />
          Silenceside<span className="text-sky-500">-Ecos</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center text-sm font-medium px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-soft hover:opacity-90"
          >
            Get started
          </Link>
          <ThemeToggle />
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center text-sm font-medium px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
