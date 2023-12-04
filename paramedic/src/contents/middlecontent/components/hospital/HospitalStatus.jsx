import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function HospitalStatus() {
    return (
        <HospitalStatusView>
            <Text>입원 가능</Text>
        </HospitalStatusView>
    );
}

const HospitalStatusView = styled.View`
    background-color: #94ff79;
    width: 25%;
    height: 70%;
    border: 2px;
    justify-content: center;
    align-items: center;
`;
