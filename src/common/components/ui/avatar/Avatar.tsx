import { useMemo } from "react";
import clsx from "clsx";
import { createInitials } from "@/common/utilities/helper";
import ColorService from "@/services/Color.service";

interface AvatarProps {
    name: string;
    className?: string;
    src?: string | null;
    size?: "xxs" | "xs" | "sm" | "lg" | "xl";
}

const SIZE_MAP = {
    xxs: "w-7 h-7 text-sm", // 20px
    xs: "w-8 h-8 text-sm", // 32px
    sm: "w-10 h-10 text-xl", // 40px
    md: "w-12 h-12 text-xl", // 48px
    lg: "w-20 h-20 text-2xl", // 80px
    xl: "w-28 h-28 text-4xl" // 112px
} as const;

const Avatar: React.FC<AvatarProps> = ({ name, src, size = "sm", className }) => {
    const textInfo = useMemo(() => {
        const initials = createInitials(name);
        const bgColor = ColorService.stringToHexColor(name);
        const fontColor = ColorService.getContrastColor(bgColor);

        return { initials, bgColor, fontColor };
    }, [name]);

    const sizeClass = SIZE_MAP[size];

    return (
        <div className={clsx("avatar", className)}>
            <div
                className={clsx(
                    "rounded-full flex items-center justify-center overflow-hidden select-none ring-1 ring-secondary ring-offset-2 shadow",
                    sizeClass
                )}
                style={{
                    backgroundColor: !src ? textInfo.bgColor : undefined,
                    borderColor: !src ? textInfo.bgColor : undefined,
                    color: !src ? textInfo.fontColor : undefined
                }}
            >
                {src ? <img src={src} alt={name} className="w-full h-full object-cover" /> : <div className="font-semibold">{textInfo.initials}</div>}
            </div>
        </div>
    );
};

export default Avatar;
