import type { Metadata } from "next";
import Contact from "@/components/contact";
import FadeIn from "@/components/ui/fade-in";
import { AmbientDecor } from "@/components/kokonutui/ambient-decor";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Consult Your Community at UT Dallas. Contact our executive team for pro-bono consulting inquiries, recruitment questions, or sponsorships.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Header */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-primary/10">
        <AmbientDecor />
        <div className="section-shell relative z-10">
          <FadeIn>
            <div className="max-w-3xl space-y-3">
              <p className="eyebrow">Connect & Engage</p>
              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                Let&apos;s build community momentum together.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pt-1">
                Whether you are a local business founder looking for pro-bono consulting,
                a student with questions about joining our cohort, or an organization seeking
                to collaborate—we want to hear from you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Flow */}
      <div className="section-shell">
        <Contact />
      </div>
    </div>
  );
}
