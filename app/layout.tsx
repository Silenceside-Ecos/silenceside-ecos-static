import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: [
      {
        url: "/logo_black.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo_black.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo_black.png",
        type: "image/png",
      },
    ],
    apple: "/logo_black.png",
  },
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
