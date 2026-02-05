"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Contact() {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        alert("Thank you for your message! This is a demo form.")
    }

    return (
        <section id="contact" className="container py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Have a project in mind? Let&apos;s discuss how we can work together.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                            <CardDescription>
                                Feel free to reach out through any of these channels.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary" />
                                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    hello@example.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Calendar className="h-5 w-5 text-primary" />
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    Schedule a call via Calendly
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Social Profiles</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-4">
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank">
                                    <Github className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank">
                                    <Linkedin className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" asChild>
                                <Link href="#" target="_blank">
                                    <Twitter className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                        <CardDescription>
                            I usually respond within 24 hours.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    className="min-h-[120px]"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
