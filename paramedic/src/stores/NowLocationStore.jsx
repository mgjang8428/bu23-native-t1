import { create } from "zustand";

export const NowLocationStore = create((set) => ({
    gpsStatus: false,
    latitude: 0,
    longitude: 0,
    setNowLocate: (lat, lng) => set(() => ({ latitude: lat, longitude: lng })),
    onlineGpsStatus: () => set(() => ({ gpsStatus: true })),
}));
