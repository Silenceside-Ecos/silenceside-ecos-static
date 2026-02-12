import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const bullets = [
  "Talleres vivenciales y asesorías personalizadas",
  "Materiales de estudio para tu autoconciencia",
  "Herramientas para una vida plena y en equilibrio",
];

export default function Hero() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://silencesideecos.com" />
      </Helmet>
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
              <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-sky-900 dark:text-sky-200 drop-shadow-sm animate-fade-in">
                Tu camino hacia una vida más consciente y abundante comienza
                aquí
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg animate-slide-in">
                Somos una Empresa de Desarrollo Humano y Conciencia Integral,
                que te guía a reconectar con tu esencia, sanar tus memorias y
                elevar tu vibración, a través de experiencias vivenciales,
                espiritualidad práctica y productos holísticos creados para tu
                bienestar.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg animate-slide-in">
                En nuestros talleres descubrirás cómo entender tu historia,
                transformar tus emociones y diseñar un futuro consciente y
                próspero, en armonía contigo mismo y con el Universo.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg animate-slide-in">
                Vive la experiencia SilenceSide Ecos y siente cómo cada
                encuentro, aroma o palabra se convierte en un eco de evolución.
              </p>

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
                    src="./images/prioridad.webp"
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
    </>
  );
}
