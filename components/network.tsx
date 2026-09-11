import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FadeIn from "@/components/ui/fade-in";
import { executives, junior_analysts, senior_analysts } from "@/app/team/members";

type CompanyLogo = {
    name: string;
    logo: string;
    industry: string;
};

const COMPANIES: CompanyLogo[] = [
    { name: "Deloitte", logo: "/deloitte.svg", industry: "Management Consulting" },
    { name: "Goldman Sachs", logo: "/goldman-sachs.svg", industry: "Investment Banking" },
    { name: "Jane Street", logo: "/jane-street.svg", industry: "Quantitative Trading" },
    { name: "JP Morgan", logo: "/jp-morgan.svg", industry: "Financial Services" },
    { name: "OpenAI", logo: "/openai.svg", industry: "Artificial Intelligence" },
    { name: "Snowflake", logo: "/snowflake.svg", industry: "Cloud Data" },
    { name: "Charles Schwab", logo: "/charles-schwab.svg", industry: "Wealth Management" },
    { name: "AT&T", logo: "/att.svg", industry: "Telecommunications" },
    { name: "American Airlines", logo: "/american-airlines.svg", industry: "Aviation & Logistics" },
    { name: "HubSpot", logo: "/hubspot.svg", industry: "Enterprise SaaS" },
    { name: "Indeed", logo: "/indeed.svg", industry: "Technology" },
    { name: "Niantic", logo: "/niantic.svg", industry: "AR & Gaming" },
    { name: "Paycom", logo: "/paycom.svg", industry: "HR Technology" },
    { name: "Southwest", logo: "/southwest.svg", industry: "Aviation" },
    { name: "USAA", logo: "/usaa.svg", industry: "Financial Services" },
];

const OUTCOME_METRICS = [
    {
        metric: "15+",
        label: "Top-Tier Destinations",
        description: "Consulting, Quant Finance, Big Tech & Fortune 500",
    },
    {
        metric: "100%",
        label: "Pro Bono Delivery",
        description: "Direct client experience and strategic deliverables",
    },
    {
        metric: "28+",
        label: "National Chapters",
        description: "Collaborative CYC alumni and consultant network",
    },
    {
        metric: "Top Tier",
        label: "Recruiting Pipeline",
        description: "Finance, Computer Science, and Business Analytics",
    },
];

export default function Network() {
    const allMembers = [...executives, ...senior_analysts, ...junior_analysts];
    const displayMembers = allMembers.slice(0, 5);
    const remainingCount = Math.max(0, allMembers.length - 5);

    return (
        <section
            id="network"
            className="relative overflow-hidden bg-white/70 py-24 sm:py-32"
            aria-labelledby="network-heading"
        >
            {/* Ambient subtle background glows */}
            <div
                className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
                aria-hidden="true"
            />

            <div className="section-shell relative">
                <FadeIn>
                    {/* Header Block */}
                    <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl space-y-3">
                            <p className="eyebrow">Alumni & Career Outcomes</p>
                            <h2
                                id="network-heading"
                                className="text-balance text-4xl leading-tight tracking-tight text-primary sm:text-5xl"
                            >
                                Where our consultants go
                            </h2>
                            <p className="pt-2 text-lg leading-8 text-muted-foreground">
                                Our consultants translate pro-bono project rigor into career-defining outcomes, landing competitive roles at premier management consultancies, quantitative trading firms, venture-backed startups, and Fortune 500 leaders.
                            </p>
                        </div>
                        <div className="max-w-sm border-l-2 border-accent pl-5 text-sm leading-6 text-primary/70">
                            Members build repeatable frameworks on real client engagements, carrying that problem-solving pedigree into the organizations shaping global business.
                        </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {OUTCOME_METRICS.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:shadow-md"
                            >
                                <p className="font-serif text-3xl font-normal text-primary sm:text-4xl">
                                    {item.metric}
                                </p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">
                                    {item.label}
                                </p>
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Companies Grid */}
                    <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
                        {COMPANIES.map((company) => (
                            <div
                                key={company.name}
                                className="group relative flex flex-col items-center justify-between rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(32,43,93,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
                            >
                                <div className="relative flex h-14 w-full items-center justify-center">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={130}
                                        height={52}
                                        className="max-h-10 w-auto max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-xs font-semibold text-primary transition-colors group-hover:text-primary">
                                        {company.name}
                                    </p>
                                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                                        {company.industry}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Team & Action Banner */}
                    <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-primary/10 bg-secondary/40 p-6 shadow-sm sm:p-8 md:flex-row">
                        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                            <div className="flex items-center -space-x-3">
                                {displayMembers.map((member, index) => (
                                    <Avatar
                                        key={`${member.first_name}-${member.last_name}-${index}`}
                                        className="h-12 w-12 border-2 border-white shadow-sm ring-1 ring-primary/10"
                                    >
                                        <AvatarImage
                                            src={member.headshot}
                                            alt={`${member.first_name} ${member.last_name}`}
                                        />
                                        <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
                                            {member.first_name[0]}
                                            {member.last_name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                                {remainingCount > 0 && (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white shadow-sm ring-1 ring-primary/10">
                                        +{remainingCount}
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="font-semibold text-primary">Meet the consultants behind the impact</p>
                                <p className="text-xs text-muted-foreground sm:text-sm">
                                    Undergraduates spanning Finance, Computer Science, Business Analytics, and Economics.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <Button variant="outline" asChild size="lg" className="rounded-full bg-white hover:bg-white/90">
                                <Link href="/team/">
                                    Meet the Team
                                    <ArrowRight className="ml-1.5 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/join/">
                                    Join the Cohort
                                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
