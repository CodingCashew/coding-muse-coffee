import React from "react";
import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <Container maxW="6xl" minH="3xl" mb={10}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/coding-muse-icon.ico" />
      </Head>
      <Flex direction="column" align="center">
        <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
          About Us
        </Text>
        <Link href="/shop">
          <Button variant="ghost" size="sm" color="secondary.main">
            Back to Coffees Page
          </Button>
        </Link>
      </Flex>
      
        <Container maxW="4xl" mt={10}>
          <Text fontSize="2xl" color="secondary.light">
            
          </Text>
          <Text fontSize="xl"></Text>
        </Container>
    </Container>
  );
}
