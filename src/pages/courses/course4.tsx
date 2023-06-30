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
    description: "Be able to keep up with the latest tech news and share ideas",
    price: 34,
    length: "4:13:25",
    imagePath: "/courses/sigmund-AQTA5E6mCNU-unsplash.webp",
  };
  const { addItem } = useShoppingCart();

  return (
    <Container maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }} minH="xl">
      <Head>
        <title>General Tech</title>
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
          <Text fontSize="2xl">{course4.name}</Text>
          <Text pt={2}>{course4.description}</Text>
          <Container p={{ base: 0, sm: 4, md: 5 }}>
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
          <Flex wrap={{ base: "wrap", lg: "nowrap" }} gap={3} mt={3}>
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course4)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              bgColor="secondary.main"
              onClick={() => addItem(course4)}
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
          src={course4.imagePath}
          alt="in a tech environment"
          maxW={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
        />
      </Flex>
    </Container>
  );
}
