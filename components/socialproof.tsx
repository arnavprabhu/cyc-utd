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
        <div className="rounded-3xl border border-border/70 bg-background/80 p-6 text-left shadow-sm">
            <dt className="mb-3 text-3xl font-semibold text-primary">
                <CountUp end={metric} duration={5} enableScrollSpy={true} scrollSpyOnce={true} />+
            </dt>
            <dd className="text-sm text-muted-foreground">{description}</dd>
        </div>
    );
}

export default function SocialProof() {
    return (
        <section id="social-proof" className="bg-primary-foreground">
            <div className="container mx-auto max-w-screen-xl px-4 py-24 lg:px-6 sm:py-32">
                <div className="mb-10 flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
                    <div className="max-w-xl space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Impact at a glance</p>
                        <h2 className="text-3xl text-primary">Built on service, measured by results</h2>
                    </div>
                    <p className="text-sm text-muted-foreground md:max-w-xs">
                        We combine student talent with community need to deliver outcomes that endure long after each engagement.
                    </p>
                </div>
                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {socialProofs.map((proof, index) => (
                        <SocialProofCard key={index} {...proof} />
                    ))}
                </dl>
            </div>
        </section>
    );
}
