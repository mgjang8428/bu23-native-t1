import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function HospitalInfoButton() {
    return (
        <HospitalInfoButtonView
            onPress={() => {
                console.log("HospitalInfoButton: Click!");
            }}
        >
            <ButtonTitle>병원 정보</ButtonTitle>
        </HospitalInfoButtonView>
    );
}

const HospitalInfoButtonView = styled.Pressable`
    background-color: #e9e9e9;
    width: 100px;
    height: 45px;
    border: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ButtonTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
