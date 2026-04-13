"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        title: "DigiAucta",
        description: "The Marketplace for AI & Digital Products, Buy and sell AI tools, models, datasets, and SaaS businesses through transparent, real-time auctions with escrow-protected payments.",
        image: "/Digiauc.jpeg",
        tags: ["Next.js", "Tailwind CSS", "FastAPI", "TypeScript", "Supabase" ],
        links: {
            demo: "https://www.digiaucta.com/",
            repo: "#",
        },
    },
    {
        title: "AI Video Detector",
        description: "Detect AI-generated videos and images with confidence scores. Features frame-by-frame analysis, visual confidence timeline, and third-party API integrations (Hive, Sightengine). Built with FastAPI backend and Next.js 14 frontend.",
        image: "/Aidetect.jpeg",
        tags: ["Next.js", "FastAPI", "TypeScript", "OpenCV", "AI/ML"],
        links: {
            demo: "ai-video-detector-coral.vercel.app",
            repo: "https://github.com/MuhammadAsgharramzan/AI-Video-Detector",
        },
    },
    {
        title: "UstadHazirHai",
        description: "Automotive service platform connecting customers with professional mechanics. Features appointment booking, service tracking, and real-time notifications.",
        image: "/Ustadhazir.jpeg",
        tags: ["Next.js", "Vercel", "Tailwind CSS", "React"],
        links: {
            demo: "https://mechani-xpress-g8tu.vercel.app",
            repo: "#",
        },
    },
    {
        title: "Physical AI Humanoid Robotics",
        description: "Advanced humanoid robot with AI-powered movement and interaction capabilities. Integrates computer vision, motor control, and machine learning for autonomous behavior.",
        image: "/Humanoid.jpeg",
        tags: ["AI", "Robotics", "Computer Vision", "Python"],
        links: {
            demo: "https://physical-ai-humanoid-robotics-tan.vercel.app",
            repo: "https://github.com/MuhammadAsgharramzan/physical-ai-humanoid-robotics",
        },
    },
    {
        title: "Hackathon II Todo App",
        description: "Full-featured task management application built during hackathon. Features real-time collaboration, priority tagging, and progress tracking with intuitive UI.",
        image: "/Todo App.jpeg",
        tags: ["Next.js", "Vercel", "React", "Tailwind CSS"],
        links: {
            demo: "https://hackathon-ii-todo-app-d3c5.vercel.app",
            repo: "https://github.com/MuhammadAsgharramzan/Hackathon-II-Todo-App",
        },
    },
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
                            <div className="relative h-48 w-full overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                                        <span className="text-muted-foreground font-medium">Project Preview</span>
                                    </div>
                                )}
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
