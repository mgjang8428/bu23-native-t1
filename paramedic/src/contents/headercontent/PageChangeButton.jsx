import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { PageStateStore } from "../../stores/store";

export default function PageChangeButton(props) {
    const { pageState, changePage } = PageStateStore((state) => state);
    const [buttonTitle, setButtonTitle] = useState(props.buttonTitle);
    const [pageInfo, setpageInfo] = useState(props.pageInfo);

    return (
        <Pressable onPressOut={() => changePage(pageInfo)}>
            <ButtonView>
                <Text>{buttonTitle}</Text>
            </ButtonView>
        </Pressable>
    );
}

const ButtonView = styled.View`
    width: 100px;
    height: 50px;
    border: 3px;
    justify-content: center;
    align-items: center;
`;
