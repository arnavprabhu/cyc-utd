import { Hero } from "@/components/hero";
import Services from "@/components/services";
import SocialProof from "@/components/socialproof";
import VideoTestimonials from "@/components/testimonials";
import NextSteps from "@/components/next-steps";
import FAQ from "@/components/faq";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <SocialProof />
            <VideoTestimonials />
            <NextSteps />
            <FAQ />
        </>
    );
}
