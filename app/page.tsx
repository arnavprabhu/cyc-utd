import { Hero } from "@/components/hero";
import Services from "@/components/services";
import SocialProof from "@/components/socialproof";
import Network from "@/components/network";
import VideoTestimonials from "@/components/testimonials";
import NextSteps from "@/components/next-steps";
import FAQ from "@/components/faq";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <SocialProof />
            <Network />
            <VideoTestimonials />
            <NextSteps />
            <FAQ />
        </>
    );
}
