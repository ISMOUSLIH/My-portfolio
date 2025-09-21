import { CodeBackground } from "../components/CodeBackgrond";
import { ThemeToggle } from "../components/ThemeTogggle";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import {ContactSection} from "../components/ContactSection"
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*toggle theme  */}
      <ThemeToggle />
      {/*code background  */}
      <CodeBackground />
      {/*nav bar  */}
      <Navbar />
      {/* main content  */}
      <main>
        {/* hero  */}
        <HeroSection />
        {/* about me  */}
        <AboutSection />
        {/* skills  */}
        <SkillsSection />
        {/* projects */}
        <ProjectsSection/>
        {/* contact */}
        <ContactSection/>


      </main>

    </div>

  );
}