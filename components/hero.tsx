"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";
import { AttractButton } from "@/components/kokonutui/attract-button";

const CONSULTANT_FORM_LINK = "https://forms.gle/wS9qoayrUaC7g6Wh6";
const BUSINESS_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm1j0TdIj7ii-rArH4o6h9cMcsHe0lsaE0un3yXuoM3Vk9KA/viewform?usp=sf_link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-primary/10 bg-background"
      aria-labelledby="hero-title"
    >
      {/* Kokonut UI Ambient Decor Background */}
      <AmbientDecor />

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Value Proposition & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Institutional Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-2xs backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Fall 2025 / Spring 2026 Cohorts · 100% Pro-Bono Advisory</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.08]"
          >
            Big ideas for the{" "}
            <span className="relative inline-block text-utd-green">
              small businesses
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-accent opacity-80"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C40 2 120 1.5 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            that make Dallas home.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Consult Your Community (CYC) at UT Dallas pairs ambitious student
            consultants with passionate small business founders and community
            nonprofits to deliver structured, data-driven management strategy—completely
            pro bono.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3.5 sm:flex-row sm:items-center pt-1"
          >
            <Button
              asChild
              size="lg"
              className="rounded-2xl bg-accent text-white hover:bg-accent/90 shadow-md font-semibold text-sm px-7 py-6"
            >
              <Link
                href={BUSINESS_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Partner With Us (Free)
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl border-primary/20 bg-white/80 text-primary hover:bg-white hover:border-primary/40 font-semibold text-sm px-7 py-6 shadow-2xs"
            >
              <Link
                href={CONSULTANT_FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply as Consultant
              </Link>
            </Button>
          </motion.div>

          {/* Verified Institutional Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 border-t border-primary/10 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-primary/80"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>100% Zero-Cost Pro Bono</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-accent" />
              <span>28+ University Chapters Nationwide</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Prestige Live Sprint Card & Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Main Card Container */}
          <div className="relative rounded-3xl border border-primary/10 bg-white p-5 sm:p-6 shadow-xl backdrop-blur-sm space-y-5">
            {/* Header with Live Status */}
            <div className="flex items-center justify-between border-b border-primary/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold text-xs">
                  JSOM
                </div>
                <div>
                  <h2 className="text-sm font-bold text-primary">
                    Active Consulting Sprint
                  </h2>
                  <p className="text-[11px] text-muted-foreground">
                    Dallas-Fort Worth Metroplex Portfolio
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent">
                In Progress
              </span>
            </div>

            {/* City Visual Backdrop */}
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-primary shadow-inner">
              <Image
                src="/hero.webp"
                alt="Dallas Skyline and Community"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Real Local Impact
                </p>
                <p className="mt-1 font-serif text-xl font-bold leading-snug">
                  Strategic clarity for founders building our neighborhood economy.
                </p>
              </div>
            </div>

            {/* Live Deliverables Checklist */}
            <div className="space-y-2.5 pt-1">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Current Semester Milestones:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2.5 border border-primary/5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium text-primary">Market Sizing Models</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2.5 border border-primary/5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium text-primary">Unit Economics Audit</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2.5 border border-primary/5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium text-primary">GTM Customer Loops</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-secondary/40 p-2.5 border border-primary/5">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium text-primary">Final Executive Deck</span>
                </div>
              </div>
            </div>

            {/* Bottom Floating Stats Pill */}
            <div className="flex items-center justify-between rounded-2xl bg-primary p-4 text-white">
              <div>
                <p className="text-xs text-white/70">Client Economic Value</p>
                <p className="font-serif text-2xl font-bold text-accent">$1.8M+</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/70">Recommendation Rate</p>
                <p className="font-serif text-2xl font-bold text-white">98%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { CONSULTANT_FORM_LINK, BUSINESS_FORM_LINK, Hero };
