import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}>;

const variants = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants[direction]}
      viewport={{ once: true, amount: 0.18 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
