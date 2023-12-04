import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Logo from "../contents/headercontent/Logo";
import ParamedicInfo from "../contents/headercontent/ParamedicInfo";
import PageChangeButton from "../contents/headercontent/PageChangeButton";
import Clock from "../contents/headercontent/Clock";

export default function Header() {
    return (
        <HeaderView style={{ elevation: 20 }}>
            <HeaderTop>
                <Logo />
                <ParamedicInfo />
            </HeaderTop>
            <HeaderBottom>
                <PageChangeButton
                    buttonTitle="환자 정보"
                    pageInfo="PatientInfo"
                    backColor="#b3c1ff"
                />
                <PageChangeButton
                    buttonTitle="병원 탐색"
                    pageInfo="HospitalList"
                    backColor="#ffaaaa"
                />
                <Clock />
            </HeaderBottom>
        </HeaderView>
    );
}

const HeaderView = styled.View`
    background-color: #b5f1bd;
    width: 100%;
    height: 20%;
    flex-direction: column;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const HeaderTop = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
`;

const HeaderBottom = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 35px;
`;
