"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/ui/fade-in";

export default function NextSteps() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-20 sm:py-28 lg:px-6" aria-labelledby="next-steps-title">
            <FadeIn>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Get started</p>
                <h2 id="next-steps-title" className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                    For businesses & students
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                    Request pro-bono consulting for your organization, or join our consultant cohort and grow with real projects.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
                    <Card className="border-border/70 bg-card/60 transition hover:shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold text-primary">For businesses & nonprofits</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Get tailored strategy and execution support from our student consultants—at no cost.
                            </p>
                            <Button asChild className="mt-4">
                                <Link href="/contact/">Request consulting support</Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="border-border/70 bg-card/60 transition hover:shadow-md">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold text-primary">For students</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Join the cohort, work on real client projects, and develop consulting skills.</p>
                            <Button asChild variant="outline" className="mt-4">
                                <Link href="/join/">Join the cohort</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                    <Link href="/services/" className="text-primary hover:underline">
                        Our services →
                    </Link>
                    <Link href="/impact/" className="text-primary hover:underline">
                        Case studies & impact →
                    </Link>
                    <Link href="/team/" className="text-primary hover:underline">
                        Meet the team →
                    </Link>
                </div>
            </FadeIn>
        </section>
    );
}
