import heroBoard from "../../assets/images/pcb_circute.jpg";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { skillItems } from "../../data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal direction="left">
            <div>
              <SectionTitle
                eyebrow="Skills"
                title="Tools that support precision, speed, and release quality"
                description="The stack stays focused on the software used to design, validate, and communicate a production-ready PCB."
              />
              <div className="mt-10 grid grid-cols-2 gap-4">
                {skillItems.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="rounded-3xl border border-border bg-surface p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <p className="text-base font-bold text-primary">
                      {skill.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={0.08}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary shadow-[0_24px_80px_rgba(7,21,39,0.2)]">
              <img
                alt="PCB layout preview"
                className="h-full w-full object-cover"
                loading="lazy"
                src={heroBoard}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,21,39,0.02),rgba(7,21,39,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft">
                  Industry standard tools
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  Precision throughout the workflow
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                  The visual language stays technical and calm so the work feels
                  deliberate rather than decorative.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
