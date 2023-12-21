import { create } from "zustand";

//"HospitalList"
//"PatientInput"
export const PageStateStore = create((set) => ({
    pageState: "HospitalList",
    changePage: (page) => set(() => ({ pageState: page })),
}));
