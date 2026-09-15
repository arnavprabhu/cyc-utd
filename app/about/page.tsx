import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, HeartHandshake, Target, Sparkles, Building, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { BUSINESS_FORM_LINK, CONSULTANT_FORM_LINK } from "@/components/hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Consult Your Community at UT Dallas: our mission, values, national heritage, and commitment to pro-bono management consulting.",
};

const PILLARS = [
  {
    icon: Target,
    title: "Client Prosperity",
    subtitle: "Tangible Economic Impact",
    description:
      "We bridge the gap between high-caliber management consulting and local neighborhood businesses that traditionally lack access to six-figure advisory firms.",
    points: [
      "Customized financial modeling & unit economics",
      "Actionable market sizing & competitor audits",
      "Executive playbooks built for immediate execution",
    ],
  },
  {
    icon: GraduationCap,
    title: "Student Excellence",
    subtitle: "Accelerated Career Trajectory",
    description:
      "We cultivate undergraduate and graduate consultants who learn by doing—taking full ownership of ambiguous problems under the mentorship of industry leaders.",
    points: [
      "Structured New Member Education (NME) curriculum",
      "Mentorship from alumni at Deloitte, Goldman Sachs, and OpenAI",
      "Proven track record placing into top-tier firms",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Community Stewardship",
    subtitle: "Sustained Civic Commitment",
    description:
      "We believe that the strength of North Texas rests in its local entrepreneurs, minority-owned shops, and mission-driven community non-profits.",
    points: [
      "100% pro-bono, zero-cost engagements",
      "Dedicated to minority, woman, and veteran-owned businesses",
      "Longitudinal client relationships beyond semester delivery",
    ],
  },
];

const VALUES = [
  {
    number: "01",
    title: "Intellectual Rigor",
    description: "We ground every recommendation in empirical data, customer interviews, and defensible logic. We do not deal in generic advice.",
  },
  {
    number: "02",
    title: "Extreme Ownership",
    description: "From our newest analyst to chapter executives, every member treats our clients' businesses as if they were our own.",
  },
  {
    number: "03",
    title: "Collaborative Humility",
    description: "We listen first. Founders know their customers best; our role is to amplify their vision with structured strategic frameworks.",
  },
  {
    number: "04",
    title: "Civic Integrity",
    description: "We are proudly 100% pro-bono. We measure our return on investment strictly through the growth and resilience of our partners.",
  },
];

const TIMELINE = [
  {
    year: "National Inception",
    title: "The Consult Your Community Movement",
    description:
      "Founded with the conviction that college students can deliver institutional-grade business consulting to historically underserved small businesses.",
  },
  {
    year: "UT Dallas Chapter",
    title: "Chartered at Jindal School of Management",
    description:
      "Launched to connect UT Dallas's top analytical and business talent directly with Dallas-Fort Worth's thriving small business community.",
  },
  {
    year: "Expansion & Growth",
    title: "Cross-Disciplinary Scale",
    description:
      "Expanded beyond business majors to recruit software engineers, quantitative analysts, and economists—building multi-skilled sprint squads.",
  },
  {
    year: "Today",
    title: "48+ Portfolios & $1.8M+ Value Created",
    description:
      "Recognized as a premier professional student organization with alumni placed in premier consultancies, quant funds, and technology leaders.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-primary/10">
        <AmbientDecor />
        <div className="section-shell relative z-10">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Our Mission & Identity</p>
              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Democratizing elite management consulting for the community.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-2">
                Consult Your Community (CYC) at UT Dallas is an elite, student-led
                consulting organization operating under the Naveen Jindal School of Management.
                We pair high-caliber university consultants with small businesses and nonprofits
                across Dallas-Fort Worth—completely pro bono.
              </p>

              <div className="pt-4 flex flex-wrap gap-3.5">
                <Button asChild size="lg" className="rounded-2xl bg-accent text-white hover:bg-accent/90">
                  <a href={BUSINESS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                    Partner With Us
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl border-primary/20 bg-white">
                  <Link href="/team/">
                    Meet Our Consultants
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-24 sm:py-32 bg-white/70 border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <p className="eyebrow justify-center">Core Foundations</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                The Three Pillars of CYC
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Everything we do is anchored in mutual advancement between our student consultants and the community partners we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <SpotlightCard
                    key={pillar.title}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-primary mt-1">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-primary/10 space-y-2 text-xs text-primary/80">
                      {pillar.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-24 sm:py-32 bg-background border-b border-primary/10">
        <div className="section-shell max-w-5xl">
          <FadeIn>
            <div className="mb-14 space-y-3">
              <p className="eyebrow">Chapter Heritage</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                Our Journey & Legacy
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl">
                From a pioneering idea to a nationwide network of 28+ leading research universities, CYC has revolutionized undergraduate experiential learning.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className="rounded-3xl border border-primary/10 bg-white p-6 sm:p-8 shadow-xs hover:border-primary/25 transition-all"
                >
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 sm:py-32 bg-white/70 border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            <div className="max-w-2xl space-y-3 mb-14">
              <p className="eyebrow">Guiding Ethos</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                Values that Govern Every Engagement
              </h2>
              <p className="text-muted-foreground text-base">
                The principles our analysts carry into client pitch rooms, team diagnostics, and client handover presentations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="rounded-3xl border border-primary/10 bg-secondary/20 p-6 sm:p-7 space-y-3 hover:bg-white hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <span className="font-serif text-2xl font-bold text-accent">
                    {val.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* University & National Affiliation Callout */}
            <div className="mt-16 rounded-3xl border border-primary/10 bg-primary p-8 sm:p-10 text-white shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Academic Affiliation
                </p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Rooted in the Naveen Jindal School of Management
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  We benefit from faculty mentorship, access to industry databases, and an academic culture that prizes analytical excellence and community stewardship.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-accent text-white hover:bg-accent/90 font-semibold shrink-0"
              >
                <Link href="/join/">
                  Apply for the Next Cohort
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
