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

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal direction="up">
            <SectionTitle
              eyebrow="About"
              title="Ample Enterprise builds boards that are ready for the real world."
              description="We translate complex electrical requirements into reliable physical hardware through disciplined layout, manufacturing awareness, and practical engineering judgment."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="p-5">
                <p className="text-3xl font-bold text-accent">150+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">
                  Completed projects
                </p>
              </Card>
              <Card className="p-5">
                <p className="text-3xl font-bold text-accent">99%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">
                  First-pass success
                </p>
              </Card>
              <Card className="p-5">
                <p className="text-3xl font-bold text-accent">24h</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted">
                  Response window
                </p>
              </Card>
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
