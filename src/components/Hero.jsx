import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const bullets = [
  "Talleres vivenciales y asesorías personalizadas",
  "Materiales de estudio para tu autoconciencia",
  "Herramientas para una vida plena y en equilibrio",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-100 dark:from-cyan-900 dark:via-sky-950 dark:to-blue-950"
      aria-label="SilenceSide Ecos: Crecimiento personal y gestión emocional"
    >
      {/* SEO: Add hidden H1 for search engines */}
      <h1 className="sr-only">
        SilenceSide Ecos - Crecimiento personal, gestión emocional y talleres
        vivenciales
      </h1>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <h2 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-sky-900 dark:text-sky-200 drop-shadow-sm animate-fade-in">
              Crecimiento personal y gestión emocional
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg animate-slide-in">
              SilenceSide Ecos es un espacio dedicado al crecimiento personal y
              la gestión emocional, donde acompañamos a las personas a descubrir
              su verdadero potencial, sanar sus memorias emocionales y
              transformar su vida desde adentro hacia afuera.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg animate-slide-in">
              Ofrecemos{" "}
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                talleres vivenciales
              </span>
              ,{" "}
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                asesorías personalizadas
              </span>{" "}
              y{" "}
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                materiales de estudio
              </span>{" "}
              que integran conocimiento, práctica y autoconciencia, brindando
              herramientas para alcanzar una vida más plena, consciente y en
              equilibrio.
            </p>
            <ul
              className="grid sm:grid-cols-2 gap-3"
              aria-label="Beneficios principales"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 p-1 rounded-full bg-sky-100 dark:bg-sky-900/40">
                    <Check
                      className="w-4 h-4 text-sky-600 dark:text-sky-400"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm text-slate-800 dark:text-slate-200">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 transition-all duration-200"
                aria-label="Contáctanos ahora"
              >
                ¡Contáctanos ahora!
              </Link>
            </div>
          </div>
          <div className="fade-in flex justify-center">
            <div className="glass rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-lg">
              <div className="">
                <img
                  src="images/prioridad.webp"
                  alt="Logo de SilenceSide Ecos, símbolo de crecimiento y equilibrio"
                  className="h-24 w-24 mx-auto drop-shadow-lg transition-transform duration-300 hover:rotate-6"
                  loading="lazy"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                  Transforma tu vida
                </div>
                <div className="mt-2 font-semibold text-xl text-slate-700 dark:text-slate-200">
                  Descubre tu potencial, sana y crece
                </div>
              </div>
              {/* Trust badge */}
              <div className="mt-4 flex items-center gap-2">
                <img
                  src="/verified.svg"
                  alt="Sitio verificado y seguro"
                  className="h-5"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Sitio verificado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating CTA for mobile */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none">
        <a
          href="#contact"
          className="pointer-events-auto px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 transition-all duration-200"
          aria-label="Contáctanos ahora"
        >
          ¡Contáctanos ahora!
        </a>
      </div>
    </section>
  );
}
