import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
//import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";
import Hospital from "../components/hospital/Hospital";
import HospitalListHeader from "../components/hospitallistheader/HospitalListHeader";
import { HospitalInfoStore } from "@/stores/HospitalInfoStore";
import { CalcDistance } from "@/util/CalcDistance";
import { NowLocationStore } from "@/stores/NowLocationStore";

import { getAllHospitalInfo } from "@/api/netConnect";

export default function Page1() {
    const { hospitalInfo, hospitalDistance, setDistance } = HospitalInfoStore((state) => state);
    const { onlineGpsStatus, latitude, longitude } = NowLocationStore((state) => state);

    const [hospitalList, setHospitalList] = useState([
        {
            number: 0,
            name: "",
            adress: "",
            lat: 0,
            lng: 0,
            availablePaitientCount: 0,
            maxPatientConut: 0,
            open: false,
            status: false,
        },
    ]);

    useEffect(() => {
        const getHospitalList = async () => {
            let data = await getAllHospitalInfo();
            setHospitalList(data);
            console.log("DDDD", data);
        };

        getHospitalList();
    }, []);

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

    //         number: 0,
    //         name: "",
    //         adress: "",
    //         lat: 0,
    //         lng: 0,
    //         availablePaitientCount: 0,
    //         maxPatientConut: 0,
    //         open: false,
    //         status: false,

    return (
        <View>
            <HospitalListHeader />
            <PageScroll>
                {hospitalList.map((info) => (
                    <Hospital
                        allInfo={info}
                        key={"s_h" + info.number}
                        hospitalNum={info.number}
                        hospitalName={info.name}
                        hospitalDistance={hospitalDistance[info.number]}
                        hospitalAvailable={info.availablePaitientCount}
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
