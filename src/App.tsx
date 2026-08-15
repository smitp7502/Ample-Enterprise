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
import whatsappLogo from "./assets/images/whatsapp_logo.svg";

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

      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
        <a
          aria-label="Call Ample Enterprise"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.28)] transition hover:scale-105 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          href="tel:+919574325494"
        >
          Call now
        </a>

        <a
          aria-label="Chat on WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_45px_rgba(37,211,102,0.45)] transition hover:scale-110 hover:bg-[#20c05b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={whatsappLink}
          rel="noreferrer"
          target="_blank"
        >
          <span className="absolute inline-flex h-14 w-14 animate-ping-slow rounded-full bg-[#25D366]/50" />
          <span className="absolute inline-flex h-14 w-14 animate-ping-slower rounded-full bg-[#25D366]/30" />
          <img
            src={whatsappLogo}
            alt="WhatsApp logo"
            className="relative h-8 w-8 object-contain"
          />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
