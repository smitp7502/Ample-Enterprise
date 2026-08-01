import { CheckCircle2 } from "lucide-react";
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
      </Container>
    </section>
  );
}
