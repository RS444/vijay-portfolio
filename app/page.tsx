import AboutSection from "@/components/sections/AboutSection"
import EducationSection from "@/components/sections/EducationSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"


export default function Home() {
  return (
    <>
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection id="projects" />   {/* 👈 THIS WAS MISSING */}
      <ContactSection />
    </>
  )
}
