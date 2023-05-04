import React from "react";
import {
  CardHeader,
  Container,
  Text,
  Card,
  CardBody,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from 'next/head'

export default function CoursFour() {
  const id = 4;
  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  const quantity = getItemQty(id);

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Code Review</title>
      </Head>
      <Flex p={8} minH="sm" align="center">
        <Container p={8}>
          <Text fontSize="2xl">Code Review Practice</Text>
          <Text pt={2}>Write professional and clear reviews</Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>
                Write clear and professional code review comments
              </ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.m4a" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => increment(id)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => increment(id)}
          >
            Add to Cart
          </Button>
          <Link href="/courses">
            <Button color="white" ml={3} bgColor="tertiary.main" width="28%">
              Back to Courses
            </Button>
          </Link>
        </Container>
        <Image
          src="/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
    </Container>
  );
}
