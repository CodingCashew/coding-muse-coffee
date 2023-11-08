import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { AccountProvider } from "@/context/AccountContext";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#DCAB83",
      main: "#B77A4D",
      dark: "#7A2E20",
    },
    secondary: {
      light: "#c0b1f4",
      main: "#a484c7",
      dark: "#61447e",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ShoppingCartProvider>
        <AccountProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </AccountProvider>
      </ShoppingCartProvider>
    </ChakraProvider>
  );
}
