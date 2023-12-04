import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function AdmissionStatus() {
    return (
        <View>
            <AdmissionStatuusText>요청중</AdmissionStatuusText>
        </View>
    );
}

const AdmissionStatuusText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
