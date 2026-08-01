import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../../utils/cn";

type BadgeProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
