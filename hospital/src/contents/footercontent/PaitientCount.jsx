import { View, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

const AdmissionStatus = (props) => {
    const [patientCount, setPaitientCount] = useState(props.patientCount);
    return (
        <View>
            <AdmissionStatuusText>{patientCount}명</AdmissionStatuusText>
        </View>
    );
};

const AdmissionStatuusText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export default AdmissionStatus;
