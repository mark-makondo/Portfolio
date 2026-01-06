import type { Reducer } from "@reduxjs/toolkit";
import { store } from "./app.store";
import { UseBreakPointReturnType } from "@/common/hooks/useBreakpoint";

export interface SliceType {
    name: string;
    reducer: Reducer;
    actions: Record<string, Reducer>;
}

export interface AuthState {
    viewport?: Viewport;
    isSidebarOpen?: boolean;
}

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type Viewport = UseBreakPointReturnType;
