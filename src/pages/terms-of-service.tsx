import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <Container minH="xl">
      <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Text>
        This is the Terms of Service page for American English for Devs
      </Text>
    </Container>
  );
}
