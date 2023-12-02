import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";

export default function Page1() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>PageList</Text>
            <Button
                title="move Page2"
                onPress={() => {
                    changePage("Page2");
                }}
            />
            <Button
                title="move Page3"
                onPress={() => {
                    changePage("Page3");
                }}
            />
        </View>
    );
}
