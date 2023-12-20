import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { PageStateStore } from "@/stores/store";

export default function StateChangeButton() {
    const { changePage } = PageStateStore((state) => state);

    return (
        <Pressable
            onPress={() => {
                changePage("StateChangePage");
            }}
        >
            <ButtonView>
                <ButtonTitle>병원 상태 변경</ButtonTitle>
            </ButtonView>
        </Pressable>
    );
}

const ButtonView = styled.View`
    background-color: #81e6a2;
    border: 3px solid black;
    border-radius: 10px;
    width: 350px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const ButtonTitle = styled.Text`
    font-size: 20px;
`;
