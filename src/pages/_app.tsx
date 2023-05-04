import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import { Inter } from 'next/font/google'
import Footer from "../components/Footer";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#00B5D8",
      dark: "#0987A0",
      main: "#086F83",
    },
    // secondary: {
    //   light: "#68D391",
    //   main: "#48BB78",
    //   dark: "#38A169",
    // },
    secondary: {
      light: "#4FD1C5",
      main: "#38B2AC",
      dark: "#319795",
    },
    // primary: {
    //   light: "#ED64A6",
    //   main: "#D53F8C",
    //   dark: "#97266D",
    // },
    // secondary: {
    //   light: "#ECC94B",
    //   main: "#D69E2E",
    //   dark: "#ED8936",
    // },
    tertiary: {
      light: "#805AD5",
      main: "#6B46C1",
      dark: "#553C9A"
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ShoppingCartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </ShoppingCartProvider>
    </ChakraProvider>
  )
}
