import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Achievement } from "@/components/Achievement";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Achievement />
      <Education />
      <Testimonials />
      <Contact />
    </>
  );
}
