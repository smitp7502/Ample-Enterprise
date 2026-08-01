import { ArrowRight } from "lucide-react";
import { Badge } from "../../components/common/Badge/Badge";
import { Button } from "../../components/common/Button/Button";
import { Card } from "../../components/common/Card/Card";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";

const metrics = [
  { value: "150+", label: "completed projects" },
  { value: "99%", label: "first-pass success" },
  { value: "24/7", label: "engineering support" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,167,44,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(61,220,151,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%)]" />

      <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-1 lg:py-28">
        <Reveal className="space-y-8" direction="left">
          <Badge className="border-white/10 bg-white/6 text-accent-soft">
            Engineering Excellence
          </Badge>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
              PCB Design Engineer
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Reliable precision for complex electronics, from schematic
              discipline to manufacturing-ready output.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="#contact" variant="secondary" size="lg">
              Get in touch <ArrowRight size={18} />
            </Button>
            <Button
              as="a"
              href="#projects"
              variant="outline"
              size="lg"
              className="border-white/15 text-white hover:bg-white/8 hover:text-white"
            >
              View portfolio
            </Button>
          </div>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <Card
                key={metric.label}
                className="border-white/10 bg-white/6 p-5 text-white backdrop-blur-md"
              >
                <p className="text-3xl font-bold text-accent-soft">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/60">
                  {metric.label}
                </p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
