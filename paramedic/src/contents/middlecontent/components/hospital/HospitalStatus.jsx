import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

export default function HospitalStatus(props) {
    const [isAvalable, setIsAvalable] = useState(true);
    const [textInfo, setTextInfo] = useState("입원 가능");

    console.log(props.hospitalAvailable);

    useEffect(() => {
        if (props.hospitalAvailable == 0) {
            setIsAvalable(false);
            setTextInfo("입원 불가");
        }
    }, []);

    return (
        <HospitalStatusView style={{ backgroundColor: isAvalable ? "green" : "red" }}>
            <Text>{textInfo}</Text>
        </HospitalStatusView>
    );
}

const HospitalStatusView = styled.View`
    width: 25%;
    height: 70%;
    border: 2px;
    justify-content: center;
    align-items: center;
`;
