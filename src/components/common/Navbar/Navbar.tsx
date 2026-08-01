import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import companyLogo from "../../../assets/images/Company_logo.png";
import { navigationItems } from "../../../constants/site";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { cn } from "../../../utils/cn";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";

function scrollToSection(hash: string) {
  const element = document.querySelector(hash);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(
    navigationItems.map((item) => item.sectionId),
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <button
          className="group flex items-center gap-3 text-left"
          onClick={() => scrollToSection("#hero")}
          type="button"
        >
          <img
            src={companyLogo}
            alt="Ample Enterprise logo"
            className="h-11 w-11 rounded-2xl object-cover transition group-hover:scale-105"
          />
          <span>
            <span className="block text-lg font-bold tracking-[0.28em] text-primary">
              AMPLE ENTERPRISE
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-muted">
              A pulse of new dreams
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <button
                key={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/15"
                    : "text-muted hover:bg-primary/5 hover:text-primary",
                )}
                onClick={() => scrollToSection(item.href)}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            size="sm"
            className="ml-2"
          >
            Get in touch
          </Button>
        </nav>

        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-sm transition hover:border-accent hover:text-accent lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-border/70 bg-white lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="space-y-2 py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium",
                    activeSection === item.sectionId
                      ? "bg-primary text-white"
                      : "bg-surface-alt text-primary",
                  )}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
