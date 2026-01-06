import type { DropdownPlacement, Placement } from "./Dropdown.types";

export function convertPlacementToDropdownClass(p: Placement = "bottom"): DropdownPlacement {
    let placement = "";

    if (p.includes("top")) placement = "dropdown-top";
    if (p.includes("bottom")) placement = "dropdown-bottom";
    if (p.includes("left")) placement = "dropdown-left";
    if (p.includes("right")) placement = "dropdown-right";

    if (p.includes("top-center")) placement += " dropdown-center";
    if (p.includes("top-end")) placement += " dropdown-end";

    if (p.includes("bottom-center")) placement += " dropdown-center";
    if (p.includes("bottom-end")) placement += " dropdown-end";

    if (p.includes("left-center")) placement += " dropdown-center";
    if (p.includes("left-end")) placement += " dropdown-end";

    if (p.includes("right-center")) placement += " dropdown-center";
    if (p.includes("right-end")) placement += " dropdown-end";

    return placement as DropdownPlacement;
}
