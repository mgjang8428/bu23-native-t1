import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import MiddleMain from "../contents/middlecontent/MiddleMain";

export default function Middle() {
    return (
        <MiddleView>
            <MiddleMain />
        </MiddleView>
    );
}

const MiddleView = styled.View`
    width: 100%;
    height: 65%;
`;
