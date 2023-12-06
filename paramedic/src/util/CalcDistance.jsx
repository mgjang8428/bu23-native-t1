import { harversine } from "haversine";

export const CalcDistance = (firstLocate, secondLocate) => {
    return harversine(firstLocate, secondLocate);
};
