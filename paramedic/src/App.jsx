import { StatusBar, Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme";
import Header from "@/layout/Header";
import Middle from "./layout/Middle";
import Footer from "./layout/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { NowLocationStore } from "@/stores/NowLocationStore";
import NowLocation from "./location/NowLocation";

export default function App() {
    const { setNowLocate, latitude } = NowLocationStore((state) => state);
    const [locate, setLocate] = useState();

    const changeLocate = (loc) => {
        setLocate(loc);
        console.log(locate);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <NowLocation func={changeLocate} />
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#bddaff"
                />
                <Header />
                <Middle />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    flex-direction: column;
`;
