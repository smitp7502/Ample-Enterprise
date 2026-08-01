import { CircuitBoard, Layers3, Shield, Zap } from "lucide-react";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { expertiseItems } from "../../data/expertise";

const iconMap = {
  schema: CircuitBoard,
  layers: Layers3,
  zap: Zap,
  "shield-check": Shield,
} as const;

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="border-y border-border/70 bg-surface-alt py-20 sm:py-24"
    >
      <Container>
        <SectionTitle
          centered
          eyebrow="Expertise"
          title="Technical depth across the PCB lifecycle"
          description="A focused delivery model built around architecture, layout quality, manufacturability, and release readiness."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {expertiseItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];

            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group flex h-full gap-5 rounded-3xl border border-border bg-surface p-6 shadow-[0_16px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_42px_rgba(15,23,42,0.09)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white transition group-hover:bg-accent group-hover:text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
