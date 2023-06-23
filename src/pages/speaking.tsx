import React from "react";
import {
  Button,
  Card,
  Image,
  Container,
  ListItem,
  Text,
  Flex,
  Link,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { ChevronRightIcon } from "@chakra-ui/icons";


export default function Practice() {
  return (
    <Container minW="6xl" minH="xl" mb={10}>
      <Head>
        <title>Speaking Practice</title>
      </Head>
      <main>
        <Flex width="6xl" alignItems="center" justifyContent="center">
          <Image
            width="40%"
            src="/practice/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.jpg"
            alt="software developer"
          />
          <Container width="2xl">
            <Text fontSize="2xl">Practice Answering Interview Questions</Text>
            <Text fontSize="xl">10 phrases you MUST know</Text>
            <Link href="/speaking/speaking1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
        </Flex>
      </main>
    </Container>
  );
}
