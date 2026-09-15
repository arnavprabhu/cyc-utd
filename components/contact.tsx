"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  Clock,
  ArrowUpRight,
  Check,
  Copy,
  Building2,
  GraduationCap,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { SmoothTab } from "@/components/kokonutui/smooth-tab";
import { SpotlightCard } from "@/components/kokonutui/spotlight-card";
import { BUSINESS_FORM_LINK, CONSULTANT_FORM_LINK } from "@/components/hero";

const CONTACT_FORM_URL = "https://forms.gle/qbhxaBuhdHnXJcGu6";
const CONTACT_EMAIL = "utdallas@consultyourcommunity.org";

const INQUIRY_TYPES = [
  { id: "business", label: "Small Business / Non-Profit" },
  { id: "student", label: "Prospective Student" },
  { id: "corporate", label: "Corporate / Sponsor" },
  { id: "general", label: "General Question" },
];

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState("business");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-us" className="relative py-12 sm:py-16">
      <FadeIn>
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Targeted Routing & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Choose Inquiry Type
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                How can we support you?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Select your area of interest to reach the aligned committee directly.
              </p>
            </div>

            {/* Selector Tabs */}
            <SmoothTab
              tabs={INQUIRY_TYPES}
              activeTab={selectedInquiry}
              onChange={setSelectedInquiry}
              className="flex-wrap"
            />

            {/* Dynamic Routing Box */}
            <div className="rounded-3xl border border-primary/10 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              {selectedInquiry === "business" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold text-lg">
                    <Building2 className="h-5 w-5 text-accent" />
                    <span>Pro-Bono Management Consulting Partnership</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    We partner with Dallas-Fort Worth small businesses and nonprofits for 10–12 week semester sprints. Get tailored strategy, financial models, and research at zero cost.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button asChild size="lg" className="rounded-2xl bg-accent text-white hover:bg-accent/90">
                      <a href={BUSINESS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                        Submit Client Inquiry Form
                        <ArrowUpRight className="ml-1.5 h-4 w-4" />
                      </a>
                    </Button>
                    <Button onClick={copyEmail} variant="outline" size="lg" className="rounded-2xl border-primary/20 bg-secondary/30 text-primary">
                      {copied ? <Check className="mr-1.5 h-4 w-4 text-accent" /> : <Copy className="mr-1.5 h-4 w-4" />}
                      {copied ? "Email Copied!" : "Copy Leadership Email"}
                    </Button>
                  </div>
                </div>
              )}

              {selectedInquiry === "student" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold text-lg">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <span>Recruitment & Cohort Applications</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Have questions regarding coffee chats, recruitment timelines, candidate requirements, or the case interview process? Our recruitment leads are happy to connect.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button asChild size="lg" className="rounded-2xl bg-primary text-white hover:bg-primary/90">
                      <a href={CONSULTANT_FORM_LINK} target="_blank" rel="noopener noreferrer">
                        Open Application Portal
                        <ArrowUpRight className="ml-1.5 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-2xl border-primary/20 bg-secondary/30 text-primary">
                      <Link href="/join/">View Recruitment Guide</Link>
                    </Button>
                  </div>
                </div>
              )}

              {selectedInquiry === "corporate" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold text-lg">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <span>Sponsorships, Workshops & Case Competitions</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Interested in hosting a professional workshop, sponsoring our semester showcase demo day, or connecting with our top-tier consultant talent pipeline?
                  </p>
                  <div className="pt-2">
                    <Button onClick={copyEmail} size="lg" className="rounded-2xl bg-primary text-white hover:bg-primary/90">
                      <Mail className="mr-1.5 h-4 w-4" />
                      Email Chapter President Directly
                    </Button>
                  </div>
                </div>
              )}

              {selectedInquiry === "general" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold text-lg">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    <span>General Chapter Inquiries</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    For all other questions, press inquiries, or cross-university collaboration requests, please use our general contact form.
                  </p>
                  <div className="pt-2">
                    <Button asChild size="lg" className="rounded-2xl bg-primary text-white hover:bg-primary/90">
                      <a href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
                        Open Contact Form
                        <ArrowUpRight className="ml-1.5 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Turnaround Commitment */}
            <div className="flex items-center gap-3 rounded-2xl bg-secondary/40 p-4 border border-primary/10 text-xs text-primary/80">
              <Clock className="h-4 w-4 text-accent shrink-0" />
              <span>
                <strong>Response Commitment:</strong> Our executive team reviews every incoming message and responds within 24–48 business hours.
              </span>
            </div>
          </div>

          {/* Right Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              Direct Contact Channels
            </h3>

            {/* Email Card */}
            <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Official Email</h4>
                  <p className="text-xs text-muted-foreground">General inquiries & partnerships</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-primary/5">
                <span className="text-xs font-mono text-primary font-medium select-all">
                  {CONTACT_EMAIL}
                </span>
                <button
                  onClick={copyEmail}
                  className="rounded-lg bg-secondary/60 p-1.5 text-primary hover:bg-accent hover:text-white transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/company/cyc-utd/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-primary/10 bg-white p-5 shadow-2xs hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">LinkedIn Chapter Page</h4>
                    <p className="text-xs text-muted-foreground">Alumni spotlights & announcements</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/cycdallas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-primary/10 bg-white p-5 shadow-2xs hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Instagram Updates</h4>
                    <p className="text-xs text-muted-foreground">Campus events & team moments</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </a>

            {/* Campus Location Card */}
            <div className="rounded-2xl border border-primary/10 bg-secondary/20 p-5 space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-primary">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span>Naveen Jindal School of Management</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6.5">
                The University of Texas at Dallas<br />
                800 W. Campbell Rd, Richardson, TX 75080
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
