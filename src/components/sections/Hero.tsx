import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const watermarkRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial Reveal Timeline
        const tl = gsap.timeline();

        // Faster Main Text Reveal
        tl.from(textRef.current?.querySelectorAll('.reveal-text') || [], {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        })
        .from(".hero-content > *", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out"
        }, "-=0.4") // Overlap significantly
        .from(".code-block", {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.2)"
        }, "-=0.6");

        // Mouse Move Parallax
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;

            // Move watermark opposite to mouse
            gsap.to(watermarkRef.current, {
                x: mouseX * -40,
                y: mouseY * -40,
                rotation: 12 + (mouseX * 5),
                duration: 0.5,
                ease: "power2.out"
            });
            
            // Move code block slightly with mouse
            gsap.to(".code-block", {
                x: mouseX * 15,
                y: mouseY * 15,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, { scope: containerRef });

    return (
        <section id="hero" ref={containerRef} className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-background">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            {/* Watermark Logo */}
            <div ref={watermarkRef} className="absolute -right-20 top-20 -z-10 opacity-[0.03] rotate-12 pointer-events-none select-none">
                <Logo className="w-[800px] h-auto" />
            </div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="hero-content space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for work
                    </div>

                    <div className="space-y-4">
                        <h1 ref={textRef} className="text-4xl md:text-6xl font-display font-bold leading-tight text-white">
                            <span className="reveal-text block">Building</span> 
                            <span className="reveal-text block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500 pb-2">
                                Innovative
                            </span> 
                            <span className="reveal-text block">Solutions</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg">
                            I am <span className="text-slate-200 font-semibold">Mark Albert D. Makondo</span>, a Full-Stack Web Developer.
                            I craft robust, scalable applications that solve real-world problems.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-200 font-medium hover:bg-slate-900 transition-colors hover:border-slate-600"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="pt-4 flex items-center gap-4 text-slate-500 text-sm">
                        <a href="mailto:markalbert.makondo@gmail.com" className="hover:text-primary transition-colors font-medium text-base">
                            markalbert.makondo@gmail.com
                        </a>
                        <span className="hidden sm:inline">•</span>
                        <p className="hidden sm:block">Doha, Qatar</p>
                    </div>
                </div>

                <div className="code-block relative hidden lg:block">
                    <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-4 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center" />
                            <div className="ml-auto text-xs text-slate-500 font-mono">portfolio.tsx</div>
                        </div>
                        <div className="space-y-2 font-mono text-sm">
                            <div className="text-slate-400">
                                <span className="text-purple-400">const</span> <span className="text-blue-400">Developer</span> = <span className="text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-4 text-slate-300">
                                name: <span className="text-green-400">'Mark Makondo'</span>,
                            </div>
                            <div className="pl-4 text-slate-300">
                                role: <span className="text-green-400">'Full Stack Web Developer'</span>,
                            </div>
                            <div className="pl-4 text-slate-300">
                                stack: <span className="text-yellow-400">['React', 'Node.js', 'TypeScript']</span>,
                            </div>
                            <div className="pl-4 text-slate-300">
                                passion: <span className="text-green-400">'Building Intuitive UIs'</span>,
                            </div>
                            <div className="pl-4 text-slate-300">
                                hardWorker: <span className="text-orange-400">true</span>,
                            </div>
                            <div className="text-yellow-400">{"}"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
