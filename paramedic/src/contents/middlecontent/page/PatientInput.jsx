// paramedic/src/textContents/middletextContent/page/PatientInput.jsx

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const PatientInput = () => {
    return (
        <BoxMother>
            <BoxHorTitle>
                <BoxContentFull>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>환자 정보 입력</Text>
                </BoxContentFull>
            </BoxHorTitle>
            <BoxHor>
                <BoxSubTitle>
                    <Txt24>이름</Txt24>
                </BoxSubTitle>
                <BoxContent>
                    <TxtIn placeholder="환자 이름" />
                </BoxContent>
            </BoxHor>
            <BoxHor>
                <BoxSubTitle>
                    <Txt24>응급도</Txt24>
                </BoxSubTitle>
                <BoxContentHalf>
                    <Txt24>평시</Txt24>
                </BoxContentHalf>
                <BoxContentHalf>
                    <Txt24>위급</Txt24>
                </BoxContentHalf>
            </BoxHor>
            <BoxHor>
                <BoxSubTitle>
                    <Txt24>상해형태</Txt24>
                </BoxSubTitle>
                <BoxContentHalf>
                    <Txt24>외상</Txt24>
                </BoxContentHalf>
                <BoxContentHalf>
                    <Txt24>내상</Txt24>
                </BoxContentHalf>
            </BoxHor>
            <BoxHor>
                <BoxSubTitle>
                    <Txt24>기타 의견</Txt24>
                </BoxSubTitle>
            </BoxHor>
            <BoxHorFlex2>
                <BoxContentFull>
                    <TxtIn
                        multiline
                        textAlignVertical="top"
                        numberOfLines={4}
                    />
                </BoxContentFull>
            </BoxHorFlex2>
            <BoxHorFlex2>
                <BoxBtn>
                    <BtnTouch>
                        <BtnTitle>
                            <Txt24>취소</Txt24>
                        </BtnTitle>
                    </BtnTouch>
                    <BtnTouch>
                        <BtnTitle>
                            <Txt24>입력</Txt24>
                        </BtnTitle>
                    </BtnTouch>
                </BoxBtn>
            </BoxHorFlex2>
        </BoxMother>
    );
};

const BoxMother = styled.View`
    width: 100%;
    height: 100%;
    background-color: snow;
`;
const BoxHor = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    margin: 5px 0;
    padding: 0 10px;
`;
const BoxHorTitle = styled(BoxHor)`
    background-color: gainsboro;
    margin: 0;
    padding: 4px 10px;
`;
const BoxHorFlex2 = styled(BoxHor)`
    flex: 2;
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
const BoxBtn = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const Txt24 = styled.Text`
    font-size: 24px;
`;

const TxtIn = styled.TextInput`
    width: 100%;
    border: 1px solid black;
    background-color: whitesmoke;
    font-size: 24px;
`;

const BtnTouch = styled.TouchableOpacity`
    width: 100px;
    border: 3px solid black;
    border-radius: 10px;
    background-color: lightgray;
    justify-items: center;
    align-items: center;
`;
const BtnTitle = styled.Text`
    font-weight: bold;
    color: black;
`;

export default PatientInput;
