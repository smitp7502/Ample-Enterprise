import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import { cn } from "../../../utils/cn";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButtonProps = PropsWithChildren<
  SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" }
>;
type ButtonAsAnchorProps = PropsWithChildren<
  SharedProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string }
>;

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-soft shadow-[0_16px_30px_rgba(7,21,39,0.18)]",
  secondary: "bg-accent text-primary hover:bg-accent-soft",
  outline:
    "border border-border bg-transparent text-primary hover:border-accent hover:text-accent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const sharedClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a className={sharedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={sharedClasses}
      type={buttonProps.type ?? "button"}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
