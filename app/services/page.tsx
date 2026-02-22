import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Pro-bono consulting services for Dallas small businesses and nonprofits: market insights, financial planning, growth strategy, and more.",
};

export default function ServicesPage() {
    return (
        <div>
            <div className="mx-auto max-w-screen-xl px-4 pt-20 pb-8 sm:pt-28 lg:px-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Services</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Consulting that meets you where you are</h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Each semester our student consultants deliver tailored, data-driven solutions. Multi-disciplinary teams; 8–12 week engagements.
                </p>
                <Button asChild className="mt-6">
                    <Link href="/contact/">Request consulting support</Link>
                </Button>
            </div>
            <Services />
        </div>
    );
}
