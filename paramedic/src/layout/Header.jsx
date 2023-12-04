import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Logo from "../contents/headercontent/Logo";
import ParamedicInfo from "../contents/headercontent/ParamedicInfo";
import PageChangeButton from "../contents/headercontent/PageChangeButton";
import Clock from "../contents/headercontent/Clock";

export default function Header() {
    return (
        <HeaderView>
            <HeaderTop>
                <Logo />
                <ParamedicInfo />
            </HeaderTop>
            <HeaderBottom>
                <PageChangeButton
                    buttonTitle="환자 정보"
                    pageInfo="PatientInfo"
                />
                <PageChangeButton
                    buttonTitle="병원 탐색"
                    pageInfo="HospitalList"
                />
                <Clock />
            </HeaderBottom>
        </HeaderView>
    );
}

const HeaderView = styled.View`
    background-color: #bfffc4;
    width: 100%;
    height: 20%;
    flex-direction: column;
`;

const HeaderTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderBottom = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
