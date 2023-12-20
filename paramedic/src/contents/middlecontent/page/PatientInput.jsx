// paramedic/src/textContents/middletextContent/page/PatientInput.jsx

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const PatientInput = () => {
    return (
        <BoxMother>
            <BoxHorizontal>
                <BoxSubTitle>
                    <Text>이름</Text>
                </BoxSubTitle>
                <BoxContent>
                    <TxtIn />
                </BoxContent>
            </BoxHorizontal>
            <BoxHorizontal>
                <BoxSubTitle>
                    <Text>응급도</Text>
                </BoxSubTitle>
                <BoxContentHalf>
                    <Text>평시</Text>
                </BoxContentHalf>
                <BoxContentHalf>
                    <Text>위급</Text>
                </BoxContentHalf>
            </BoxHorizontal>
            <BoxHorizontal>
                <BoxSubTitle>
                    <Text>상해형태</Text>
                </BoxSubTitle>
                <BoxContentHalf>
                    <Text>외상</Text>
                </BoxContentHalf>
                <BoxContentHalf>
                    <Text>내상</Text>
                </BoxContentHalf>
            </BoxHorizontal>
            <BoxHorizontal>
                <BoxSubTitle>
                    <Text>기타 의견</Text>
                </BoxSubTitle>
            </BoxHorizontal>
            <BoxHorizontal>
                <BoxContentFull>
                    <TxtIn></TxtIn>
                </BoxContentFull>
            </BoxHorizontal>
        </BoxMother>
    );
};

const BoxMother = styled.View`
    width: 100%;
    height: 100%;
    background-color: yellow;
`;
const BoxHorizontal = styled.View`
    width: 100%;
    flex-direction: row;
`;
const BoxSubTitle = styled.View`
    width: 40%;
`;
const BoxContent = styled.View`
    width: 60%;
`;
const BoxContentHalf = styled.View`
    width: 30%;
`;
const BoxContentFull = styled.View`
    width: 100%;
`;

const TxtIn = styled.TextInput`
    width: 100%;
    border: 1px solid black;
    background-color: cyan;
`;

export default PatientInput;
