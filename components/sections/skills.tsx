"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Brain, Wrench } from "lucide-react"

const skillsData = [
    {
        category: "Frontend",
        icon: Code,
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: Database,
        skills: ["Node.js", "Python", "PostgreSQL", "API Development", "Server Actions", "FastAPI"],
    },
    {
        category: "AI & Automation",
        icon: Brain,
        skills: ["OpenAI API", "LangChain", "n8n Workflows", "Prompt Engineering", "RAG Pipelines", "AI Agents"],
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        skills: ["Git", "Docker", "Vercel", "AWS", "CI/CD", "VS Code"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="container py-20 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    A comprehensive toolset for building end-to-end AI solutions.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {skillsData.map((item, index) => (
                    <motion.div
                        key={item.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <item.icon className="h-6 w-6 text-primary" />
                                    <CardTitle>{item.category}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="hover:bg-primary/20 transition-colors">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
