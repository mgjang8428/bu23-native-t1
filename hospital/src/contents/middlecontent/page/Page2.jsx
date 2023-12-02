import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";

export default function Page2() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    return (
        <PageView>
            <Text style={{ fontSize: 30 }}>Page2</Text>
            <Button
                title="move PageList"
                onPress={() => {
                    changePage("PageList");
                }}
            />
            <Button
                title="move Page3"
                onPress={() => {
                    changePage("Page3");
                }}
            />
        </PageView>
    );
}
const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
