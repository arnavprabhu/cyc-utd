"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { BUSINESS_FORM_LINK, CONSULTANT_FORM_LINK } from "@/components/hero";

export default function NextSteps() {
  return (
    <section
      className="bg-background py-24 sm:py-32 border-b border-primary/10"
      aria-labelledby="next-steps-title"
    >
      <div className="section-shell">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="eyebrow justify-center">Get Started</p>
            <h2
              id="next-steps-title"
              className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight"
            >
              There&apos;s a place for you in the work.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re a Dallas-Fort Worth business owner seeking strategic
              advisory or a student aiming to build consulting acumen, we invite you to engage.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Organizations Card */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
              {/* Background Glow */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                    100% Pro-Bono
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    For Local Organizations
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                    Move your next strategic milestone forward.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Partner with a dedicated team of 4–6 student consultants for a
                    semester-long engagement. Receive tailored market research, financial
                    modeling, and an actionable executive playbook at no cost.
                  </p>
                </div>

                <div className="mt-6 space-y-2 text-xs sm:text-sm text-white/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Comprehensive 10–12 week tailored sprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Direct deliverables: financial models & strategy decks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>No financial commitment or hidden fees required</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-accent text-white hover:bg-accent/90 font-semibold"
                >
                  <a
                    href={BUSINESS_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Consulting Support
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold"
                >
                  <Link href="/contact/">Ask a Question</Link>
                </Button>
              </div>
            </div>

            {/* Students Card */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 sm:p-10 text-primary shadow-xl flex flex-col justify-between">
              {/* Background Glow */}
              <div
                className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    Applications Open
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    For UT Dallas Students
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-2">
                    Build real management consulting credentials.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Join our competitive cohort to advise actual Dallas businesses, receive
                    structured problem-solving training, and build an authentic network
                    placing into top management consulting, quant trading, and tech roles.
                  </p>
                </div>

                <div className="mt-6 space-y-2 text-xs sm:text-sm text-primary/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Real client-facing leadership and direct ownership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Case interview coaching & resume development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span>Open to all majors: Finance, CS, Economics, Analytics</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/10 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-primary text-white hover:bg-primary/90 font-semibold"
                >
                  <a
                    href={CONSULTANT_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply as Consultant
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-primary/20 bg-secondary/50 text-primary hover:bg-secondary font-semibold"
                >
                  <Link href="/join/">Recruitment Overview</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links Matrix */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-primary/80">
            <Link
              href="/services/"
              className="rounded-full bg-white px-4 py-2 border border-primary/10 shadow-2xs hover:border-primary/30 transition-all"
            >
              Explore Our Services →
            </Link>
            <Link
              href="/impact/"
              className="rounded-full bg-white px-4 py-2 border border-primary/10 shadow-2xs hover:border-primary/30 transition-all"
            >
              Impact Metrics & Data →
            </Link>
            <Link
              href="/team/"
              className="rounded-full bg-white px-4 py-2 border border-primary/10 shadow-2xs hover:border-primary/30 transition-all"
            >
              Meet the Consultant Cohort →
            </Link>
            <Link
              href="/#network"
              className="rounded-full bg-white px-4 py-2 border border-primary/10 shadow-2xs hover:border-primary/30 transition-all"
            >
              Career Placement Outcomes →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
