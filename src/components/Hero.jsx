import { Check } from 'lucide-react'
import ObjectivesSection from './ObjectiveSection'

const bullets = [
  'Talleres vivenciales y asesorías personalizadas',
  'Materiales de estudio para tu autoconciencia',
  'Herramientas para una vida plena y en equilibrio'
]

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-100 dark:from-cyan-900 dark:via-sky-950 dark:to-blue-950"
      aria-label="SilenceSide Ecos: Crecimiento personal y gestión emocional"
    >
      {/* Decorative SVG background */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" fill="url(#grad)" />
        <defs>
          <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5" gradientTransform="rotate(90 .5 .5) scale(1 1)">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </radialGradient>
        </defs>
      </svg>
      {/* SEO: Add hidden H1 for search engines */}
      <h1 className="sr-only">
        SilenceSide Ecos - Crecimiento personal, gestión emocional y talleres vivenciales
      </h1>
      <div className="container py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-800 text-xs bg-white/80 dark:bg-slate-900/80 shadow transition-all duration-300 hover:scale-105">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              ¡Bienvenido a SilenceSide Ecos!
            </div>
            <h2 className="font-extrabold text-4xl md:text-6xl tracking-tight leading-tight text-sky-900 dark:text-sky-200 drop-shadow-sm">
              Crecimiento personal y gestión emocional
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              SilenceSide Ecos es un espacio dedicado al crecimiento personal y la gestión emocional, donde acompañamos a las personas a descubrir su verdadero potencial, sanar sus memorias emocionales y transformar su vida desde adentro hacia afuera.
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-lg">
              Ofrecemos <span className="font-semibold text-sky-600 dark:text-sky-400">talleres vivenciales</span>, <span className="font-semibold text-sky-600 dark:text-sky-400">asesorías personalizadas</span> y <span className="font-semibold text-sky-600 dark:text-sky-400">materiales de estudio</span> que integran conocimiento, práctica y autoconciencia, brindando herramientas para alcanzar una vida más plena, consciente y en equilibrio.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3" aria-label="Beneficios principales">
              {bullets.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 p-1 rounded-full bg-sky-100 dark:bg-sky-900/40">
                    <Check className="w-4 h-4 text-sky-600 dark:text-sky-400" aria-hidden="true"/>
                  </span>
                  <span className="text-sm text-slate-800 dark:text-slate-200">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-900 shadow-soft font-semibold hover:bg-sky-700 dark:hover:bg-sky-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                role="button"
                aria-label="Contáctanos"
              >
                Contáctanos
              </a>
              <a
                href="#talleres"
                className="px-6 py-3 rounded-xl border border-sky-300 dark:border-sky-700 font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                role="button"
                aria-label="Ver talleres"
              >
                Ver talleres
              </a>
            </div>
            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <img src="/stars.svg" alt="Valoración 5 estrellas" className="h-6" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Más de <strong>500 personas</strong> han transformado su vida con nosotros
              </span>
            </div>
          </div>
          <div className="fade-in flex justify-center">
            <div className="glass rounded-3xl p-6 md:p-8 flex flex-col items-center shadow-lg">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-sky-200 to-indigo-200 dark:from-sky-900/30 dark:to-indigo-900/30 grid place-items-center transition-transform duration-300 hover:scale-105">
                <img
                  src="/logo.svg"
                  alt="Logo de SilenceSide Ecos, símbolo de crecimiento y equilibrio"
                  className="h-24 w-24 mx-auto drop-shadow-lg transition-transform duration-300 hover:rotate-6"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">Transforma tu vida</div>
                <div className="mt-2 font-semibold text-xl text-slate-700 dark:text-slate-200">Descubre tu potencial, sana y crece</div>
              </div>
              {/* Trust badge */}
              <div className="mt-4 flex items-center gap-2">
                <img src="/verified.svg" alt="Sitio verificado y seguro" className="h-5" />
                <span className="text-xs text-slate-500 dark:text-slate-400">Sitio verificado</span>
              </div>
            </div>
          </div>
        </div>
        {/* Objectives Section */}
        <ObjectivesSection />
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
  )
}