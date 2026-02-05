"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles } from "lucide-react"

export function AiShowcase() {
    return (
        <section id="ai-showcase" className="container py-20 px-4 bg-muted/30">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Engineering Lab</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                    Exploring the frontiers of Prompt Engineering and Autonomous Agents.
                </p>
            </div>

            <Tabs defaultValue="prompting" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="prompting">Prompt Engineering</TabsTrigger>
                    <TabsTrigger value="agents">Agentic Workflows</TabsTrigger>
                </TabsList>
                <TabsContent value="prompting">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-primary" />
                                Chain-of-Thought Optimization
                            </CardTitle>
                            <CardDescription>
                                Enhancing LLM reasoning capabilities through structured prompting techniques.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto">
                                <div className="text-green-500 mb-2">{"// Optimized System Code"}</div>
                                <p className="text-foreground">
                                    &quot;You are an expert strategic advisor. <br />
                                    Step 1: Analyze the user&apos;s business constraints.<br />
                                    Step 2: Propose 3 distinct strategies.<br />
                                    Step 3: Critique each strategy for potential risks.<br />
                                    Output format: JSON with &apos;strategy&apos;, &apos;risk_score&apos;, and &apos;mitigation&apos;.&quot;
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                By explicitly instructing the model to break down valid reasoning steps, we achieve 40% higher accuracy in complex decision-making tasks compared to zero-shot prompting.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="agents">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Brain className="h-5 w-5 text-primary" />
                                Autonomous Agent Architecture
                            </CardTitle>
                            <CardDescription>
                                Building agents that can use tools and maintain memory.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-muted p-4 rounded-md font-mono text-xs sm:text-sm overflow-x-auto">
                                <div className="text-blue-500 mb-2">{"// OpenAI Assistant Definition"}</div>
                                <pre className="whitespace-pre-wrap">
                                    {`const assistant = await openai.beta.assistants.create({
  name: "Data Analyst Agent",
  instructions: "You are a data analyst. Write and run code to answer questions.",
  tools: [{ type: "code_interpreter" }, { type: "function", function: queryDatabase }],
  model: "gpt-4-turbo"
});`}
                                </pre>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Integrating Function Calling allows agents to interact with real-world APIs, turning static LLMs into dynamic action engines.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    )
}
