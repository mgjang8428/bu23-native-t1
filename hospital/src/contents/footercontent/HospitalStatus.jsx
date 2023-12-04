import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function HospitalStatus() {
    return (
        <View>
            <HospitalName>단국대학병원</HospitalName>
        </View>
    );
}

const HospitalName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
`;
