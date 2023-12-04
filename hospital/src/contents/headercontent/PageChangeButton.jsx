import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { PageStateStore } from "../../stores/store";

export default function PageChangeButton(props) {
    const { pageState, changePage } = PageStateStore((state) => state);
    const [buttonTitle, setButtonTitle] = useState(props.buttonTitle);
    const [pageInfo, setpageInfo] = useState(props.pageInfo);
    const [backColor, setBackColor] = useState(props.backColor);

    return (
        <Pressable onPressOut={() => changePage(pageInfo)}>
            <ButtonView backColor={backColor}>
                <ButtonText>{buttonTitle}</ButtonText>
            </ButtonView>
        </Pressable>
    );
}

const ButtonView = styled.View`
    background-color: ${(props) => props.backColor};
    width: 100px;
    height: 50px;
    border: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;
