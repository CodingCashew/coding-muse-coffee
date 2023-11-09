import React from "react";
import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
      <Container maxW="6xl" minH="3xl" mb={10}>
        <Head>
          <title>About</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Flex direction="column" align="center">
          <Text fontSize="2xl" color="primary.main" mt={10} align="center">
            About Us
          </Text>
          <Link href="/shop">
            <Button variant="ghost" size="sm" color="secondary.main">
              Back to Coffees Page
            </Button>
          </Link>
        </Flex>
        <Container maxW="4xl" mt={10}>
          <Text fontSize="2xl" color="secondary.light"></Text>
          <Text fontSize="xl"></Text>
        </Container>
      </Container>
    </Box>
  );
}
