import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { MiddlePageStateStore } from "@/stores/store";
import styled from "styled-components/native";
import { produce } from "immer";
import Modal from "react-native-modal";

const LIST = [
    { name: "홍길동", isChecked: false },
    { name: "홍길동2", isChecked: false },
    { name: "홍길동3", isChecked: false },
    { name: "홍길동4", isChecked: false },
    { name: "홍길동5", isChecked: false },
];

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    btnTxt: {
        fontSize: 18,
        textAlign: "center",
        color: "#fff",
        fontWeight: "500",
    },
    contents: {
        fontSize: 11,
        color: "#444",
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        color: "#000",
    },
    btnContainer: {
        height: 45,
        backgroundColor: "#378EFFFF",
        marginTop: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 28,
        width: 200,
        alignSelf: "center",
    },
});

export default function AdmissionRequestList() {
    const [list, setList] = useState(LIST);
    const [isModal, setIsModal] = useState(false);

    const handlePress = (item) => {
        setList(
            produce((draft) => {
                const filter = draft.filter((v) => v.name === item.name)[0];
                filter.isChecked = !filter.isChecked;
            }),
        );
        console.log(item);
    };

    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handlePress(item)}
                    style={{ borderWidth: 1, borderRadius: 12, paddingVertical: 12 }}
                >
                    <View style={{ paddingHorizontal: 12 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 12 }}>김길동 대원</Text>
                                <View style={{ height: 5 }} />
                                <Text style={{ fontSize: 18, color: "#000", fontWeight: "400" }}>홍길동 환자</Text>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    width: 100,
                                    height: 35,
                                    borderRadius: 8,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text>10:22:32</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <View
                                style={{ borderWidth: 1, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 3 }}
                            >
                                <Text>#123123</Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal: 14,
                                    paddingVertical: 5,
                                    backgroundColor: "#FF8B37FF",
                                    borderRadius: 6,
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>위험</Text>
                            </View>
                        </View>
                    </View>
                    {item?.isChecked ? (
                        <>
                            <View style={{ height: 0.5, backgroundColor: "#aaa", marginTop: 12, marginBottom: 12 }} />
                            <View
                                style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 12 }}
                            >
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setIsModal(true);
                                    }}
                                    style={{
                                        paddingHorizontal: 30,
                                        paddingVertical: 10,
                                        backgroundColor: "#FFBE1AFF",
                                        borderRadius: 6,
                                    }}
                                >
                                    <Text style={{ fontSize: 18 }}>정보</Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        paddingHorizontal: 30,
                                        paddingVertical: 10,
                                        backgroundColor: "#378EFFFF",
                                        borderRadius: 6,
                                    }}
                                >
                                    <Text style={{ fontSize: 18 }}>수락</Text>
                                </View>
                                <View
                                    style={{
                                        paddingHorizontal: 30,
                                        paddingVertical: 10,
                                        backgroundColor: "#FF8B37FF",
                                        borderRadius: 6,
                                    }}
                                >
                                    <Text style={{ fontSize: 18 }}>거절</Text>
                                </View>
                            </View>
                        </>
                    ) : null}
                </TouchableOpacity>
            </>
        );
    };

    return (
        <View>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item, index) => `m${index}`}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
            />

            <Modal
                isVisible={isModal}
                onBackdropPress={() => setIsModal(false)}
                onBackButtonPress={() => setIsModal(false)}
                style={{ paddingHorizontal: 33, margin: 0 }}
                hideModalContentWhileAnimating={true}
                useNativeDriver={true}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => setIsModal(false)}
                        style={{ alignSelf: "flex-end" }}
                    >
                        <Image
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQGCWQev3L7xSsrvIUzNigHdX1H8w1t9PMMA&usqp=CAU",
                            }}
                            width={26}
                            height={26}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 5 }} />
                    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
                        <View style={{ height: 15 }} />
                        <Text style={styles.title}>환자 정보</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
                        <View style={{ height: 15 }} />
                        <Text style={{ fontSize: 16, lineHeight: 24 }}>
                            홍길동의 활약은 마을, 군대, 국가 단위로 이루어지는 경우가 많기에, 외국의 전설에 나오는
                            도적들과 비교해도 스케일이 큰 편이다. 단, 수호전은 두령만 108명이고 졸개는 만 단위로
                            물량에서 비교가 안 된다. 중국은 자국 내 다툼조차 웬만한 국가 간의 큰 전쟁 규모라서 그럴 수
                            밖에 없다.
                        </Text>
                    </View>
                    <View style={{ height: 15 }} />
                    <TouchableOpacity
                        onPress={() => setIsModal(false)}
                        style={styles.btnContainer}
                    >
                        <Text style={styles.btnTxt}>상세정보보기</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const PageView = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
