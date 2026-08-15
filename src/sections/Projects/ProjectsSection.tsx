import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { projectItems } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work with a manufacturing-first mindset"
            description="A compact set of representative builds that show how layout discipline carries through different board classes."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projectItems.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
