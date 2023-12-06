import haversine from "haversine";

export const CalcDistance = (location1, location2) => {
    let distance = haversine(location1, location2, { unit: "km" });
    //toFixed 소수점 계산
    return distance.toFixed(2);
};
