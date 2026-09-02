"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { title: "About", href: "/about/" },
  { title: "Services", href: "/services/" },
  { title: "Impact", href: "/impact/" },
  { title: "Team", href: "/team/" },
  { title: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="CYC UT Dallas home"
        >
          <Image
            src="/cyc-logo.png"
            width={84}
            height={84}
            alt="CYC UT Dallas"
            className="h-[68px] w-[68px] object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
            >
              {title}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/join/">Join CYC</Link>
          </Button>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="h-dvh border-none bg-background px-6"
          >
            <VisuallyHidden.Root>
              <SheetTitle>Navigation menu</SheetTitle>
              <SheetDescription>
                Navigate the CYC UT Dallas website
              </SheetDescription>
            </VisuallyHidden.Root>
            <div className="mx-auto flex h-full max-w-md flex-col justify-center gap-2">
              {NAV_LINKS.map(({ title, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-primary/10 py-4 font-serif text-3xl text-primary"
                >
                  {title}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-6">
                <Link href="/join/" onClick={() => setIsMenuOpen(false)}>
                  Join CYC
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
