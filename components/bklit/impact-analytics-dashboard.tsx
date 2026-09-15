"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, Clock, Award, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: string;
  subtext: string;
  icon: React.ElementType;
  sparkline: number[];
  delay?: number;
}

const METRICS: MetricCardProps[] = [
  {
    label: "Client Value Generated",
    value: 1.8,
    prefix: "$",
    suffix: "M+",
    change: "+38% YoY",
    subtext: "Estimated revenue growth & cost savings unlocked",
    icon: DollarSign,
    sparkline: [25, 40, 55, 70, 85, 110, 140, 180],
  },
  {
    label: "Organizations Advised",
    value: 48,
    suffix: "+",
    change: "100% Pro-Bono",
    subtext: "Small businesses & community non-profits across DFW",
    icon: Users,
    sparkline: [6, 12, 18, 26, 34, 40, 48],
  },
  {
    label: "Pro-Bono Hours Delivered",
    value: 12500,
    suffix: "+",
    change: "Rigorous Delivery",
    subtext: "Direct strategic research, modeling, and client deliverables",
    icon: Clock,
    sparkline: [1200, 2600, 4500, 6800, 9200, 12500],
  },
  {
    label: "Client Recommendation Rate",
    value: 98,
    suffix: "%",
    change: "Verified Net Promoter",
    subtext: "Partners who would implement deliverables again",
    icon: Award,
    sparkline: [92, 94, 95, 96, 98, 98],
  },
];

export function ImpactAnalyticsDashboard() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <motion.div
              key={metric.label}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300",
                isHovered ? "border-primary/30 shadow-lg -translate-y-1" : ""
              )}
            >
              {/* Background gradient sheen on hover */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  <TrendingUp className="h-3 w-3" />
                  {metric.change}
                </span>
              </div>

              <div className="mt-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="mt-1 font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {metric.prefix}
                  <CountUp
                    end={metric.value}
                    decimals={metric.value % 1 !== 0 ? 1 : 0}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {metric.suffix}
                </dd>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/90">
                  {metric.subtext}
                </p>
              </div>

              {/* Bklit-style SVG mini sparkline */}
              <div className="mt-5 pt-4 border-t border-primary/5">
                <div className="flex items-end justify-between h-8 gap-1.5">
                  {metric.sparkline.map((val, pointIdx) => {
                    const max = Math.max(...metric.sparkline);
                    const min = Math.min(...metric.sparkline);
                    const heightPercent = Math.max(
                      15,
                      Math.round(((val - min) / (max - min || 1)) * 85 + 15)
                    );

                    return (
                      <motion.div
                        key={pointIdx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heightPercent}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.1 + pointIdx * 0.05,
                          ease: "easeOut",
                        }}
                        className={cn(
                          "w-full rounded-sm transition-colors",
                          pointIdx === metric.sparkline.length - 1
                            ? "bg-accent"
                            : "bg-primary/20 group-hover:bg-primary/40"
                        )}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
