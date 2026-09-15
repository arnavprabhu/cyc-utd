"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AttractButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

export function AttractButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: AttractButtonProps) {
  const shouldReduce = useReducedMotion();

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/95 shadow-[0_4px_14px_0_rgba(21,71,52,0.25)] hover:shadow-[0_6px_20px_rgba(21,71,52,0.35)]",
    accent:
      "bg-accent text-white hover:bg-accent/95 shadow-[0_4px_14px_0_rgba(232,117,0,0.3)] hover:shadow-[0_6px_20px_rgba(232,117,0,0.4)]",
    secondary:
      "bg-secondary text-primary hover:bg-secondary/80 border border-primary/10 shadow-sm",
    outline:
      "border border-primary/20 bg-white/70 text-primary hover:bg-white hover:border-primary/40 shadow-sm",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-2xl gap-2",
    lg: "px-6 py-3.5 text-base rounded-2xl gap-2.5",
  };

  return (
    <motion.button
      whileHover={shouldReduce ? undefined : { scale: 1.02 }}
      whileTap={shouldReduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
