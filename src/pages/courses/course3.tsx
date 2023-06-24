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

export default function CourseThree() {
  const course3: CartItem = {
    id: 3,
    name: "Pair Programming",
    description:
    "Be able to smoothly communicate your ideas and get along well with your partner",
    price: 29,
    length: "3:39:38",
    imagePath: "/courses/alvaro-reyes-fSWOVc3e06w-unsplash.webp",
  };
  const { addItem, removeItem } = useShoppingCart();

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Pair Programming</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex p={8} minH="sm" mt={20} align="center">
        <Container p={8}>
          <Text fontSize="2xl">{course3.name}</Text>
          <Text pt={2}>
            {course3.description}
          </Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>{course3.length} of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>
                Be able to effectively communicate with your fellow devs
              </ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => addItem(course3)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => addItem(course3)}
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
          src={course3.imagePath}
          alt="developers working together"
          w="50%"
        />
      </Flex>
    </Container>
  );
}
