"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function About() {
    return (
        <section id="about" className="container py-20 px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">
                        I am a passionate Full-Stack Developer and AI Specialist dedicated to building next-generation applications.
                        With a deep understanding of modern web technologies and artificial intelligence, I help businesses automate workflows,
                        integrate LLMs, and ship scalable products.
                    </p>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">
                        My journey began in traditional software engineering, but I quickly pivoted to the intersection of AI and web dev.
                        Today, I focus on creating &quot;smart&quot; applications that not only solve problems but anticipate them.
                    </p>
                    <div className="pt-4">
                        <Button asChild>
                            <Link href="#contact">
                                Let&apos;s Chat <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-6xl">👨‍💻</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
