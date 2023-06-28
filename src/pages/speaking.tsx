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
    <Container maxW={{ base: "xs", sm: "lg", md: "xl", lg: "3xl", xl: "4xl"}} minH="xl" mb={10}>
      <Head>
        <title>Speaking Practice</title>
      </Head>
      <main>
        <Flex maxW={{ base: "xs", sm: "lg", md: "xl", lg: "3xl", xl: "4xl"}} alignItems="center" justifyContent="center" wrap={{ base: "wrap", lg: "nowrap" }} mt={20} mb={10}>
          <Image
            width={{base: "100%", sm: "90%", md: "80%", lg: "60%"}}
            src="/speaking/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.webp"
            alt="practicing speaking"
          />
          <Container >
            <Text fontSize="2xl">Talking About Your Preferred Work Environment</Text>
            <Text fontSize="xl">6 phrases you MUST know</Text>
            <Link href="/speaking/speaking1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
        </Flex>
        <Flex maxW={{ base: "xs", sm: "lg", md: "xl", lg: "3xl", xl: "4xl"}} wrap={{ base: "wrap-reverse", lg: "nowrap" }} alignItems="center" justifyContent="center" mt={10} mb={10}>
          <Container >
            <Text fontSize="2xl">Practice Answering Interview Questions</Text>
            <Text fontSize="xl">10 phrases you MUST know</Text>
            <Link href="/speaking/speaking1">
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Also Goes to Practice1
                <ChevronRightIcon ml={3} /></Button>
            </Link>
          </Container>
          <Image
            width={{base: "100%", sm: "90%", md: "80%", lg: "60%"}}
            src="/speaking/surface-HJgaV1qjHS0-unsplash.jpg"
            alt="having an online job interview"
          />
        </Flex>
      </main>
    </Container>
  );
}
