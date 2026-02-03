
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: "PHACORA",
    description: "A comprehensive enterprise resource planning solution integrating bookkeeping, automated HR payroll systems, and granular role-based access control.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    tag: "Business Critical",
    link: "#",
    github: "#" 
  },
  {
    title: "SDA Hub",
    description: "A centralized church management platform featuring event coordination, interactive calendars, member directories, and data visualization for community insights.",
    tech: ["React", "Beautiful DnD", "Styled Components"],
    tag: "Community Platform",
    link: "#",
    github: "#"
  },
  {
    title: "TimeKeeper",
    description: "Real-time workforce management system leveraging geolocation and mobile integration for automated attendance tracking and live status updates.",
    tech: ["React", "Google Maps API", "Socket.io"],
    tag: "Real-Time",
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
                        <p className="text-slate-400 max-w-xl">
                            A selection of projects that demonstrate my ability to handle complex requirements and deliver robust solutions.
                        </p>
                    </div>
                    <a href="https://github.com/mark-makondo" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        View all on GitHub <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group flex flex-col rounded-2xl border border-white/5 bg-slate-900/50 overflow-hidden hover:bg-slate-900 hover:border-white/10 transition-all duration-300">

                            {/* Header/Tag */}
                            <div className="px-6 pt-6 flex justify-between items-start">
                                <div className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 font-medium border border-slate-700">
                                    {project.tag}
                                </div>
                                <a href={project.github} className="text-slate-500 hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://github.com/mark-makondo" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        View all on GitHub <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
