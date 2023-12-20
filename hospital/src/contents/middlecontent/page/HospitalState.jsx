import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";

import { getHospitalInfo } from "@/api/netConnect";

import StateChangeButton from "./hospitalstatecontents/StateChangeButton";

export default function HospitalState() {
    const [infoData, setInfoData] = useState({
        number: 0,
        name: "",
        adress: "",
        lat: 0,
        lng: 0,
        availablePaitientCount: 0,
        maxPatientConut: 0,
        open: false,
        status: false,
    });

    useEffect(() => {
        const getFetch = async () => {
            data = await getHospitalInfo();
            setInfoData(data);
            console.log(data);
        };

        getFetch();
    }, []);

    return (
        <PageView>
            <TitleText>현재 병원 상태</TitleText>
            <ContentView>
                <ContentTextTitle>병원 이름: </ContentTextTitle>
                <ContentTextContent>{infoData.name}</ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>주소: </ContentTextTitle>
                <ContentTextContent>{infoData.adress}</ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>총 입원 가능 인원: </ContentTextTitle>
                <ContentTextContent>{infoData.maxPatientConut}</ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>현재 입원 가능 인원: </ContentTextTitle>
                <ContentTextContent>{infoData.availablePaitientCount}</ContentTextContent>
            </ContentView>

            <StateChangeButton />
        </PageView>
    );
}

const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
    margin: 30px;
`;

const TitleText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 25px;
`;

const ContentView = styled.View`
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 10px;
`;

const ContentTextTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const ContentTextContent = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;
