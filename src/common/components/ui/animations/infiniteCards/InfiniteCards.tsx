import "./inifiniteCards.css";
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

    const parentRef = useRef<HTMLDivElement>(null);
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
                    // Expose the raw offset to the window so buttons can read it
                    window.currentOffset = playhead.offset;
                },
                duration: 0.5,
                ease: "power3",
                paused: true
            });

            const wrap = (iterationDelta: number, scrollTo: number) => {
                iteration += iterationDelta;
                trigger.scroll(scrollTo);
                trigger.update();
            };

            const trigger = ScrollTrigger.create({
                start: 0,
                onUpdate(self) {
                    const scroll = self.scroll();
                    // For infite scroll we reset back the scroll at the start when it ends
                    if (scroll > self.end - 1) {
                        wrap(1, 2);
                    } else if (scroll < 1 && self.direction < 0) {
                        wrap(-1, self.end - 2);
                    } else {
                        scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                        scrub.invalidate().restart();
                    }
                },
                end: "+=3000",
                pin: container.current
            });

            const scrollToOffset = (offset: number) => {
                const di = Draggable.get(".drag-proxy");
                const snappedTime = snapTime(offset);

                gsap.to(playhead, {
                    offset: snappedTime,
                    duration: 0.6,
                    ease: "power3.out",
                    onUpdate: () => {
                        seamlessLoop.time(wrapTime(playhead.offset));
                        window.currentOffset = playhead.offset;
                    },
                    onComplete: () => {
                        if (di) {
                            gsap.set(di.target, { x: 0 });
                            di.update();
                        }
                    }
                });
            };

            // Expose to window for the button clicks
            window.scrollToOffset = scrollToOffset;
            window.itemSpacing = spacing;

            // Draggable Setup
            Draggable.create(".drag-proxy", {
                type: "x",
                trigger: container.current,
                onPress() {
                    // Grab the CURRENT offset (set by buttons or previous drags)
                    this.vars.startOffset = playhead.offset;
                    // Reset the proxy's delta so we don't get a "jump"
                    gsap.set(this.target, { x: 0 });
                    this.update();
                },
                onDrag() {
                    // Use the relative movement (this.x) since the last onPress
                    scrub.vars.offset = (this.vars.startOffset as number) + this.x * -0.002;
                    scrub.invalidate().restart();
                },
                onDragEnd() {
                    scrollToOffset(playhead.offset);
                }
            });

            // Tilt Interaction
            const onMouseMove = (e: MouseEvent) => {
                if (window.innerWidth < 768) {
                    // Make sure to reset rotation if we will disable tilt
                    cards.forEach((card) => {
                        gsap.to(card, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            overwrite: "auto"
                        });
                    });
                    return;
                }
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

            const onScrollEnd = () => scrollToOffset(scrub.vars.offset as number);

            ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);
            window.addEventListener("mousemove", onMouseMove);

            return () => {
                ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
                window.removeEventListener("mousemove", onMouseMove);
                // Clean up window properties
                delete (window as any).scrollToOffset;
                delete (window as any).currentOffset;
                delete (window as any).itemSpacing;
            };
        },
        { scope: container }
    );

    const handleManualControl = (direction: "prev" | "next") => {
        // Check if variables exist on window
        if (typeof window.scrollToOffset !== "function" || window.currentOffset === undefined) return;
        const moveAmount = direction === "next" ? window.itemSpacing : -window.itemSpacing;
        // Pass the new target offset to your existing function
        window.scrollToOffset(window.currentOffset + moveAmount);
    };

    if (!items.length) return null;

    return (
        <div ref={parentRef} className="infinite-cards relative no-scrollbar">
            <div ref={container} className="infinite-cards-container bg-base-300 flex items-center justify-center rounded-3xl">
                <div className="infinite-cards__floor" />
                <div className="drag-proxy absolute inset-0 z-20 cursor-grab active:cursor-grabbing" />
                <ul className="cards flex items-center justify-center">
                    {displayItems.map((item, i) => (
                        <li
                            key={i}
                            className="card-item absolute w-max h-max bg-primary rounded-2xl text-primary-content shadow-sm flex items-center justify-center overflow-hidden"
                        >
                            {item}
                            <div className="card-shadow" />
                        </li>
                    ))}
                </ul>
            </div>
            <span className="text-xxs opacity-30 mt-4 uppercase tracking-[0.2em] absolute left-0 right-0 bottom-0 text-center">Drag to Explore</span>
            <div className="flex gap-6 z-30 absolute top-0 right-0">
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
