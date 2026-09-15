"use client";

import { motion, useReducedMotion } from "motion/react";

export function AmbientDecor() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle background dot matrix grid */}
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(21,71,52,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Floating ambient glow 1: Forest Green tint */}
      <motion.div
        animate={
          shouldReduce
            ? undefined
            : {
                x: [0, 30, -20, 0],
                y: [0, -25, 20, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 top-12 h-96 w-96 rounded-full bg-primary/8 blur-3xl"
      />

      {/* Floating ambient glow 2: Flame Orange warm accent */}
      <motion.div
        animate={
          shouldReduce
            ? undefined
            : {
                x: [0, -40, 25, 0],
                y: [0, 30, -15, 0],
                scale: [1, 0.92, 1.05, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      {/* Geometric architectural SVG contour line */}
      <svg
        className="absolute right-0 top-0 h-[600px] w-[600px] opacity-[0.14] stroke-primary"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="180" strokeDasharray="4 6" strokeWidth="1" />
        <circle cx="300" cy="300" r="260" strokeWidth="1" />
        <path d="M 120 300 H 480 M 300 120 V 480" strokeDasharray="3 5" strokeWidth="0.75" />
      </svg>
    </div>
  );
}
