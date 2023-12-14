import { PageStateStore } from "@/stores/store";
import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import HospitalList from "./page/HospitalList";
import PatientInfo from "./page/PatientInfo";
import Page3 from "./page/Page3";
import PatientInput from "./page/PatientInput";

export default function MiddleMain() {
    const { pageState } = PageStateStore((state) => state);
    switch (pageState) {
        case "HospitalList": {
            return <HospitalList />;
        }
        case "PatientInfo": {
            return <PatientInfo />;
        }
        case "Page3": {
            return <Page3 />;
        }
        case "PatientInput": {
            return (
                <ScrollView>
                    <PatientInput />
                </ScrollView>
            );
        }
    }
}
