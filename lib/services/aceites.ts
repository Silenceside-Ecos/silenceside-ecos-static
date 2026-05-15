import type { Aceite } from "@/lib/types/productos";

// ─── Canonical Aceite Registry ────────────────────────────────────────────────
// Single source of truth for all scent oils used across VelaProduct entries.
// VelaProduct.aceites holds string[] of these IDs; resolve at render time.

export const allAceites: Aceite[] = [
  {
    id: "aceite-magnolia-peonia",
    nombre: "Magnolia + Peonía",
    funcion:
      "Corazón y Autoestima. Activa C4 y C7. Trabajan el amor propio, la dulzura y la sanación de heridas en las relaciones.",
  },
  {
    id: "aceite-algodon-limpio",
    nombre: "Algodón Limpio",
    funcion: "Entorno y Reinicio. Activa C7. Limpieza emocional, paz y pureza.",
  },
  {
    id: "aceite-bergamota",
    nombre: "Bergamota",
    funcion:
      "Impulso de Alegría, claridad y optimismo. Activa C3 y C4. Eleva el ánimo de forma inmediata.",
  },
  {
    id: "aceite-ambar-egipcio",
    nombre: "Ámbar Egipcio",
    funcion:
      "Base de seguridad. Activa C1, C2 y C4. Contención emocional, efecto abrazo.",
  },
  {
    id: "aceite-whiskey",
    nombre: "Whiskey",
    funcion: "Impulso y autenticidad. Activa C3. Rompe lo tradicional.",
  },
  {
    id: "aceite-rosa-oud",
    nombre: "Rosa y Oud",
    funcion:
      "Corazón Sanador. Activa C4 y C7 (Rosa), C1 (Oud). Sanación emocional profunda, profundidad y transformación con amor propio.",
  },
  {
    id: "aceite-eucalipto-blanco",
    nombre: "Eucalipto Blanco",
    funcion:
      "Claridad mental, expansión y liberación. Activa C1, C4, C5 y C7. Libera lo no expresado.",
  },
  {
    id: "aceite-sandalo-lirio-blanco",
    nombre: "Sándalo y Lirio Blanco",
    funcion: "Estructura y lujo. Activa C1 y C7. Paz espiritual profunda.",
  },
  {
    id: "aceite-azahar",
    nombre: "Azahar",
    funcion: "Luz y Optimismo. Activa C2 y C4. Combate tristeza y ansiedad.",
  },
  {
    id: "aceite-lirio-agua",
    nombre: "Lirio de Agua / Nenúfar",
    funcion: "Pureza y renovación. Activa C2, C4 y C7. Limpia el ruido mental.",
  },
  {
    id: "aceite-madera-caribena",
    nombre: "Madera Caribeña",
    funcion: "Tierra y calidez. Activa C1 y C4. Carácter acogedor y sólido.",
  },
  {
    id: "aceite-selenita-glow",
    nombre: "Selenita Glow",
    funcion:
      "Intención espiritual y claridad mental. Activa C6 y C7. Limpieza energética.",
  },
  {
    id: "aceite-lavanda",
    nombre: "Lavanda",
    funcion:
      "Relajación profunda, serenidad mental y equilibrio emocional. Activa C6 y C7. Reduce estrés y ansiedad.",
  },
  {
    id: "aceite-canela-vainilla",
    nombre: "Canela + Vainilla",
    funcion: "Contención y fortaleza emocional.",
  },
  {
    id: "aceite-bamboo-himalaya",
    nombre: "Bamboo de Himalaya",
    funcion: "Crecimiento personal, amor propio y equilibrio. Activa C4 y C7.",
  },
];
