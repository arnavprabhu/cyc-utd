"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: LucideIcon;
}

interface SmoothTabProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pill" | "underline";
}

export function SmoothTab({
  tabs,
  activeTab,
  onChange,
  className = "",
  variant = "pill",
}: SmoothTabProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-secondary/60 p-1.5 backdrop-blur-sm",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative z-10 flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isActive
                ? "text-white"
                : "text-primary/70 hover:text-primary hover:bg-white/40"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 z-[-1] rounded-full bg-primary shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            {Icon && <Icon className="h-4 w-4" />}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "ml-1 rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-primary/10 text-primary"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
