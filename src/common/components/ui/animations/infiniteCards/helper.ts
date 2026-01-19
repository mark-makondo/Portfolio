import gsap from "gsap";

export function buildSeamlessLoop(
    items: HTMLLIElement[],
    spacing: number,
    animateFunc: (el: HTMLLIElement) => gsap.core.Timeline
): gsap.core.Timeline {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;

    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat(this: gsap.core.Timeline) {
            // Fix for rare GSAP edge case
            if (this.time() === this.duration()) {
                this.totalTime(this.totalTime() + (this.duration() - 0.01));
            }
        }
    });

    const totalItems = items.length + overlap * 2;

    for (let i = 0; i < totalItems; i++) {
        const index = i % items.length;
        const time = i * spacing;
        rawSequence.add(animateFunc(items[index]), time);

        // Add labels only for original items
        if (i < items.length) {
            seamlessLoop.add("label" + i, time);
        }
    }

    rawSequence.time(startTime);

    seamlessLoop
        .to(rawSequence, { totalTime: loopTime, duration: loopTime - startTime, ease: "none" })
        .fromTo(
            rawSequence,
            { totalTime: overlap * spacing + 1 },
            { totalTime: startTime, duration: startTime - (overlap * spacing + 1), immediateRender: false, ease: "none" }
        );

    return seamlessLoop;
}
