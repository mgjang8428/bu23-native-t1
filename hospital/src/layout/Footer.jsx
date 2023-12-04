import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import PaitientCount from "@/contents/footercontent/PaitientCount";
import AdmissionCount from "@/contents/footercontent/AdmissionCount";

export default function Footer() {
    return (
        <FooterView style={{ elevation: 20 }}>
            <StatusView>
                <PaitientCount patientCount={20} />
            </StatusView>
            <FooterSecond>
                <AdmissionCount />
            </FooterSecond>
        </FooterView>
    );
}

const FooterView = styled.View`
    background-color: #cacaca;
    width: 100%;
    height: 15%;
    border: 2px;
    flex-direction: row;
    align-items: center;
`;

const StatusView = styled.View`
    width: 130px;
    height: 70%;
    border: 2px;
    border-radius: 15px;
    margin-left: 15px;
    background-color: #fff48e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterSecond = styled.View`
    width: 150px;
    height: 70%;
    border: 2px;
    margin-left: 15px;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
