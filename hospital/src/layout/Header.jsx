import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Header() {
    return (
        <HeaderView>
            <Text>병원 어플 Header</Text>
        </HeaderView>
    );
}

const HeaderView = styled.View`
    background-color: #ffccbf;
    width: 100%;
    height: 20%;
`;
