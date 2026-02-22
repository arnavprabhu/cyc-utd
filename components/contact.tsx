"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";

const CONTACT_FORM_URL = "https://forms.gle/qbhxaBuhdHnXJcGu6";
const CONTACT_EMAIL = "utdallas@consultyourcommunity.org";

function Contact() {
    const quickLinks = useMemo(
        () => [
            {
                title: "Email the team",
                description: "Reach our leadership directly for partnerships or questions.",
                href: `mailto:${CONTACT_EMAIL}`,
                label: CONTACT_EMAIL,
            },
            {
                title: "Join our community",
                description: "Connect with our consultants and upcoming events.",
                href: "https://discord.gg/durKeShjyd",
                label: "Discord community",
            },
            {
                title: "Follow our journey",
                description: "Stay up to date with project highlights and impact stories.",
                href: "https://www.linkedin.com/company/consult-your-community-at-utdallas/",
                label: "LinkedIn updates",
            },
        ],
        [],
    );

    return (
        <section id="contact-us" className="mx-auto max-w-6xl py-20 px-4 sm:py-28 lg:px-6">
            <FadeIn>
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
                            <h2 className="text-3xl md:text-4xl text-primary tracking-tight">Let&apos;s build impact together</h2>
                            <p className="text-muted-foreground">
                                Have a question or want to partner with us? Use our contact form or reach us on the platforms below.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                            <Button asChild size="lg" className="w-full">
                                <Link href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
                                    Contact us (Google Form)
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {quickLinks.map((link) => (
                            <div key={link.title} className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm">
                                <h3 className="text-lg font-semibold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{link.description}</p>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                                >
                                    {link.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default Contact;
