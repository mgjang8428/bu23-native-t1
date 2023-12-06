import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { testGet, testPost } from "@/api/netConnect";
import NowLocation from "@/location/NowLocation";
import { NowLocationStore } from "@/stores/NowLocationStore";
import { CalcDistance } from "@/util/CalcDistance";

export default function Page3() {
    const { latitude, longitude } = NowLocationStore((state) => state);
    // const [lati, setlati] = useState(latitude);
    return (
        <PageView>
            <Text style={{ fontSize: 30 }}>Page3</Text>
            <Button
                title="Test"
                onPress={() => {
                    testPost();
                }}
            />
            <Text>{latitude}</Text>
            <Text>{longitude}</Text>
        </PageView>
    );
}
const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
