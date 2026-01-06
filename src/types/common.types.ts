/**
 * Types to be included here should be app level and not specific. For ex. icon props which is used
 * for all icon or location type for location object which doesnt change.
 */

export interface IconProps {
    className?: string;
    color?: string;
}

export type UnknownPromiseFuncReturnType = Promise<unknown | { error: unknown }>;

export type ObjectPromiseFuncReturnType = Promise<object | { error: unknown }>;

export type FlattenedTypes<T> = T extends string ? T : { [K in keyof T]: FlattenedTypes<T[K]> }[keyof T];

export type ValueOf<T> = T[keyof T];

export type DeepValue<T> = T extends string ? T : T extends Record<string, any> ? DeepValue<ValueOf<T>> : never;

export type LocationType = {
    pathname?: string;
    hash?: string;
};
