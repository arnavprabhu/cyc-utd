"use client";

import FadeIn from "@/components/ui/fade-in";
import { ImpactAnalyticsDashboard } from "@/components/bklit/impact-analytics-dashboard";
import { IndustryBreakdownChart } from "@/components/bklit/industry-breakdown-chart";
import { ProjectGrowthChart } from "@/components/bklit/project-growth-chart";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="relative overflow-hidden bg-background py-24 sm:py-32 border-b border-primary/10"
    >
      <div className="section-shell relative space-y-12">
        <FadeIn>
          {/* Header */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Impact & Quantitative Analytics</p>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                Built on service. Measured by tangible client outcomes.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We combine rigorous academic frameworks with high-velocity problem
                solving to deliver measurable economic impact for local Dallas-Fort Worth businesses.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/impact/"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs sm:text-sm font-semibold text-primary transition-colors hover:bg-secondary/70"
              >
                <BarChart2 className="h-4 w-4 text-accent" />
                <span>Deep-Dive Analytics & Cases</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 1. Bklit Analytics Dashboard: KPI Cards with Sparklines */}
        <FadeIn delay={0.1}>
          <ImpactAnalyticsDashboard />
        </FadeIn>

        {/* 2. Visual Charts Row: Industry Donut + Growth Chart */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <IndustryBreakdownChart />
            </div>
            <div className="lg:col-span-6">
              <ProjectGrowthChart />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
