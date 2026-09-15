"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BUSINESS_FORM_LINK } from "@/components/hero";

const NAV_LINKS = [
  { title: "About", href: "/about/" },
  { title: "Services", href: "/services/" },
  { title: "Impact & Analytics", href: "/impact/" },
  { title: "Team", href: "/team/" },
  { title: "Recruitment", href: "/join/" },
  { title: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/10 bg-white/90 shadow-xs backdrop-blur-xl py-2"
          : "border-b border-primary/5 bg-background/80 backdrop-blur-md py-3"
      }`}
    >
      <nav
        className="section-shell flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand Logo & Institution Info */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
          aria-label="CYC UT Dallas home"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1 border border-primary/10 shadow-2xs transition-transform group-hover:scale-105">
            <Image
              src="/cyc-logo.png"
              width={64}
              height={64}
              alt="CYC UT Dallas Logo"
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-primary transition-colors group-hover:text-accent">
              CYC UT Dallas
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Jindal School of Management
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ title, href }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-primary/75 hover:text-primary"
                }`}
              >
                {title}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action CTAs */}
        <div className="hidden items-center gap-3 sm:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-primary/20 bg-white/60 text-primary hover:bg-white hover:text-primary"
          >
            <Link
              href={BUSINESS_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner With Us
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="rounded-full bg-accent text-white hover:bg-accent/90 shadow-sm"
          >
            <Link href="/join/">
              Apply Now
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl hover:bg-secondary/60 text-primary"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="h-dvh border-none bg-background/98 px-6 pt-16 backdrop-blur-2xl"
          >
            <VisuallyHidden.Root>
              <SheetTitle>Navigation menu</SheetTitle>
              <SheetDescription>
                Navigate the CYC UT Dallas website
              </SheetDescription>
            </VisuallyHidden.Root>

            <div className="mx-auto flex h-full max-w-md flex-col justify-between pb-10">
              <div className="flex flex-col gap-1 divide-y divide-primary/10">
                {NAV_LINKS.map(({ title, href }) => {
                  const isActive =
                    pathname === href ||
                    (href !== "/" && pathname.startsWith(href));

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between py-4 font-serif text-2xl transition-colors ${
                        isActive ? "text-accent font-bold" : "text-primary"
                      }`}
                    >
                      <span>{title}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="space-y-3 pt-6">
                <Button asChild size="lg" className="w-full rounded-2xl bg-accent text-white">
                  <Link href="/join/" onClick={() => setIsMenuOpen(false)}>
                    Apply as Consultant
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-2xl border-primary/20 bg-white"
                >
                  <Link
                    href={BUSINESS_FORM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partner With Us (Pro-Bono)
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
