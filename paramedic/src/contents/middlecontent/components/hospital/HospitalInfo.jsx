import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

export default function HospitalInfo() {
    return (
        <HospitalInfoView>
            <HospitalNameView>
                <HospitalName>서울대학 병원</HospitalName>
            </HospitalNameView>
            <HospitalSecondView>
                <HospitalPaitientView>
                    <PaitientTitle>수용가능 환자:</PaitientTitle>
                    <PaitientCount>0명</PaitientCount>
                </HospitalPaitientView>
                <HospitalDistanceView>
                    <HospitalDistance>5.3</HospitalDistance>
                    <HospitalDistanceForm>KM</HospitalDistanceForm>
                </HospitalDistanceView>
            </HospitalSecondView>
        </HospitalInfoView>
    );
}

const HospitalInfoView = styled.View`
    /* background-color: #914a4a; */
    width: 240px;
    margin-left: 10px;
    margin-right: 15px;
    flex-direction: column;
`;

const HospitalNameView = styled.View`
    /* background-color: #cf8a8a; */
    margin-bottom: 10px;
`;

const HospitalName = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

const HospitalSecondView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const HospitalPaitientView = styled.View`
    /* background-color: #87ff97; */
    flex-direction: row;
`;

const PaitientTitle = styled.Text`
    font-size: 16px;
`;

const PaitientCount = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const HospitalDistanceView = styled.View`
    flex-direction: row;
`;

const HospitalDistance = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const HospitalDistanceForm = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;