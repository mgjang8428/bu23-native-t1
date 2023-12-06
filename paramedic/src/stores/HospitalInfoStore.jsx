import { create } from "zustand";

//"HospitalList"
export const HospitalInfoStore = create((set) => ({
    hospitalDataStatus: false,
    hospitalInfo: [
        {
            hospitalNum: 1,
            hospitalName: "단국대학교병원",
            hospitalAdress: "충청남도 천안시 동남구 망향로 201",
            hospitalLat: "36.8429505287135",
            hospitalLng: "127.173276042076",
        },
        {
            hospitalNum: 2,
            hospitalName: "서울대학교병원",
            hospitalAdress: "서울특별시 종로구 대학로 101",
            hospitalLat: "37.5804523853297",
            hospitalLng: "126.997196437908",
        },
        {
            hospitalNum: 3,
            hospitalName: "대학교병원",
            hospitalAdress: "서울특별시 종로구 대학로 101",
            hospitalLat: "37.5804523855555",
            hospitalLng: "126.117177437777",
        },
    ],
    hospitalDistance: { 1: 0, 2: 0 },
    changeInfo: (info) => set(() => ({ hospitalInfo: info })),
    setDistance: (disObj) => set(() => ({ hospitalDistance: disObj })),
}));
