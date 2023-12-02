import { View, Text, Button } from "react-native";
import React from "react";
import { MiddlePageStateStore } from "@/stores/store";

export default function Page3() {
    const { middlePageState, changePage } = MiddlePageStateStore((state) => state);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Page3</Text>
            <Button
                title="move PageList"
                onPress={() => {
                    changePage("PageList");
                }}
            />
            <Button
                title="move Page2"
                onPress={() => {
                    changePage("Page2");
                }}
            />
        </View>
    );
}
