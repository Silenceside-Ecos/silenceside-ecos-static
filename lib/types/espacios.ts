// ─── Eco (Space) ─────────────────────────────────────────────────────────────

export interface Eco {
  id: string;
  title: string;
  description: string;
  capacity: string;
  features: string[];
  image: string;
  coleccionDeApoyo?: string[];
}

export interface Program {
  title: string;
  duration: string;
  sessions: string;
  description: string;
  href: string;
}

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface Aceite {
  nombre: string;
  funcion: string;
}

// ─── Ecos del Ser ─────────────────────────────────────────────────────────────

export interface QueEsEcosSer {
  title: string;
  intro: string;
  descripcion: string;
  ofrece: string[];
  ejeTrabajoIntro: string;
  ejeTrabajo: string[];
  beneficios: string[];
}

export interface Profesor {
  nombre: string;
  cargo: string;
  bio: string;
}

export interface DirigidoA {
  intro: string;
  requisitos: string[];
  elementosBasicos: string[];
}

export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export interface Sabia {
  titulo: string;
  contenido: string;
}

export interface InfoInteresanteEcosSer {
  sabias: Sabia[];
}

export interface InformacionEcosSer {
  queEs: QueEsEcosSer;
  profesores: Profesor[];
  dirigidoA: DirigidoA;
  valores: string[];
  preguntasFrecuentes: FAQ[];
  infoInteresante: InfoInteresanteEcosSer;
}

// KitApoyoEcosSer removed — use Kit from @/lib/types/productos

export interface Taller {
  nombre: string;
  contenido: string[];
  duracion: string;
  modalidad: string;
  publico: string;
  cierre: string;
}

export interface Serie {
  title: string;
  talleres: Taller[];
}

export interface Nivel {
  title: string;
  resumen: string;
  series: Serie[];
}

export interface ActividadComplementaria {
  title: string;
  descripcion: string;
}

export interface FormacionEcosSer {
  niveles: Nivel[];
  actividadesComplementarias: ActividadComplementaria[];
}

// ─── Ecos de los Aromas ───────────────────────────────────────────────────────

export interface Vela {
  nombre: string;
  descripcion: string;
  aceites?: Aceite[];
  variantes?: string[];
  intencion: string;
  chakras?: string;
}

export interface ColeccionVelas {
  nombre: string;
  descripcion: string;
  velas: Vela[];
}

export interface CatalogoVelas {
  coleccionDespertar: ColeccionVelas;
  coleccionChispas: ColeccionVelas;
  coleccionEnergia: ColeccionVelas;
  coleccionEstadosDelAlma: ColeccionVelas;
}

export interface QueEsEcosAromas {
  title: string;
  descripcion: string;
  introVelas: string;
}

export interface SabiaAromas {
  titulo: string;
  cita?: string;
  contenido: string;
}

export interface InfoInteresanteAromas {
  sabias: SabiaAromas[];
  colecciones: string[];
}

export interface InformacionEcosAromas {
  queEs: QueEsEcosAromas;
  beneficios: string[];
  formatosVelas: string[];
  catalogoVelas: CatalogoVelas;
  infoInteresante: InfoInteresanteAromas;
}

// KitApoyoEcosAromas removed — use Kit from @/lib/types/productos

export interface TallerAromas {
  nombre: string;
  objetivos: string[];
  contenido: string[];
  duracion: string;
  modalidad: string;
  materiales: string;
}

export interface FormacionEcosAromas {
  intro: string;
  talleres: TallerAromas[];
}
