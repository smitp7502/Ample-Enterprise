import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../../../utils/cn";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-surface shadow-[0_16px_45px_rgba(15,23,42,0.08)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
