import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import HospitalInfo from "./HospitalInfo";
import HospitalStatus from "./HospitalStatus";
import HospitalInfoButton from "./HospitalInfoButton";
import HospitalAdmissionButton from "./HospitalAdmissionButton";

export default function Hospital(props) {
    const [hospitalNum, setHospitalNum] = useState(props.hospitalNum);
    const [selected, setSelected] = useState(false);
    return (
        <Pressable
            onPress={() => {
                //console.log("PressHospital : " + selected);
                selected ? setSelected(false) : setSelected(true);
            }}
        >
            <HospitalView selected={selected}>
                <HospitalMain>
                    <HospitalInfo
                        hospitalName={props.hospitalName}
                        hospitalDistance={props.hospitalDistance}
                    />
                    <HospitalStatus />
                </HospitalMain>
                {selected ? (
                    <HospitalExtra>
                        <HospitalInfoButton />
                        <HospitalAdmissionButton />
                    </HospitalExtra>
                ) : (
                    <View></View>
                )}
            </HospitalView>
        </Pressable>
    );
}

const HospitalView = styled.View`
    width: 380px;
    height: ${(props) => (props.selected ? "170px" : "100px")};
    border: 2px;
    border-color: ${(props) => (props.selected ? "#6dffa5" : "#000000")};
    margin: 5px;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
`;

const HospitalMain = styled.View`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
`;

const HospitalExtra = styled.View`
    width: 90%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
