import { Card } from "../../components/common/Card/Card";
import { Container } from "../../components/common/Container/Container";
import { Reveal } from "../../components/common/Reveal/Reveal";
import { SectionTitle } from "../../components/common/SectionTitle/SectionTitle";
import {
  contactEmail,
  contactLocation,
  contactPhone,
  linkedInLabel,
  linkedInUrl,
  whatsappLink,
} from "../../constants/site";
import { Globe, Mail, MapPin, MessageCircle, PhoneCall, Zap } from "lucide-react";

const contactDetails = [
  {
    label: "WhatsApp",
    value: contactPhone,
    href: whatsappLink,
    icon: MessageCircle,
    primary: true,
  },
  {
    label: "Call",
    value: contactPhone,
    href: `tel:${contactPhone.replace(/\s+/g, "")}`,
    icon: PhoneCall,
    primary: true,
  },
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
  },
  {
    label: "Location",
    value: contactLocation,
    href: `https://maps.google.com/?q=${encodeURIComponent(contactLocation)}`,
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: linkedInLabel,
    href: linkedInUrl,
    icon: Globe,
  },
];

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
                description="Reach out directly for an engineering-first conversation about your requirements, timeline, and design goals."
                className="text-white [&>h2]:text-white [&>p:last-of-type]:text-white/70"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-2">
              {contactDetails.map(
                ({ label, value, href, icon: Icon, primary }) => (
                  <Card
                    key={label}
                    className={`group border p-5 text-white backdrop-blur-xl transition duration-200 hover:-translate-y-1 ${primary ? "!bg-[rgba(212,167,44,0.12)] border-accent/70 sm:col-span-2 ring-1 ring-accent/30 shadow-[0_20px_50px_rgba(212,167,44,0.15)]" : "!bg-white/5 border-white/10 shadow-[0_15px_35px_rgba(15,23,42,0.18)]"}`}
                  >
                    <a
                      className="flex h-full flex-col gap-4"
                      href={href}
                      target={
                        label === "LinkedIn" ||
                        label === "Location" ||
                        label === "WhatsApp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        label === "LinkedIn" ||
                        label === "Location" ||
                        label === "WhatsApp"
                          ? "noreferrer"
                          : undefined
                      }
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-accent-soft">
                          <span
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition ${primary ? "border-accent/60 bg-[rgba(212,167,44,0.22)] text-accent-soft" : "border-white/10 bg-white/10 text-accent-soft group-hover:border-accent/50 group-hover:bg-[rgba(212,167,44,0.15)]"}`}
                          >
                            <Icon size={primary ? 22 : 18} />
                          </span>
                          <span className={`font-medium uppercase tracking-[0.28em] ${primary ? "text-[11px] text-accent-soft" : "text-[10px] text-white/55"}`}>
                            {label}
                          </span>
                        </div>
                        {primary && (
                          <span className="flex items-center gap-1 rounded-full border border-accent/40 bg-[rgba(212,167,44,0.18)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-soft">
                            <Zap size={10} className="shrink-0" />
                            Fastest response
                          </span>
                        )}
                      </div>

                      <p className={`font-semibold leading-relaxed text-white ${primary ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
                        {value}
                      </p>
                    </a>
                  </Card>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
