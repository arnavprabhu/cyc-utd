"use client";

import { Button } from "@/components/ui/button";
import { CONSULTANT_FORM_LINK, BUSINESS_FORM_LINK } from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section id="call-to-action" className="relative py-20">
            <Image
                src="/team-picture-spring2024.webp"
                alt="CYC Dallas team gathering in Spring 2024"
                className="object-cover object-[50%_40%] w-full h-full brightness-75"
                quality={100}
                priority
                fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
            <div className="container mx-auto px-4 relative z-10 flex flex-col max-w-5xl gap-6 text-white">
                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Join the community</p>
                    <h2 className="text-3xl font-semibold">&ldquo;Our culture cares about you as a person, not just your resume.&rdquo;</h2>
                    <p className="text-slate-200">
                        We believe in your potential, not just your past achievements. Join a community that supports your growth and helps you make measurable
                        impact.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                    <Button size="lg" variant={"secondary"} asChild>
                        <Link href={CONSULTANT_FORM_LINK} target="_blank" rel="noopener noreferrer">
                            Become a consultant
                        </Link>
                    </Button>
                    <Button size="lg" variant={"secondary"} asChild>
                        <Link href={BUSINESS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                            Work with us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
