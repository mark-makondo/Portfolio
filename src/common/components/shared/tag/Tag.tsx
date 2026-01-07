import React, { useMemo } from "react";
import clsx from "clsx";
import Badge from "../../ui/badge/Badge";
import types, { TagTypes } from "./tagTypes";
import appConfig from "@/app.config";
import PulsingCircle, { statusType } from "../../ui/animations/PulsingCircle";

const { AVAILABLE_FOR_WORK, NOT_AVAILABLE_FOR_WORK, CURRENT_LOCATION, NATIONALITY } = types;

interface TagProps {
    type: TagTypes;
}

type badgeConfigType = {
    label: string;
    className: string;
    statusType: statusType;
};

const Tag: React.FC<TagProps> = ({ type }) => {
    const badgeConfig = useMemo(() => {
        const config: badgeConfigType = {
            label: "",
            className: "",
            statusType: ""
        };

        switch (type) {
            case AVAILABLE_FOR_WORK:
                config.label = "Available for Work";
                config.className = "badge--available";
                config.statusType = "success";
                break;
            case NOT_AVAILABLE_FOR_WORK:
                config.label = "Not Available";
                config.className = "badge--unavailable";
                config.statusType = "error";
                break;
            default:
            case CURRENT_LOCATION:
            case NATIONALITY:
                config.className = "badge-neutral";
                if (type === CURRENT_LOCATION) config.label = appConfig.location;
                if (type === NATIONALITY) config.label = "Filipino";
                break;
        }

        return config;
    }, [type]);

    return (
        <Badge className={clsx("tag", badgeConfig.className)}>
            {badgeConfig.statusType && <PulsingCircle statusType={badgeConfig.statusType} />}
            {badgeConfig.label}
        </Badge>
    );
};

export default Tag;
