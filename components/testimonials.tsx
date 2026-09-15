"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Quote, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import FadeIn from "@/components/ui/fade-in";

type Testimonial = {
  id: number;
  title: string;
  url: string;
  clientType: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "A Story of a Small Business Family: Proteus Bicycles",
    url: "https://www.youtube.com/watch?v=2mNzTLuMXUU",
    clientType: "Retail & Local Commerce",
    quote: "The team delivered practical recommendations on inventory management and digital presence that we could put into practice immediately.",
  },
  {
    id: 2,
    title: "Why Consult Your Community Hit Home for a Daughter of a Small Business Owner",
    url: "https://www.youtube.com/watch?v=PmY_d0iaSBY",
    clientType: "Family-Owned Enterprise",
    quote: "Seeing the passion and rigor our student consultants brought to our business felt like having a senior strategy advisory board.",
  },
  {
    id: 3,
    title: "Transforming a Solo Venture Into a Thriving Community",
    url: "https://www.youtube.com/watch?v=sKIRSh9CyE8",
    clientType: "Community & Services",
    quote: "They helped me structure my pricing tiers and clarify my brand message so I could expand into neighboring Dallas districts.",
  },
  {
    id: 4,
    title: "Helping a Solo Entrepreneur Find Her Voice",
    url: "https://www.youtube.com/watch?v=GFTyuzJK5Hk",
    clientType: "Founder & Creative",
    quote: "CYC helped us turn scattered ideas into a step-by-step quarterly marketing roadmap that actually moved the needle.",
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
    <section id="testimonials" className="py-24 sm:py-32 bg-white/70 border-b border-primary/10">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow">Impact Stories & Voices</p>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
                The strategy matters because the founders do.
              </h2>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                Hear directly from the small business owners and community leaders who
                partnered with Consult Your Community to turn raw student insight into real-world momentum.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5 text-sm leading-relaxed text-primary/80">
              Engagements that treat local entrepreneurs as partners, delivering
              custom deliverables that endure far beyond the semester.
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {activeVideo === testimonial.id ? (
                  <div className="w-full aspect-video bg-black">
                    <iframe
                      className="h-full w-full"
                      src={getYoutubeEmbedUrl(testimonial.url)}
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveVideo(testimonial.id)}
                    className="relative block w-full text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`Play video: ${testimonial.title}`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-primary">
                      <Image
                        src={getYoutubeThumbnailUrl(testimonial.url)}
                        alt={testimonial.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={1280}
                        height={720}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform"
                        >
                          <Play className="h-7 w-7 fill-current translate-x-0.5" />
                        </motion.div>
                      </div>

                      {/* Pill on Top Left */}
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary shadow-xs backdrop-blur-xs">
                          {testimonial.clientType}
                        </span>
                      </div>

                      {/* Bottom Title on Video */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                        <span className="block font-serif text-lg sm:text-xl font-bold leading-snug line-clamp-2">
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </button>
                )}

                {/* Pull Quote below video */}
                <div className="p-5 sm:p-6 bg-white flex items-start gap-3">
                  <Quote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm italic text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
