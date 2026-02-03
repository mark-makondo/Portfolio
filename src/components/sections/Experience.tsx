import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
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

    useGSAP(() => {
        const items = gsap.utils.toArray('.experience-item');
        
        // Animate the line drawing
        gsap.fromTo('.timeline-line', 
            { scaleY: 0, transformOrigin: "top" },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            }
        );

        items.forEach((item: any) => {
            // Dot pop-in
            gsap.fromTo(item.querySelector('.timeline-dot'),
                { scale: 0 },
                {
                    scale: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%", // When top of item hits 80% of viewport height
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Card slide-in
            gsap.fromTo(item.querySelector('.experience-card'),
                { 
                    opacity: 0, 
                    x: item.classList.contains('md:flex-row-reverse') ? -50 : 50 
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section id="experience" className="py-24 bg-slate-950/50" ref={containerRef}>
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center">Work Experience</h2>

                <div className="space-y-8 md:space-y-12 relative">
                    {/* The Timeline Line */}
                    <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/20 md:-translate-x-1/2 origin-top transform" />

                    {jobs.map((job, index) => (
                        <div key={index} className={`experience-item relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} group`}>
                            
                            {/* Icon/Dot (Mobile: Left, Desktop: Center) */}
                            <div className="timeline-dot flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full border border-slate-700 bg-slate-900 absolute left-1 md:left-1/2 md:-translate-x-1/2 shadow shrink-0 z-10 group-hover:border-primary transition-colors">
                                <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse" />
                            </div>

                            {/* Card */}
                            <div className="experience-card w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-all hover:border-white/10 shadow-sm relative z-0">
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
