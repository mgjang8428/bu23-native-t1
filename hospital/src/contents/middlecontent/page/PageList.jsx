import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";

export default function Page1() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    return (
        <PageView>
            <Text style={{ fontSize: 30 }}>PageList</Text>
            <Button
                title="move Page2"
                onPress={() => {
                    changePage("Page2");
                }}
            />
            <Button
                title="move Page3"
                onPress={() => {
                    changePage("Page3");
                }}
            />
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
