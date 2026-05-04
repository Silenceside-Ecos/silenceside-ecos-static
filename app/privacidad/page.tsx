import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | Silenceside Ecos",
  description: "Política de privacidad de Silenceside Ecos. Cómo recopilamos, usamos y protegemos tu información personal.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />
      
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
            Legal
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl tracking-[0.10em] text-foreground uppercase leading-tight">
            Política de Privacidad
          </h1>
          <p className="mt-6 font-sans text-muted-foreground">
            Última actualización: Abril 2026
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <div className="space-y-8 font-sans text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  1. Información que Recopilamos
                </h2>
                <p>
                  En Silenceside Ecos, recopilamos información que nos proporcionas directamente cuando:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Te registras para nuestros talleres o eventos</li>
                  <li>Realizas una compra en nuestra tienda</li>
                  <li>Te suscribes a nuestro boletín</li>
                  <li>Nos contactas a través de nuestros formularios</li>
                  <li>Participas en nuestras experiencias y programas</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  2. Uso de la Información
                </h2>
                <p>
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Procesar tus pedidos y reservaciones</li>
                  <li>Enviarte información sobre nuestros servicios y eventos</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  3. Protección de Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                  tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  4. Compartir Información
                </h2>
                <p>
                  No vendemos, intercambiamos ni transferimos tu información personal a terceros, 
                  excepto cuando sea necesario para:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Procesar pagos de forma segura</li>
                  <li>Cumplir con requisitos legales</li>
                  <li>Proteger nuestros derechos y seguridad</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  5. Tus Derechos
                </h2>
                <p>
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  6. Cookies
                </h2>
                <p>
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar 
                  tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  7. Contacto
                </h2>
                <p>
                  Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
                </p>
                <p className="mt-4 text-foreground font-medium">
                  Silencesideecos@gmail.com
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  8. Cambios en esta Política
                </h2>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
                  Te notificaremos sobre cambios significativos publicando la nueva política en esta página.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  )
}
