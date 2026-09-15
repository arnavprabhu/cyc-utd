"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BUSINESS_FORM_LINK, CONSULTANT_FORM_LINK } from "@/components/hero";

const FOOTER_NAV = {
  practices: [
    { title: "Market Intelligence", href: "/services/#services" },
    { title: "Financial Modeling", href: "/services/#services" },
    { title: "Growth & GTM", href: "/services/#services" },
    { title: "Brand Positioning", href: "/services/#services" },
    { title: "Operational Efficiency", href: "/services/#services" },
  ],
  organizations: [
    { title: "Pro-Bono Advisory", href: "/contact/" },
    { title: "Client Application", href: BUSINESS_FORM_LINK, external: true },
    { title: "Case Studies & Metrics", href: "/impact/" },
    { title: "Engagement Timeline", href: "/services/#process" },
  ],
  students: [
    { title: "Join the Cohort", href: "/join/" },
    { title: "Consultant Application", href: CONSULTANT_FORM_LINK, external: true },
    { title: "Our Consultants", href: "/team/" },
    { title: "Where Consultants Go", href: "/#network" },
  ],
};

const SOCIALS = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/cyc-utd/",
    label: "LinkedIn profile",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/cycdallas/",
    label: "Instagram profile",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary text-white">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Organization & Mission Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/cyc-logo.png"
                  width={64}
                  height={64}
                  alt="CYC UT Dallas"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white">
                  CYC UT Dallas
                </h3>
                <p className="text-xs text-white/70">
                  Naveen Jindal School of Management
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/75 max-w-sm">
              Empowering Dallas-Fort Worth small businesses and nonprofits with
              rigorous, data-driven management consulting—100% pro bono.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
              <span className="h-2 w-2 rounded-full bg-accent" />
              National Chapter · 28+ Universities Nationwide
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Practices */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                Practices
              </h4>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAV.practices.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizations */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                For Organizations
              </h4>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAV.organizations.map((item) => (
                  <li key={item.title}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Students */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                For Students
              </h4>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_NAV.students.map((item) => (
                  <li key={item.title}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Consult Your Community (UTD Chapter). All
            Rights Reserved. Consult Your Community is a 501(c)(3) non-profit organization.
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
