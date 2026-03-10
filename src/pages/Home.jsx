import Hero from "../components/home/Hero"
import AboutMDC from "../components/home/AboutMDC"
import MDCHighlights from "../components/home/MDCHighlights"
import EventsSection from "../components/home/EventsSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMDC />
      <MDCHighlights />
      <EventsSection />
    </main>
  )
}