import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { AiShowcase } from "@/components/sections/ai-showcase";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Skills />
      <Projects />
      <AiShowcase />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
