import { create } from "zustand";
import { getHospitalInfo } from "@/api/netConnect";

export const MyHospitalInfo = create((set) => ({
    infoState: [],
    putInfoState: (info) => set(() => ({ infoState: info })),
    getInfoToServer: async () => {
        try {
            const response = await getHospitalInfo();
            set({ infoState: response.data });
        } catch (error) {
            console.error("ERROR: ", error);
        }
    },
}));
