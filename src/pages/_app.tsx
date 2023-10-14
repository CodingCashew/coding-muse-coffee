import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import { Inter } from 'next/font/google'
import Footer from "../components/Footer";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: true,
// }

const theme = extendTheme({
  colors: {
    primary: {
      light: "#DCAB83",
      main: "#B77A4D",
      dark: "#7A2E20",
      // light: "#B77A4D",
      // main: "#7A2E20",
      // dark: "#34211D",
    },
    secondary: {
      light: "#c0b1f4",
      main: "#a484c7",
      dark: "#61447e",
      // light: "#7C5969",
      // main: "#54384B",
      // dark: "#382130",
    },
    // secondary: {
    //   // light: "#DCAB83",
    //   light: "#7CC0F7",
    //   main: "#5C8EB8",
    //   dark: "#36546C",
    //   // light: "#5C8EB8",
    //   // main: "#36546C",
    //   // dark: "#183346",
    // },
  },
  // config: {
  //   initialColorMode: 'dark',
  // }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ShoppingCartProvider>
      <Navbar  />
      {/* <Navbar {...pageProps}  /> */}
      <Component {...pageProps} />
      <Footer />
      </ShoppingCartProvider>
    </ChakraProvider>
  )
}
