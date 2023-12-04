import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function HospitalAdmissionButton() {
    return (
        <AdmissionButtonView
            onPress={() => {
                console.log("HospitalAdmissionButton: Click!");
            }}
        >
            <ButtonTitle>입원 요청</ButtonTitle>
        </AdmissionButtonView>
    );
}

const AdmissionButtonView = styled.Pressable`
    background-color: #fbffbe;
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
