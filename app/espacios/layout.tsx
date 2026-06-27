import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espacios | Silenceside Ecos",
  description:
    "Programas de acompañamiento, formación y crecimiento personal para fortalecer tu proceso de conciencia integrada.",
  alternates: {
    canonical: "/espacios/",
  },
  openGraph: {
    title: "Espacios | Silenceside Ecos",
    description:
      "Programas de acompañamiento, formación y crecimiento personal para fortalecer tu proceso de conciencia integrada.",
    url: "/espacios/",
    images: ["/logo_black.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacios | Silenceside Ecos",
    description:
      "Programas de acompañamiento, formación y crecimiento personal para fortalecer tu proceso de conciencia integrada.",
    images: ["/logo_black.png"],
  },
};

export default function EspaciosLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
