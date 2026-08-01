import { Footer } from "./components/common/Footer/Footer";
import { Navbar } from "./components/common/Navbar/Navbar";
import { AboutSection } from "./sections/About/AboutSection";
import { ContactSection } from "./sections/Contact/ContactSection";
import { ExpertiseSection } from "./sections/Expertise/ExpertiseSection";
import { HeroSection } from "./sections/Hero/HeroSection";
import { ProcessSection } from "./sections/Process/ProcessSection";
import { ProjectsSection } from "./sections/Projects/ProjectsSection";
import { SkillsSection } from "./sections/Skills/SkillsSection";
import { StrengthsSection } from "./sections/Strengths/StrengthsSection";
import { whatsappLink } from "./constants/site";
import whatsappLogo from "./assets/images/whatsapp_logo.png";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <SkillsSection />
        <ProcessSection />
        <ProjectsSection />
        <StrengthsSection />
        <ContactSection />
      </main>
      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20c05b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        href={whatsappLink}
        rel="noreferrer"
        target="_blank"
      >
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-white/55" />
          <span className="absolute inline-flex h-4 w-4 rounded-full bg-white/45" />
          <img
            src={whatsappLogo}
            alt="WhatsApp logo"
            className="relative h-5 w-5 rounded-full object-cover"
          />
        </span>
        WhatsApp
      </a>
      <Footer />
    </div>
  );
}

export default App;
