"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Bot, Workflow, Layout, Database, Sparkles, Code2 } from "lucide-react"

const services = [
    {
        title: "Custom AI Agent Development",
        description: "Building autonomous agents using OpenAI SDK and LangChain to handle complex tasks and customer interactions.",
        icon: Bot,
    },
    {
        title: "Workflow Automation",
        description: "Streamlining business processes with n8n and Zapier, integrating CRM, Email, and internal tools.",
        icon: Workflow,
    },
    {
        title: "Full-Stack Web Apps",
        description: "Developing scalable, modern web applications with Next.js, React, and TypeScript.",
        icon: Layout,
    },
    {
        title: "API Development",
        description: "Designing and implementing robust REST and GraphQL APIs for seamless data integration.",
        icon: Database,
    },
    {
        title: "Prompt Engineering",
        description: "Optimizing LLM prompts to ensure accuracy, consistency, and cost-effectiveness in AI applications.",
        icon: Sparkles,
    },
    {
        title: "Technical Consultation",
        description: "Advising on tech stack selection, system architecture, and AI implementation strategies.",
        icon: Code2,
    },
]

export function Services() {
    return (
        <section id="services" className="container py-20 px-4 bg-muted/50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services & Solutions</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Tailored technical solutions to drive your business forward.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <service.icon className="h-10 w-10 text-primary mb-4" />
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
