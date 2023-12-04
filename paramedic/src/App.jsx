import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "@/theme";
import Header from "@/layout/Header";
import Middle from "./layout/Middle";
import Footer from "./layout/Footer";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="white"
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
