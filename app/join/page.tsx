import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSULTANT_FORM_LINK = "https://forms.gle/QDwYttKHcgveZFxf6";

export const metadata: Metadata = {
    title: "Join Us",
    description: "Join the CYC UT Dallas consultant cohort. Apply to work on real consulting projects, develop skills, and make an impact in the community.",
};

export default function JoinPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:py-28 lg:px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Join Us</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Join the consultant cohort</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                We recruit for curiosity, collaboration, and a commitment to community outcomes. Every member is trusted to lead and deliver meaningful impact.
                No specific major required—we value diverse skills and perspectives.
            </p>
            <ul className="mt-8 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Real consulting projects with local businesses and nonprofits</li>
                <li>Professional development and mentorship</li>
                <li>Flexible time commitment; we work around your schedule</li>
            </ul>
            <Button asChild className="mt-10">
                <Link href={CONSULTANT_FORM_LINK} target="_blank" rel="noopener noreferrer">
                    Apply now
                </Link>
            </Button>
            <div className="mt-12">
                <Link href="/team/" className="text-primary hover:underline">
                    Meet the team →
                </Link>
            </div>
        </div>
    );
}
