import { Navbar, Footer, SectionWrapper } from "@/components/layout";
import {
  Hero,
  About,
  Skills,
  Projects,
  DSA,
  CloudLab,
  BuildLog,
  Achievements,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SectionWrapper id="about" title="About Me">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills" title="Skills" subtitle="Technologies I work with">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects" title="Featured Projects" subtitle="My best work and contributions">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="dsa" title="Problem Solving & DSA" subtitle="My journey in algorithms and data structures">
          <DSA />
        </SectionWrapper>
        <SectionWrapper id="cloud" title="Cloud & DevOps Lab" subtitle="Hands-on cloud infrastructure experience">
          <CloudLab />
        </SectionWrapper>
        <SectionWrapper id="build-log" title="Build Log" subtitle="A timeline of my learning journey">
          <BuildLog />
        </SectionWrapper>
        <SectionWrapper id="achievements" title="Achievements & Certifications">
          <Achievements />
        </SectionWrapper>
        <SectionWrapper id="contact" title="Contact">
          <Contact />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
