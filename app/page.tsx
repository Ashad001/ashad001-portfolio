import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Volunteering } from "@/components/volunteering"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Experience />
      <Volunteering />
      <Projects />
      <Education />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  )
}

