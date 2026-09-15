"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Briefcase, GraduationCap, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FadeIn from "@/components/ui/fade-in";
import { SmoothTab } from "@/components/kokonutui/smooth-tab";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { executives, junior_analysts, senior_analysts } from "@/app/team/members";

type CompanyLogo = {
  name: string;
  logo: string;
  industry: string;
  category: "consulting" | "finance" | "tech" | "enterprise";
};

const COMPANIES: CompanyLogo[] = [
  { name: "Deloitte", logo: "/deloitte.svg", industry: "Strategy & Operations", category: "consulting" },
  { name: "Goldman Sachs", logo: "/goldman-sachs.svg", industry: "Investment Banking", category: "finance" },
  { name: "Jane Street", logo: "/jane-street.svg", industry: "Quantitative Trading", category: "finance" },
  { name: "JP Morgan", logo: "/jp-morgan.svg", industry: "Asset & Wealth Management", category: "finance" },
  { name: "OpenAI", logo: "/openai.svg", industry: "Artificial Intelligence", category: "tech" },
  { name: "Snowflake", logo: "/snowflake.svg", industry: "Cloud Data Architecture", category: "tech" },
  { name: "Charles Schwab", logo: "/charles-schwab.png", industry: "Financial Services", category: "finance" },
  { name: "AT&T", logo: "/att.svg", industry: "Telecommunications Strategy", category: "enterprise" },
  { name: "American Airlines", logo: "/american-airlines.svg", industry: "Aviation & Logistics", category: "enterprise" },
  { name: "HubSpot", logo: "/hubspot.svg", industry: "Enterprise SaaS", category: "tech" },
  { name: "Indeed", logo: "/indeed.svg", industry: "Talent Platforms", category: "tech" },
  { name: "Niantic", logo: "/niantic.svg", industry: "Spatial Computing", category: "tech" },
  { name: "Paycom", logo: "/paycom.svg", industry: "HR Technology", category: "tech" },
  { name: "Southwest", logo: "/southwest.svg", industry: "Commercial Strategy", category: "enterprise" },
  { name: "USAA", logo: "/usaa.svg", industry: "Financial Services", category: "finance" },
];

const OUTCOME_METRICS = [
  {
    metric: "100%",
    label: "Active Project Placement",
    description: "Every accepted analyst works directly on live client strategy.",
    icon: Briefcase,
  },
  {
    metric: "15+",
    label: "Tier-1 Destinations",
    description: "Top consulting firms, quant funds, and tech innovators.",
    icon: Building2,
  },
  {
    metric: "28+",
    label: "National Chapters",
    description: "Nationwide CYC alumni & cross-university case competitions.",
    icon: GraduationCap,
  },
  {
    metric: "Top 5%",
    label: "UT Dallas Talent",
    description: "Finance, Computer Science, Economics, and Data Analytics.",
    icon: Award,
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Destinations", badge: 15 },
  { id: "consulting", label: "Consulting", badge: 1 },
  { id: "finance", label: "Finance & Quant", badge: 5 },
  { id: "tech", label: "AI & Tech", badge: 5 },
  { id: "enterprise", label: "Fortune 500", badge: 4 },
];

export default function Network() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allMembers = [...executives, ...senior_analysts, ...junior_analysts];
  const displayMembers = allMembers.slice(0, 6);
  const remainingCount = Math.max(0, allMembers.length - 6);

  const filteredCompanies = COMPANIES.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  return (
    <section
      id="network"
      className="relative overflow-hidden bg-white/80 py-24 sm:py-32 border-b border-primary/10"
      aria-labelledby="network-heading"
    >
      <div className="section-shell relative">
        <FadeIn>
          {/* Header Block */}
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Alumni & Placement Trajectory</p>
              <h2
                id="network-heading"
                className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight"
              >
                Where our student consultants go.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our consultants translate pro-bono client rigor into elite career
                outcomes—landing competitive roles across management consulting,
                quantitative trading, venture-backed tech, and Fortune 500 leadership.
              </p>
            </div>

            {/* Smooth Tab Filter */}
            <div className="shrink-0">
              <SmoothTab
                tabs={CATEGORY_TABS}
                activeTab={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {OUTCOME_METRICS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-primary/10 bg-white p-5 shadow-xs transition-all duration-300 hover:border-primary/25 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                      {item.metric}
                    </p>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary/80">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredCompanies.map((company) => (
                <motion.div
                  key={company.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col items-center justify-between rounded-2xl border border-primary/10 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="relative flex h-14 w-full items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={130}
                      height={52}
                      className="max-h-10 w-auto max-w-[110px] rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs font-bold text-primary transition-colors">
                      {company.name}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground line-clamp-1">
                      {company.industry}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Alumni Quote & Team Callout Banner */}
          <div className="mt-14 rounded-3xl border border-primary/10 bg-secondary/30 p-6 sm:p-8 space-y-6">
            <div className="border-l-4 border-accent pl-5 max-w-3xl">
              <blockquote className="font-serif text-base sm:text-lg italic text-primary leading-relaxed">
                &ldquo;Directly advising small business owners on their unit economics and pricing architecture gave me the exact problem-structuring intuition and executive poise needed to excel in management consulting interviews and beyond.&rdquo;
              </blockquote>
              <p className="mt-2 text-xs font-semibold text-primary/75">
                — CYC UT Dallas Alumnus · Management Consulting Analyst at Deloitte
              </p>
            </div>

            <div className="pt-4 border-t border-primary/10 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center -space-x-2.5">
                  {displayMembers.map((member, index) => (
                    <Avatar
                      key={`${member.first_name}-${member.last_name}-${index}`}
                      className="h-11 w-11 border-2 border-white shadow-xs ring-1 ring-primary/10"
                    >
                      <AvatarImage
                        src={member.headshot}
                        alt={`${member.first_name} ${member.last_name}`}
                      />
                      <AvatarFallback className="bg-primary text-[10px] font-bold text-white">
                        {member.first_name[0]}
                        {member.last_name[0]}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {remainingCount > 0 && (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white shadow-xs ring-1 ring-primary/10">
                      +{remainingCount}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">
                    Meet our active consulting cohort
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Finance, Computer Science, Economics, and Business Analytics.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  asChild
                  size="sm"
                  className="rounded-full bg-white hover:bg-white/90 border-primary/20 text-primary font-semibold"
                >
                  <Link href="/team/">
                    Meet the Team
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-accent text-white hover:bg-accent/90 shadow-sm font-semibold"
                >
                  <Link href="/join/">
                    Join the Cohort
                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
