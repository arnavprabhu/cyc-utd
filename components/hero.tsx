"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";

// Changing these links here will also change them in the CallToAction component
const CONSULTANT_FORM_LINK = "https://forms.gle/QDwYttKHcgveZFxf6";
const BUSINESS_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdm1j0TdIj7ii-rArH4o6h9cMcsHe0lsaE0un3yXuoM3Vk9KA/viewform?usp=sf_link";

const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden bg-slate-950 text-white" aria-labelledby="hero-title">
            <div className="absolute inset-0">
                <Image src="/hero.webp" alt="Students collaborating on a consulting project" className="object-cover object-[50%_35%]" quality={100} priority fill />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%)]" />
            </div>

            <FadeIn>
                <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10 px-4 py-20 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-6">
                    <div className="max-w-2xl space-y-6">
                        <p className="text-sm uppercase tracking-[0.4em] text-slate-300">UT Dallas • Consult Your Community</p>
                        <h1 id="hero-title" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                            Strategy built with heart, powered by student consultants.
                        </h1>
                        <p className="text-base text-slate-200 sm:text-lg">
                            We partner with Dallas&apos;s small businesses and nonprofits to deliver pro-bono consulting that unlocks growth, impact, and
                            resilience for local communities.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild className="hover:scale-[1.02] transition-transform">
                                <Link href={CONSULTANT_FORM_LINK} target="_blank" rel="noopener noreferrer">
                                    Join the consultant cohort
                                </Link>
                            </Button>
                            <Button variant="secondary" asChild className="hover:scale-[1.02] transition-transform">
                                <Link href={BUSINESS_FORM_LINK} target="_blank" rel="noopener noreferrer">
                                    Request consulting support
                                </Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-slate-200 sm:max-w-lg">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xl font-semibold text-white">28+</p>
                                <p className="text-slate-300">CYC chapters nationwide</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xl font-semibold text-white">100+</p>
                                <p className="text-slate-300">Small businesses served yearly</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-md space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Spring 2026 cohort</p>
                            <h2 className="text-2xl font-semibold">Applications are closed</h2>
                            <p className="text-sm text-slate-300">
                                Join a team of analysts, strategists, and builders who deliver measurable results for community partners.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                            <p className="text-sm text-slate-300">Recent focus areas</p>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                                    Market expansion & competitive insights
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    Data dashboards & operations optimization
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                                    Community-facing brand strategy
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export { CONSULTANT_FORM_LINK, BUSINESS_FORM_LINK, Hero };
