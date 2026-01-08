import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { buildSeamlessLoop } from "./helper";

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

interface InfiniteCardsProps {
    items?: React.ReactNode[];
    tiltIntensity?: number;
}

const InfiniteCards: React.FC<InfiniteCardsProps> = ({ items = [], tiltIntensity = 7 }) => {
    // Fill the gaps for small item counts
    const displayItems = items.length > 0 && items.length < 8 ? [...items, ...items, ...items].slice(0, 12) : items;

    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!container.current || !items.length) return;

            const cards = gsap.utils.toArray<HTMLLIElement>(".card-item");
            const spacing = 0.1;
            const snapTime = gsap.utils.snap(spacing);
            let iteration = 0;

            // Initial hidden state
            gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

            const animateFunc = (element: HTMLLIElement): gsap.core.Timeline => {
                if (!element) return gsap.timeline();
                gsap.set(element.parentElement, { perspective: 1000 });
                const tl = gsap.timeline();
                tl.fromTo(
                    element,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }
                ).fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0);
                return tl;
            };

            const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
            const playhead = { offset: 0 };
            const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

            const scrub = gsap.to(playhead, {
                offset: 0,
                onUpdate() {
                    seamlessLoop.time(wrapTime(playhead.offset));
                },
                duration: 0.5,
                ease: "power3",
                paused: true
            });

            const trigger = ScrollTrigger.create({
                start: 0,
                onUpdate(self) {
                    scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                    window.currentOffset = scrub.vars.offset as number;
                    scrub.invalidate().restart();
                },
                end: "+=3000",
                pin: container.current
            });

            const scrollToOffset = (offset: number) => {
                const dragInstance = Draggable.get(".drag-proxy");
                if (dragInstance) dragInstance.disable();

                let snappedTime = snapTime(offset);
                let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
                const scroll = gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);

                if (progress >= 1 || progress < 0) {
                    iteration += Math.floor(progress);
                    trigger.scroll(scroll);
                    trigger.update();
                } else {
                    trigger.scroll(scroll);
                }
                gsap.delayedCall(0.6, () => {
                    if (dragInstance) dragInstance.enable();
                });
            };

            // Expose to window for the button clicks
            window.scrollToOffset = scrollToOffset;
            window.itemSpacing = spacing;

            // --- Draggable Setup ---
            Draggable.create(".drag-proxy", {
                type: "x",
                trigger: container.current,
                onPress() {
                    this.vars.startOffset = scrub.vars.offset;
                },
                onDrag() {
                    scrub.vars.offset = (this.vars.startOffset as number) + (this.startX - this.x) * 0.001;
                    scrub.invalidate().restart();
                },
                onDragEnd() {
                    scrollToOffset(scrub.vars.offset as number);
                }
            });

            // --- Tilt Interaction ---
            const onMouseMove = (e: MouseEvent) => {
                if (window.innerWidth < 768) return;
                cards.forEach((card) => {
                    const opacity = gsap.getProperty(card, "opacity") as number;
                    if (opacity > 0.1) {
                        const rect = card.getBoundingClientRect();
                        const cardCenterX = rect.left + rect.width / 2;
                        const cardCenterY = rect.top + rect.height / 2;

                        const rotateY = ((e.clientX - cardCenterX) / (window.innerWidth / 2)) * tiltIntensity;
                        const rotateX = ((e.clientY - cardCenterY) / (window.innerHeight / 2)) * -tiltIntensity;

                        gsap.to(card, { rotateX, rotateY, duration: 0.5, ease: "power2.out", overwrite: "auto" });
                    }
                });
            };

            window.addEventListener("mousemove", onMouseMove);
            return () => window.removeEventListener("mousemove", onMouseMove);
        },
        { scope: container }
    );

    const handleManualControl = (direction: "prev" | "next") => {
        if (!window.scrollToOffset) return;
        const moveAmount = direction === "next" ? window.itemSpacing : -window.itemSpacing;
        window.scrollToOffset(window.currentOffset + moveAmount);
    };

    if (!items.length) return null;

    return (
        <div className="infinite-cards flex flex-col w-full h-full items-center justify-center gap-8">
            <div ref={container} className="relative h-full w-full overflow-hidden bg-base-300 flex items-center justify-center rounded-3xl">
                {/* Drag Overlay */}
                <div className="drag-proxy absolute inset-0 z-20 cursor-grab active:cursor-grabbing" />

                <ul className="cards relative w-full h-full flex items-center justify-center pointer-events-none">
                    {displayItems.map((item, i) => (
                        <li
                            key={i}
                            className="card-item absolute w-max h-max bg-primary rounded-2xl text-primary-content shadow-sm flex items-center justify-center overflow-hidden"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-6 z-30">
                <button
                    onClick={() => handleManualControl("prev")}
                    className="btn btn-circle btn-primary btn-outline shadow-md hover:bg-primary hover:text-white transition-all active:scale-90"
                >
                    ❮
                </button>
                <button
                    onClick={() => handleManualControl("next")}
                    className="btn btn-circle btn-primary btn-outline shadow-md hover:bg-primary hover:text-white transition-all active:scale-90"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default InfiniteCards;
