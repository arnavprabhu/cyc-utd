"use client";

import CountUp from "react-countup";

type SocialProof = {
  metric: number;
  description: string;
};

const socialProofs: SocialProof[] = [
  {
    metric: 28,
    description: "University chapters across America",
  },
  {
    metric: 100,
    description: "Small businesses served per academic year",
  },
  {
    metric: 1000000,
    description: "Hours of pro bono counsel for community partners",
  },
  {
    metric: 600,
    description: "Volunteers across the country",
  },
];

function SocialProofCard({ metric, description }: SocialProof) {
  return (
    <div className="border-t border-white/20 py-7 text-left">
      <dt className="mb-3 font-serif text-4xl text-white sm:text-5xl">
        <CountUp
          end={metric}
          duration={5}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
        +
      </dt>
      <dd className="max-w-[15rem] text-sm leading-6 text-white/65">
        {description}
      </dd>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="section-shell relative">
        <div className="mb-14 flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Impact at a glance
            </p>
            <h2 className="text-balance text-4xl leading-tight text-white sm:text-5xl">
              Built on service. Measured by what changes.
            </h2>
          </div>
          <p className="text-sm leading-6 text-white/65 md:max-w-sm">
            We combine student talent with community need to deliver outcomes
            that endure long after each engagement.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {socialProofs.map((proof, index) => (
            <SocialProofCard key={index} {...proof} />
          ))}
        </dl>
      </div>
    </section>
  );
}
