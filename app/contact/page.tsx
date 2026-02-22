import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with CYC UT Dallas. Contact us for consulting partnerships, recruitment, or general inquiries.",
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:py-28 lg:px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-primary sm:text-5xl">Get in touch</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Have a question or want to partner with us? Use our contact form or reach out via email, Discord, or LinkedIn.
            </p>
            <div className="mt-12">
                <Contact />
            </div>
        </div>
    );
}
