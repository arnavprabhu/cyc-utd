import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Consult Your Community at UT Dallas: our mission, values, and commitment to pro-bono consulting and community impact.",
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:py-28 lg:px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About Us</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Who we are</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Consult Your Community (CYC) at UT Dallas is a student-led chapter of the national Consult Your Community organization. We provide pro-bono
                strategic consulting to local small businesses and nonprofits while giving students real-world experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild>
                    <Link href="/team/">Meet the team</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/services/">Our services</Link>
                </Button>
            </div>
        </div>
    );
}
