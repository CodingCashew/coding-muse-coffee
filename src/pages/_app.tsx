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
    secondary: {
      light: "#4FD1C5",
      main: "#38B2AC",
      dark: "#319795",
    },
    tertiary: {
      light: "#4299e1",
      main: "#2b6cb0",
      dark: "#2c5282"
    }
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
