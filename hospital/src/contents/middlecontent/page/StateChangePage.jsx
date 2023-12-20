import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getHospitalInfo, postHospitalInfo } from "@/api/netConnect";

import ChangeStateToNetButton from "./statechangepagecontents/ChangeStateToNetButton";

export default function StateChangePage() {
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

    const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [maxCount, setmaxCount] = useState();
    const [avalableCount, setavalableCount] = useState();

    useEffect(() => {
        const getFetch = async () => {
            data = await getHospitalInfo();
            setInfoData(data);
            console.log(data);
            setName(data.name);
            setAdress(data.adress);
            setmaxCount(data.maxPatientConut);
            setavalableCount(data.availablePaitientCount);
        };

        getFetch().catch((error) => console.log(error));
    }, []);

    const buttonClick = () => {
        const postFetch = async (data) => {
            await postHospitalInfo(data);
        };

        let data = {
            name: name,
            adress: adress,
            availablePaitientCount: Number(avalableCount),
            maxCount: Number(maxCount),
        };

        console.log(data);

        postFetch(data);

        console.log("ihi");
    };

    return (
        <PageView>
            <TitleText>병원 상태 수정</TitleText>
            <ContentView>
                <ContentTextTitle>병원 이름: </ContentTextTitle>
                <ContentTextContent
                    onChangeText={(text) => {
                        setName(text);
                    }}
                >
                    {infoData.name}
                </ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>주소: </ContentTextTitle>
                <ContentTextContent
                    onChangeText={(text) => {
                        setAdress(text);
                    }}
                >
                    {infoData.adress}
                </ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>총 입원 가능 인원: </ContentTextTitle>
                <ContentTextContent
                    onChangeText={(text) => {
                        setmaxCount(text);
                    }}
                >
                    {infoData.maxPatientConut}
                </ContentTextContent>
            </ContentView>
            <ContentView>
                <ContentTextTitle>현재 입원 가능 인원: </ContentTextTitle>
                <ContentTextContent
                    onChangeText={(text) => {
                        setavalableCount(text);
                    }}
                >
                    {infoData.availablePaitientCount}
                </ContentTextContent>
            </ContentView>

            <ChangeStateToNetButton func={buttonClick} />
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

    margin-bottom: 10px;
`;

const ContentTextTitle = styled.Text`
    flex-direction: row;
    justify-content: flex-end;
    width: 170px;
    font-size: 18px;
    font-weight: bold;
`;

const ContentTextContent = styled.TextInput`
    width: 180px;
    height: 30px;
    border: 2px solid black;
    font-size: 16px;
    margin-bottom: 10px;
`;
