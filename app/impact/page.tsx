import type { Metadata } from "next";
import Link from "next/link";
import SocialProof from "@/components/socialproof";
import VideoTestimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Case Studies & Impact",
    description:
        "See how CYC UT Dallas consultants have helped local small businesses and nonprofits with strategy, growth, and operations.",
};

export default function ImpactPage() {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 pt-20 pb-12 sm:pt-28 lg:px-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Case Studies & Impact</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Impact at a glance</h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Our consultants partner with Dallas-area businesses and nonprofits to deliver measurable results and lasting change.
                </p>
                <Button asChild variant="outline" className="mt-6">
                    <Link href="/contact/">Partner with us</Link>
                </Button>
            </div>
            <SocialProof />
            <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
                <VideoTestimonials />
            </div>
        </div>
    );
}
