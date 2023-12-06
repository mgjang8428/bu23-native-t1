import { create } from "zustand";

//"HospitalList"
export const PageStateStore = create((set) => ({
    pageState: "Page3",
    changePage: (page) => set(() => ({ pageState: page })),
}));
