import type { InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="block space-y-2" htmlFor={inputId}>
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-2xl border border-border bg-surface/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
