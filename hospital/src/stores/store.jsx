import { create } from "zustand";

export const PageStateStore = create((set) => ({
    pageState: "AdmissionRequest",
    changePage: (page) => set(() => ({ pageState: page })),
}));
