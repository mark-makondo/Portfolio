import { configureStore } from "@reduxjs/toolkit";
import type { Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import slices from "../features/api.slice.registry";
import { appSlice } from "./app.slice";
import { apiSlice } from "./app.api";
import { RootStateType } from "./app.types";

// Dynamic Reducers
const reducer: Record<string, Reducer> = {};

for (const key in slices) {
    if (Object.hasOwnProperty.call(slices, key)) {
        const slice = slices[key];
        reducer[slice.name] = slice.reducer;
    }
}

// Store
export const store = configureStore({
    reducer: {
        ...reducer,
        [appSlice.reducerPath]: appSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }).concat(apiSlice.middleware)
});

export const AppDispatch = store.dispatch;
export const getRootState = (() => store.getState()) as () => RootStateType;

// Helper
export const resetAll = (excludeSliceNames: string[] = []) =>
    Object.keys(reducer).forEach((sliceName) => {
        if (!excludeSliceNames.includes(sliceName)) {
            store.dispatch({ type: `${sliceName}/reset` });
        }
    });

setupListeners(store.dispatch);
