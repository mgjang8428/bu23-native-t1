import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";
import Hospital from "../components/Hospital";

export default function Page1() {
    return (
        <View>
            <PageHeader>
                <Text>Top</Text>
            </PageHeader>
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
const PageHeader = styled.View`
    width: 100%;
    height: 10%;
`;
const PageScroll = styled.ScrollView`
    width: 100%;
    height: 90%;
`;
