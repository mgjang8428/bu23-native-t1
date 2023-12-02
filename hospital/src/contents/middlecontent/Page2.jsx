import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";

export default function Page2() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Page2</Text>
            <Button
                title="move PageList"
                onPress={() => {
                    changePage("PageList");
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
