import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";
import Hospital from "../components/hospital/Hospital";
import HospitalListHeader from "../components/hospitallistheader/HospitalListHeader";

export default function Page1() {
    return (
        <View>
            <HospitalListHeader />
            <PageScroll>
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
            </PageScroll>
        </View>
    );
}

const ListMainView = styled.View`
    width: 100%;
    height: 100%;
`;

const PageScroll = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        alignItems: "center",
    },
}))`
    width: 100%;
    height: 90%;
`;
