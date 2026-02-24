"use client";

import { ChartBar, PiggyBank, BarChart3, TrendingUp, Megaphone, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/ui/fade-in";

type Service = {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
};

const servicesData: Service[] = [
    {
        icon: <ChartBar className="w-5 h-5" />,
        title: "Market Insights",
        description: "Deliver competitive landscapes, customer discovery, and industry trend analysis to reveal new opportunities.",
        tags: ["Competitive Analysis", "Industry Trends", "Market Research"],
    },
    {
        icon: <PiggyBank className="w-5 h-5" />,
        title: "Financial Planning",
        description: "Build projections, restructure pricing, and craft revenue strategies that make growth sustainable.",
        tags: ["Financial Projections", "Pricing Strategy", "Revenue Planning"],
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Data Analysis",
        description: "Turn raw data into dashboards and insights that enable smarter decisions and efficient operations.",
        tags: ["Statistics", "Visualization", "Analytics"],
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "Growth Strategies",
        description: "Scale operations, expand into new markets, and diversify offerings to unlock revenue growth.",
        tags: ["Scaling", "Expansion", "Diversification"],
    },
    {
        icon: <Megaphone className="w-5 h-5" />,
        title: "Brand Marketing",
        description: "Shape value propositions, improve digital presence, and activate partnerships that build loyal communities.",
        tags: ["Branding", "Social Media", "Partnerships"],
    },
    {
        icon: <Settings className="w-5 h-5" />,
        title: "Operational Efficiency",
        description: "Streamline processes, integrate tools, and optimize resourcing to reduce costs and improve service quality.",
        tags: ["Optimization", "Process", "Technology"],
    },
];

const ServiceCard = ({ icon, title, description, tags }: Service) => {
    return (
        <Card className="group relative overflow-hidden border border-border/70 bg-card/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl border border-border/60 bg-primary/10 p-2 text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Badge key={index} className="rounded-full bg-secondary/60 text-secondary-foreground">
                            {tag}
                        </Badge>
                    ))}
                </div>
                <div className="pointer-events-none absolute -right-16 top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            </CardContent>
        </Card>
    );
};

const Services = () => {
    return (
        <section id="services" className="mx-auto max-w-screen-xl py-20 px-4 sm:py-28 lg:px-6">
            <FadeIn>
                <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-xl space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</p>
                        <h2 className="text-4xl tracking-tight text-primary">Consulting that meets you where you are</h2>
                        <p className="text-lg text-muted-foreground">
                            Each semester our student consultants deliver tailored, data-driven solutions that help community partners thrive.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-primary/5 px-6 py-4 text-sm text-primary">
                        Multi-disciplinary teams • 8-12 week engagements
                    </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </FadeIn>
        </section>
    );
};

export default Services;
