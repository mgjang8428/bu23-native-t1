import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Clock() {
    return (
        <ClockView>
            <Text>16 : 25</Text>
        </ClockView>
    );
}

const ClockView = styled.View`
    width: 100px;
    height: 50px;
    border: 3px;
    justify-content: center;
    align-items: center;
`;
