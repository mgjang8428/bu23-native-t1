import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

import { postRequest } from "@/api/netConnect";

export default function HospitalAdmissionButton(props) {
    const [number, setNumber] = useState(props.hospitalNum);
    const [paitientNum, setPaitientNum] = useState(1);
    const [paramedicNum, setParamedicNum] = useState(1);
    const [grade, setGrade] = useState(1);

    const [send, setSend] = useState({
        hospitalNum: number,
        paitientNum: paitientNum,
        paramedicNum: paramedicNum,
        grade: grade,
    });

    return (
        <AdmissionButtonView
            onPress={() => {
                postRequest(send);
            }}
        >
            <ButtonTitle>입원 요청</ButtonTitle>
        </AdmissionButtonView>
    );
}

const AdmissionButtonView = styled.Pressable`
    background-color: #fbffbe;
    width: 100px;
    height: 45px;
    border: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ButtonTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
