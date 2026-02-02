"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
            <div className="absolute inset-0">
                <Image
                    src="/team-picture-spring2025.png"
                    alt="CYC Dallas leadership team"
                    className="object-cover object-[50%_0%] w-full h-full"
                    quality={100}
                    priority
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
            </div>

            <div className="relative max-w-screen-xl h-full px-4 mx-auto text-white z-10 text-left">
                <div className="max-w-2xl space-y-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-300">Our team</p>
                    <h1 id="hero-title" className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Meet the students behind the impact.
                    </h1>

                    <p className="font-light text-base md:text-lg lg:text-xl text-slate-200">
                        We recruit for curiosity, collaboration, and a commitment to community outcomes. Every member is trusted to lead and deliver meaningful
                        results.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
