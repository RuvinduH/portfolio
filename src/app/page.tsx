import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
