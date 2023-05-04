import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <Container minH="xl">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Text>This is the Privacy Policy page for American English for Devs</Text>
    </Container>
  );
}
