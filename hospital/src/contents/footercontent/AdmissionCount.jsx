import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

export default function AdmissionCount() {
    return (
        <MainView>
            <TitleView>
                <Text>입원</Text>
                <Text>상태</Text>
            </TitleView>
            <CountMainView>
                <CountView>
                    <CountNameView>
                        <Text>요청</Text>
                    </CountNameView>
                    <CountNumView>
                        <Text>3</Text>
                    </CountNumView>
                </CountView>
                <CountView>
                    <CountNameView>
                        <Text>진행</Text>
                    </CountNameView>
                    <CountNumView>
                        <Text>1</Text>
                    </CountNumView>
                </CountView>
            </CountMainView>
        </MainView>
    );
}

const MainView = styled.View`
    flex-direction: row;
`;

const TitleView = styled.View`
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    border: 1px;
`;

const CountMainView = styled.View`
    background-color: #33ff00;
    flex-direction: column;
    width: 60%;
    height: 100%;
`;

const CountView = styled.View`
    background-color: #1a3b12;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
`;

const CountNameView = styled.View`
    background-color: #6ecaff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border: 1px;
`;

const CountNumView = styled.View`
    background-color: #ff8800;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border: 1px;
`;
