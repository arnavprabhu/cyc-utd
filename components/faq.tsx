"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";

const FAQ_ITEMS = [
  {
    question: "What makes CYC different from other Consulting Clubs?",
    answer: [
      "Consult Your Community is UT Dallas's Premier Pro-Bono Consulting organization. Since all of our projects serve local, minority-owned businesses, our Business Analysts are able to make heavily tangible impact on the issues that matter most to them.",
      "We don't serve a specific niche sector, which provides our Analysts the opportunity to explore or amplify any interests through our wide array of projects. From financial modeling to marketing to UI/UX design — and everything in between — our Analysts can leverage their skills to both impact the community and develop their experiences.",
      "What makes CYC exceptional is its two-fold nature: skill amplification while simultaneously providing prosperity for community members that need it most. Each project works directly with business owners to ensure deep, organizational change with far-reaching impact.",
    ],
  },
  {
    question: "What time commitment can I expect upon joining CYC?",
    answer: [
      "Each cohort of New Members goes through an extensive New Member Education (NME) training to supplement their professional skills and growth. The NME meets for one to two hours each week.",
      "New Members can anticipate an additional time commitment of four hours to account for general meets, project team meetings, assignments, and socials. CYC strongly suggests allocating at least six hours a week to maximize your experience with the club.",
    ],
  },
  {
    question: "What if I'm not a business major?",
    answer: [
      "CYC prides itself on the diverse interests and skills of its members. We believe the best consultants can leverage their skills—regardless of what they are—to drive impact.",
      "Majors are not considered when selecting applicants. CYC highly encourages students to apply regardless of their field of study. Our current members include majors from Conservation and Natural Resource Studies, Rhetoric, Bioengineering, and everything in between!",
    ],
  },
  {
    question: "What does CYC look for in an applicant?",
    answer: [
      "CYC believes the best applicants aren't necessarily those with inherent business acumen, but those who display a commitment to pro-bono, impactful work while showing a willingness to learn. Specifically, we look for collaborative efforts, enthusiasm, and intellectual curiosity.",
    ],
  },
  {
    question: "How can I prepare before submitting my application?",
    answer: [
      "The best preparation is ensuring your resume thoroughly and accurately reflects your accomplishments and interests. Consider utilizing resume templates and guides from resources like Harvard Business School.",
      "We offer an optional section to list any extenuating circumstances that might provide context to your application. This could include challenges like family emergencies or limited extracurricular participation due to systemic barriers.",
      "We strongly recommend attending our info sessions and taking advantage of coffee chats to better understand the organization and determine if it's a good fit for you.",
    ],
  },
  {
    question: "How can I prepare going into my interview?",
    answer: [
      "We conduct a single interview round, tailored to your major and interests. For example, Business and Information Technology Systems majors might encounter case-style interview questions, while Computer Science majors can expect technical questions. However, the questions are designed to be approachable and not overly complex.",
      "To prepare, familiarize yourself with basic business frameworks or technical concepts relevant to your field. For case interviews, practice structuring your thoughts logically and clearly. For technical interviews, review fundamental topics related to your area of study. Above all, focus on demonstrating your collaborative mindset, problem-solving skills, and genuine enthusiasm for CYC's mission.",
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="section-shell">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <div className="space-y-4">
              <p className="eyebrow">FAQ</p>
              <h2 className="text-4xl leading-tight text-primary sm:text-5xl">
                A few things you might be wondering.
              </h2>
              <p className="max-w-sm leading-7 text-muted-foreground">
                We know applying or partnering with CYC can come with questions.
                Here are the answers we hear most often.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="border-t border-primary/15"
            >
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-primary/15"
                >
                  <AccordionTrigger className="py-6 text-base hover:no-underline hover:text-accent sm:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pb-3 leading-7 text-muted-foreground">
                      {item.answer.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
