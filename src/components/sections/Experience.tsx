export const Experience = () => {
    const jobs = [
        {
            company: "GRT Mobile Applications & Development LLC",
            role: "Lead Full Stack Developer",
            period: "Dec 2023 - Present",
            location: "Doha, Qatar",
            description: "Leading the development of a real-time employee automation system. Integrating web and mobile applications for seamless data flow.",
            skills: ["React", "Database Architecture", "Team Leadership"]
        },
        {
            company: "TxtMeQuick",
            role: "Full Stack Web Developer",
            period: "May 2021 - Dec 2023",
            location: "Remote (US)",
            description: "Developed various web apps including Applicant Tracking Systems and eCommerce tools. Transitioned from MERN to Meteor.js.",
            skills: ["MERN Stack", "Meteor.js", "System Design"]
        },
        {
            company: "Diversify Offshore Staffing Solutions",
            role: "Web Developer Internship",
            period: "Mar 2020 - May 2020",
            location: "Manila, Philippines",
            description: "Developed CRUD-based web pages using Laravel (PHP) and conducted functional testing.",
            skills: ["PHP", "Laravel", "MVC"]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-950/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">Work Experience</h2>

                <div className="space-y-8 md:space-y-12 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:translate-x-0 md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-slate-800 md:before:to-transparent">
                    {jobs.map((job, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Icon/Dot */}
                            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 absolute left-1/2 -translate-x-1/2 shadow shrink-0 z-10 group-hover:border-primary transition-colors">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                            </div>

                            {/* Card */}
                            <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-all hover:border-white/10 shadow-sm">
                                <div className="flex flex-col gap-1 mb-2">
                                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                                    <div className="text-primary font-medium">{job.role}</div>
                                    <div className="text-sm text-slate-500 font-mono">{job.period} | {job.location}</div>
                                </div>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.skills.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
