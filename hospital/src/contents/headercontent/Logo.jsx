import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Logo() {
    return (
        <View>
            <LogoText>
                <Text style={{ color: "#ff0000" }}>E</Text>
                <Text style={{ color: "#0011ff" }}>A</Text>
                <Text style={{ color: "#3d3030" }}>:</Text>
                <Text style={{ color: "#7700ff" }}>H</Text>
            </LogoText>
        </View>
    );
}

const LogoText = styled.Text`
    font-size: 35px;
    font-weight: 900;
    margin-left: 10px;
`;
