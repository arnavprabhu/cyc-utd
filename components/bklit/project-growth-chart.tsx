"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SemesterData {
  semester: string;
  year: string;
  hours: number;
  projects: number;
  consultants: number;
}

const SEMESTER_DATA: SemesterData[] = [
  { semester: "Fall", year: "2022", hours: 950, projects: 4, consultants: 16 },
  { semester: "Spring", year: "2023", hours: 1400, projects: 6, consultants: 22 },
  { semester: "Fall", year: "2023", hours: 1900, projects: 7, consultants: 28 },
  { semester: "Spring", year: "2024", hours: 2350, projects: 9, consultants: 34 },
  { semester: "Fall", year: "2024", hours: 2800, projects: 10, consultants: 38 },
  { semester: "Spring", year: "2025", hours: 3100, projects: 12, consultants: 42 },
];

export function ProjectGrowthChart() {
  const [activeMetric, setActiveMetric] = useState<"hours" | "projects">("hours");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const maxVal = Math.max(
    ...SEMESTER_DATA.map((d) => (activeMetric === "hours" ? d.hours : d.projects))
  );

  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Cohort Trajectory
          </span>
          <h3 className="font-serif text-2xl font-bold text-primary">
            Semester-by-Semester Delivery
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Sustained expansion across UT Dallas undergraduate & graduate cohorts
          </p>
        </div>

        {/* Metric Selector Toggle */}
        <div className="inline-flex rounded-xl border border-primary/10 bg-secondary/50 p-1">
          <button
            onClick={() => setActiveMetric("hours")}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
              activeMetric === "hours"
                ? "bg-primary text-white shadow-xs"
                : "text-primary/70 hover:text-primary"
            )}
          >
            Consulting Hours
          </button>
          <button
            onClick={() => setActiveMetric("projects")}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
              activeMetric === "projects"
                ? "bg-primary text-white shadow-xs"
                : "text-primary/70 hover:text-primary"
            )}
          >
            Completed Projects
          </button>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="mt-8">
        <div className="flex h-56 items-end gap-3 sm:gap-6 border-b border-primary/10 pb-4">
          {SEMESTER_DATA.map((item, idx) => {
            const rawVal = activeMetric === "hours" ? item.hours : item.projects;
            const heightPercent = Math.round((rawVal / maxVal) * 100);
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={`${item.semester}-${item.year}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative flex flex-1 flex-col items-center h-full justify-end cursor-pointer"
              >
                {/* Floating tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-14 z-20 whitespace-nowrap rounded-xl bg-primary px-2.5 py-1.5 text-[11px] font-medium text-white shadow-md"
                  >
                    <p className="font-bold">
                      {activeMetric === "hours"
                        ? `${item.hours.toLocaleString()} Pro-Bono Hours`
                        : `${item.projects} Client Projects`}
                    </p>
                    <p className="text-white/70">{item.consultants} Active Consultants</p>
                  </motion.div>
                )}

                {/* Animated Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${heightPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                  className={cn(
                    "w-full rounded-t-xl transition-colors duration-200 relative overflow-hidden",
                    isHovered
                      ? "bg-accent shadow-md"
                      : idx === SEMESTER_DATA.length - 1
                      ? "bg-primary"
                      : "bg-primary/75 hover:bg-primary"
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-white/25" />
                </motion.div>

                {/* Value Label */}
                <span className="mt-2 text-xs font-bold text-primary">
                  {activeMetric === "hours" ? `${(item.hours / 1000).toFixed(1)}k` : item.projects}
                </span>

                {/* X Axis Label */}
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                  {item.semester.slice(0, 2)} &apos;{item.year.slice(2)}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footnote stats banner */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="rounded-xl bg-secondary/30 p-3">
            <span className="text-[10px] uppercase font-semibold text-muted-foreground">Compounded Growth</span>
            <p className="font-serif text-lg font-bold text-primary">+226%</p>
          </div>
          <div className="rounded-xl bg-secondary/30 p-3">
            <span className="text-[10px] uppercase font-semibold text-muted-foreground">Avg Team Size</span>
            <p className="font-serif text-lg font-bold text-primary">4-6 Consultants</p>
          </div>
          <div className="rounded-xl bg-secondary/30 p-3">
            <span className="text-[10px] uppercase font-semibold text-muted-foreground">Sprint Duration</span>
            <p className="font-serif text-lg font-bold text-primary">10-12 Weeks</p>
          </div>
          <div className="rounded-xl bg-secondary/30 p-3">
            <span className="text-[10px] uppercase font-semibold text-muted-foreground">Executive Handover</span>
            <p className="font-serif text-lg font-bold text-primary">Full Playbook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
