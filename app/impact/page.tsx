import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp, CheckCircle2, Award, DollarSign, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { ImpactAnalyticsDashboard } from "@/components/bklit/impact-analytics-dashboard";
import { IndustryBreakdownChart } from "@/components/bklit/industry-breakdown-chart";
import { ProjectGrowthChart } from "@/components/bklit/project-growth-chart";
import VideoTestimonials from "@/components/testimonials";
import { BUSINESS_FORM_LINK } from "@/components/hero";

export const metadata: Metadata = {
  title: "Impact & Case Studies",
  description:
    "See quantitative results and case studies from Consult Your Community at UT Dallas: $1.8M+ client economic value generated across 48+ Dallas-Fort Worth businesses.",
};

const CASE_STUDIES = [
  {
    title: "Bishop Arts Apparel & Lifestyle Collective",
    sector: "Retail & E-Commerce",
    location: "Oak Cliff / Bishop Arts, Dallas",
    metricHighlight: "+42%",
    metricLabel: "Inventory Turnover Speed",
    secondaryMetric: "+$85,000 Annualized Revenue",
    problem:
      "A fast-growing boutique faced cash flow bottlenecks due to seasonal over-purchasing and lack of digital conversion tracking for non-local customers.",
    solution:
      "Our 5-person consultant team conducted SKU-level contribution margin modeling, implemented automated reorder triggers, and mapped a targeted Shopify omnichannel retention campaign.",
    deliverables: ["Dynamic Inventory Reorder Model", "Customer LTV Cohort Analysis", "Omnichannel Launch Playbook"],
  },
  {
    title: "Richardson Craft Coffee Roasters",
    sector: "Food, Beverage & Hospitality",
    location: "Richardson Telecom Corridor",
    metricHighlight: "28%",
    metricLabel: "Reduction in Food-Waste Overhead",
    secondaryMetric: "Unlocked Capital for 2nd Storefront",
    problem:
      "A beloved specialty coffee roaster wanted to expand to a second retail location but struggled to forecast unit economics under rising bean import costs.",
    solution:
      "We built a granular 3-statement financial forecasting model, renegotiated supplier packaging tiers, and audited menu item profitability to protect gross margins.",
    deliverables: ["3-Statement Multi-Unit Pro-Forma", "Menu Contribution Margin Matrix", "Investor Presentation Deck"],
  },
  {
    title: "North Texas Youth Literacy Foundation",
    sector: "Community Non-Profit (501c3)",
    location: "South Dallas & Oak Cliff",
    metricHighlight: "$120K",
    metricLabel: "Corporate Grant Commitments Unlocked",
    secondaryMetric: "350+ Additional Students Reached",
    problem:
      "An impactful education non-profit relied on sporadic individual donations and needed a structured, sustainable corporate partnership program.",
    solution:
      "We designed an executive corporate sponsorship tier structure, mapped 60+ aligned DFW corporate foundation targets, and drafted pitch narratives highlighting measurable student literacy gains.",
    deliverables: ["Corporate Sponsorship Prospectus", "60-Target Pipeline Database", "Grant Impact Measurement KPI Suite"],
  },
];

export default function ImpactPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Header */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-primary/10">
        <AmbientDecor />
        <div className="section-shell relative z-10">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Quantitative Impact & Field Evidence</p>
              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Real business outcomes. Measured by what lasts.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-2">
                We believe management consulting should produce measurable, verifiable returns.
                Explore our portfolio analytics, sector breakdown, and deep-dive case studies
                across the Dallas-Fort Worth metroplex.
              </p>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-accent text-white hover:bg-accent/90 shadow-md font-semibold"
                >
                  <a
                    href={BUSINESS_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Partner With Us (Pro-Bono)
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-primary/20 bg-white"
                >
                  <Link href="#cases">
                    Read Case Studies
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Analytics Dashboard Grid */}
      <section className="py-20 sm:py-28 bg-white/70 border-b border-primary/10">
        <div className="section-shell space-y-12">
          <FadeIn>
            <div className="max-w-xl space-y-2 mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Key Performance Indicators
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary">
                Executive Portfolio Dashboard
              </h2>
            </div>
            <ImpactAnalyticsDashboard />
          </FadeIn>

          {/* Visx Charts Row */}
          <FadeIn delay={0.15}>
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

      {/* Case Studies Deep Dive */}
      <section id="cases" className="py-24 sm:py-32 bg-background border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            <div className="max-w-2xl space-y-3 mb-16">
              <p className="eyebrow">Client Case Spotlights</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                Representative Client Engagements
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Detailed breakdowns of how our student consultants diagnosed challenges, modeled solutions, and handed over executable playbooks.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <SpotlightCard
                  key={study.title}
                  className="flex flex-col justify-between"
                  borderGlowColor="rgba(232, 117, 0, 0.4)"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                        {study.sector}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-medium">
                        {study.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-primary leading-snug">
                      {study.title}
                    </h3>

                    {/* Metric Highlight Box */}
                    <div className="rounded-2xl bg-secondary/40 p-4 border border-primary/5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-3xl font-bold text-accent">
                          {study.metricHighlight}
                        </span>
                        <span className="text-xs font-semibold text-primary">
                          {study.metricLabel}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground font-medium">
                        {study.secondaryMetric}
                      </p>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed text-muted-foreground">
                      <div>
                        <span className="font-bold text-primary block mb-0.5">The Challenge:</span>
                        {study.problem}
                      </div>
                      <div>
                        <span className="font-bold text-primary block mb-0.5">The Solution:</span>
                        {study.solution}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent block mb-2">
                      Handover Deliverables:
                    </span>
                    <div className="space-y-1 text-xs text-primary/80">
                      {study.deliverables.map((deliv) => (
                        <div key={deliv} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />
    </div>
  );
}
