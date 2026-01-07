const TYPES = {
    AVAILABLE_FOR_WORK: 1,
    NOT_AVAILABLE_FOR_WORK: 2,
    CURRENT_LOCATION: 3,
    NATIONALITY: 4
} as const;

export default TYPES;

export type TagTypes = (typeof TYPES)[keyof typeof TYPES];
