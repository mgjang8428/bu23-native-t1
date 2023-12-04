import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function ParamedicInfo() {
    return (
        <ParamedicInfoView>
            <ParamedicName>홍길동</ParamedicName>
            <ParamedicForm>대원</ParamedicForm>
        </ParamedicInfoView>
    );
}

const ParamedicInfoView = styled.View`
    flex-direction: row;
`;

const ParamedicName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
`;

const ParamedicForm = styled.Text`
    font-size: 18px;
    margin-left: 5px;
`;
