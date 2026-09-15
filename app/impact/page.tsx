import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { ImpactAnalyticsDashboard } from "@/components/bklit/impact-analytics-dashboard";
import { IndustryBreakdownChart } from "@/components/bklit/industry-breakdown-chart";
import { ProjectGrowthChart } from "@/components/bklit/project-growth-chart";
import VideoTestimonials from "@/components/testimonials";
import { BUSINESS_FORM_LINK } from "@/components/hero";

export const metadata: Metadata = {
  title: "Impact & Analytics",
  description:
    "See quantitative results and data analytics from Consult Your Community at UT Dallas: $1.8M+ client economic value generated across 48+ Dallas-Fort Worth businesses.",
};

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
                Explore our portfolio analytics and sector breakdown across the Dallas-Fort Worth metroplex.
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
                  <Link href="#testimonials">
                    Watch Founder Stories
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

      {/* Video Testimonials */}
      <VideoTestimonials />
    </div>
  );
}
