import React from "react";
import {
  Button,
  Image,
  Container,
  Text,
  Flex,
  Link,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Head from "next/head";
import { ChevronRightIcon } from "@chakra-ui/icons";

export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/listening", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let listening = await res.json();

  return {
    props: { listening },
  };
}


export default function Listening({ listening }:any) {
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
            {/* <Link href="/listening/listening1"> */}
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            {/* </Link> */}
          </Container>
        </Flex>
        <Flex width="6xl" alignItems="center" justifyContent="center" mt={10} mb={10}>
          <Container width="2xl">
          <Text fontSize="2xl">Practice Listening Comprehension</Text>
            <Text fontSize="xl">Can you identify exactly what they are saying?</Text>
            {/* <Link href="/listening/listening1" > */}
              <Button bgColor="secondary.main" width="250px" mt="1rem" color="white">
                Go to Practice
                <ChevronRightIcon ml={3} /></Button>
            {/* </Link> */}
          </Container>
          <Image
            width="40%"
            src="/listening/soundtrap-C-2Wky-LT7k-unsplash.webp"
            alt="having an online job interview"
          />
        </Flex>
        {listening.map((practice: any) => (
        <Card mt={2} key={practice.id}>
          <CardBody>
            <Image
              src={practice.imgPath}
              alt="language blog logo"
              w="75%"
            />
            <Text>{practice.title}</Text>
            <Link href={`/listening/${practice.id}`}>
              <Button bgColor="primary.main" m="1rem" color="white">
                Listen
              </Button>
            </Link>
          </CardBody>
        </Card>
        ))}
      </main>
    </Container>
  );
}
