import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export default function HospitalListHeader() {
    const [sel, setSel] = useState(0);
    return (
        <PageHeaderView>
            <HeaderName>병원 탐색</HeaderName>
            <View style={{ flexDirection: "row" }}>
                <Text>정렬:</Text>
                <Picker
                    style={styles.pickerSelectStyles}
                    selectedValue={sel}
                    onValueChange={(value, index) => {
                        setSel(value);
                        console.log("sel value: " + sel);
                    }}
                >
                    <Picker.Item
                        label="1"
                        value="123"
                    />
                    <Picker.Item
                        label="2"
                        value="421"
                    />
                    <Picker.Item
                        label="3"
                        value="662"
                    />
                    <Picker.Item
                        label="4"
                        value="115"
                    />
                </Picker>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text>새로고침:</Text>
                <View style={{ width: 100, height: 20, backgroundColor: "#ffffff" }}></View>
            </View>
        </PageHeaderView>
    );
}

const PageHeaderView = styled.View`
    background-color: #e3b3ff;
    width: 100%;
    height: 10%;
    margin-top: 10px;
    border: 2px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const HeaderName = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
`;

const styles = StyleSheet.create({
    pickerSelectStyles: {
        backgroundColor: "#ffffff",
        fontSize: 3,
        height: 30,
        width: 100,
        color: "#000000",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 12,
    },
});
