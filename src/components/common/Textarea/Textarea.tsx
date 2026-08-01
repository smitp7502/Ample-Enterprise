import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="block space-y-2" htmlFor={textareaId}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-36 w-full rounded-2xl border border-border bg-surface/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
