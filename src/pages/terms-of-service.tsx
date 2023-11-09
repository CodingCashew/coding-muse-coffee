import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
      <Container minH="xl">
        <Head>
          <title>Terms of Service</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Container mt={20}>
          <Text fontSize="xl" color="primary.main">
            Terms of Service
          </Text>
        </Container>
      </Container>
    </Box>
  );
}
