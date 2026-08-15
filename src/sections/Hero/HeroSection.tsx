import { MessageCircle, PhoneCall } from "lucide-react";
import { Badge } from "../../components/common/Badge/Badge";
import { Button } from "../../components/common/Button/Button";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { whatsappLink } from "../../constants/site";

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
              Engineering-Led PCB Design Studio
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              PCB design and engineering support for product teams, startups,
              and manufacturers looking for dependable layouts, DFM awareness,
              and a predictable release path.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            >
              WhatsApp us <MessageCircle size={18} />
            </Button>
            <Button
              as="a"
              href="tel:+919574325494"
              variant="outline"
              size="lg"
              className="border-white/15 text-white hover:bg-white/8 hover:text-white"
            >
              <PhoneCall size={18} className="mr-2" /> Call now
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
        </Reveal>
      </Container>
    </section>
  );
}
