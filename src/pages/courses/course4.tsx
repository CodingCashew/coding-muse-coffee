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

export default function CourseFour() {

  const course4: CartItem = {
    id: 4,
    name: "General Tech Conversation",
    description:
      "Be able to keep up with the latest tech news and share ideas",
    price: 34,
    length: "4:13:25",
    imagePath: "/courses/sigmund-AQTA5E6mCNU-unsplash.webp",
  };
  const { addItem } = useShoppingCart();

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>General Tech</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex p={8} minH="sm" mt={20} align="center">
        <Container p={8}>
          <Text fontSize="2xl">{course4.name}</Text>
          <Text pt={2}>{course4.description}</Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>{course4.length} of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>
                Be able to keep up with the latest tech news and share ideas
              </ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => addItem(course4)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => addItem(course4)}
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
          src={course4.imagePath}
          alt="in a tech environment"
          w="50%"
        />
      </Flex>
    </Container>
  );
}
