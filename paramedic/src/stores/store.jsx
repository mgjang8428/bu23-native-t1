import { create } from "zustand";

export const MiddlePageStateStore = create((set) => ({
    middlePageState: "PageList",
    changePage: (page) => set((state) => ({ middlePageState: page })),
}));
