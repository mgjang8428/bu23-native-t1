import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

export default function ElapsedTime() {
    const [elapsedTime, setElapsedTime] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => {
            setElapsedTime(new Date());
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, [elapsedTime]);

    return (
        <ElapsedTimeView>
            <Title>경과 시간:</Title>
            <Contents>
                {elapsedTime.getHours()} : {elapsedTime.getMinutes()} : {elapsedTime.getSeconds()}
            </Contents>
        </ElapsedTimeView>
    );
}

const ElapsedTimeView = styled.View`
    flex-direction: row;
    margin-right: 7px;
`;
const Title = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;
const Contents = styled.Text`
    width: 80px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 4px;
`;
