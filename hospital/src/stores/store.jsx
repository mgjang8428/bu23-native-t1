import { create } from "zustand";

export const PageStateStore = create((set) => ({
    pageState: "HospitalList",
    changePage: (page) => set(() => ({ pageState: page })),
}));
