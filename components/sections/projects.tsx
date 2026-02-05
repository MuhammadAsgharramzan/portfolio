"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "AI-Powered SaaS Application",
        description: "A tool that uses OpenAI to generate marketing content automatically. Features real-time streaming, user authentication, and subscription management.",
        tags: ["Next.js", "OpenAI SDK", "Tailwind CSS", "Stripe"],
        links: {
            demo: "#",
            repo: "#",
        },
    },
    {
        title: "Automation Platform with n8n",
        description: "Enterprise-grade workflow automation for lead processing. Integrates CRM, Email, and Slack to streamline sales operations.",
        tags: ["n8n", "Node.js", "Webhooks", "PostgreSQL"],
        links: {
            demo: "#", // Video demo link could go here
            repo: "#",
        },
    },
    {
        title: "Full-Stack Analytics Dashboard",
        description: "Real-time analytics dashboard for visualizing business metrics. Implements server-side aggregation and dynamic charting.",
        tags: ["Next.js", "Server Actions", "D3.js", "PostgreSQL"],
        links: {
            demo: "#",
            repo: "#",
        },
    },
]

export function Projects() {
    return (
        <section id="projects" className="container py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Showcasing real-world applications of AI and Full-Stack development.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-primary/10">
                            <div className="h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 w-full flex items-center justify-center">
                                <span className="text-muted-foreground font-medium">Project Preview</span>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="line-clamp-3">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button size="sm" className="w-full" asChild>
                                    <Link href={project.links.demo} target="_blank">
                                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                    </Link>
                                </Button>
                                <Button size="sm" variant="outline" className="w-full" asChild>
                                    <Link href={project.links.repo} target="_blank">
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
