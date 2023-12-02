import { MiddlePageStateStore } from "@/stores/store";
import { View, Text, Button } from "react-native";
import React from "react";
import PageList from "./PageList";
import Page2 from "./Page2";
import Page3 from "./Page3";

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
