import { MiddlePageStateStore } from "@/stores/store";
import { View, Text, Button } from "react-native";
import React from "react";
import PageList from "./page/PageList";
import Page2 from "./page/Page2";
import Page3 from "./page/Page3";

export default function MiddleMain() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    switch (middlePageState) {
        case "PageList": {
            return <PageList />;
        }
        case "Page2": {
            return <Page2 />;
        }
        case "Page3": {
            return <Page3 />;
        }
    }
}
