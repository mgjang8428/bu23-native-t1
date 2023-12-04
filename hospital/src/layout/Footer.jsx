import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import AdmissionStatus from "../contents/footercontent/AdmissionStatus";
import PaitientSimpleInfo from "../contents/footercontent/PaitientSimpleInfo";
import ElapsedTime from "../contents/footercontent/ElapsedTime";
import HospitalStatus from "../contents/footercontent/HospitalStatus";

export default function Footer() {
    return (
        <FooterView style={{ elevation: 20 }}>
            <StatusView>
                <AdmissionStatus />
            </StatusView>
            <FooterSecond>
                <FooterTopView>
                    <PaitientSimpleInfo />
                    <ElapsedTime />
                </FooterTopView>
                <FooterBottomView>
                    <HospitalStatus />
                </FooterBottomView>
            </FooterSecond>
        </FooterView>
    );
}

const FooterView = styled.View`
    background-color: #b19cff;
    width: 100%;
    height: 15%;
    border: 2px;
    flex-direction: row;
`;

const StatusView = styled.View`
    width: 25%;
    height: 100%;
    background-color: #fff48e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterSecond = styled.View`
    width: 75%;
    height: 100%;
    flex-direction: column;
`;

const FooterTopView = styled.View`
    background-color: #d38f8f;
    width: 100%;
    height: 50%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FooterBottomView = styled.View`
    background-color: #c5ffe4;
    width: 100%;
    height: 50%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
