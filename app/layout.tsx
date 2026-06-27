import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
  description:
    "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "/",
    siteName: SITE_NAME,
    title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
    description:
      "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
    images: ["/logo_black.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
    description:
      "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
    images: ["/logo_black.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/logo_black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_white.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_black.png",
        type: "image/png",
      },
    ],
    apple: "/logo_black.png",
  },
  category: "wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cinzel.variable} ${cormorant.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
