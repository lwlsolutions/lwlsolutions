import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

