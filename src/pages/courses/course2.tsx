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

export default function CourseTwo() {
  const course2: CartItem = {
    id: 2,
    name: "Standup Vocabulary",
    description:
      "Confidently express yourself during standup",
    price: 37,
    length: "4:17:44",
    imagePath: "/courses/dylan-gillis-KdeqA3aTnBY-unsplash.webp",
  };
  const { addItem, removeItem } = useShoppingCart();

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Standup Vocabulary</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex p={8} minH="sm" mt={20} align="center">
        <Container p={8}>
          <Text fontSize="2xl">{course2.name} </Text>
          <Text pt={2}>
            {course2.description}
          </Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>
                Be confident explaining your progress in standups
              </ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => addItem(course2)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => addItem(course2)}
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
          src={course2.imagePath}
          alt="dev team during stand up meeting"
          w="50%"
        />
      </Flex>
    </Container>
  );
}
