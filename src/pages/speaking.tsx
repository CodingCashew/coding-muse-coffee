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


export default function Speaking() {
  return (
    <Container minW="6xl" minH="xl" mb={10}>
      <Head>
        <title>Speaking Practice</title>
      </Head>
      <main>
        <Flex width="6xl" alignItems="center" justifyContent="center" mt={20} mb={10}>
          <Image
            width="40%"
            src="/speaking/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.webp"
            alt="practicing speaking"
          />
          <Container width="2xl">
            <Text fontSize="2xl">Talking About Your Preferred Work Environment</Text>
            <Text fontSize="xl">6 phrases you MUST know</Text>
            <Link href="/speaking/speaking1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
        </Flex>
        <Flex width="6xl" alignItems="center" justifyContent="center" mt={10} mb={10}>
          <Container width="2xl">
            <Text fontSize="2xl">Practice Answering Interview Questions</Text>
            <Text fontSize="xl">10 phrases you MUST know</Text>
            <Link href="/speaking/speaking1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Also Goes to Practice1
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
          <Image
            width="40%"
            src="/speaking/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.webp"
            alt="having an online job interview"
          />
        </Flex>
      </main>
    </Container>
  );
}
