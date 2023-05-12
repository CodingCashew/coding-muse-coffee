import React from "react";
import {
  Container,
  Text,
  Flex,
  Image,
  Divider,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";

export default function Courses() {
  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  
  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Courses</title>
      </Head>
      <Text fontSize="2xl" color="primary.dark" mt={5} align="center">Audio Courses</Text>
      <Flex p={8} minH="sm" align="center">
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
            <audio controls src="/dummy-audio.m4a" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => increment(1)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => increment(1)}
          >
            Add to Cart
          </Button>
          <Link href="/courses/course1">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Course Details
            </Button>
          </Link>
        </Container>
        <Image
          src="/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex p={8} minH="sm" align="center">
        <Image
          src="/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
        <Container p={8}>
          <Text fontSize="2xl">Standup Vocabulary</Text>
          <Text pt={2}>
            Sound knowledgeable and competent talking about the work you did
          </Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Excel in tech interviews</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.m4a" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => increment(2)}
            >
              Buy Now
            </Button>
          </Link>

          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => increment(2)}
          >
            Add to Cart
          </Button>
          <Link href="/courses/course2">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Course Details
            </Button>
          </Link>
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex p={8} minH="sm" align="center">
        <Container p={8}>
          <Text fontSize="2xl">Pair Programming Practice</Text>
          <Text pt={2}>
            Be able to smoothly communicate your ideas and get along well with
            your partner
          </Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Excel in tech interviews</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.m4a" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => increment(3)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => increment(3)}
          >
            Add to Cart
          </Button>
          <Link href="/courses/course3">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Course Details
            </Button>
          </Link>
        </Container>
        <Image
          src="/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex p={8} minH="sm" align="center">
        <Image
          src="/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
        <Container p={8}>
          <Text fontSize="2xl">Code Review Practice</Text>
          <Text pt={2}>Write professional and clear reviews</Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Excel in tech interviews</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.m4a" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => increment(4)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => increment(4)}
          >
            Add to Cart
          </Button>
          <Link href="/courses/course4">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Course Details
            </Button>
          </Link>
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
    </Container>
  );
}
