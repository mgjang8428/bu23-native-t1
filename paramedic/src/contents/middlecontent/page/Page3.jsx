import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { testGet, testPost, getAllHospitalInfo } from "@/api/netConnect";
import NowLocation from "@/location/NowLocation";
import { NowLocationStore } from "@/stores/NowLocationStore";
import { CalcDistance } from "@/util/CalcDistance";
import haversine from "haversine";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";

export default function Page3() {
    const { latitude, longitude } = NowLocationStore((state) => state);
    // const [lati, setlati] = useState(latitude);
    const a = { latitude: 37.4851918, longitude: 126.8518642 };
    const b = { latitude: 37.6851918, longitude: 126.8518642 };
    let dis = CalcDistance(a, b);
    return (
        <PageView>
            <Text style={{ fontSize: 30 }}>Page3</Text>
            <Button
                title="Test"
                onPress={async () => {
                    let data = await getAllHospitalInfo();
                }}
            />
            <Text>{latitude}</Text>
            <Text>{longitude}</Text>
            <MapView
                style={{ width: 500, height: 500 }}
                initialRegion={{
                    latitude: 37.4851492,
                    longitude: 126.8519112,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                provider={PROVIDER_GOOGLE}
            ></MapView>
        </PageView>
    );
}
const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
