import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const CONSULTANT_FORM_LINK = "https://forms.gle/wS9qoayrUaC7g6Wh6";
const BUSINESS_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdm1j0TdIj7ii-rArH4o6h9cMcsHe0lsaE0un3yXuoM3Vk9KA/viewform?usp=sf_link";

const Hero = () => (
  <section
    id="hero"
    className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    aria-labelledby="hero-title"
  >
    <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
    <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
      <div>
        <p className="eyebrow">UT Dallas student consultants</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-primary">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Applications are open
        </div>
        <h1
          id="hero-title"
          className="mt-5 max-w-3xl text-balance text-5xl leading-[0.98] tracking-[-0.045em] text-primary sm:text-6xl lg:text-7xl"
        >
          Big ideas for the small businesses that make Dallas{" "}
          <span className="italic text-primary/70">home.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
          We pair ambitious UT Dallas students with local businesses and
          nonprofits to deliver thoughtful, data-driven consulting—completely
          pro bono.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link
              href={CONSULTANT_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link
              href={BUSINESS_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner with us
            </Link>
          </Button>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-primary/70">
          {["100% pro bono", "Real client work", "Built for local impact"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
        <div className="absolute -right-5 -top-5 h-full w-full rounded-[2.5rem] border border-primary/15" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-primary shadow-[0_30px_70px_-35px_rgba(32,43,93,0.65)] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/hero.webp"
            alt="Downtown Dallas skyline"
            fill
            priority
            className="object-cover object-[52%_50%]"
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Our community
            </p>
            <p className="mt-2 max-w-sm font-serif text-2xl leading-tight sm:text-3xl">
              Local insight. Lasting momentum.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-7 -left-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
          <p className="font-serif text-3xl text-primary">28+</p>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            chapters nationwide
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { CONSULTANT_FORM_LINK, BUSINESS_FORM_LINK, Hero };
