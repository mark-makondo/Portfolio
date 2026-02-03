import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Project Manager",
        message: "Having him on the team was a game-changer. He took full ownership of the technical stack, bridgeing the gap between complex backend logic and a polished UI effortlessly.",
        initials: "AR",
        color: "bg-blue-500"
    },
    {
        name: "Samantha Reed",
        role: "Lead Designer",
        message: "He is one of the few developers I've worked with who truly respects the design process. He translated my most complex layouts into functional code without losing any of the creative intent.",
        initials: "SR",
        color: "bg-pink-500"
    },
    {
        name: "Jameson Kray",
        role: "Client & Founder",
        message: "He didn't just build my web app; he helped architect the entire vision. His expertise in full-stack development meant I could trust him with the most critical parts of my business.",
        initials: "JK",
        color: "bg-amber-500"
    },
    {
        name: "Dr. Aris Thorne",
        role: "Technical Lead",
        message: "He stepped into our codebase and immediately raised the standard. His ability to refactor our API architecture while keeping the frontend performant was exactly what the project needed.",
        initials: "AT",
        color: "bg-emerald-500"
    },
    {
        name: "Liam O'Connell",
        role: "Software Engineer",
        message: "I've worked alongside many developers, but his approach to state management and clean code is top-tier. He makes the most difficult full-stack tasks look easy.",
        initials: "LO",
        color: "bg-cyan-500"
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Trusted by Professionals
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    I don't just write code; I build trust, solve problems, and elevate teams. Here is what people I've worked with have to say.
                </p>
            </div>

            <div className="relative flex w-full">
                {/* Gradients for smooth fade */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                <div className="flex w-full overflow-hidden mask-image-linear-gradient">
                    <motion.div
                        className="flex gap-6 py-4 pl-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-primary/20 transition-colors flex flex-col gap-6 shrink-0"
                            >
                                <div className="relative">
                                    <span className="text-6xl text-slate-800 font-serif absolute -top-4 -left-2">"</span>
                                    <p className="text-slate-300 relative z-10 leading-relaxed italic">
                                        {t.message}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{t.name}</div>
                                        <div className="text-primary text-sm font-medium">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
