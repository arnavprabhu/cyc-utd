import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  FileCheck,
  Users2,
  Award,
  Sparkles,
  BookOpen,
  Coffee,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { CONSULTANT_FORM_LINK } from "@/components/hero";

export const metadata: Metadata = {
  title: "Join the Cohort | Recruitment",
  description:
    "Apply to join Consult Your Community at UT Dallas. Advise real small businesses, master consulting case frameworks, and join an elite student cohort.",
};

const RECRUITMENT_TIMELINE = [
  {
    step: "01",
    phase: "Info Sessions & Coffee Chats",
    timeline: "Early Semester · Weeks 1–2",
    icon: Coffee,
    description:
      "Attend our campus info sessions at the Jindal School of Management and schedule 1-on-1 coffee chats with current analysts to explore projects and culture.",
    highlights: ["Campus Info Sessions", "1-on-1 Coffee Chats", "Resume Guidance"],
  },
  {
    step: "02",
    phase: "Written Application",
    timeline: "Application Deadline · Week 2",
    icon: FileCheck,
    description:
      "Submit your resume and short responses detailing your curiosity, background, and why you want to advise small businesses in the Dallas community.",
    highlights: ["Resume Review", "Personal Statement", "No Business Major Required"],
  },
  {
    step: "03",
    phase: "Case & Behavioral Interview",
    timeline: "By Invitation · Week 3",
    icon: Users2,
    description:
      "A friendly, conversational 45-minute interview designed to understand your problem-solving intuition and alignment with our collaborative values.",
    highlights: ["Approachable Mini-Case", "Behavioral Fit", "Tailored to Your Major"],
  },
  {
    step: "04",
    phase: "Offer & New Member Education",
    timeline: "Cohort Kickoff · Week 4",
    icon: Award,
    description:
      "Accepted analysts begin our comprehensive 6-week New Member Education (NME) training while immediately joining a live client sprint team.",
    highlights: ["Executive Mentorship", "Direct Client Staffing", "Social Traditions"],
  },
];

const CANDIDATE_ATTRIBUTES = [
  {
    title: "Structured Curiosity",
    description:
      "You enjoy breaking down messy, ambiguous questions into logical components. You don't need all the answers upfront—just a willingness to investigate.",
  },
  {
    title: "Collaborative Humility",
    description:
      "Consulting is a team sport. We look for students who listen attentively, support their teammates, and place client success above individual ego.",
  },
  {
    title: "Extreme Reliability",
    description:
      "Real business owners depend on our research and models to make hiring, pricing, and capital decisions. We take our promises to clients seriously.",
  },
  {
    title: "Civic Empathy",
    description:
      "A genuine passion for community impact and helping the independent brick-and-mortar businesses that give North Texas its distinctive character.",
  },
];

const ANALYST_CURRICULUM = [
  {
    title: "MECE Problem Structuring",
    desc: "Learn the core problem-solving methodologies used by top strategy consulting firms.",
  },
  {
    title: "Financial & Unit Economics",
    desc: "Build dynamic 3-statement pro-formas, evaluate cash runway, and model pricing scenarios.",
  },
  {
    title: "Executive Slide Architecture",
    desc: "Draft polished, C-suite ready decks that communicate high-density insights clearly.",
  },
  {
    title: "Career & Interview Coaching",
    desc: "Exclusive access to case interview bootcamps, resume workshops, and our alumni network.",
  },
];

export default function JoinPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Header */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-primary/10">
        <AmbientDecor />
        <div className="section-shell relative z-10">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-2xs backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span>Applications Open for Current Cycle · UT Dallas Cohort</span>
              </div>

              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Learn management consulting by advising real businesses.
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-2">
                We recruit for intellectual curiosity, collaborative spirit, and a deep
                commitment to community prosperity. No specific major or prior business background
                is required—we actively value diverse perspectives.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-accent text-white hover:bg-accent/90 shadow-md font-semibold text-sm px-7 py-6"
                >
                  <a
                    href={CONSULTANT_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Submit Consultant Application
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-primary/20 bg-white hover:bg-white/90 font-semibold text-sm px-7 py-6"
                >
                  <Link href="/team/">
                    Meet Our Active Cohort
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4-Stage Recruitment Timeline */}
      <section className="py-24 sm:py-32 bg-white/70 border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            <div className="max-w-2xl space-y-3 mb-16">
              <p className="eyebrow">Recruitment Process</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                How to Join CYC: 4-Stage Path
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Our application process is structured to give you a genuine preview of our culture,
                consulting engagements, and community values.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RECRUITMENT_TIMELINE.map((step) => {
                const Icon = step.icon;
                return (
                  <SpotlightCard
                    key={step.step}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-serif text-2xl font-bold text-accent">
                          {step.step}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                        {step.timeline}
                      </span>

                      <h3 className="font-serif text-lg font-bold text-primary mt-1 leading-snug">
                        {step.phase}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-primary/10 space-y-1.5 text-xs text-primary/80">
                      {step.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{item}</span>
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

      {/* What We Look For */}
      <section className="py-24 sm:py-32 bg-background border-b border-primary/10">
        <div className="section-shell">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="eyebrow">Candidate Profile</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  Who succeeds at CYC?
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  We don&apos;t look for students who already have consulting figured out. We look for
                  curious, ambitious individuals who care about their work and are excited to grow together.
                </p>
                <div className="rounded-2xl border border-primary/10 bg-secondary/40 p-5 space-y-2">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    Diversity of Thought
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Our current roster includes students majoring in Computer Science, Finance,
                    Healthcare Management, Business Analytics, Economics, and Engineering.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CANDIDATE_ATTRIBUTES.map((attr) => (
                  <div
                    key={attr.title}
                    className="rounded-2xl border border-primary/10 bg-white p-6 shadow-2xs hover:border-primary/25 transition-all"
                  >
                    <h3 className="font-serif text-base font-bold text-primary">
                      {attr.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {attr.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Analyst Training Curriculum */}
      <section className="py-24 sm:py-32 bg-white/70 border-b border-primary/10">
        <div className="section-shell max-w-5xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <p className="eyebrow justify-center">Development & Growth</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                The New Member Education Curriculum
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Every accepted analyst completes our proprietary training series, designed to prepare you for real client meetings and top-tier career recruiting.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ANALYST_CURRICULUM.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-primary/10 bg-secondary/20 p-6 sm:p-7 space-y-2 hover:bg-white hover:shadow-xs transition-all"
                >
                  <span className="font-serif text-sm font-bold text-accent">
                    Module 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Application CTA Box */}
            <div className="mt-16 rounded-3xl border border-primary/10 bg-primary p-8 sm:p-10 text-white shadow-xl text-center max-w-3xl mx-auto space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Ready to make a difference?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Take the first step toward consulting excellence.
              </h3>
              <p className="text-sm text-white/75 max-w-xl mx-auto leading-relaxed">
                Submit your application today. If you have questions before applying, reach out to our recruitment directors.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-accent text-white hover:bg-accent/90 font-semibold"
                >
                  <a
                    href={CONSULTANT_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Application Form
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold"
                >
                  <Link href="/contact/">
                    Ask Recruitment a Question
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
