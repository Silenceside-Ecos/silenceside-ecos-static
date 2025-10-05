import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm">
          © <span id="y">{new Date().getFullYear()}</span> Silenceside Ecos LLC.
        </div>
        <nav className="text-sm flex gap-4">
          {/* <a href="#">Privacidad</a>
          <a href="#">Términos</a> */}
          <Link to="/contact">Contacto</Link>
        </nav>
      </div>
    </footer>
  );
}
