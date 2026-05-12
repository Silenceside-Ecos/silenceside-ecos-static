import type { Eco, Program } from "@/lib/types/espacios";
import {
  velasDespertar,
  velasChispas,
  velasEnergia,
} from "@/lib/services/productos";

export const ecos: Eco[] = [
  {
    kind: "ser",
    id: "ecos-del-ser",
    title: "Ecos del Ser",
    description:
      "Espacios de encuentro para explorar saberes que nutren el bienestar y la evolución del Ser, despertando el eco ancestral que habita en la conciencia humana.",
    capacity: "+15 personas",
    features: ["Información", "Formación", "Colección de apoyo"],
    image: "/Ecos_Del_Ser_Logo.jpeg",
    coleccionDeApoyo: [
      "kit-renacer",
      "kit-armonia-interior",
      "kit-renovacion",
      "kit-lenguaje-silenciado",
      "kit-identidad-azul",
      "kit-identidad-rosa",
      "kit-origen-1",
      "kit-origen-2",
      "kit-transformacion-1",
      "kit-transformacion-2",
      "kit-reconexion-sublime",
    ],
    get informacion() {
      return informacionEcosDelSer;
    },
    get formacion() {
      return formacionEcosSer;
    },
  },
  {
    kind: "aromas",
    id: "ecos-de-los-aromas",
    title: "Ecos de los Aromas",
    description:
      "Un espacio sensorial dedicado al poder transformador de los aromas, capaz de armonizar cuerpo, mente y espíritu y reconectar nuestra esencia a través del olfato.",
    capacity: "+15 personas",
    features: ["Información", "Formación", "Colección de apoyo"],
    image: "/Ecos_De_Los_Aromas_Logo.jpeg",
    coleccionDeApoyo: [
      "kit-aromaterapia-esencial",
      "kit-regalo-chispas",
      "kit-energia-hogar",
      "kit-equilibrio-armonia",
      "kit-despertar-completo",
      "kit-transformacion-integral",
      "kit-sanacion-emocional",
      "kit-claridad-elevacion",
    ],
    get informacion() {
      return informacionEcosAromas;
    },
    get formacion() {
      return formacionEcosAromas;
    },
  },
  {
    kind: "sonido",
    id: "ecos-del-sonido",
    title: "Ecos del Sonido",
    description:
      "Un espacio para explorar la relación entre sonido, vibración y equilibrio del ser, armonizando la energía y despertando el eco personal.",
    capacity: "+15 personas",
    features: ["Viajes Sonoros", "Frecuencias vibratorias", "Talleres"],
    image: "/Ecos_Del_Sonido_Logo.jpeg",
  },
];

export const programs: Program[] = [
  {
    title: "Crecimiento del Ser",
    duration: "4 semanas",
    sessions: "8 sesiones",
    description:
      "Talleres para aprender a entender lo silenciado arraigado en la memoria profunda del Ser.",
    href: "/espacios#ecos-del-ser",
  },
  {
    title: "Reintegración del Ser",
    duration: "8 semanas",
    sessions: "16 sesiones",
    description:
      "Herramientas para conectar y reprogramar tu esencia verdadera.",
    href: "/espacios",
  },
  {
    title: "Encuentra tu Luz",
    duration: "Intensivo",
    sessions: "Experiencia completa",
    description:
      "Talleres donde se integran los niveles de aprendizaje anteriores.",
    href: "/espacios#nivel-3",
  },
];

const informacionEcosDelSer = {
  queEs: {
    title: "¿Qué es Ecos del Ser?",
    intro: "Una propuesta de Silenceside Ecos",
    descripcion:
      "Ecos del Ser nace del encuentro entre profesionales con más de 15 años de experiencia en el acompañamiento de procesos de desarrollo humano, aprendizaje consciente e integración de saberes esenciales para el bienestar y la evolución del Ser. Su propósito es acercar enseñanzas fundamentales que, aunque en muchos casos han quedado silenciadas con el tiempo, forman parte de la sabiduría ancestral. Estos conocimientos conservan memorias profundas de la experiencia humana y hoy dialogan con los saberes contemporáneos, favoreciendo una comprensión más amplia y consciente de nosotros mismos. Ecos del Ser es un espacio de encuentro, reflexión e integración orientado a acompañar procesos de crecimiento personal y desarrollo interior.",
    ofrece: [
      "Talleres presenciales",
      "Encuentros formativos",
      "Seminarios y coloquios",
      "Asesorías individuales (presenciales y online)",
      "Materiales de acompañamiento y profundización",
    ],
    ejeTrabajoIntro:
      "El enfoque central de Ecos del Ser es el autoconocimiento de la firma bioelectromagnética personal, entendida como base del desarrollo integral del ser humano.",
    ejeTrabajo: [
      "Reconocer las memorias ancestrales que influyen en la experiencia presente",
      "Comprender los bucles generados por experiencias propias o del clan no resueltas",
      "Desarrollar capacidades para ampliar la percepción y las posibilidades de vida",
      "Incorporar recursos que faciliten procesos de transformación personal",
      "Diseñar un protocolo personal de vida orientado al bienestar y la prosperidad individual y colectiva",
    ],
    beneficios: [
      "Mayor conexión contigo mismo",
      "Mayor claridad mental y comprensión de los propios procesos internos",
      "Mejor gestión emocional y capacidad de acción consciente",
      "Herramientas prácticas para abordar bloqueos cotidianos",
      "Mejora en la comunicación y en los vínculos humanos",
      "Expansión del nivel de conciencia y del sentido evolutivo personal",
    ],
  },
  profesores: [
    {
      nombre: "Doraysis López Rodríguez",
      cargo: "Presidente e instructora de Silenceside Ecos",
      bio: "Doctora en Estomatología, especializada en tratamientos dentales generales, ortodoncia, endodoncia y periodoncia. Licenciada en Radiología Dental, Gestión de diagnósticos y planes de tratamiento personalizados. Diplomada en Gestión Emocional e Integración Bioemocional.",
    },
    {
      nombre: "Soraya Beauballet Padrón",
      cargo: "Asesora y profesora Ecos del Ser",
      bio: "Máster en Ciencias. Médico especialista en Neurología y Neurofisiología, profesora e investigadora, con más de 35 años de experiencia en docencia e investigación. Su trabajo integra neurociencias, humanidades y medicina integrativa, ofreciendo cursos y talleres internacionales sobre gestión emocional, integración bioemocional, comprensión del inconsciente y desarrollo personal.",
    },
    {
      nombre: "Delia Mercedes Rojo Domínguez",
      cargo: "Asesora y profesora Ecos del Ser",
      bio: "Máster en Ciencias. Médico especialista en Bioquímica y profesora investigadora con más de 35 años de experiencia. Su trabajo combina la genética, neurociencias y gestión emocional, ofreciendo formación en integración bioemocional y desarrollo personal. Actualmente es Terapeuta de conducta.",
    },
    {
      nombre: "Isaimy Díaz Cruz",
      cargo: "Asesora e instructora Ecos del Ser",
      bio: "Máster en Ciencias. Médico especialista en Neonatología y Medicina familiar con más de 24 años de experiencia. Su trabajo combina el enfoque pediátrico, el bioenergético y gestión emocional, ofreciendo formación en integración bioemocional y desarrollo personal. Actualmente es Terapeuta de conducta.",
    },
  ],
  dirigidoA: {
    intro: "Toda persona (mayor de 18 años) que desee:",
    requisitos: [
      "Aprender y saber más sobre sí mismo",
      "Entender la repercusión de los acontecimientos que vivencia",
      "Incorporar nuevos cambios para vivir mejor",
    ],
    elementosBasicos: [
      "La disposición del individuo, tanto consciente como inconsciente, para comenzar su propia exploración.",
      "La necesidad de comenzar la búsqueda del conocimiento de uno mismo a través de la reflexión (identidad).",
      "Comprender los acontecimientos, tanto internos como externos (hábitos, costumbres, creencias, lealtades y legados) que le acompañan.",
      "Convertir los sentidos externos en cualidades internas.",
      "Adquirir conocimiento, entendimiento y amor para aprender y evolucionar.",
    ],
  },
  valores: [
    "Respeto",
    "Valoración",
    "Solidaridad",
    "Cooperación",
    "Generosidad",
    "Honestidad",
    "Sabiduría",
    "Prudencia",
    "Amor universal",
  ],
  preguntasFrecuentes: [
    {
      pregunta: "¿Qué significa lo que me pasa?",
      respuesta:
        'Esta pregunta generalmente está enmarcada en el dolor, el agobio y el sufrimiento por el cual transita una persona, al tener un evento determinado en su vida, ya sea la aparición de un malestar, o una problemática mayor (enfermedad o trastorno) así como situaciones de "mala suerte" que se repiten cada cierto tiempo (bucles).',
    },
    {
      pregunta: "¿Por qué me pasa esto?",
      respuesta:
        "Lo principal de esta pregunta al ser realizada, es el enfoque que se da al responderse, enseñando que conocer el ¿por qué?, se corresponde con el presente, y que más bien la pregunta real estaría dirigida a saber el ¿para qué? me pasa esto, ya sea una situación o problemática que continuamente se repite en la vida y esto lleva indisolublemente a las memorias ancestrales silenciadas.",
    },
    {
      pregunta: "¿Qué lo originó?",
      respuesta:
        "Igualmente se relaciona con las memorias ancestrales, solo que en este aspecto se enseña cómo encontrar el origen real de la situación que emerge donde solo se ve la punta de esta, lo demás subyace en la profundidad de la mente de la persona.",
    },
    {
      pregunta: "¿Cómo lo cambio?",
      respuesta:
        "Pregunta muy frecuente y esta se solventa aprendiendo y practicando la serie de herramientas que se van enseñando en los talleres.",
    },
    {
      pregunta: "¿Qué resultado obtengo de ese cambio?",
      respuesta:
        "Esta pregunta siempre va relacionada a notar la memoria sobre todo del punto raíz por el que se entra a un taller donde la expectativa, si bien va unida al conocimiento que se adquiere, la constancia y la práctica llevan a un resultado certero y mejor.",
    },
  ],
  infoInteresante: {
    sabias: [
      {
        titulo: "¿Qué es la memoria ancestral?",
        contenido:
          "Se refiere a las historias (tradiciones, mitos y leyendas), vivencias y emociones que han experimentado familiares de generaciones anteriores, con los que existen vínculos transgeneracionales y, en especial, en la manera en que se vivencian los conflictos y sienten las emociones. Estas memorias son viajantes inquietos que subyacen en la profundidad de la mente humana y que pulsan con una necesidad prioritaria, concluir aquello que se quedó sin terminar.",
      },
      {
        titulo: "¿Qué es el autoconocimiento?",
        contenido:
          "Este se refiere a conocerse a sí mismo, a la identidad del ser. Esta no solo es vista como un registro que se adquiere o se asigna al nacer, sino la identidad que tiene múltiples vínculos, los cuales doblan y repiten situaciones, así como la identidad real que espera salir a la superficie para realizar su verdadera tarea.",
      },
    ],
  },
};

const formacionEcosSer = {
  niveles: [
    {
      title: "Nivel 1: Lo que el cuerpo calla",
      resumen:
        "Este nivel inicial permite encontrar su huella ancestral causante de lo que su cuerpo calla y cómo se expresa en los diferentes planos físico-mental-emocional-espiritual.",
      series: [
        {
          title: "Serie I. El Ser y el silencio",
          talleres: [
            {
              nombre:
                "El lenguaje silenciado del malestar y sus ecos desde el inconsciente",
              contenido: [
                "El malestar, su estructura oculta",
                "Los conflictos como resorte disparador principal de la aparición del malestar",
                "El lenguaje celular silenciado del malestar, fases por las que transita su expresión y herramienta para su interpretación",
                "Herramienta para el cambio",
              ],
              duracion: "3 días, 2 a 4 horas por día",
              modalidad: "Presencial",
              publico:
                "Todas las personas que deseen autoconocerse, la gestión emocional y la conexión cuerpo-mente y el todo.",
              cierre:
                "Comprender tu malestar es el primer paso para transformar tu realidad.",
            },
            {
              nombre: "La identidad y sus reflejos",
              contenido: [
                "La identidad como resorte del malestar y sus incógnitas",
                "Etapas de construcción del Yo",
                "Los espejos reflejos del Yo y las máscaras del ser",
                "Herramienta para identificar sus máscaras",
              ],
              duracion: "2 días, 2 a 4 horas por día",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean profundizar en su identidad, cuestionar los roles que han asumido a lo largo de su vida y reconocer las máscaras que influyen en su forma de pensar, sentir y actuar.",
              cierre:
                "Cuando reconoces tus máscaras, comienzas a vivir desde tu verdad.",
            },
            {
              nombre: "Las raíces del alma y el malestar",
              contenido: [
                "El cuerpo y sus niveles. El punto de encaje sede de las huellas ancestrales que hace que se exprese un tipo de malestar.",
                "La percepción de la realidad desde la conciencia y el inconsciente. Los filtros (VAC).",
                "La herramienta para identificar su propio filtro y equilibrarlo.",
                "Los resortes que disparan el malestar: necesidades y problemáticas del ser. Herramientas para determinar cuál está produciendo una fuga de energía y para eliminarla",
              ],
              duracion: "2 días, 2 a 4 horas por día",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean comprender el origen profundo de su malestar desde una mirada integral, reconociendo la influencia de sus vivencias, percepciones y huellas internas en su realidad actual.",
              cierre:
                "En lo más profundo de ti están las respuestas que tu vida está buscando.",
            },
            {
              nombre: "Las sombras del pasado y el malestar",
              contenido: [
                "La matriz profunda sobre la que descansa el malestar o la trama invisible que lo sostiene y le da sentido: Las emociones, sentimientos, sensaciones, los pensamientos, las creencias. Herramientas para identificar y cambiar la estructura alterada del lenguaje que ancla las creencias.",
                "Los valores. Herramienta para identificar valores perdidos o no establecidos y recuperarlos.",
                "El lenguaje comunicacional del cuerpo. Herramienta básica para su interpretación.",
              ],
              duracion: "3 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean explorar las influencias de su pasado en su presente, comprender las creencias que sostienen su malestar y adquirir herramientas para transformarlas desde la conciencia.",
              cierre:
                "Lo que hoy llamas pasado, sigue vivo hasta que decides transformarlo.",
            },
          ],
        },
        {
          title: "Serie II. El ser y los bucles de la dinámica perpetua",
          talleres: [
            {
              nombre: "El ciclo que atrapa",
              contenido: [
                "El tiempo y su degradación cósmica, universal y planetaria e influencia sobre los ciclos humanos.",
                "La vida cotidiana: periodos anuales, mensuales, diarios, personales, grupales. Herramientas para identificar la influencia que tienen sobre la vida cotidiana.",
                "Los bucles y los malestares. La perpetuidad y los ciclos celulares. Herramientas para identificar dónde se inicia el malestar y activar",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean comprender los ciclos que influyen en su vida, identificar patrones repetitivos que generan malestar y adquirir herramientas para interrumpirlos de manera consciente.",
              cierre:
                "Lo que se repite en tu vida, no es casualidad�?� es un ciclo esperando ser comprendido.",
            },
            {
              nombre:
                "Las memorias ancestrales redundantes del Ser. La huella primigenia",
              contenido: [
                "Memorias paternas y maternas. La impresión del Yo",
                "Memorias ancestrales del clan familiar (nuclear, linaje de la 1era cuarteta, resonancia en los clanes externos, la paradoja del tiempo)",
                "Herramientas para el análisis de diferentes fases por las que transita el mensaje del clan.",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean comprender la influencia de sus memorias familiares y ancestrales en su identidad, emociones y experiencias actuales, y adquirir herramientas para interpretarlas y transformarlas.",
              cierre:
                "En tu origen no solo hay historia�?� también hay la clave de tu transformación.",
            },
          ],
        },
      ],
    },
    {
      title: "Nivel 2: La realidad y la ilusión",
      resumen:
        "Este nivel medio se enfoca en el entendimiento de la realidad como imaginario, ilusión o entorno evidente, así como el logro de la transformación interna y externa del ser para su crecimiento y desarrollo como Humano.",
      series: [
        {
          title: "Serie I. La realidad y la ilusión",
          talleres: [
            {
              nombre: "La estructura de la realidad y de la Ilusión",
              contenido: [
                "La realidad, la imagen y las formas, el imaginario, lo simbólico, la fantasía, la ilusión, el eco",
                "Los tipos y contenidos de la realidad. Ámbitos de la realidad: planos, dimensiones, mundos, universos",
                "La realidad manifestada. Factores de que depende la realidad. Esquema general",
                "Herramientas para gestionar la distorsión de los factores",
                "Herramientas para interpretarla y activar los procesos de la percepción de la realidad certera.",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Personas interesadas en expandir su conciencia y profundizar en la comprensión de la realidad desde diferentes niveles.",
              cierre:
                "Ver con claridad es el inicio de una nueva forma de existir.",
            },
            {
              nombre: "El remodelaje de la realidad personal y grupal",
              contenido: [
                "El observador. Tipos. Importancia de la atención enfocada",
                "El silencio",
                "Las señales en la realidad",
                "La comunicación en la realidad. La palabra viva",
                "Herramientas prácticas",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean transformar su realidad desde la conciencia del observador, desarrollar una atención más enfocada y adquirir herramientas prácticas para generar cambios tanto a nivel personal como en sus vínculos.",
              cierre: "La realidad cambia cuando cambia quien la observa.",
            },
          ],
        },
        {
          title: "Serie II. La transformación del ser",
          talleres: [
            {
              nombre:
                "La estructura propia y su resonancia con la realidad externa",
              contenido: [
                "La mente. Sus diferenciaciones o esferas (consciente, preconsciente, subconsciente e inconsciente) y la realidad. La firma propia.",
                "Marcadores internos y externos que frenan apertura de la realidad certera",
                "Herramientas prácticas de identificación de los frenos.",
                "Herramienta para la transformación del yo",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean comprender cómo su estructura interna influye en la realidad que experimentan, identificar los bloqueos que limitan su percepción y adquirir herramientas para transformar su forma de pensar, sentir y actuar.",
              cierre:
                "Reconocer tu estructura es el primer paso para reescribir tu realidad.",
            },
            {
              nombre:
                "La integralidad de la Conciencia como Realidad Universal",
              contenido: [
                "La conciencia material, mental y universal. Diferenciación de sus procesos",
                "Herramientas de conexión de ambas conciencia.",
                "Los principios Universales, las leyes y la Conciencia",
                "Niveles evolutivos del ser: El humano, el humano divino y el humano celeste.",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean expandir su nivel de conciencia, comprender los diferentes planos en los que se manifiesta y adquirir herramientas para integrar su dimensión material, mental y universal en su vida cotidiana.",
              cierre:
                "Eres más de lo que percibes�?� y estás en proceso de recordarlo.",
            },
          ],
        },
      ],
    },
    {
      title: "Nivel 3: La Realidad y la Misión",
      resumen:
        "Este nivel superior está enfocado en el entendimiento del Ser ante las pruebas y desafíos que la Realidad genuina y cambiante propone, conociendo que todo lo que acontece, son escalones de una Gran escalera, que uno decide si subir o bajar.",
      series: [
        {
          title: "Serie I. Las pruebas y desafíos. El cambio real del Ser",
          talleres: [
            {
              nombre: "Niveles de pruebas y desafíos",
              contenido: [
                "Las diferentes tipos de pruebas y los momentos en que estas aparecen",
                "Herramienta para identificar si se pasó la prueba o no",
                "Los diferentes desafíos según los niveles de conciencia adquiridos y las pruebas asociadas",
                "Herramienta para determinar en qué nivel de conciencia se está gestionando la prueba y el desafío de esta.",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean comprender el sentido de las pruebas que atraviesan en su vida, identificar en qué nivel de conciencia las están gestionando y adquirir herramientas para afrontarlas de manera más consciente y evolutiva.",
              cierre:
                "Superar la prueba es comprender lo que vino a enseñarte.",
            },
            {
              nombre: "La objetividad de la ecuanimidad ante el cambio",
              contenido: [
                "Los factores externos que perturban la transformación integrada del ser",
                "Herramientas para contener los factores perturbadores y mantener la ecuanimidad ante los cambios",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean aprender a sostenerse con equilibrio ante los cambios de la vida, gestionar los factores externos que afectan su estabilidad y desarrollar una actitud más consciente, objetiva y serena frente a los procesos de transformación.",
              cierre:
                "La ecuanimidad es la base desde la cual todo cambio puede ser vivido con conciencia.",
            },
          ],
        },
        {
          title: "Serie II. La Misión y el propósito del Ser",
          talleres: [
            {
              nombre: "Misión del Ser contra legado del ser",
              contenido: [
                "La misión del ser y el legado. Diferencias",
                "Tipos de búsqueda que inician el camino para el encuentro con la misión",
                "La imagen y la misión. Los sólidos platónicos",
                "El camino su tránsito",
                "Las crisis y los retrocesos. La reevaluación continua",
                "Los dones y las 5 misiones y sus tareas",
                "Herramientas para determinar la misión",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean descubrir su misión de vida, diferenciarla de los mandatos o legados heredados y adquirir herramientas para avanzar en su propio camino con mayor claridad y sentido.",
              cierre:
                "Entre lo que te fue dado y lo que viniste a ser, está tu verdadera elección.",
            },
            {
              nombre: "El Propósito",
              contenido: [
                "Los diferentes propósitos: el primigenio y los secundarios (distorsiones)",
                "El ego. Marcadores negativos. Herramienta para identificarlos y cambiarlos",
                "El propósito y su relación con las diferentes misiones",
                "Las tareas, las misiones y el propósito. Herramienta integradora",
              ],
              duracion: "2 días",
              modalidad: "Presencial",
              publico:
                "Dirigido a personas que desean descubrir su propósito de vida, comprender las diferencias entre el propósito esencial y sus distorsiones, y adquirir herramientas para alinearse con una vida más consciente y coherente.",
              cierre:
                "Cuando te alineas con tu propósito, todo comienza a tomar sentido.",
            },
          ],
        },
      ],
    },
  ],
  actividadesComplementarias: [
    {
      title: "Encuentros",
      descripcion:
        "Espacios de intercambio y reflexión grupal sobre los temas abordados en los talleres.",
    },
    {
      title: "Seminarios",
      descripcion:
        "Profundización teórica y práctica en temáticas específicas del desarrollo del Ser.",
    },
    {
      title: "Entrenamientos personalizados",
      descripcion:
        "Acompañamiento individual para quienes desean un proceso más profundo y a medida.",
    },
    {
      title: "Coloquios",
      descripcion:
        "Conversaciones abiertas con expertos y facilitadores sobre temas de interés común.",
    },
  ],
};

const informacionEcosAromas = {
  queEs: {
    title: "¿Qué es Ecos de los Aromas?",
    descripcion:
      "Ecos de los Aromas es un espacio que brinda una experiencia sensorial dedicada al poder transformador de los aromas. Es otra de las propuestas distintivas de Silenceside Ecos, que nace de la inspiración y estudio de su equipo de creadores, de correlacionar los aspectos silenciados de las emociones y el cambio que resultaría de la combinación de un grupo de esencias aromáticas esenciales. Esta propuesta tiene una directriz llamada Aroma-Emoción. Se enfoca en la exploración de cómo los olores influyen en nuestras emociones, recuerdos, energía y bienestar integral. A través del uso consciente de aceites esenciales, inciensos, resinas y plantas, el participante aprende a armonizar su espacio interior y exterior, reconectando con su esencia a través del sentido del olfato.",
    introVelas:
      "Silenceside Ecos presenta una línea de velas en tres colecciones, creadas para acompañar momentos de conexión personal y familiar, favoreciendo espacios de calma, presencia y transformación interior. Cada pieza ha sido elaborada artesanalmente desde el respeto, la autenticidad y el amor universal, utilizando esencias de aceites aromáticos ecológicos cuidadosamente seleccionados.",
  },
  beneficios: [
    "Armonización emocional y energética",
    "Reducción del estrés y la ansiedad",
    "Estimulación de la creatividad y la memoria",
    "Creación de ambientes positivos y conscientes",
    "Salto cuántico de la conciencia",
  ],
  formatosVelas: [
    "Velas en contenedores de cristal",
    "Ceras aromáticas derretibles (wax melts)",
    "Velas decorativas",
  ],
  catalogoVelas: [
    {
      collection: "despertar" as const,
      nombre: "Colección Despertar",
      descripcion:
        "Velas en contenedores de cristal, seguras y fáciles de transportar. Se conservan mejor y su aroma se mantiene intacto. Cada vez que son prendidas, su aroma resulta como la primera vez.",
      velas: velasDespertar,
    },
    {
      collection: "chispas" as const,
      nombre: "Colección Regalos Chispas de Luz",
      descripcion:
        "Ideal para aromaterapia y ambientación del hogar. Aportan fragancias agradables, sensación de calma y un toque decorativo único.",
      velas: velasChispas,
    },
    {
      collection: "energia" as const,
      nombre: "Colección Energía Interior",
      descripcion:
        "Velas decorativas que sugieren con su forma y color la definición de una intención. Cada representación activa en tu memoria un mensaje silente que pulsa por salir a la luz.",
      velas: velasEnergia,
    },
  ],
  infoInteresante: {
    sabias: [
      {
        titulo: "¿Qué son los Aceites esenciales?",
        cita: '"El medio para mantenerse sano es tomar cada día un baño perfumado y recibir un masaje con aceites aromáticos" - Hipócrates en el año 400 a.n.e.',
        contenido:
          "Son aceites extraídos de las plantas. Generalmente de composición bastante compleja, dado por sus principios volátiles. Contienen moléculas aromáticas, que son las que confieren el olor peculiar de la planta y otras moléculas que conforman sustancias químicas con distintas propiedades como las de protección contra hongos, bacterias, virus y otras plagas.",
      },
      {
        titulo: "¿Cuáles son las propiedades de los aceites esenciales?",
        contenido:
          "Dada sus propiedades y beneficios se reporta que se utilizan desde hace 4000 años. Pueden ser: Relajantes, Analgésicas, Anticelulíticas, Antiarrugas, Antiinflamatorias, Antibacterianas, Antifúngicas, Antivíricas.",
      },
      {
        titulo: "Formas de uso",
        contenido:
          "Baño (10 gotas mezcladas en aceite vegetal), Ingesta (2 gotas 3 veces al día con alimento), Inhalación (2 gotas en pañuelo o difusor), Masajes (6 gotas con aceite vegetal), Perfumería y cosmética.",
      },
      {
        titulo: "Indicaciones más frecuentes",
        contenido:
          "Stress, trastornos del sueño, dolores (migraña, artralgias), descongestión respiratoria y digestiva, cuidado de la piel y cosmetología, limpieza corporal energética y emocional.",
      },
    ],
    colecciones: [
      "Colección Despertar",
      "Colección Regalos Chispas de luz",
      "Colección Energía interior",
    ],
  },
};

const formacionEcosAromas = {
  intro:
    "Los talleres Ecos de los aromas le guiarán por dos caminos: Crear aromas combinados (ambientales y corporales), cada uno inspirado en el cambio que estas puedan producir en el estado que produce una emoción silenciada. Diseñar velas con la base de los aromas creados alineados con la identidad de Silenceside Ecos. Estos talleres se impartirán en la modalidad online y se ofertarán los materiales para su estudio y experimentación creativa.",
  talleres: [
    {
      nombre: "Taller Ecos del aroma",
      objetivos: [
        "Guiar a los participantes a descubrir el lenguaje invisible de los aromas y su capacidad para equilibrar cuerpo, mente y espíritu.",
        "Aprender a crear mezclas personales",
      ],
      contenido: [
        "El lenguaje del aroma: Cómo los aromas se conectan con la memoria emocional. Diferencia entre aroma natural y sintético.",
        "Los elementos y los olores: Aromas de tierra, agua, aire y fuego.",
        "Las emociones y su correlación con las esencias y los chacras",
        "Cómo elegir el aroma según el estado emocional o necesidad energética.",
        "Creación de mezclas personales: combinaciones base para diferentes propósitos (calma, energía, claridad, protección).",
      ],
      duracion: "2 días",
      modalidad: "Online",
      materiales: "Kit de inicio con esencias básicas",
    },
    {
      nombre: "Taller Diseño de Velas con Intención",
      objetivos: [
        "Aprender a diseñar velas aromáticas alineadas con intenciones específicas",
        "Combinar aromas, colores y símbolos para potenciar el efecto transformador",
      ],
      contenido: [
        "Fundamentos del diseño de velas: tipos de cera, mechas y contenedores",
        "La intención como base: cómo definir el propósito de cada vela",
        "Combinación de aromas según la directriz Aroma-Emoción",
        "Elementos simbólicos: colores, formas y decoración consciente",
        "Práctica guiada: creación de tu primera vela con intención",
      ],
      duracion: "2 días",
      modalidad: "Online",
      materiales: "Kit de materiales para elaboración de velas",
    },
  ],
};
