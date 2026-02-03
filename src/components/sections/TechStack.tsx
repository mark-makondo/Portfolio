import { Component, Database, Figma, FileCode, Globe, Server, Terminal } from 'lucide-react';

const techs = [
    { name: 'React', icon: Component, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: FileCode, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: Globe, color: 'text-cyan-300' }, // Using Globe generic or generic
    { name: 'MongoDB', icon: Database, color: 'text-green-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-400' },
    { name: 'Figma', icon: Figma, color: 'text-pink-400' },
    { name: 'Linux', icon: Terminal, color: 'text-yellow-400' },
];

export const TechStack = () => {
    return (
        <section className="py-20 border-b border-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-slate-500 mb-12 font-medium tracking-wide text-sm uppercase">Technologies I work with</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {techs.map((tech) => (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300"
                        >
                            <tech.icon className={`w-8 h-8 ${tech.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                            <span className="text-slate-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
