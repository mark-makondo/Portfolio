import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ProjectItemProps {
    title: string;
    imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, imageUrl }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !imageRef.current || !textRef.current) return;

        const container = containerRef.current;
        const image = imageRef.current;
        const text = textRef.current;

        const moveImageX = gsap.quickTo(image, "x", { duration: 0.6, ease: "power3.out" });
        const moveImageY = gsap.quickTo(image, "y", { duration: 0.6, ease: "power3.out" });
        const moveTextY = gsap.quickTo(text, "y", { duration: 0.5, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();

            // Normalize mouse position (-1 to 1)
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            moveImageX(x * 20);
            moveImageY(y * 20);
            moveTextY(y * -10);
        };

        const handleMouseLeave = () => {
            moveImageX(0);
            moveImageY(0);
            moveTextY(0);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full aspect-4/3 rounded-2xl overflow-hidden cursor-pointer">
            {/* Image Layer */}
            <div
                ref={imageRef}
                className="absolute inset-[-10%] bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 ref={textRef} className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-center">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default ProjectItem;
