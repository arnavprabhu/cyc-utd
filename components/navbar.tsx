"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const NAV_LINKS = [
    { title: "About", href: "/about/", ariaLabel: "About us" },
    { title: "Services", href: "/services/", ariaLabel: "Our services" },
    { title: "Impact", href: "/impact/", ariaLabel: "Case studies and impact" },
    { title: "Join", href: "/join/", ariaLabel: "Join the cohort" },
    { title: "Team", href: "/team/", ariaLabel: "Meet our team" },
    { title: "Contact", href: "/contact/", ariaLabel: "Contact us" },
    { title: "FAQ", href: "/#faq", ariaLabel: "View FAQs" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-white/80 backdrop-blur-md transition-transform duration-300 transform ${show ? "translate-y-0" : "-translate-y-full"}`}
        >
            <nav className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-6" aria-label="Main Navigation">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3" aria-label="Navigate to home">
                    <Image src="/logo.jpeg" width={40} height={40} alt="CYC UTD Logo" className="rounded-lg" priority />
                    <span className="text-lg font-semibold text-slate-800 hover:text-primary">Consult Your Community</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {NAV_LINKS.map(({ title, href, ariaLabel }) => (
                        <Link key={href} href={href} aria-label={ariaLabel} className="text-muted-foreground hover:text-primary transition-colors">
                            {title}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="rounded-full">
                        <Link href="/contact/">Get in touch</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-controls="mobile-navigation"
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="top" className="h-screen">
                        <VisuallyHidden.Root>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>Mobile Navigation</SheetDescription>
                        </VisuallyHidden.Root>
                        <div id="mobile-navigation" className="flex flex-col items-center justify-center h-full space-y-6" role="menu">
                            {NAV_LINKS.map(({ title, href, ariaLabel }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={closeMenu}
                                    role="menuitem"
                                    aria-label={ariaLabel}
                                    className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {title}
                                </Link>
                            ))}
                            <Button asChild onClick={closeMenu}>
                                <Link href="/contact/">Get in touch</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
