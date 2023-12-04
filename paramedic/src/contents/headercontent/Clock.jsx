import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

export default function Clock() {
    const [nowTime, setNowTime] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => {
            setNowTime(new Date());
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, [nowTime]);

    return (
        <ClockView>
            <ClockText>
                {nowTime.getHours()} : {nowTime.getMinutes()} : {nowTime.getSeconds()}
            </ClockText>
        </ClockView>
    );
}

const ClockView = styled.View`
    background-color: #9191b1;
    width: 120px;
    height: 50px;
    border: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ClockText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: white;
`;
