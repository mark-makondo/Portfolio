import { createSlice, type PayloadAction, createSelector } from "@reduxjs/toolkit";
import { AuthState, Viewport } from "./app.types";

const SLICE_NAME_KEY = "app";

const initialState: AuthState = {
    viewport: {
        screen: "",
        customScreen: null
    }
};

export const appSlice = createSlice({
    name: SLICE_NAME_KEY,
    initialState,
    reducers: {
        setViewport: (state, action: PayloadAction<Viewport>) => {
            return { ...state, viewport: action.payload };
        },
        reset: () => {
            return initialState;
        }
    }
});

export const selectAppState = (state: { [SLICE_NAME_KEY]: AuthState }) => state[SLICE_NAME_KEY];

export const selectViewport = createSelector(selectAppState, (authState) => authState.viewport);

export const { setViewport, reset } = appSlice.actions;

export default appSlice.reducer;
