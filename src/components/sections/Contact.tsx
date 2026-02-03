import { Copy, Mail, Check } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "markalbert.makondo@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-background to-slate-950">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Let's Build Something Great</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
                    I am currently available for remote or on-site opportunities in Qatar or worldwide.
                    Whether you have a question or just want to say hi, I will try my best to get back to you!
                </p>

                <div className="flex flex-col items-center gap-6">
                    <div className="group relative inline-flex items-center gap-4 bg-slate-900 border border-slate-800 p-2 pl-6 pr-2 rounded-full hover:border-primary/50 transition-colors">
                        <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        <span className="text-slate-200 font-mono text-sm md:text-base">{email}</span>
                        <button
                            onClick={handleCopy}
                            className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-slate-900 text-slate-400 transition-all active:scale-95"
                            aria-label="Copy email address"
                        >
                            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>

                        {/* Tooltip */}
                        <div className={`absolute -top-10 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                            Copied!
                        </div>
                    </div>

                    <a
                        href={`mailto:${email}`}
                        className="text-primary hover:text-primary/80 font-medium text-sm"
                    >
                        Send email directly
                    </a>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Mark Albert D. Makondo. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="https://github.com/mark-makondo" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/mark-makondo" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
