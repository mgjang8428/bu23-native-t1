import { View, Text, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function Hospital() {
    return (
        <Pressable
            onPress={() => {
                console.log("PressHospital");
            }}
        >
            <HospitalView>
                <Text>Hospital</Text>
            </HospitalView>
        </Pressable>
    );
}

const HospitalView = styled.View`
    width: 100%;
    height: 100px;
    border: 2px;
    margin-bottom: 10px;
`;
