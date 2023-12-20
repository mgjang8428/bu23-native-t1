import { PageStateStore } from "@/stores/store";
import { View, Text, Button } from "react-native";
import React from "react";
import HospitalList from "./page/AdmissionRequestList";
import PatientInfo from "./page/HospitalState";
import Page3 from "./page/Page3";
import StateChangePage from "./page/StateChangePage";

export default function MiddleMain() {
    const { pageState } = PageStateStore((state) => state);
    switch (pageState) {
        case "AdmissionRequest": {
            return <HospitalList />;
        }
        case "HospitalState": {
            return <PatientInfo />;
        }
        case "Page3": {
            return <Page3 />;
        }
        case "StateChangePage": {
            return <StateChangePage />;
        }
    }
}
