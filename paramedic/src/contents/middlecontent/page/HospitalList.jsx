import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
//import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";
import Hospital from "../components/hospital/Hospital";
import HospitalListHeader from "../components/hospitallistheader/HospitalListHeader";
import { HospitalInfoStore } from "@/stores/HospitalInfoStore";
import { CalcDistance } from "@/util/CalcDistance";
import { NowLocationStore } from "@/stores/NowLocationStore";

export default function Page1() {
    const { hospitalInfo, hospitalDistance, setDistance } = HospitalInfoStore((state) => state);
    const { onlineGpsStatus, latitude, longitude } = NowLocationStore((state) => state);

    const doDistance = () => {
        hospitalInfo.map((info) => {
            //console.log("hospitalLta: " + info.hospitalLat);
            let nowLocation = { latitude: latitude, longitude: longitude };
            let hospitalLocation = { latitude: info.hospitalLat, longitude: info.hospitalLng };
            let dis = Number(CalcDistance(nowLocation, hospitalLocation));
            let disObj = Object(hospitalDistance);
            //console.log("distance: " + dis);
            disObj[info.hospitalNum] = Number(dis);
            //console.log("tttt: " + typeof disObj[info.hospitalNum]);
            setDistance(disObj);
        });
        //console.log("result: " + hospitalDistance[3]);
    };

    // if (onlineGpsStatus == true) {
    useEffect(() => {
        doDistance();
    }, [latitude, longitude]);
    // setInterval(() => {

    //     console.log("dodo");
    // }, 5000);
    // }

    return (
        <View>
            <HospitalListHeader />
            <PageScroll>
                {hospitalInfo.map((info) => (
                    <Hospital
                        key={"s_h" + info.hospitalNum}
                        hospitalNum={info.hospitalNum}
                        hospitalName={info.hospitalName}
                        hospitalDistance={hospitalDistance[info.hospitalNum]}
                    />
                ))}
            </PageScroll>
        </View>
    );
}

const ListMainView = styled.View`
    width: 100%;
    height: 100%;
`;

const PageScroll = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        alignItems: "center",
    },
}))`
    width: 100%;
    height: 90%;
`;
