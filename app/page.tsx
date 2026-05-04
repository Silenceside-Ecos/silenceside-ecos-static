import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Philosophy } from "@/components/philosophy"
import { EventsCalendar } from "@/components/events-calendar"
import { Experiences } from "@/components/experiences"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Philosophy />
      <EventsCalendar />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  )
}
