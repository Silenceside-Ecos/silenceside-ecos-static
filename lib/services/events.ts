import type { Event, CategoryStyle, EventCategory } from "@/lib/types/events";

export const events: Event[] = [
  {
    id: "1",
    title:
      "El Lenguaje silenciado del malestar y sus ecos desde el inconsciente",
    level: "Talleres Lo que el cuerpo calla",
    series: "Serie El Ser y el Silencio",
    sessions: [
      {
        date: new Date(2026, 4, 9),
        topic: "El malestar y su estructura oculta",
        content: [
          "Qué es el malestar y su estructura oculta",
          "Los conflictos como uno de los grandes resortes que hacen que estos aparezcan",
          "El lenguaje celular silenciado que arrastra el malestar",
          "Introducción a las herramientas para su interpretación y el cambio",
        ],
      },
      {
        date: new Date(2026, 4, 16),
        topic: "Práctica con las herramientas",
        content: [
          "Práctica con las herramientas y su correlación con la estructura oculta",
          "Particularidades del SNA y fases por las que transita el malestar",
        ],
      },
      {
        date: new Date(2026, 4, 23),
        topic: "Enlace con el lenguaje celular silenciado",
        content: [
          "Práctica de la herramienta y su enlace con el lenguaje celular silenciado",
        ],
      },
    ],
    sessionDuration: "Máximo 4 horas por encuentro",
    startTime: "10:00 am",
    location: "",
    contact: "",
    category: "workshop",
    spots: 15,
    description:
      "Un taller de 3 encuentros presenciales donde cada día podrás encontrar información que tu eco interior está pulsando y poner el cuerpo para vibrar con el cambio.",
    bibliography: [
      "Lo que el cuerpo calla — Volumen 2: Ecos del inconsciente",
      "Lo que el cuerpo calla — Volumen 4: Renacer interior",
    ],
  },
  {
    id: "2",
    title: "La identidad y sus reflejos",
    level: "Talleres Lo que el cuerpo calla",
    series: "Serie El Ser y el Silencio",
    sessions: [
      {
        date: new Date(2026, 5, 6),
        topic: "La identidad como resorte del malestar",
        content: [
          "La identidad como resorte del malestar y sus incógnitas",
          "Las diferentes etapas de construcción del Yo",
          "Los espejos reflejos del Yo y las máscaras del ser",
          "Técnica para identificar las máscaras",
        ],
      },
      {
        date: new Date(2026, 5, 13),
        topic: "Práctica con la herramienta de identificación y cambio",
        content: ["Práctica con la herramienta de identificación y cambio"],
      },
    ],
    sessionDuration: "Máximo 4 horas por encuentro",
    startTime: "10:00 am",
    location: "",
    contact: "",
    category: "workshop",
    spots: 15,
    description:
      "Un taller de 2 encuentros presenciales donde cada día podrás encontrar información que tu eco interior está pulsando y poner el cuerpo para vibrar con el cambio.",
    bibliography: ["Lo que el cuerpo calla — Volumen 1: Raíces del Alma"],
  },
  {
    id: "3",
    title: "Las raíces del alma y el malestar",
    level: "Talleres Lo que el cuerpo calla",
    series: "Serie el Ser y el silencio",
    sessions: [
      {
        date: new Date(2026, 6, 11),
        topic: "Los niveles del cuerpo y los filtros de la percepción",
        content: [
          "Los niveles del cuerpo. El punto de encaje sede de las huellas ancestrales que hace que se exprese un tipo de malestar.",
          "La conciencia, sus niveles y códigos.",
          "Los filtros de la percepción de la realidad del ser.",
        ],
      },
      {
        date: new Date(2026, 6, 18),
        topic:
          "Los resortes del malestar y la herramienta para la transformación",
        content: [
          "Los resortes del malestar: Las problemáticas y las necesidades.",
          "La herramienta para la transformación.",
        ],
      },
    ],
    sessionDuration: "Máximo 4 horas por encuentro",
    startTime: "10:00 am",
    location: "",
    contact: "",
    category: "workshop",
    description:
      "Un taller de 2 encuentros presenciales, donde cada día podrás aprender y comprender cómo tu conciencia interpreta la realidad, identifica los patrones que te limitan, así como aprender a transformarlos desde su origen.",
    bibliography: ["Lo que el cuerpo calla — Volumen 1: Raíces del Alma"],
  },
  {
    id: "4",
    title: "Las sombras del pasado y el malestar",
    level: "Talleres Lo que el cuerpo calla",
    series: "Serie el Ser y el silencio",
    sessions: [
      {
        date: new Date(2026, 8, 5),
        topic: "La trama invisible que sostiene el malestar",
        content: [
          "La matriz profunda sobre la que descansa el malestar o la trama invisible que lo sostiene y le da sentido.",
          "Las emociones, sentimientos, sensaciones.",
          "Los pensamientos, creencias.",
          "Herramientas para identificar y cambiar la estructura alterada del lenguaje que ancla las creencias.",
        ],
      },
      {
        date: new Date(2026, 8, 12),
        topic: "Los valores",
        content: [
          "Los valores.",
          "Herramienta para identificar valores perdidos o no establecidos y recuperarlos (LV).",
          "Práctica con la herramienta.",
        ],
      },
      {
        date: new Date(2026, 8, 19),
        topic: "El lenguaje comunicacional del cuerpo",
        content: [
          "El lenguaje comunicacional del cuerpo.",
          "Herramienta básica para su interpretación.",
        ],
      },
    ],
    sessionDuration: "Máximo 4 horas por encuentro",
    startTime: "10:00 am",
    location: "",
    contact: "",
    category: "workshop",
    description:
      "Un taller de 3 encuentros presenciales, donde cada día podrás encontrar información sobre aquellas sombras que te acompañan y nublan tu verdadera visión, así como te apropiarás de herramientas para quitar ese velo que empaña tu realidad.",
    bibliography: ["Lo que el cuerpo calla — Volumen 3: Sombras del pasado"],
  },
];

export const categoryStyles: Record<EventCategory, CategoryStyle> = {
  ritual: {
    label: "Ritual",
    className: "bg-secondary text-secondary-foreground",
  },
  workshop: { label: "Taller", className: "bg-primary/15 text-primary" },
  sound: { label: "Viaje Sonoro", className: "bg-accent/15 text-accent" },
  meditation: {
    label: "Meditación",
    className: "bg-muted text-muted-foreground",
  },
};
