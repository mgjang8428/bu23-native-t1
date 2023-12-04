import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Logo() {
    return (
        <View>
            <LogoText>EA : P</LogoText>
        </View>
    );
}

const LogoText = styled.Text`
    font-size: 25px;
`;
