"use client";

import { useState } from "react";
import { Search, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";
import { SmoothTab } from "@/components/kokonutui/smooth-tab";

type FAQCategory = "all" | "applicants" | "organizations";

interface FAQItem {
  question: string;
  category: "applicants" | "organizations";
  answer: string[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    category: "applicants",
    question: "What makes CYC different from other Consulting Clubs at UT Dallas?",
    answer: [
      "Consult Your Community is UT Dallas's Premier Pro-Bono Consulting organization. Unlike simulation clubs, 100% of our projects directly advise real Dallas-Fort Worth small businesses and non-profits, giving our analysts true client ownership.",
      "We don't restrict ourselves to a narrow industry. From unit economics and pricing restructuring to competitive market sizing, our analysts work across diverse client problems and develop real-world problem-solving poise.",
      "What makes CYC exceptional is its dual mission: accelerating client business prosperity while rigorously preparing students for competitive careers in consulting, quantitative finance, and technology.",
    ],
  },
  {
    category: "organizations",
    question: "How does the pro-bono consulting engagement work for a small business?",
    answer: [
      "Each engagement is structured as a dedicated 10–12 week semester sprint. Your business is paired with an aligned team of 4–6 student consultants guided by senior leadership and faculty advisors.",
      "The engagement is 100% pro-bono with zero financial fees. We deliver customized, actionable deliverables—including dynamic financial models, competitive landscape audits, and an executive strategy playbook.",
    ],
  },
  {
    category: "applicants",
    question: "What weekly time commitment can I expect upon joining CYC?",
    answer: [
      "New analysts participate in our structured New Member Education (NME) curriculum (1–2 hours weekly) focusing on MECE problem structuring, spreadsheet modeling, and executive slide architecture.",
      "In addition, project teams dedicate roughly 4–5 hours weekly for internal problem-solving sprints, client check-ins, and team socials. We recommend allocating 6–7 hours per week to maximize the experience.",
    ],
  },
  {
    category: "applicants",
    question: "Do I have to be a business major to apply?",
    answer: [
      "Absolutely not! CYC strongly values cross-disciplinary perspectives. Our active cohort includes students from Computer Science, Finance, Economics, Data Analytics, Biology, and Engineering.",
      "We evaluate applicants based on intellectual curiosity, collaborative empathy, and structured thinking—not whether you are currently enrolled in a specific degree program.",
    ],
  },
  {
    category: "applicants",
    question: "What does the recruitment interview process entail?",
    answer: [
      "Our interview process is conversational, supportive, and tailored to your background. It includes a behavioral fit portion (learning about your passions and teamwork style) followed by an approachable, structured case question.",
      "For quantitative or technical backgrounds, we may weave in lightweight analytical problem solving. We look for how you break down ambiguous questions logically, not whether you have memorized business buzzwords.",
    ],
  },
  {
    category: "organizations",
    question: "What qualifies a business or non-profit to partner with CYC?",
    answer: [
      "We partner with small businesses, family-owned enterprises, social ventures, and non-profits across the Dallas-Fort Worth area that have a tangible strategic challenge (e.g., pricing model evaluation, expansion analysis, market research, or customer retention).",
      "The primary requirement is an engaged founder or leadership team willing to meet bi-weekly with our consultant team to provide necessary context and business data.",
    ],
  },
];

const FAQ_TABS = [
  { id: "all", label: "All Questions", badge: 6 },
  { id: "applicants", label: "For Student Applicants", badge: 4 },
  { id: "organizations", label: "For Organizations", badge: 2 },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white/60 border-b border-primary/10">
      <div className="section-shell max-w-5xl">
        <FadeIn>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="space-y-3 max-w-xl">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                Everything you need to know about CYC.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Clear answers for prospective clients, student applicants, and university partners.
              </p>
            </div>

            <div className="shrink-0">
              <SmoothTab
                tabs={FAQ_TABS}
                activeTab={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full rounded-2xl border border-primary/15 bg-white py-3 pl-11 pr-4 text-sm text-primary placeholder:text-muted-foreground/60 shadow-2xs focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {/* Accordion Component */}
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-3.5">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-2xl border border-primary/10 bg-white px-6 py-2 shadow-2xs transition-all hover:border-primary/25"
                >
                  <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-bold text-primary hover:no-underline hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 text-sm leading-relaxed text-muted-foreground space-y-2.5">
                    {faq.answer.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="rounded-2xl border border-dashed border-primary/20 bg-secondary/20 p-8 text-center">
              <HelpCircle className="mx-auto h-8 w-8 text-muted-foreground/50" />
              <p className="mt-2 text-sm font-semibold text-primary">
                No matching questions found
              </p>
              <p className="text-xs text-muted-foreground">
                Try searching with different keywords or switch categories.
              </p>
            </div>
          )}

          {/* Still Have Questions Banner */}
          <div className="mt-12 rounded-2xl border border-primary/10 bg-secondary/30 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">
                  Still have questions about our work or process?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Reach out directly to our executive team. We typically respond within 24 hours.
                </p>
              </div>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Contact Us Directly
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
