import { socialLinks } from "../../../constants/site";
import { Container } from "../Container/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-primary py-12 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold tracking-[0.22em]">
              AMPLE ENTERPRISE
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
              PCB design, engineering support, and manufacturing-ready
              documentation with precision-first delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-accent hover:text-accent"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm text-white/75">
          <span className="text-white/55">Connect</span>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.28em] text-white/45">
          Precision engineered for modern electronics teams.
        </div>
      </Container>
    </footer>
  );
}
