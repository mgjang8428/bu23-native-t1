import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Footer() {
    return (
        <FooterView>
            <Text>Footer</Text>
        </FooterView>
    );
}

const FooterView = styled.View`
    background-color: #b19cff;
    width: 100%;
    height: 15%;
`;
