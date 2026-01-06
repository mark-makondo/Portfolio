import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => (query ? window.matchMedia(query).matches : false));

    useEffect(() => {
        if (query) {
            const media = window.matchMedia(query);
            const listener = () => setMatches(media.matches);

            media.addEventListener("change", listener);
            return () => media.removeEventListener("change", listener);
        }
    }, [query]);

    return matches;
}
