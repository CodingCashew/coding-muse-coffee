import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import { Inter } from 'next/font/google'
// import Footer from "../components/footer";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#ED64A6",
      main: "#D53F8C",
      dark: "#97266D",
    },
    secondary: {
      light: "#ECC94B",
      main: "#D69E2E",
      dark: "#ED8936",
    },
    tertiary: {
      light: "#9F7AEA",
      main: "#805AD5",
      dark: "#553C9A"
    },
    // primary: {
    //   light: "#C53030",
    //   main: "#9B2C2C",
    //   dark: "#822727",
    // },
    // secondary: {
    //   light: "#ECC94B",
    //   main: "#D69E2E",
    //   dark: "#B7791F",
    // },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  )
}
