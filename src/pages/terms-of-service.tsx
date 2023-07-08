import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <Container minH="xl">
      <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <Container mt={20}>
        <Text>
          This is the Terms of Service page for American English for Devs
        </Text>
      </Container>
    </Container>
  );
}
