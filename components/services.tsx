"use client";

import { useState } from "react";
import {
  ChartBar,
  PiggyBank,
  BarChart3,
  TrendingUp,
  Megaphone,
  Settings,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { SmoothTab } from "@/components/kokonutui/smooth-tab";
import Link from "next/link";
import { BUSINESS_FORM_LINK } from "@/components/hero";

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  category: "strategy" | "finance" | "marketing" | "operations";
  description: string;
  deliverable: string;
  tags: string[];
};

const SERVICES_DATA: Service[] = [
  {
    id: "market-insights",
    icon: ChartBar,
    category: "strategy",
    title: "Market Intelligence & Sizing",
    description:
      "Deliver in-depth competitive benchmarking, customer demographic sizing, and localized TAM/SAM expansion models to identify high-margin growth pockets.",
    deliverable: "Comprehensive Market Assessment & Competitor Matrix",
    tags: ["TAM/SAM Modeling", "Competitor Matrix", "Customer Discovery"],
  },
  {
    id: "financial-planning",
    icon: PiggyBank,
    category: "finance",
    title: "Financial Advisory & Runway",
    description:
      "Build dynamic 3-statement financial projections, restructure pricing tiers, evaluate unit economics, and craft capital-readiness scenarios.",
    deliverable: "Dynamic Financial Model & Unit Economics Audit",
    tags: ["Cash Flow Runway", "Pricing Optimization", "Unit Economics"],
  },
  {
    id: "data-analysis",
    icon: BarChart3,
    category: "operations",
    title: "Data Analytics & Dashboarding",
    description:
      "Transform messy POS, inventory, and customer databases into automated executive dashboards that drive faster, high-confidence decision making.",
    deliverable: "Automated Executive Dashboard & Metrics Suite",
    tags: ["Business Intelligence", "KPI Architecture", "Customer Cohorts"],
  },
  {
    id: "growth-strategies",
    icon: TrendingUp,
    category: "strategy",
    title: "Go-to-Market & Growth Strategy",
    description:
      "Design multi-channel customer acquisition experiments, geographic territory expansion plans, and strategic local partnerships.",
    deliverable: "GTM Channel Playbook & Scaled Launch Roadmap",
    tags: ["Channel Experimentation", "Customer Retention", "Territory Expansion"],
  },
  {
    id: "brand-marketing",
    icon: Megaphone,
    category: "marketing",
    title: "Brand Positioning & Retention",
    description:
      "Clarify customer value propositions, optimize digital presence, and build organic customer loyalty flywheels that convert first-time buyers into champions.",
    deliverable: "Brand Identity Guide & Omnichannel Activation Plan",
    tags: ["Value Proposition", "Digital Omnichannel", "Retention Loops"],
  },
  {
    id: "operational-efficiency",
    icon: Settings,
    category: "operations",
    title: "Operational Streamlining",
    description:
      "Identify operational bottlenecks, streamline manual workflows, audit supply chain overhead, and evaluate modern software stack integration.",
    deliverable: "Standard Operating Procedures (SOP) & Efficiency Audit",
    tags: ["Process Mapping", "Tool Integration", "Supply Chain Audit"],
  },
];

const TABS = [
  { id: "all", label: "All Practices", badge: 6 },
  { id: "strategy", label: "Strategy & GTM", badge: 2 },
  { id: "finance", label: "Finance & Data", badge: 2 },
  { id: "operations", label: "Operations & Brand", badge: 2 },
];

const ENGAGEMENT_STEPS = [
  {
    phase: "Phase 01",
    title: "Discovery & Diagnostics",
    weeks: "Weeks 1–3",
    description: "Deep dive into business financials, founder goals, and initial stakeholder interviews.",
  },
  {
    phase: "Phase 02",
    title: "Data & Research Sprint",
    weeks: "Weeks 4–7",
    description: "Competitor benchmarking, customer surveys, financial modeling, and hypothesis testing.",
  },
  {
    phase: "Phase 03",
    title: "Strategy Formulation",
    weeks: "Weeks 8–10",
    description: "Iterative testing with client feedback; synthesize recommendations into actionable roadmaps.",
  },
  {
    phase: "Phase 04",
    title: "Executive Handover",
    weeks: "Weeks 11–12",
    description: "Deliver the comprehensive client playbook, spreadsheet models, and executive pitch deck.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeTab === "all") return true;
    if (activeTab === "strategy") return s.category === "strategy";
    if (activeTab === "finance") return s.category === "finance" || s.id === "data-analysis";
    if (activeTab === "operations") return s.category === "operations" || s.category === "marketing";
    return true;
  });

  return (
    <section id="services" className="bg-white/80 py-24 sm:py-32 border-b border-primary/10">
      <div className="section-shell">
        <FadeIn>
          {/* Section Header */}
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Consulting Practices</p>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                Rigorous strategy, built around your business goals.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Each semester, our multidisciplinary teams of UT Dallas consultants
                conduct structured, data-informed engagements that help local entrepreneurs and
                nonprofits unlock lasting momentum.
              </p>
            </div>

            {/* Kokonut UI Tab Filter */}
            <div className="shrink-0">
              <SmoothTab
                tabs={TABS}
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>
          </div>

          {/* Kokonut UI Spotlight Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <SpotlightCard
                  key={service.id}
                  className="flex flex-col justify-between"
                  borderGlowColor="rgba(232, 117, 0, 0.35)"
                  spotlightColor="rgba(21, 71, 52, 0.09)"
                >
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-serif text-sm font-semibold text-primary/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-primary/10 space-y-3">
                    <div className="rounded-xl bg-secondary/40 p-2.5 text-xs text-primary/85">
                      <span className="font-semibold text-accent block mb-0.5">Core Deliverable:</span>
                      {service.deliverable}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-full border-primary/15 bg-white/80 px-2.5 py-0.5 text-[11px] font-medium text-primary/75"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* 10-Week Semester Engagement Workflow */}
          <div className="mt-16 rounded-3xl border border-primary/10 bg-secondary/30 p-8 sm:p-10">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Standardized Methodology
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary">
                  How We Engage: The 10-Week Sprint
                </h3>
              </div>
              <a
                href={BUSINESS_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                <span>Request a consultation for your organization</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ENGAGEMENT_STEPS.map((step) => (
                <div
                  key={step.phase}
                  className="rounded-2xl border border-primary/10 bg-white p-5 shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-accent">{step.phase}</span>
                    <span className="text-muted-foreground font-medium">{step.weeks}</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-primary">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
