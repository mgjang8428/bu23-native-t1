import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";

import { PageStateStore } from "@/stores/store";

export default function ChangeStateToNetButton(props) {
    const { changePage } = PageStateStore((state) => state);

    return (
        <Pressable
            onPress={() => {
                props.func();
            }}
        >
            <ButtonView>
                <ButtonTitle>병원 상태 수정</ButtonTitle>
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
