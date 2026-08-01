import { motion } from "framer-motion";
import { Card } from "../../components/common/Card/Card";
import type { ProjectItem } from "../../types/site";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Card className="h-full overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
          <img
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            src={project.image}
          />
        </div>
        <div className="space-y-4 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-bold text-primary">
              {project.title}
            </h3>
          </div>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>
          <ul className="space-y-2 text-sm text-primary/80">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.article>
  );
}
