import { Card } from "../../components/common/Card/Card";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import { contactEmail, contactPhone } from "../../constants/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal direction="left">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Start a PCB project with a clear handoff and a practical timeline"
                description="Send the requirements, and the response will focus on the next engineering step rather than a sales script."
                className="text-white [&>h2]:text-white [&>p:last-of-type]:text-white/70"
              />

              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/55">
                Email
              </p>
              <a
                className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/55">
                Mobile
              </p>
              <a
                className="mt-2 inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
                href={`tel:${contactPhone.replace(/\s+/g, "")}`}
              >
                {contactPhone}
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <Card className="border-white/10 bg-white/6 p-6 text-white backdrop-blur-xl sm:p-8">
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
