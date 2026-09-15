"use client";

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface SectorData {
  name: string;
  percentage: number;
  clientsCount: number;
  color: string;
  description: string;
  examples: string[];
}

const SECTOR_DATA: SectorData[] = [
  {
    name: "Retail & Consumer Goods",
    percentage: 28,
    clientsCount: 14,
    color: "#154734", // UTD Forest Green
    description: "Inventory turnover optimization, e-commerce channel launch, and localized foot-traffic activation.",
    examples: ["Bishop Arts Apparel Boutique", "Downtown Dallas Artisan Goods", "Deep Ellum Vinyl & Books"],
  },
  {
    name: "Food, Beverage & Hospitality",
    percentage: 24,
    clientsCount: 12,
    color: "#E87500", // UTD Flame Orange
    description: "Menu contribution margin analysis, supplier cost renegotiation, and customer loyalty program redesign.",
    examples: ["Richardson Craft Bakery", "Plano Family Trattoria", "Dallas Specialty Coffee Roasters"],
  },
  {
    name: "Tech & Digital Services",
    percentage: 20,
    clientsCount: 10,
    color: "#1F5F46", // Mid Green
    description: "B2B SaaS go-to-market playbook, customer acquisition cost (CAC) benchmarking, and outbound sales cadence.",
    examples: ["Supply Chain Route Optimizer", "HealthTech Scheduling Platform", "EdTech Tutoring Marketplace"],
  },
  {
    name: "Healthcare & Wellness",
    percentage: 16,
    clientsCount: 8,
    color: "#FF8C1A", // Bright Orange
    description: "Patient intake flow streamlining, recurring membership packaging, and digital presence enhancement.",
    examples: ["Community Physical Therapy Clinic", "Holistic Wellness Studio", "Pediatric Speech Center"],
  },
  {
    name: "Non-Profits & Community Impact",
    percentage: 12,
    clientsCount: 6,
    color: "#717973", // Institutional Slate
    description: "Grant diversification models, donor retention campaigns, and volunteer operational workflows.",
    examples: ["DFW Youth Literacy Initiative", "Dallas Urban Community Garden", "Veteran Career Bridge"],
  },
];

export function IndustryBreakdownChart() {
  const [selectedSector, setSelectedSector] = useState<SectorData>(SECTOR_DATA[0]);
  const width = 280;
  const height = 280;
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius * 0.62;

  return (
    <div className="rounded-3xl border border-primary/10 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Sector Distribution
          </span>
          <h3 className="font-serif text-2xl font-bold text-primary">
            Industries We Counsel
          </h3>
        </div>
        <div className="text-xs text-muted-foreground">
          Based on 48+ pro-bono client projects
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left: Donut Chart with Visx */}
        <div className="relative flex flex-col items-center justify-center lg:col-span-5">
          <svg width={width} height={height} className="overflow-visible">
            <Group top={height / 2} left={width / 2}>
              <Pie
                data={SECTOR_DATA}
                pieValue={(d) => d.percentage}
                outerRadius={radius}
                innerRadius={innerRadius}
                padAngle={0.03}
              >
                {(pie) =>
                  pie.arcs.map((arc, i) => {
                    const isSelected = selectedSector.name === arc.data.name;
                    return (
                      <g key={`arc-${i}`} className="cursor-pointer">
                        <path
                          d={pie.path(arc) || ""}
                          fill={arc.data.color}
                          className="transition-all duration-300 hover:opacity-90"
                          style={{
                            transform: isSelected ? "scale(1.04)" : "scale(1)",
                            transformOrigin: "center",
                            filter: isSelected
                              ? "drop-shadow(0 4px 10px rgba(0,0,0,0.15))"
                              : "none",
                          }}
                          onClick={() => setSelectedSector(arc.data)}
                          onMouseEnter={() => setSelectedSector(arc.data)}
                        />
                      </g>
                    );
                  })
                }
              </Pie>
            </Group>
          </svg>

          {/* Center Callout inside Donut */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-3xl font-bold text-primary">
              {selectedSector.percentage}%
            </span>
            <span className="max-w-[100px] text-[11px] font-medium leading-tight text-muted-foreground">
              {selectedSector.name.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Right: Interactive Sector Detail Panel */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSector.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-primary/10 bg-secondary/30 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-3.5 w-3.5 rounded-full"
                    style={{ backgroundColor: selectedSector.color }}
                  />
                  <h4 className="font-semibold text-primary sm:text-lg">
                    {selectedSector.name}
                  </h4>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-xs border border-primary/10">
                  {selectedSector.clientsCount} Client Portfolios
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {selectedSector.description}
              </p>
              <div className="mt-3.5 pt-3 border-t border-primary/10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary/70">
                  Representative Engagements:
                </span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {selectedSector.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-primary shadow-xs border border-primary/10"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {SECTOR_DATA.map((sector) => {
              const isSelected = selectedSector.name === sector.name;
              return (
                <button
                  key={sector.name}
                  onClick={() => setSelectedSector(sector)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium transition-all",
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white border border-primary/10 text-primary/70 hover:text-primary hover:bg-secondary/40"
                  )}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: isSelected ? "#FFFFFF" : sector.color }}
                  />
                  {sector.name.split("&")[0].trim()} ({sector.percentage}%)
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
