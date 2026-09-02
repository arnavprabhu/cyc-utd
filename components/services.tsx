"use client";

import {
  ChartBar,
  PiggyBank,
  BarChart3,
  TrendingUp,
  Megaphone,
  Settings,
} from "lucide-react";
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
    description:
      "Deliver competitive landscapes, customer discovery, and industry trend analysis to reveal new opportunities.",
    tags: ["Competitive Analysis", "Industry Trends", "Market Research"],
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    title: "Financial Planning",
    description:
      "Build projections, restructure pricing, and craft revenue strategies that make growth sustainable.",
    tags: ["Financial Projections", "Pricing Strategy", "Revenue Planning"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data Analysis",
    description:
      "Turn raw data into dashboards and insights that enable smarter decisions and efficient operations.",
    tags: ["Statistics", "Visualization", "Analytics"],
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Growth Strategies",
    description:
      "Scale operations, expand into new markets, and diversify offerings to unlock revenue growth.",
    tags: ["Scaling", "Expansion", "Diversification"],
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Brand Marketing",
    description:
      "Shape value propositions, improve digital presence, and activate partnerships that build loyal communities.",
    tags: ["Branding", "Social Media", "Partnerships"],
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Operational Efficiency",
    description:
      "Streamline processes, integrate tools, and optimize resourcing to reduce costs and improve service quality.",
    tags: ["Optimization", "Process", "Technology"],
  },
];

const ServiceCard = ({
  icon,
  title,
  description,
  tags,
  index,
}: Service & { index: number }) => {
  return (
    <Card className="group relative overflow-hidden rounded-[1.75rem] border-primary/10 bg-card shadow-none transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl">
      <CardContent className="p-7">
        <div className="mb-8 flex items-center justify-between">
          <div className="rounded-2xl bg-secondary p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </div>
          <span className="font-serif text-sm text-primary/35">
            0{index + 1}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="mb-6 mt-3 leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded-full border-primary/10 bg-transparent px-3 py-1 font-normal text-primary/65"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="bg-white/70 py-24 sm:py-32">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="eyebrow">What we do</p>
              <h2 className="text-balance text-4xl leading-tight tracking-tight text-primary sm:text-5xl">
                Practical strategy, built around your goals.
              </h2>
              <p className="pt-2 text-lg leading-8 text-muted-foreground">
                Each semester our student consultants deliver tailored,
                data-driven solutions that help community partners thrive.
              </p>
            </div>
            <div className="max-w-sm border-l-2 border-accent pl-5 text-sm leading-6 text-primary/70">
              Multidisciplinary teams working alongside you through focused,
              semester-long engagements.
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
