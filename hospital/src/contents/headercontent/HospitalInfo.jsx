import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function ParamedicInfo() {
    return (
        <HospitalInfoView>
            <HospitalName>단국대학</HospitalName>
            <HospitalForm>병원</HospitalForm>
        </HospitalInfoView>
    );
}

const HospitalInfoView = styled.View`
    flex-direction: row;
`;

const HospitalName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
`;

const HospitalForm = styled.Text`
    font-size: 18px;
    margin-left: 5px;
`;
