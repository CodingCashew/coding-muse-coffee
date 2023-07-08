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
  const { addItem } = useShoppingCart();

  return (
    <Container maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }} minH="xl">
      <Head>
        <title>Pair Programming</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <Flex
        p={8}
        minH="sm"
        mt={20}
        align="center"
        justify="center"
        wrap={{ base: "wrap-reverse", lg: "nowrap" }}
      >
        <Container>
          <Text fontSize="2xl">{course3.name}</Text>
          <Text pt={2}>{course3.description}</Text>
          <Container p={{ base: 0, sm: 4, md: 5 }}>
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
          <Flex wrap={{ base: "wrap", lg: "nowrap" }} gap={3}>
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course3)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              ml={3}
              bgColor="secondary.main"
              onClick={() => addItem(course3)}
            >
              Add to Cart
            </Button>
            <Link href="/courses">
              <Button color="white" bgColor="tertiary.main">
                Back to Courses
              </Button>
            </Link>
          </Flex>
        </Container>
        <Image
          src={course3.imagePath}
          alt="developers working together"
          maxW={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
        />
      </Flex>
    </Container>
  );
}
