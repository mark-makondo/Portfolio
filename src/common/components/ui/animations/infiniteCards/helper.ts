import gsap from "gsap";

export function buildSeamlessLoop(
    items: HTMLLIElement[],
    spacing: number,
    animateFunc: (el: HTMLLIElement) => gsap.core.Timeline
): gsap.core.Timeline {
    let overlap = Math.ceil(1 / spacing),
        startTime = items.length * spacing + 0.5,
        loopTime = (items.length + overlap) * spacing + 1,
        rawSequence = gsap.timeline({ paused: true }),
        seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat(this: gsap.core.Timeline) {
                // Fix for rare GSAP edge case
                if (this.time() === this.duration()) {
                    this.totalTime(this.totalTime() + (this.duration() - 0.01));
                }
            }
        }),
        l = items.length + overlap * 2,
        time: number,
        i: number,
        index: number;

    for (i = 0; i < l; i++) {
        index = i % items.length;
        time = i * spacing;
        rawSequence.add(animateFunc(items[index]), time);
        i <= items.length && seamlessLoop.add("label" + i, time);
    }

    rawSequence.time(startTime);
    seamlessLoop
        .to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: "none"
        })
        .fromTo(
            rawSequence,
            { time: overlap * spacing + 1 },
            {
                time: startTime,
                duration: startTime - (overlap * spacing + 1),
                immediateRender: false,
                ease: "none"
            }
        );
    return seamlessLoop;
}
