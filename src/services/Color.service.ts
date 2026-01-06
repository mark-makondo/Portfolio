export class ColorService {
    static hslToHex(h: number, s: number, l: number) {
        s /= 100;
        l /= 100;

        const k = (n: number) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

        const toHex = (x: number) => {
            const hex = Math.round(255 * x)
                .toString(16)
                .padStart(2, "0");
            return hex;
        };
        return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
    }

    static stringToHexColor(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash) % 360;
        return this.hslToHex(hue, 65, 55);
    }

    static getContrastColor(hex: string): "white" | "black" {
        hex = hex.replace("#", "");

        // Convert to RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Calculate luminance (YIQ)
        const yiq = (r * 299 + g * 587 + b * 114) / 1000;

        // Return best contrasting color
        return yiq >= 128 ? "black" : "white";
    }
}

export default ColorService;
