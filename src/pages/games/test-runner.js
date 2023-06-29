import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function TestRunner() {
  return (
    <Container minH="xl" minW="100%" bgColor="black">
      <Head>
        <title>TestRunner</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container mt={20} >
        <Container minW="4xl" bgColor="red">

        </Container>
      </Container>
    </Container>
  );
}
