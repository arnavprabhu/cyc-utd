"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/ui/fade-in";

const contactFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const CONTACT_EMAIL = "utdallas@consultyourcommunity.org";

function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const quickLinks = useMemo(
        () => [
            {
                title: "Email the team",
                description: "Reach our leadership directly for partnerships or questions.",
                href: `mailto:${CONTACT_EMAIL}`,
                label: CONTACT_EMAIL,
            },
            {
                title: "Join our community",
                description: "Connect with our consultants and upcoming events.",
                href: "https://discord.gg/ua3wQvaTRd",
                label: "Discord community",
            },
            {
                title: "Follow our journey",
                description: "Stay up to date with project highlights and impact stories.",
                href: "https://www.linkedin.com/company/consult-your-community-at-utdallas/",
                label: "LinkedIn updates",
            },
        ],
        [],
    );

    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { email: "", subject: "", message: "" },
    });

    const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
        setIsSubmitting(true);
        try {
            const subject = encodeURIComponent(data.subject);
            const body = encodeURIComponent(`From: ${data.email}\n\n${data.message}`);
            const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            window.location.href = mailto;

            toast({
                title: "Draft created",
                description: "We opened your email client with a prefilled message. Send it whenever you're ready!",
                variant: "default",
            });

            form.reset();
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "We couldn't open your email client. Please send us a note directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact-us" className="mx-auto max-w-6xl py-20 px-4 sm:py-28 lg:px-6">
            <FadeIn>
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
                            <h2 className="text-3xl md:text-4xl text-primary tracking-tight">Let&apos;s build impact together</h2>
                            <p className="text-muted-foreground">
                                Send us a message and we&apos;ll get back to you within 48 hours. Prefer another channel? Reach us on the platforms below.
                            </p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" className="text-sm" {...field} type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What can we help you with?" className="text-sm" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Your Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Type your message here..." rows={6} className="text-sm" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Preparing email..." : "Create Email Draft"}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    <div className="space-y-4">
                        {quickLinks.map((link) => (
                            <div key={link.title} className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm">
                                <h3 className="text-lg font-semibold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">{link.description}</p>
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-medium text-primary">
                                    {link.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}

export default Contact;
