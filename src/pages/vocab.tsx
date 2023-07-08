import React from "react";
import {
  Card,
  CardBody,
  Container,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Vocab() {
  return (
    <Container minH="xl">
      <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <Container maxW="xl" mt={20}>
        <Text fontSize="xl" m={3}>
          Vocab Practice
        </Text>
        <Container>
          <Card mt={20}>
            <CardBody mt={10}>
              <Image
                src="/vocab/thisisengineering-raeng-64YrPKiguAE-unsplash.jpg"
                alt="language blog logo"
                w="75%"
              />
              <Text>Engineering Verbs</Text>
              <Link href={"/vocab/1"}>
                <Button bgColor="primary.main" m="1rem" color="white">
                  Learn Vocab
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Container>
      </Container>
    </Container>
  );
}
