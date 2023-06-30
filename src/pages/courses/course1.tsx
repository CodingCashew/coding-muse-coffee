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
  const course1: CartItem = {
    id: 1,
    name: "Interview Vocabulary",
    description:
      "Confidently express your abilities during a technical interview",
    price: 27,
    length: "3:27:10",
    imagePath: "/courses/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.webp",
  };
  return (
    <Container maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }} minH="xl">
      <Head>
        <title>Interview Vocabulary</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex
        p={8}
        minH="sm"
        mt={20}
        align="center"
        justify="center"
        wrap={{ base: "wrap-reverse", lg: "nowrap" }}
      >
        <Container >
          <Text fontSize="2xl">{course1.name}</Text>
          <Text pt={2}>{course1.description}</Text>
          <Container p={{ base: 0, sm: 4, md: 5 }}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Excel in tech interviews</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Flex wrap={{ base: "wrap", lg: "nowrap" }} gap={3}>
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course1)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              ml={3}
              bgColor="secondary.main"
              onClick={() => addItem(course1)}
            >
              Add to Cart
            </Button>
            <Link href="/courses">
              <Button color="white" bgColor="tertiary.main" >
                Back to Courses
              </Button>
            </Link>
          </Flex>
        </Container>
        <Image
          src={course1.imagePath}
          alt="man listening to American English for Devs course on street"
          maxW={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
        />
      </Flex>
    </Container>
  );
}
