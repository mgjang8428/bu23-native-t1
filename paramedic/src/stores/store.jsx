import { create } from "zustand";

//"HospitalList"
//"PatientInput"
export const PageStateStore = create((set) => ({
    pageState: "PatientInput",
    changePage: (page) => set(() => ({ pageState: page })),
}));
