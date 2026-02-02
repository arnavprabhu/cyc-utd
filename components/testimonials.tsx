"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import FadeIn from "@/components/ui/fade-in";

type Testimonial = {
    id: number;
    title: string;
    url: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "A Story of a Small Business Family: Proteus Bicycles",
        url: "https://www.youtube.com/watch?v=2mNzTLuMXUU",
    },
    {
        id: 2,
        title: "Why Consult Your Community Hit Home for a Daughter of a Small Business Owner",
        url: "https://www.youtube.com/watch?v=PmY_d0iaSBY",
    },
    {
        id: 3,
        title: "Transforming a Solo Venture Into a Thriving Community",
        url: "https://www.youtube.com/watch?v=sKIRSh9CyE8",
    },
    {
        id: 4,
        title: "Helping a Solo Entrepreneur Find Her Voice",
        url: "https://www.youtube.com/watch?v=GFTyuzJK5Hk",
    },
];

export default function VideoTestimonials() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const getYoutubeEmbedUrl = (url: string) => {
        try {
            const videoId = url.split("v=")[1]?.split("&")[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        } catch (error) {
            console.error("Invalid YouTube URL:", error);
            return "";
        }
    };

    const getYoutubeThumbnailUrl = (url: string) => {
        try {
            const videoId = url.split("v=")[1]?.split("&")[0];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        } catch (error) {
            console.error("Invalid YouTube URL:", error);
            return "";
        }
    };

    return (
        <section id="testimonials" className="w-full max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <FadeIn>
                <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Impact stories</p>
                        <h2 className="text-3xl text-primary">Real partners. Real transformation.</h2>
                        <p className="text-muted-foreground">
                            Hear directly from the entrepreneurs and nonprofit leaders who partnered with CYC and translated student insight into real-world change.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border/70 bg-primary/5 p-6 text-sm text-primary">
                        Community partners share how CYC elevated their strategy, marketing, and operations.
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
                            {activeVideo === testimonial.id ? (
                                <iframe
                                    className="w-full aspect-video"
                                    src={getYoutubeEmbedUrl(testimonial.url)}
                                    title={testimonial.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <button onClick={() => setActiveVideo(testimonial.id)} className="w-full relative block">
                                    <Image
                                        src={getYoutubeThumbnailUrl(testimonial.url)}
                                        alt={testimonial.title}
                                        className="w-full aspect-video object-cover"
                                        quality={100}
                                        width={1920}
                                        height={1080}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="rounded-full bg-primary/90 p-4 shadow-lg transition-transform group-hover:scale-110">
                                            <Play className="w-4 h-4 sm:w-8 sm:h-8 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <h3 className="text-white font-medium text-sm sm:text-lg">{testimonial.title}</h3>
                                    </div>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
