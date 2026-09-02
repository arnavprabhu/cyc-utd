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
    title:
      "Why Consult Your Community Hit Home for a Daughter of a Small Business Owner",
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
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="section-shell">
        <FadeIn>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="eyebrow">Impact stories</p>
              <h2 className="text-balance text-4xl leading-tight text-primary sm:text-5xl">
                The work matters because the people do.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Hear directly from the entrepreneurs and nonprofit leaders who
                partnered with CYC and translated student insight into
                real-world change.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-5 text-sm leading-6 text-primary/70">
              Stories from community partners who turned shared strategy into
              lasting momentum.
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-[1.75rem] bg-primary shadow-lg"
              >
                {activeVideo === testimonial.id ? (
                  <iframe
                    className="w-full aspect-video"
                    src={getYoutubeEmbedUrl(testimonial.url)}
                    title={testimonial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setActiveVideo(testimonial.id)}
                    className="relative block w-full cursor-pointer"
                    aria-label={`Play video: ${testimonial.title}`}
                  >
                    <Image
                      src={getYoutubeThumbnailUrl(testimonial.url)}
                      alt={testimonial.title}
                      className="w-full aspect-video object-cover"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-primary shadow-xl transition-colors group-hover:bg-accent">
                        <Play className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      <span className="block max-w-lg font-serif text-lg leading-snug text-white sm:text-2xl">
                        {testimonial.title}
                      </span>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
