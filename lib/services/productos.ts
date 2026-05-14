import type {
  LibroProduct,
  VelaProduct,
  GuiaProduct,
  KitProduct,
  MaterialProduct,
  Product,
} from "@/lib/types/productos";

// ─── Kits: Colecciones de apoyo ─────────────────────────────────────────────
// All kits are KitProduct entries in allProducts.
// Ecos reference kits by ID via coleccionDeApoyo: string[].
// Price is always computed from contenido at render time (price: 0 is a sentinel).

export const kitsApoyo: KitProduct[] = [
  // ── Ecos del Ser ────────────────────────────────────────────────────────
  {
    id: "kit-renacer",
    title: "Kit de apoyo del renacer",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección de apoyo te ayuda a interconectar con lo aprendido sobre el lenguaje celular silenciado",
    contenido: [
      "poster-renacer",
      "frasco-esencia",
      "vela-renacer",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-armonia-interior",
    title: "Kit para fortalecer la armonía interior",
    category: "Colección de apoyo",
    price: 0,
    description: "Esta colección te apoyará en conectar contigo mismo",
    contenido: [
      "poster-herramientas-reconexion",
      "vela-lumen-serena",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-renovacion",
    title: "Kit para la renovación",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección te ayudará a renovar tus fuerzas para seguir avanzando",
    contenido: [
      "poster-renovacion",
      "frasco-esencias-renovadoras",
      "vela-umbral-ambar",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-lenguaje-silenciado",
    title: "Kit para el entendimiento del lenguaje silenciado del malestar",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección de apoyo te ayuda a interconectar con lo aprendido sobre el lenguaje celular silenciado",
    contenido: [
      "poster-conflictos",
      "vela-umbral-amor-interno",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-identidad-azul",
    title: "Kit para el encuentro con su identidad (Azul)",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección te apoyará en el encuentro contigo mismo y a liberarte de las máscaras",
    contenido: ["poster-reflejos-1", "vela-evolucion", "tarjeta-aceites"],
  },
  {
    id: "kit-identidad-rosa",
    title: "Kit para el encuentro con su identidad (Rosa)",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección te apoyará en el encuentro contigo mismo y a liberarte de las máscaras",
    contenido: ["poster-reflejos-2", "vela-evolucion", "tarjeta-aceites"],
  },
  {
    id: "kit-origen-1",
    title: "Kit encuentra el origen 1",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección potenciará tus conocimientos de estudio sobre los ciclos del ser",
    contenido: ["poster-ciclos", "vela-elan-luz", "tarjeta-aceites"],
  },
  {
    id: "kit-origen-2",
    title: "Kit encuentra el origen 2",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección te ayudará a conectar con tus memorias ancestrales",
    contenido: ["poster-arbol", "vela-conchas", "tarjeta-aceites"],
  },
  {
    id: "kit-transformacion-1",
    title: "Kit La transformación 1",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección de apoyo te guiará junto a lo aprendido en tu transformar",
    contenido: [
      "poster-transformacion-interior",
      "vela-quantum-luz",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-transformacion-2",
    title: "Kit La transformación 2",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección de apoyo te guiará junto a lo aprendido en tu transformar",
    contenido: [
      "poster-principios-armonicos",
      "vela-encuentra-tu-luz",
      "tarjeta-aceites",
    ],
  },
  {
    id: "kit-reconexion-sublime",
    title: "Kit de apoyo reconexión sublime",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Esta colección de apoyo te guía en tu completamiento del equilibrio evolutivo",
    contenido: ["vela-entre-tierra-luz", "tarjeta-aceites"],
  },
  // ── Ecos de los Aromas ───────────────────────────────────────────────────
  {
    id: "kit-aromaterapia-esencial",
    title: "Kit Aromaterapia Esencial",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Set de ceras derretidas Élan de Luz con quemador y guía de uso de aromas para el bienestar.",
    contenido: ["vela-elan-luz", "quemador-aromas", "guia-eco-aroma"],
  },
  {
    id: "kit-regalo-chispas",
    title: "Kit Regalo Chispas de Luz",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Selección de 3 velas decorativas en bolsita de regalo, perfectas para obsequiar.",
    contenido: [
      "vela-corazones",
      "vela-flores-margarita",
      "vela-mandalas",
      "bolsita-regalo",
    ],
  },
  {
    id: "kit-energia-hogar",
    title: "Kit Energía del Hogar",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Velas decorativas para ambientar diferentes espacios de tu hogar con intención.",
    contenido: ["vela-renacer", "vela-evolucion", "vela-hexagonal"],
  },
  {
    id: "kit-equilibrio-armonia",
    title: "Kit Equilibrio y Armonía",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Velas seleccionadas para encontrar tu centro y mantener la armonía interior.",
    contenido: ["vela-equilibrio", "vela-nudo", "tarjeta-aceites"],
  },
  {
    id: "kit-despertar-completo",
    title: "Kit Despertar Completo",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Las 4 velas principales de la Colección Despertar para tu proceso de transformación.",
    contenido: [
      "vela-encuentra-tu-luz",
      "vela-umbral-ambar",
      "vela-umbral-amor-interno",
      "vela-lumen-serena",
      "guia-meditacion-velas",
    ],
  },
  {
    id: "kit-transformacion-integral",
    title: "Kit Transformación Integral",
    category: "Colección de apoyo",
    price: 0,
    description:
      "El set completo Trascender más materiales de acompañamiento para tu viaje interior.",
    contenido: ["vela-trascender", "libro-s1-v1", "guia-cuaderno-practica"],
  },
  {
    id: "kit-sanacion-emocional",
    title: "Kit Sanación Emocional",
    category: "Colección de apoyo",
    price: 0,
    description: "Velas enfocadas en la sanación del corazón y el amor propio.",
    contenido: [
      "vela-umbral-amor-interno",
      "vela-corazones",
      "tarjeta-afirmaciones-amor",
    ],
  },
  {
    id: "kit-claridad-elevacion",
    title: "Kit Claridad y Elevación",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Para momentos de meditación, introspección y conexión espiritual.",
    contenido: ["vela-lumen-serena", "vela-elan-luz", "vela-conchas"],
  },
  // ── Store featured ───────────────────────────────────────────────────────
  {
    id: "kit-despertar-ser",
    title: "Kit Despertar del Ser",
    category: "Colección de apoyo",
    price: 0,
    description:
      "Incluye vela Encuentra tu Luz, Cuaderno de Práctica y Guía de inicio. Todo lo necesario para comenzar tu camino de autoconocimiento.",
    featured: true,
    contenido: ["vela-encuentra-tu-luz", "guia-cuaderno-practica"],
  },
];
// ─── Libros ───────────────────────────────────────────────────────────────────

export const libros: LibroProduct[] = [
  {
    id: "libro-s1-v1",
    title: "Lo que el cuerpo calla. Serie I: El ser y el silencio: Volumen 1",
    category: "Libro",
    series: "Serie I: El ser y el silencio",
    price: 24,
    description:
      "El primer volumen de nuestra serie editorial Despertar. Una exploración profunda de la arquitectura del silencio interior.",
    featured: true,
  },
  {
    id: "libro-s1-v2",
    title: "Lo que el cuerpo calla. Serie I: El ser y el silencio: Volumen 2",
    category: "Libro",
    series: "Serie I: El ser y el silencio",
    price: 24,
    description:
      "Continuación del viaje hacia la conciencia integrada. Profundiza en las prácticas de resonancia y equilibrio.",
    featured: true,
  },
  {
    id: "libro-s1-v3",
    title: "Lo que el cuerpo calla. Serie I: El ser y el silencio: Volumen 3",
    category: "Libro",
    series: "Serie I: El ser y el silencio",
    price: 24,
    description:
      "Tercer volumen de la serie que continúa explorando las memorias del Ser.",
    featured: false,
  },
  {
    id: "libro-s1-v4",
    title: "Lo que el cuerpo calla. Serie I: El ser y el silencio: Volumen 4",
    category: "Libro",
    series: "Serie I: El ser y el silencio",
    price: 24,
    description:
      "Volumen final de la Serie I, cerrando el ciclo de autodescubrimiento.",
    featured: false,
  },
  {
    id: "libro-s2-v1",
    title:
      "Lo que el cuerpo calla. Serie II: Los bucles y la dinámica perpetua: Volumen 1",
    category: "Libro",
    series: "Serie II: Los bucles y la dinámica perpetua",
    price: 24,
    description:
      "Primera parte de la Serie II que explora los patrones cíclicos de la conciencia.",
    featured: false,
  },
  {
    id: "libro-s2-v2",
    title:
      "Lo que el cuerpo calla. Serie II: Los bucles y la dinámica perpetua: Volumen 2",
    category: "Libro",
    series: "Serie II: Los bucles y la dinámica perpetua",
    price: 24,
    description:
      "Segunda parte de la Serie II completando la exploración de los bucles de la conciencia.",
    featured: false,
  },
];

// ─── Velas: Colección Despertar ───────────────────────────────────────────────

export const velasDespertar: VelaProduct[] = [
  {
    id: "vela-encuentra-tu-luz",
    title: "Encuentra tu Luz",
    category: "Vela en Cristal",
    collection: "despertar",
    format: "Vela en Cristal",
    price: 28,
    description:
      "Una vela creada para invitarte a hacer una pausa y mirar hacia tu interior. Te recuerda la importancia de conectar con tu verdadera esencia, sin filtros ni máscaras.",
    aceites: [
      "aceite-magnolia-peonia",
      "aceite-algodon-limpio",
      "aceite-bergamota",
    ],
    chakras: "C3, C4, C7",
    intencion:
      "Para momentos de frustración, culpa, vergüenza, desamor. Trabaja armonizando los sentimientos básicos, induciendo confianza, seguridad y alegría.",
    featured: true,
  },
  {
    id: "vela-umbral-ambar",
    title: "Umbral de Ámbar",
    category: "Vela en Cristal",
    collection: "despertar",
    format: "Vela en Cristal",
    price: 28,
    description:
      "Una vela que evoca poder, profundidad y magnetismo. Simboliza el paso hacia un nuevo nivel en tu vida, recordándote la seguridad y la fortaleza que habitan en ti.",
    aceites: [
      "aceite-ambar-egipcio",
      "aceite-magnolia-peonia",
      "aceite-whiskey",
    ],
    chakras: "C1, C2, C3, C4",
    intencion:
      "Se enfoca en la sanación profunda y el poder personal. Induce confianza, autenticidad, seguridad y fuerza.",
    featured: true,
  },
  {
    id: "vela-umbral-amor-interno",
    title: "Umbral de Amor Interno",
    category: "Vela en Cristal",
    collection: "despertar",
    format: "Vela en Cristal",
    price: 32,
    description:
      "Trabaja con el amor propio, el amor de pareja, el duelo y el cambio. El Ámbar y el Sándalo te sostienen, la Rosa y el Lirio blanco te cuidan, el Eucalipto y el Azahar te liberan.",
    aceites: [
      "aceite-ambar-egipcio",
      "aceite-rosa-oud",
      "aceite-eucalipto-blanco",
      "aceite-sandalo-lirio-blanco",
      "aceite-azahar",
    ],
    chakras: "C1, C2, C4, C5, C7",
    intencion:
      "Para la soledad, la duda, la confusión, el desánimo y la incertidumbre. Su lema: Soy mi esencia interior.",
    featured: true,
  },
  {
    id: "vela-lumen-serena",
    title: "Lumen Serena (Luz Serena)",
    category: "Vela en Cristal",
    collection: "despertar",
    format: "Vela en Cristal",
    price: 28,
    description:
      "Una vela que transmite claridad, elevación y calma. Representa la versión más elevada del Ser, el Humano Celeste. Ilumina los espacios interiores con una energía suave y equilibrada.",
    aceites: [
      "aceite-lirio-agua",
      "aceite-madera-caribena",
      "aceite-selenita-glow",
    ],
    chakras: "C1, C4, C6, C7",
    intencion:
      "Para la soledad, inseguridad, desconcierto, impureza. Su lema: Soy claro. Calmo y elevado, soy humano Celeste.",
    featured: false,
  },
  {
    id: "vela-entre-tierra-luz",
    title: "Entre la Tierra y la Luz (Set de 2 velas)",
    category: "Set de Velas",
    collection: "despertar",
    format: "Set de Velas",
    price: 52,
    description:
      "Un dúo que representa el equilibrio entre lo terrenal y lo espiritual. Incluye Umbral de Ámbar (Humano Divino) y Lumen Serena (Humano Celeste).",
    aceites: [],
    chakras: "C1, C2, C3, C4, C6, C7",
    intencion:
      "Para reconocer quién eres en tu esencia: una luz interior que avanza hacia su mejor versión.",
    featured: false,
  },
  {
    id: "vela-quantum-luz",
    title: "Quantum de Luz (Set de 2 velas)",
    category: "Set de Velas",
    collection: "despertar",
    format: "Set de Velas",
    price: 56,
    description:
      "Conformado por Encuentra tu luz y Umbral de amor interno. Diseñado para activar la transformación profunda e inmediata, la conexión con tu fuerza interior y la Libertad sin límites.",
    aceites: [],
    chakras: "C1, C2, C3, C4, C5, C7",
    intencion:
      "Ideal para comprender el verdadero sentido de la soledad, la gratitud, la aceptación y la Paz.",
    featured: false,
  },
  {
    id: "vela-trascender",
    title: "Trascender (Set de 4 velas)",
    category: "Set de Velas",
    collection: "despertar",
    format: "Set de Velas",
    price: 99,
    description:
      "Trabaja al unísono para activar los distintos niveles de conciencia: Nivel 1 (Encuentra tu Luz - Reset), Nivel 2 (Umbral de Ámbar - Empoderamiento), Nivel 3 (Amor Interno - Compasión), Nivel 4 (Lumen Serena - Paz Absoluta).",
    aceites: [],
    chakras: "Todos los chakras",
    intencion:
      "Guiarte por el camino del proceso interno: Limpio mi mente, Fortalezco mi voluntad, Abro mi corazón, Elevo mi espíritu.",
    featured: true,
  },
];

// ─── Velas: Colección Regalos Chispas de Luz ─────────────────────────────────

export const velasChispas: VelaProduct[] = [
  {
    id: "vela-elan-luz",
    title: "Élan de Luz (Cera derretida)",
    category: "Cera Derretida",
    collection: "chispas",
    format: "Cera Derretida",
    price: 18,
    description:
      "Una fragancia diseñada para inspirar claridad, elegancia y confianza. Sin humo, sin llama—solo luz hecha aroma.",
    aceites: [
      "aceite-selenita-glow",
      "aceite-lavanda",
      "aceite-bergamota",
      "aceite-lirio-agua",
      "aceite-magnolia-peonia",
    ],
    chakras: "C2, C3, C4, C6, C7",
    intencion: "Su lema: Salto, cambio, trasmuto.",
    featured: false,
  },
  {
    id: "vela-conchas",
    title: "Conchas (Bolsita regalo)",
    category: "Vela Decorativa",
    collection: "chispas",
    format: "Vela Decorativa",
    price: 15,
    description:
      "Su forma trae a la conciencia el retorno al origen, favoreciendo el silencio interior, la calma y la gestación de algo nuevo.",
    aceites: [],
    chakras: "Varios",
    intencion:
      "Para mesas de centro, rincones de descanso, baños, dormitorios.",
    featured: false,
  },
  {
    id: "vela-corazones",
    title: "Corazones (Bolsita regalo)",
    category: "Vela Decorativa",
    collection: "chispas",
    format: "Vela Decorativa",
    price: 15,
    description:
      "Simboliza el amor en todas sus expresiones: amor propio, familiar, de pareja y universal. Ideal para regalos significativos.",
    aceites: ["aceite-rosa-oud"],
    chakras: "C4",
    intencion:
      "Activar la energía del amor, fortalecer relaciones y abrir el corazón a nuevas experiencias.",
    featured: false,
  },
  {
    id: "vela-flores-margarita",
    title: "Flores Margarita (Bolsita regalo)",
    category: "Vela Decorativa",
    collection: "chispas",
    format: "Vela Decorativa",
    price: 15,
    description:
      "La Margarita simboliza luz, pureza y nuevos comienzos. Transmite renovación luminosa, resiliencia y confianza.",
    aceites: [],
    chakras: "C4, C7",
    intencion: "Siempre vuelve a salir el sol dentro de ti.",
    featured: false,
  },
  {
    id: "vela-mandalas",
    title: "Mándalas (Bolsita regalo)",
    category: "Vela Decorativa",
    collection: "chispas",
    format: "Vela Decorativa",
    price: 15,
    description:
      "Recuerda que la vida humana acciona en forma de ciclos completos. Aportan plenitud, armonía y creatividad.",
    aceites: [],
    chakras: "C1, C2, C3, C5, C7",
    intencion: "La gratitud convierte lo simple en luz.",
    featured: false,
  },
];

// ─── Velas: Colección Energía Interior ───────────────────────────────────────

export const velasEnergia: VelaProduct[] = [
  {
    id: "vela-renacer",
    title: "Renacer (Cubo con burbujas)",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 22,
    description:
      "Trae a tu memoria el mensaje del fin y el comienzo de algo nuevo. Implica movimiento, desapego, liberación y abundancia.",
    aceites: [],
    chakras: "C1, C3, C4, C7",
    intencion:
      "Propicia abundancia, éxito, movimiento, liberación y desapego. Ideal para entradas.",
    featured: false,
  },
  {
    id: "vela-evolucion",
    title: "Evolución (Espiralada)",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 22,
    description:
      "Trae a tu memoria las vueltas que da la vida, te ayuda a enfocarte a salir del laberinto.",
    aceites: [],
    chakras: "C4, C7",
    intencion:
      "Su lema: Soy calmo y me encuentro. Ideal para espacios de estudio.",
    featured: false,
  },
  {
    id: "vela-equilibrio",
    title: "Equilibrio (Yin Yang)",
    category: "Set de Velas",
    collection: "energia",
    format: "Set de Velas",
    price: 24,
    description:
      "Recuerda la ley del Tao, la necesidad de vivir en armonía con el todo. Enfatiza la introspección para el reencuentro con tu armonía interior.",
    aceites: ["aceite-rosa-oud", "aceite-canela-vainilla"],
    chakras: "C1, C2, C4",
    intencion:
      "Su lema: Mantengo mi centro. Ideal para repisas, mesitas, escritorios.",
    featured: false,
  },
  {
    id: "vela-nudo",
    title: "Nudo",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 22,
    description:
      "Te recuerda que la vida puede tener retos como los laberintos, pero también te enseña que se puede tener la fuerza y visión para liberarnos.",
    aceites: [
      "aceite-bamboo-himalaya",
      "aceite-bergamota",
      "aceite-lavanda",
      "aceite-eucalipto-blanco",
    ],
    chakras: "C3, C4, C5, C6, C7",
    intencion:
      "Crecimiento personal, amor propio, equilibrio interior, claridad y liberación.",
    featured: false,
  },
  {
    id: "vela-hexagonal",
    title: "Hexagonal - Esencia Interior",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 22,
    description:
      "La forma hexagonal trae a la memoria uno de los sólidos platónicos. El centro hueco donde nace la llama es el espacio interior donde vive tu luz personal.",
    aceites: [],
    chakras: "C1, C4, C7",
    intencion:
      "La calma comienza cuando vuelves a tu centro. Ideal para mesitas de noche y sitios de trabajo.",
    featured: false,
  },
];

// ─── Velas: Componentes internos (no listados en tienda) ─────────────────────
// Component candles that belong to a set product. Price: 0 is a sentinel.
// Not included in allVelas or allProducts — importable separately for fulfillment.

export const velasComponentes: VelaProduct[] = [
  {
    id: "vela-lado-yin",
    title: "Lado Yin",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 0,
    description:
      "Mitad Yin del set Equilibrio. Evoca el amor profundo y la fuerza interior que yace en ti.",
    aceites: ["aceite-rosa-oud"],
    chakras: "C1, C4, C7",
    intencion: "Amor profundo y fuerte que yace en ti.",
    featured: false,
  },
  {
    id: "vela-lado-yang",
    title: "Lado Yang",
    category: "Vela Decorativa",
    collection: "energia",
    format: "Vela Decorativa",
    price: 0,
    description:
      "Mitad Yang del set Equilibrio. Aporta contención y fortaleza emocional.",
    aceites: ["aceite-canela-vainilla"],
    chakras: "C1, C2",
    intencion: "Contención y fortaleza emocional.",
    featured: false,
  },
];

// ─── Guías ────────────────────────────────────────────────────────────────────

export const guias: GuiaProduct[] = [
  {
    id: "guia-cuaderno-practica",
    title: "Cuaderno de Práctica",
    category: "Guía",
    price: 18,
    description:
      "Un cuaderno de trabajo diseñado para acompañar tu práctica diaria de silencio y reflexión.",
    featured: false,
  },
  {
    id: "guia-eco-aroma",
    title: "Guía Eco de Aroma",
    category: "Guía",
    price: 15,
    description:
      "Manual práctico para comprender y aplicar el poder de los aromas en tu vida cotidiana.",
    featured: false,
  },
  {
    id: "guia-meditacion-velas",
    title: "Guía de Uso y Meditación con Velas",
    category: "Guía",
    price: 10,
    description:
      "Guía práctica de uso y meditación con las velas de la Colección Despertar.",
    featured: false,
  },
];

// ─── Materiales ───────────────────────────────────────────────────────────────────────────────

export const materiales: MaterialProduct[] = [
  // Mini pósteres
  {
    id: "poster-renacer",
    title: "Miniposter Renacer (RRI)",
    category: "Material",
    price: 5,
    description:
      "Mini póster sobre el renacer y el lenguaje celular silenciado.",
  },
  {
    id: "poster-herramientas-reconexion",
    title: "Mini Poster: Herramientas para la Reconexión",
    category: "Material",
    price: 5,
    description:
      "Mini póster con herramientas visuales para la reconexión interior.",
  },
  {
    id: "poster-renovacion",
    title: "Mini Poster: La Renovación",
    category: "Material",
    price: 5,
    description: "Mini póster orientado al proceso de renovación personal.",
  },
  {
    id: "poster-conflictos",
    title: "Mini Poster: Sobre los Conflictos",
    category: "Material",
    price: 5,
    description:
      "Mini póster (conjunto de 2) sobre el lenguaje de los conflictos.",
  },
  {
    id: "poster-reflejos-1",
    title: "Mini Poster: Los Reflejos en el Espejo del Ser (1)",
    category: "Material",
    price: 5,
    description: "Primer póster del díptico sobre los reflejos del ser.",
  },
  {
    id: "poster-reflejos-2",
    title: "Mini Poster: Los Reflejos en el Espejo del Ser (2)",
    category: "Material",
    price: 5,
    description: "Segundo póster del díptico sobre los reflejos del ser.",
  },
  {
    id: "poster-ciclos",
    title: "Mini Póster: Los Ciclos Horizontales y Verticales",
    category: "Material",
    price: 5,
    description: "Mini póster sobre los ciclos del ser.",
  },
  {
    id: "poster-arbol",
    title: "Mini Póster: El Árbol y Sus Fases de Análisis",
    category: "Material",
    price: 5,
    description:
      "Mini póster sobre el árbol genealógico y sus fases de análisis.",
  },
  {
    id: "poster-transformacion-interior",
    title: "Mini Póster: La Transformación Interior",
    category: "Material",
    price: 5,
    description: "Mini póster sobre el proceso de transformación interior.",
  },
  {
    id: "poster-principios-armonicos",
    title: "Mini Póster: Principios Armónicos del Ser",
    category: "Material",
    price: 5,
    description:
      "Mini póster sobre los principios armónicos del ser, la alimentación y el tipo de sangre.",
  },
  // Tarjetas
  {
    id: "tarjeta-aceites",
    title: "Tarjeta Informativa sobre Aceites",
    category: "Material",
    price: 2,
    description:
      "Tarjeta con información detallada sobre la acción de los aceites esenciales.",
  },
  {
    id: "tarjeta-afirmaciones-amor",
    title: "Tarjeta con Afirmaciones de Amor Propio",
    category: "Material",
    price: 2,
    description:
      "Tarjeta con afirmaciones de amor propio para el trabajo interior.",
  },
  // Accesorios
  {
    id: "frasco-esencia",
    title: "Frasco con Esencia",
    category: "Material",
    price: 15,
    description: "Frasco con esencia aromática de acompañamiento.",
  },
  {
    id: "frasco-esencias-renovadoras",
    title: "Frasco de Esencias Renovadoras",
    category: "Material",
    price: 15,
    description:
      "Frasco con mezcla de esencias renovadoras para apoyo en procesos de cambio.",
  },
  {
    id: "quemador-aromas",
    title: "Quemador de Aromas",
    category: "Material",
    price: 12,
    description: "Quemador para ceras derretidas y esencias aromáticas.",
  },
  {
    id: "bolsita-regalo",
    title: "Bolsita de Regalo",
    category: "Material",
    price: 2,
    description: "Bolsita decorativa para presentación de regalos.",
  },
];

// ─── All products ─────────────────────────────────────────────────────────────

export const allVelas: VelaProduct[] = [
  ...velasDespertar,
  ...velasChispas,
  ...velasEnergia,
];

export const allProducts: Product[] = [
  ...libros,
  ...velasDespertar,
  ...velasChispas,
  ...velasEnergia,
  ...guias,
  ...kitsApoyo,
  ...materiales,
];
