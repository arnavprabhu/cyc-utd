"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/ui/fade-in";

export default function NextSteps() {
  return (
    <section
      className="bg-white/70 py-24 sm:py-32"
      aria-labelledby="next-steps-title"
    >
      <div className="section-shell">
        <FadeIn>
          <p className="eyebrow">Get started</p>
          <h2
            id="next-steps-title"
            className="mt-4 max-w-2xl text-balance text-4xl leading-tight tracking-tight text-primary sm:text-5xl"
          >
            There&apos;s a place for you in the work.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            Request pro-bono consulting for your organization, or join our
            consultant cohort and grow with real projects.
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Card className="rounded-[2rem] border-none bg-primary text-primary-foreground shadow-none">
              <CardContent className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  For organizations
                </p>
                <h3 className="mt-5 font-serif text-3xl text-white">
                  Move your next big idea forward.
                </h3>
                <p className="mt-4 max-w-md leading-7 text-white/70">
                  Get tailored strategy and execution support from our student
                  consultants—at no cost.
                </p>
                <Button asChild variant="secondary" className="mt-8">
                  <Link href="/contact/">Request consulting support</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-none bg-secondary shadow-none">
              <CardContent className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/55">
                  For students
                </p>
                <h3 className="mt-5 font-serif text-3xl text-primary">
                  Learn by doing work that matters.
                </h3>
                <p className="mt-4 max-w-md leading-7 text-primary/65">
                  Join the cohort, work on real client projects, and develop
                  consulting skills.
                </p>
                <Button asChild className="mt-8">
                  <Link href="/join/">Join the cohort</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
            <Link
              href="/services/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Our services →
            </Link>
            <Link
              href="/impact/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Case studies & impact →
            </Link>
            <Link
              href="/team/"
              className="text-primary underline-offset-4 hover:underline"
            >
              Meet the team →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
