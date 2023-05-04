import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from 'next/head'

export default function Faq() {
  return (
    <Container minH="xl">
      <Head>
        <title>FAQs</title>
      </Head>
      <Text>Frequently Asked Questions</Text>
    </Container>
  );
}
