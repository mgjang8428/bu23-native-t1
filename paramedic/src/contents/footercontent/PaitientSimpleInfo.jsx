import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function PaitientSimpleInfo() {
    return (
        <PaitientView>
            <PaitientTitle>환자:</PaitientTitle>
            <PaitientName>성춘향</PaitientName>
        </PaitientView>
    );
}

const PaitientView = styled.View`
    flex-direction: row;
`;

const PaitientTitle = styled.Text`
    font-size: 18px;
    margin-left: 5px;
`;

const PaitientName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-decoration-line: underline;
    margin-left: 7px;
`;
