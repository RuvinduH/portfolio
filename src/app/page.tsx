import { AboutSection } from "@/sections/About";
import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import SkillsSection from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
