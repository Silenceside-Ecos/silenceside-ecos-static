const BRAND = {
  primary: "teal",
  primaryHex: "#14b8a6", // aqua SilenceSide
};

const goals = [
  {
    icon: "🌱",
    title: "Autoconocimiento profundo",
    text: "Descubre quién eres realmente y cómo tus memorias emocionales influyen en tu vida.",
    bg: "bg-teal-50 dark:bg-teal-900/40",
  },
  {
    icon: "💫",
    title: "Gestión emocional efectiva",
    text: "Aprende herramientas prácticas para transformar el estrés y la ansiedad en bienestar.",
    bg: "bg-indigo-50 dark:bg-indigo-900/40",
  },
  {
    icon: "🔑",
    title: "Liberación de patrones",
    text: "Identifica y sana las raíces ocultas que limitan tu crecimiento personal.",
    bg: "bg-amber-50 dark:bg-amber-900/40",
  },
  {
    icon: "🌟",
    title: "Transformación integral",
    text: "Conecta cuerpo, mente y emociones para vivir en equilibrio y plenitud.",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-900/40",
  },
  {
    icon: "🤝",
    title: "Acompañamiento cercano",
    text: "Vive cada proceso con apoyo humano, respeto y un enfoque personalizado.",
    bg: "bg-lime-50 dark:bg-lime-900/40",
  },
  {
    icon: "📚",
    title: "Aprendizaje práctico",
    text: "Talleres y materiales aplicables a tu día a día para lograr cambios reales.",
    bg: "bg-rose-50 dark:bg-rose-900/40",
  },
];

export default function ObjectivesSection() {
  return (
    <section
      aria-labelledby="goals-title"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-teal-50/60 to-white dark:from-teal-950/60 dark:to-slate-950 transition-colors"
    >
      {/* Glow decor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-56 w-[720px] rounded-full blur-3xl"
        style={{
          background: `${BRAND.primaryHex}22`,
          mixBlendMode: "plus-lighter",
        }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <p className="inline-block rounded-full border border-teal-200 dark:border-teal-800 bg-white/60 dark:bg-teal-950/60 px-3 py-1 text-sm text-slate-600 dark:text-teal-200">
            SilenceSide Ecos
          </p>
          <h2
            id="goals-title"
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-teal-100"
          >
            ✨ Nuestros Objetivos
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Bienestar, crecimiento y transformación con una guía cercana y práctica.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g) => (
            <article
              key={g.title}
              className={`${g.bg} rounded-2xl p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 grid place-items-center shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                <span className="text-2xl" aria-hidden="true">
                  {g.icon}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-teal-100">
                {g.title}
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{g.text}</p>
            </article>
          ))}
        </div>

        {/* CTA opcional */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 dark:bg-teal-500 px-5 py-3 text-white dark:text-slate-900 font-medium shadow-sm hover:bg-teal-700 dark:hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
          >
            Reserva tu lugar
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}