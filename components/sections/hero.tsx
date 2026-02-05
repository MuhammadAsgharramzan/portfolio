"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                        Available for freelance & full-time roles
                    </div>

                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Full-Stack Developer & <br className="hidden sm:inline" />
                        <span className="text-primary">AI Automation Specialist</span>
                    </h1>

                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        I build intelligent, scalable web applications and automate complex workflows using Next.js, Python, and AI agents.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Button size="lg" asChild>
                            <Link href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                        <Button variant="ghost" size="lg" asChild className="hidden sm:flex">
                            <Link href="/resume.pdf" target="_blank">
                                Download Resume
                                <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
