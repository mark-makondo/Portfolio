import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";

function App() {
  return (
    <div className="bg-background min-h-screen font-sans text-slate-400 selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <TechStack />
        <Experience />
        <Testimonials />
        <Projects />
        <Contact />
      </main>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

export default App;
