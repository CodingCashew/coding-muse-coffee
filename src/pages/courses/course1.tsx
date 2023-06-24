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
import { CartItem, useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";

export default function CourseOne() {
  const id = 1;
  const { addItem } = useShoppingCart();
  const course1Info: CartItem = {
    id: 1,
    name: "Interview Vocabulary",
    description:
      "Confidently express your abilities during a technical interview",
    price: 27,
    length: "3:27:10",
    imagePath: "/courses/henry-be-bAFiBDMeiVI-unsplash.jpg",
  };
  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Interview Vocabulary</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex p={8} minH="sm" mt={20} align="center">
        <Container p={8}>
          <Text fontSize="2xl">Interview Vocabulary</Text>
          <Text pt={2}>
            Confidently express your abilities during a technical interview
          </Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Excel in tech interviews</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => addItem(course1Info)}
            >
              Buy Now
            </Button>
          </Link>
          <Link href="/checkout"></Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => addItem(course1Info)}
          >
            Add to Cart
          </Button>
          <Link href="/courses">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Back to Courses
            </Button>
          </Link>
        </Container>
        <Image
          src="/courses/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
    </Container>
  );
}
