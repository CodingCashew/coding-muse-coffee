import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import { Inter } from 'next/font/google'
// import Footer from "../components/footer";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      light: "#C53030",
      main: "#9B2C2C",
      dark: "#822727",
    },
    secondary: {
      light: "#ECC94B",
      main: "#D69E2E",
      dark: "#B7791F",
    },
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
