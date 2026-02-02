import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { executives, junior_analysts, senior_analysts } from "@/app/team/members";

type CompanyLogo = {
    name: string;
    logo: string;
};

const COMPANIES: CompanyLogo[] = [
    { name: "AT&T", logo: "/att.svg" },
    { name: "Deloitte", logo: "/deloitte.svg" },
    { name: "Goldman Sachs", logo: "/goldman-sachs.svg" },
    { name: "HubSpot", logo: "/hubspot.svg" },
    { name: "Indeed", logo: "/indeed.svg" },
    { name: "Jane Street", logo: "/jane-street.svg" },
    { name: "JP Morgan", logo: "/jp-morgan.svg" },
    { name: "Niantic", logo: "/niantic.svg" },
    { name: "Paycom", logo: "/paycom.svg" },
    { name: "Snowflake", logo: "/snowflake.svg" },
    { name: "Southwest", logo: "/southwest.svg" },
    { name: "USAA", logo: "/usaa.svg" },
];

export default function Network() {
    const teamMembers = [...executives, ...senior_analysts, ...junior_analysts];
    const displayMembers = teamMembers.slice(0, 5);
    const remainingCount = teamMembers.length - 5;
    const stats = [
        { label: "Executives", value: executives.length },
        { label: "Senior Analysts", value: senior_analysts.length },
        { label: "Junior Analysts", value: junior_analysts.length },
        { label: "Total Members", value: teamMembers.length },
    ];

    return (
        <section id="network" className="py-20 relative overflow-hidden bg-primary-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_60%)]" aria-hidden />
            <div className="container mx-auto px-4 space-y-10 relative z-10">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Network</p>
                        <h2 className="text-3xl md:text-4xl text-primary tracking-tight">Where CYC talent goes next</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Our consultants grow into analysts, product leaders, founders, and researchers at top graduate programs and world-class companies.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-background/80 p-6 text-sm text-muted-foreground">
                        Members build repeatable consulting frameworks, then carry those skills into the organizations shaping the future.
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-border/70 bg-background/80 px-4 py-5 text-center shadow-sm">
                            <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {COMPANIES.map((company, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image src={company.logo} alt={company.name} width={100} height={100} className="max-h-16" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center space-x-[-12px]">
                        <>
                            {displayMembers.map((member, index) => (
                                <Avatar key={`${member.first_name}-${member.last_name}-${index}`} className="w-12 h-12 border-2 border-white">
                                    <AvatarImage src={member.headshot} alt={`${member.first_name} ${member.last_name}`} />
                                    <AvatarFallback>
                                        {member.first_name[0]}
                                        {member.last_name[0]}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                            {remainingCount > 0 && (
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center border-2 border-white">
                                    +{remainingCount}
                                </div>
                            )}
                        </>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <p className="text-sm text-muted-foreground">Meet the people behind the impact.</p>
                        <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                            <Link href="/team">
                                Meet the Team
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
