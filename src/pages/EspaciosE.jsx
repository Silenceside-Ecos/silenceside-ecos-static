import { Link } from "react-router-dom";

const BRAND = {
  primary: "teal",
  primaryHex: "#14b8a6", // aqua SilenceSide
};

const goals = [
  {
    imagen: "/images/ecos-del-ser.webp",
    title: "Ecos del Ser",
    text: "Es una propuesta de Espacios_e para el conocimiento y entendimiento de los Saberes Integrados que constituyen la base del sostenimiento del Bienestar del Ser.",
    bg: "bg-teal-50 dark:bg-teal-900/40",
    link: "/ecos-del-ser",
  },
  {
    imagen: "./images/ecos-del-silencio.jpg",
    title: "Ecos del Silencio",
    text: "Se enfoca en la conexión con la calma interna, la observación consciente, la escucha del cuerpo, las emociones y el reencuentro con la esencia primordial.",
    bg: "bg-teal-50 dark:bg-indigo-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-del-movimiento.jpeg",
    title: "Ecos del Movimiento",
    text: "Conecta el cuerpo, la emoción y la energía. Es un espacio ideal para trabajar la liberación, la conciencia corporal y la integración emocional a través del movimiento.",
    bg: "bg-teal-50 dark:bg-amber-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-del-sonido.jpeg",
    title: "Ecos del Sonido",
    text: "Explora la relación entre el sonido, la vibración y el equilibrio del ser. Los participantes descubren cómo el sonido influye en las emociones, la energía y la salud integral.",
    bg: "bg-teal-50 dark:bg-fuchsia-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-de-la-naturaleza.jpeg",
    title: "Ecos de la Naturaleza",
    text: "Reconectar al ser humano con la naturaleza exterior e interior, entendiendo que lo que sucede en la naturaleza también ocurre dentro de nosotros.",
    bg: "bg-teal-50 dark:bg-lime-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-audioviduales.jpeg",
    title: "Ecos Audiovisuales",
    text: "Un espacio donde el sonido, la imagen y la emoción se unen para transmitir la esencia de Silenceside Ecos. Aquí encontrarás videos, grabaciones y materiales visuales que reflejan la filosofía de nuestros programas.",
    bg: "bg-teal-50 dark:bg-lime-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-de-aromas.jpg",
    title: "Ecos de Aromas",
    text: "Se enfoca en guiar a los participantes a descubrir el lenguaje invisible de los aromas y su capacidad para equilibrar cuerpo, mente y espíritu.",
    bg: "bg-teal-50 dark:bg-lime-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-del-universo.jpg",
    title: "Ecos del Universo",
    text: "Reconectar al ser humano con la energía cósmica y las leyes universales que influyen en su vida, lo que propicia una mayor armonía, propósito y coherencia interior.",
    bg: "bg-teal-50 dark:bg-lime-900/40",
    link: "/",
  },
  {
    imagen: "./images/ecos-de-la-tierra.webp",
    title: "Ecos de la Tierra",
    text: "Representa la conexión con lo tangible, lo estable y lo natural. Es el espacio donde se despierta la conciencia del cuerpo, del entorno y de las raíces internas. Simboliza el arraigo, la nutrición, la seguridad y la presencia.",
    bg: "bg-teal-50 dark:bg-lime-900/40",
    link: "/",
  },
];

export default function EspaciosE() {
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
          <h2
            id="goals-title"
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-teal-100"
          >
            ✨ Espacios_e
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ofrece lugares donde el Eco que está resonando dentro la conciencia
            profunda, trae la memoria de ¿quiénes somos?, ¿qué venimos a hacer?
            y ¿cómo hacerlo? entre muchas más interrogantes, orientados a crear
            las bases para el cambio de la percepción, la satisfacción y la
            felicidad del Ser humano.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((g) => (
            <article
              key={g.title}
              className={`${g.bg} rounded-2xl p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between`}
              style={{
                height: "500px",
              }}
            >
              <div>
                <h1
                  className="mt-4 mb-6 text-lg font-semibold text-slate-900 dark:text-teal-200 text-center"
                  style={{ color: "#d1b066" }}
                >
                  {g.title}
                </h1>
              </div>
              <div style={{ flex: "1" }}>
                <p className="mt-1 text-slate-600 dark:text-slate-300">
                  {g.text}
                </p>
              </div>
              <div
                className="mt-4 mb-6 bg-white dark:bg-slate-900 grid place-items-center shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                style={{ borderRadius: "8px" }}
              >
                <img
                  src={g.imagen}
                  alt={g.title}
                  style={{
                    height: "150px",
                    width: "100%",
                    borderRadius: "8px",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              {g.link && (
                <div className="mt-4 flex justify-end">
                  <Link
                    to={g.link}
                    className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition-colors text-sm font-medium"
                  >
                    Read more
                  </Link>
                </div>
              )}
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
