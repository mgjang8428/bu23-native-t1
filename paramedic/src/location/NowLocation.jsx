import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import { NowLocationStore } from "@/stores/NowLocationStore";

export default function NowLocation(props) {
    const [nowLocation, setNowlocation] = useState({ lat: 0, lng: 0 });
    const [count, setCount] = useState(0);
    const { setNowLocate } = NowLocationStore((state) => state);

    useEffect(() => {
        gps();
    }, []);

    const gps = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        // console.log("do");
        let locate = { lat: location.coords.latitude, lng: location.coords.longitude };
        setNowlocation(locate);
        setNowLocate(locate.lat, locate.lng);
        // console.log(locate);
    };

    Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Balanced, timeInterval: 1000, distanceInterval: 5 },
        (callBack) => {
            const { latitude, longitude } = callBack.coords;
            const location = { lat: latitude, lng: longitude };
            // console.log(location);
            setNowlocation(location);
            setNowLocate(latitude, longitude);
            // setCount(count + 1);
        },
    );

    return <View></View>;
}

// if (errorMsg) {
//     text = errorMsg;
// } else if (location) {
//     // latitude = location.coords.latitude;
//     // longitude = location.coords.longitude;
//     text = JSON.stringify(location);
//     setNowLocate(location.coords.latitude, location.coords.longitude);
// }
// }
