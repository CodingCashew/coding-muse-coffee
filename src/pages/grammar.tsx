import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Grammar() {
  return (
    <Container minH="xl">
      <Head>
        <title>Grammar Practice</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container mt={20}>
        <Text>
          This is the Grammar Practice page for American English for Devs
        </Text>
      </Container>
    </Container>
  );
}
