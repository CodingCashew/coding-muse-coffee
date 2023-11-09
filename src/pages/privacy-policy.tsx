import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
      <Container minH="xl">
        <Head>
          <title>Privacy Policy</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Container mt={20}>
          <Text fontSize="xl" color="primary.main">Privacy Policy</Text>
        </Container>
      </Container>
    </Box>
  );
}
