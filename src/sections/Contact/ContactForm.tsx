import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/common/Button/Button";
import { Input } from "../../components/common/Input/Input";
import { Textarea } from "../../components/common/Textarea/Textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z.string().min(10, "Please add a few details about the project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

const projectTypeOptions = [
  "PCB Layout Only",
  "Full Design Service",
  "Review & DRC",
  "Manufacturing Support",
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "sent">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: projectTypeOptions[0],
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    console.info("Contact form submission", values);
    setSubmitState("sent");
    reset();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full name"
          placeholder="John Doe"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Email address"
          placeholder="john@example.com"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Project type
        </span>
        <select
          className="w-full rounded-2xl border border-border bg-surface/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          {...register("projectType")}
        >
          {projectTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <span className="text-sm text-red-600">
            {errors.projectType.message}
          </span>
        ) : null}
      </label>

      <Textarea
        label="Your message"
        placeholder="Tell us about the product, timeline, and constraints."
        error={errors.message?.message}
        {...register("message")}
      />

      <Button className="w-full" disabled={isSubmitting} type="submit">
        {submitState === "sent" ? "Message sent" : "Send message"}{" "}
        <Send size={16} />
      </Button>
    </form>
  );
}
