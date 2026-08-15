import { CheckCircle2 } from "lucide-react";
import { Card } from "../../components/common/Card/Card";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";

const standards = [
  "High quality engineering",
  "Cost effective solutions",
  "DFM and DRC excellence",
  "On-time project delivery",
  "Global manufacturing standards",
];

const highlights = [
  { value: "24h", label: "Response window", desc: "First reply within one business day, guaranteed" },
  { value: "DFM", label: "Release-minded", desc: "Every layout reviewed against fab constraints before handoff" },
  { value: "4-layer", label: "Typical stackup", desc: "Signal integrity and EMC baked in from the start" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal direction="up">
            <SectionTitle
              eyebrow="About"
              title="Ample Enterprise builds boards that are ready for the real world."
              description="We translate complex electrical requirements into reliable physical hardware through disciplined layout, manufacturing awareness, and practical engineering judgment."
            />

            <div className="mt-10 space-y-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-5 rounded-2xl border border-border/70 bg-surface px-5 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                >
                  <span className="w-14 shrink-0 text-2xl font-bold text-accent">{h.value}</span>
                  <div className="h-8 w-px shrink-0 bg-border/70" />
                  <div>
                    <p className="text-sm font-semibold text-primary">{h.label}</p>
                    <p className="mt-0.5 text-xs leading-5 text-muted">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <Card className="relative overflow-hidden p-8">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-accent/10" />
              <h3 className="text-2xl font-bold text-primary">
                Core standards
              </h3>
              <ul className="mt-6 space-y-4">
                {standards.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-success"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
