"use client";

import { useState } from "react";
import Hero from "@/components/hero-team";
import { Profile } from "@/components/profile";
import { executives, senior_analysts, junior_analysts } from "./members";
import { SmoothTab } from "@/components/kokonutui/smooth-tab";
import FadeIn from "@/components/ui/fade-in";
import { Search, Users, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allMembers = [
  ...executives.map((m) => ({ ...m, position: m.position, tier: "Executive" as const })),
  ...senior_analysts.map((m) => ({ ...m, position: "Senior Analyst", tier: "Senior Analyst" as const })),
  ...junior_analysts.map((m) => ({ ...m, position: "Junior Analyst", tier: "Junior Analyst" as const })),
];

const TABS = [
  { id: "all", label: "All Members", badge: allMembers.length },
  { id: "executives", label: "Executive Board", badge: executives.length },
  { id: "senior", label: "Senior Analysts", badge: senior_analysts.length },
  { id: "junior", label: "Junior Analysts", badge: junior_analysts.length },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = allMembers.filter((m) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "executives" && m.tier === "Executive") ||
      (activeTab === "senior" && m.tier === "Senior Analyst") ||
      (activeTab === "junior" && m.tier === "Junior Analyst");

    const fullName = `${m.first_name} ${m.last_name}`.toLowerCase();
    const matchesSearch =
      fullName.includes(searchQuery.toLowerCase()) ||
      m.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.position && m.position.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Team Hero with Slideshow */}
      <Hero />

      {/* Directory Section */}
      <section className="py-20 sm:py-28 bg-white/70 border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            {/* Header & Filter Controls */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
              <div className="space-y-3 max-w-xl">
                <p className="eyebrow">Consultant Directory</p>
                <h2 className="text-balance text-3xl sm:text-4xl font-bold tracking-tight text-primary leading-tight">
                  The analysts driving real change.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our multidisciplinary cohort represents top talent across Finance, Computer Science, Economics, and Business Analytics at UT Dallas.
                </p>
              </div>

              {/* Tab Selector */}
              <div className="shrink-0">
                <SmoothTab
                  tabs={TABS}
                  activeTab={activeTab}
                  onChange={setActiveTab}
                />
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="relative mb-10 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name, major, or position..."
                className="w-full rounded-2xl border border-primary/15 bg-white py-2.5 pl-11 pr-4 text-sm text-primary placeholder:text-muted-foreground/60 shadow-2xs focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            {/* Members Cards Grid */}
            {filteredMembers.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredMembers.map((member) => (
                  <Profile key={member.email} {...member} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-secondary/20 p-12 text-center">
                <Users className="mx-auto h-10 w-10 text-muted-foreground/50" />
                <h3 className="mt-3 text-base font-bold text-primary">
                  No consultants found
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Try adjusting your search terms or selecting &quot;All Members&quot;.
                </p>
              </div>
            )}

            {/* Recruitment Callout Banner */}
            <div className="mt-20 rounded-3xl border border-primary/10 bg-primary p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Join the Team
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Interested in consulting for local businesses?
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  We recruit each semester for curious, analytical, and collaborative students across all majors.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-2xl bg-accent text-white hover:bg-accent/90 font-semibold shrink-0">
                <Link href="/join/">
                  View Recruitment Timeline
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
