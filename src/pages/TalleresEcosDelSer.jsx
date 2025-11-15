import React, { useState } from "react";
import { getEspacioEById } from "../services/EspaciosEService"; // Adjust the path as needed

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-6 rounded-xl border border-sky-200 dark:border-sky-900 bg-gradient-to-br from-white via-sky-50 to-cyan-50 dark:from-slate-950 dark:via-sky-950 dark:to-cyan-900 shadow-lg transition-all">
      <button
        className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg text-sky-900 dark:text-sky-200 bg-transparent hover:bg-sky-100 dark:hover:bg-sky-900 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-2xl transition-transform duration-300">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && (
          <div className="px-6 pb-6 pt-2 text-slate-700 dark:text-slate-200">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function renderContent(content) {
  if (typeof content === "string") {
    return <p className="mb-2">{content}</p>;
  }

  if (Array.isArray(content)) {
    return (
      <ul className="list-disc ml-6 mb-2">
        {content.map((item, idx) => (
          <li key={idx}>
            {item.texto && renderContent(item.texto)}
            {item.nombre && renderContent(item.nombre)}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}

function renderAccordion(section) {
  return (
    <Accordion key={section.id} title={section.nombre}>
      {section.descripcion && (
        <p style={{ whiteSpace: "pre-line" }} className="mb-4 text-base">
          {section.descripcion}
        </p>
      )}
      {section.niveles && section.niveles.map(renderAccordion)}
      {section.series && section.series.map(renderAccordion)}
      {section.objetivos && (
        <div>
          <p className="mb-2 font-medium text-cyan-700 dark:text-cyan-300">
            Objetivos:
          </p>
          {renderContent(section.objetivos)}
        </div>
      )}
      {section.talleres && (
        <div>
          <p className="mb-2 font-medium text-cyan-700 dark:text-cyan-300">
            Talleres:
          </p>
          {renderContent(section.talleres)}
        </div>
      )}
    </Accordion>
  );
}

export default function TalleresEcosDelSer() {
  const [espacio, setEspacio] = useState(null);

  React.useEffect(() => {
    // Replace this with your actual data fetching logic
    // For now, we assume Espacio has a static method to get all espacios
    async function fetchEspacios() {
      // If getStaticEspaciosE is async, await it
      const data = await getEspacioEById(1);
      setEspacio(data);
    }
    fetchEspacios();
  }, []);

  return (
    <main className="container mx-auto py-12 px-4 max-w-3xl">
      <div className="mb-10 text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="images/ecos-del-ser.webp"
            alt="Silenceside Ecos Logo"
            style={{
              height: "150px",
              width: "50%",
              borderRadius: "8px",
              backgroundSize: "cover",
            }}
          />
        </div>
        <h1
          className="text-4xl mb-4 mt-6 font-semibold text-sky-900 dark:text-sky-200 mb-2 tracking-tight"
          style={{ color: "#d1b066" }}
        >
          Ecos del Ser
        </h1>
        <p className="mb-2 text-lg text-slate-700 dark:text-slate-300">
          Es una propuesta de Espacios_e para el conocimiento y entendimiento de
          los Saberes Integrados que constituyen la base del sostenimiento del
          Bienestar del Ser.
        </p>
        <p className="mb-2 text-lg text-slate-700 dark:text-slate-300">
          Se refiere a todo lo que está resonando como un eco dentro la
          conciencia profunda, como forma de llamar la atención de la conciencia
          superficial.
        </p>
        <p className="mb-2 text-lg text-slate-700 dark:text-slate-300">
          Su objetivo fundamental es aprender desde lo personal y lo grupal,
          aquellas lecciones básicas y silenciadas, que forman parte de nuestra
          sabiduría como seres humanos y que se entrelazan con los conocimientos
          avanzados del día de hoy.{" "}
        </p>
      </div>
      <section key={espacio?.id} className="mb-8">
        {espacio?.ecos && espacio.ecos.map(renderAccordion)}
      </section>
    </main>
  );
}
