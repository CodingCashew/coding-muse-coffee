import React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function ReturnPolicy() {
  return (
    <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
      <Container minH="xl">
        <Head>
          <title>Return Policy</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Flex mt={20} align="center">
          <Text fontSize="xl" color="primary.main">
            Return Policy
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
