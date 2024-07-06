import About from "@/components/portofolio-saya/about";
import Contact from "@/components/portofolio-saya/contact";
import Experience from "@/components/portofolio-saya/experience";
import Hero from "@/components/portofolio-saya/hero";
import Project from "@/components/portofolio-saya/project";
import Skill from "@/components/portofolio-saya/skill";

export default function PortofolioSaya() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
