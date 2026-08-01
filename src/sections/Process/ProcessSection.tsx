import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { processSteps } from "../../data/process";

const stepIcons = ["1", "2", "3", "4", "5", "6", "7"];

export function ProcessSection() {
  return (
    <section id="process" className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <SectionTitle
          centered
          eyebrow="Process"
          title="A controlled workflow from discovery to manufacturing support"
          description="The sequence is built to reduce churn, surface issues earlier, and keep the release handoff predictable."
          className="text-white"
        />

        <div className="mt-14 hidden gap-4 lg:grid lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.05}
              direction={index % 2 === 0 ? "up" : "scale"}
            >
              <div className="relative flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                {index < processSteps.length - 1 ? (
                  <span className="absolute right-[-1.15rem] top-1/2 hidden h-px w-8 bg-accent/40 lg:block" />
                ) : null}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white text-primary shadow-lg">
                  <span className="text-sm font-bold">{stepIcons[index]}</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-white/68">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:hidden">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/6 p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-base font-bold">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/68">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
