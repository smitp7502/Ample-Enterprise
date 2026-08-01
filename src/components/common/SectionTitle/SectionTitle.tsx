import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../../utils/cn";

type SectionTitleProps = PropsWithChildren<
  {
    eyebrow: string;
    title: string;
    description?: string;
    centered?: boolean;
  } & HTMLAttributes<HTMLDivElement>
>;

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(centered ? "mx-auto text-center" : "text-left", className)}
      {...props}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-3xl text-base leading-7 text-muted",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
