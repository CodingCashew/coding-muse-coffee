import React from "react";
import {
  Button,
  Image,
  Container,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import { ChevronRightIcon } from "@chakra-ui/icons";


export default function Listening() {
  return (
    <Container minW="6xl" minH="xl" mb={10}>
      <Head>
        <title>Listening Practice</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Flex width="6xl" alignItems="center" justifyContent="center" mt={20} mb={10}>
          <Image
            maxH="xl"
            src="/listening/kelly-sikkema-_-TwILDnZSU-unsplash.webp"
            alt="practicing listening"
          />
          <Container width="2xl">
            <Text fontSize="2xl">Practice Listening Comprehension</Text>
            <Text fontSize="xl">Can you identify exactly what they are saying?</Text>
            <Link href="/listening/listening1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
        </Flex>
        <Flex width="6xl" alignItems="center" justifyContent="center" mt={10} mb={10}>
          <Container width="2xl">
          <Text fontSize="2xl">Practice Listening Comprehension</Text>
            <Text fontSize="xl">Can you identify exactly what they are saying?</Text>
            <Link href="/listening/listening1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
          <Image
            width="40%"
            src="/listening/soundtrap-C-2Wky-LT7k-unsplash.webp"
            alt="having an online job interview"
          />
        </Flex>
      </main>
    </Container>
  );
}
