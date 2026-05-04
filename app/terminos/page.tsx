import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
  title: "Términos de Servicio | Silenceside Ecos",
  description: "Términos y condiciones de uso de los servicios de Silenceside Ecos.",
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen">
      <PageHeader />
      
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="font-serif text-sm tracking-[0.28em] text-primary uppercase">
            Legal
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl tracking-[0.10em] text-foreground uppercase leading-tight">
            Términos de Servicio
          </h1>
          <p className="mt-6 font-sans text-muted-foreground">
            Última actualización: Abril 2026
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <div className="space-y-8 font-sans text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  1. Aceptación de los Términos
                </h2>
                <p>
                  Al acceder y utilizar los servicios de Silenceside Ecos, aceptas estar vinculado por estos 
                  términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no podrás 
                  acceder a nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  2. Descripción de los Servicios
                </h2>
                <p>
                  Silenceside Ecos ofrece:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Talleres y programas de desarrollo personal</li>
                  <li>Experiencias de bienestar y conciencia integrada</li>
                  <li>Productos editoriales y materiales de apoyo</li>
                  <li>Viajes sonoros y experiencias sensoriales</li>
                  <li>Servicios de acompañamiento y guía</li>
                </ul>
                <p className="mt-4">
                  Se respetan los cánones de las diferentes escuelas y autores que se toman como referentes.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  3. Registro y Reservaciones
                </h2>
                <p>
                  Para participar en nuestros talleres y eventos, debes:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Proporcionar información precisa y completa</li>
                  <li>Mantener la confidencialidad de tu información de cuenta</li>
                  <li>Notificarnos sobre cualquier uso no autorizado</li>
                  <li>Ser mayor de 18 años o contar con autorización parental</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  4. Política de Cancelación
                </h2>
                <p>
                  Las cancelaciones deben realizarse con al menos 48 horas de anticipación para recibir 
                  un reembolso completo. Las cancelaciones tardías pueden estar sujetas a cargos parciales.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  5. Propiedad Intelectual
                </h2>
                <p>
                  Todo el contenido de Silenceside Ecos, incluyendo textos, gráficos, logotipos, imágenes 
                  y materiales de los talleres, está protegido por derechos de autor y otras leyes de 
                  propiedad intelectual.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  6. Conducta del Usuario
                </h2>
                <p>
                  Al participar en nuestros servicios, te comprometes a:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Respetar a otros participantes y facilitadores</li>
                  <li>Mantener la confidencialidad de las experiencias grupales</li>
                  <li>No utilizar nuestros servicios para fines ilegales</li>
                  <li>Seguir las indicaciones de seguridad y bienestar</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p>
                  Nuestros servicios están diseñados para el crecimiento personal y el bienestar general. 
                  No sustituyen el consejo médico, psicológico o profesional. Silenceside Ecos no se hace 
                  responsable de decisiones tomadas basándose en la información proporcionada en nuestros talleres.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  8. Compras y Pagos
                </h2>
                <p>
                  Todos los precios están expresados en la moneda indicada. Los pagos se procesan de forma 
                  segura a través de nuestros proveedores de pago autorizados. Una vez completada la compra, 
                  recibirás confirmación por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  9. Modificaciones
                </h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
                  entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl tracking-[0.10em] text-foreground uppercase mb-4">
                  10. Contacto
                </h2>
                <p>
                  Para cualquier pregunta sobre estos términos, contáctanos en:
                </p>
                <p className="mt-4 text-foreground font-medium">
                  Silencesideecos@gmail.com
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
