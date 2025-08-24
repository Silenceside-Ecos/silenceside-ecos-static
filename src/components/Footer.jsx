import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm">© <span id="y">{new Date().getFullYear()}</span> Silenceside Ecos LLC.</div>
          <nav className="text-sm flex gap-4">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}
