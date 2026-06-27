import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Philosophy } from "@/components/philosophy";
import { EventsCalendar } from "@/components/events-calendar";
import { Experiences } from "@/components/experiences";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SOCIAL_LINKS } from "@/lib/social-links";
import { buildBreadcrumbListJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
  description:
    "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
    description:
      "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
    url: "/",
    images: ["/logo_black.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silenceside Ecos | Bienestar Emocional y Crecimiento Personal",
    description:
      "El lado del silencio donde nacen los ecos del alma. Descubre el desarrollo de la conciencia integrada a través de servicios holísticos, espacios educativos y experiencias transformadoras.",
    images: ["/logo_black.png"],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo_black.png`,
      sameAs: Object.values(SOCIAL_LINKS),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      ...buildBreadcrumbListJsonLd([{ name: "Inicio", path: "/" }], "/", false),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />
      <Hero />
      <Services />
      <Philosophy />
      <EventsCalendar />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
