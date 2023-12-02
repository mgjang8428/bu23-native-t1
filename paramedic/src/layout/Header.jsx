import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Header() {
    return (
        <HeaderView>
            <Text>Header</Text>
        </HeaderView>
    );
}

const HeaderView = styled.View`
    background-color: #ffbfbf;
    width: 100%;
    height: 20%;
`;
