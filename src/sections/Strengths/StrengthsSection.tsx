import { CheckCircle2, Quote } from "lucide-react";
import { Card } from "../../components/common/Card/Card";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { serviceItems } from "../../data/services";

const strengths = [
  {
    title: "Signal Integrity",
    description:
      "Controlled impedance routing, return-path awareness, and crosstalk reduction on high-speed nets.",
  },
  {
    title: "Thermal Management",
    description:
      "Copper strategy and via stitching that help dissipate heat where it matters most.",
  },
  {
    title: "DFM Compliance",
    description:
      "Release packages aligned to manufacturer constraints to minimize production surprises.",
  },
];

const testimonials = [
  {
    quote:
      "The design handoff felt organized, practical, and production-aware from day one.",
    author: "Product Lead",
    company: "Industrial Automation Client",
  },
  {
    quote:
      "The board was ready for review with fewer surprises and clearer manufacturing guidance.",
    author: "Engineering Manager",
    company: "Electronics Hardware Team",
  },
];

export function StrengthsSection() {
  return (
    <section id="strengths" className="bg-surface-alt py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <SectionTitle
                eyebrow="Strengths"
                title="Engineering areas where the details matter"
                description="The work is framed around the actual constraints of fabrication, assembly, and product reliability."
              />
              <div className="mt-8 space-y-4">
                {strengths.map((item) => (
                  <Card
                    key={item.title}
                    className="border-l-4 border-l-accent p-6"
                  >
                    <h3 className="text-xl font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <div>
              <SectionTitle
                eyebrow="Services"
                title="Additional support that keeps the release moving"
                description="Reusable services that slot into the design process without creating overhead."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {serviceItems.map((service) => (
                  <Card key={service.title} className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-success" size={18} />
                      <div>
                        <h3 className="text-base font-bold text-primary">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <div className="mb-8 rounded-3xl border border-border bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Typical project start
            </p>
            <p className="mt-2 text-base leading-7 text-primary sm:text-lg">
              Share the schematic, target requirements, and manufacturing
              priorities, and the next step is a practical review of stackup,
              constraints, and delivery plan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.author} className="p-6">
                <Quote className="text-accent" size={22} />
                <p className="mt-4 text-base leading-7 text-primary">
                  “{item.quote}”
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-bold text-primary">
                    {item.author}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {item.company}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
