import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Users, FileText } from "lucide-react";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { BUSINESS_FORM_LINK } from "@/components/hero";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Pro-bono management consulting services for Dallas-Fort Worth small businesses and nonprofits: market intelligence, financial modeling, GTM growth, and operations.",
};

const STATS_RIBBON = [
  { label: "Engagement Length", value: "10–12 Weeks", icon: Clock },
  { label: "Consultant Team", value: "4–6 Members", icon: Users },
  { label: "Advisory Fee", value: "$0 (100% Free)", icon: ShieldCheck },
  { label: "Primary Deliverable", value: "Executive Playbook", icon: FileText },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Services Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-primary/10">
        <AmbientDecor />
        <div className="section-shell relative z-10">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Our Practices & Scope</p>
              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Consulting that meets you where you are.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-2">
                Every semester, our consultant teams partner with high-potential Dallas-Fort Worth
                entrepreneurs and community non-profits to solve their most pressing strategic,
                financial, and operational roadblocks.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
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
                    Request Consulting Support (Pro-Bono)
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-primary/20 bg-white"
                >
                  <Link href="/impact/">
                    View Client Case Studies
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats Ribbon */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-6 border-t border-primary/10">
              {STATS_RIBBON.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-2xs backdrop-blur-xs"
                  >
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <Icon className="h-4 w-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    <p className="font-serif text-lg sm:text-xl font-bold text-primary">
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Services & Methodology Component */}
      <Services />

      {/* Client Qualifications Callout */}
      <section className="py-20 sm:py-28 bg-background border-t border-primary/10">
        <div className="section-shell max-w-4xl">
          <FadeIn>
            <div className="rounded-3xl border border-primary/10 bg-white p-8 sm:p-12 shadow-md space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Partner Alignment
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary">
                Is your business a good fit for CYC?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We work with for-profit small businesses, emerging startups, family-owned firms,
                and 501(c)(3) nonprofits based in the Dallas-Fort Worth metroplex that have an established
                product or service and are looking to scale, optimize, or resolve strategic bottlenecks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Dedicated Founder Time</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Willingness to meet bi-weekly for 45 minutes to share business context and review deliverables.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Clear Strategic Focus</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      A tangible business question in growth, marketing, finance, or operations that needs deep analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Data Transparency</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Openness to share relevant historical sales, cost, or customer metrics under strict confidentiality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">Local Community Focus</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Operating in North Texas with a commitment to regional employment and community vitality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button asChild size="lg" className="rounded-2xl bg-accent text-white hover:bg-accent/90">
                  <a href={BUSINESS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                    Apply for Next Semester
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
