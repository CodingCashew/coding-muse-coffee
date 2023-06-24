import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Articles() {
  return (
    <Container minH="xl">
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container mt={20}>
        <Text>
          This is the Articles page for American English for Devs
        </Text>
      </Container>
    </Container>
  );
}
