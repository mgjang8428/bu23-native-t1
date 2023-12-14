import { create } from "zustand";

//"HospitalList"
export const PageStateStore = create((set) => ({
    pageState: "HospitalList",
    changePage: (page) => set(() => ({ pageState: page })),
}));
