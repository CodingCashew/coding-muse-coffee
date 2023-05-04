import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <Container minH="xl">
      <Head>
        <title>About</title>
      </Head>
      <Text>About American English for Devs</Text>
    </Container>
  );
}
