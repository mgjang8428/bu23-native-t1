import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";

export default function Page1() {
    return (
        <PageView>
            <Text style={{ fontSize: 30 }}>PageList</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
            <Text style={{ fontSize: 40 }}>1</Text>
        </PageView>
    );
}

const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
