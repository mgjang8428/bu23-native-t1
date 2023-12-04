import { create } from "zustand";

export const PageStateStore = create((set) => ({
    pageState: "AdmissionRequestList",
    changePage: (page) => set(() => ({ pageState: page })),
}));
