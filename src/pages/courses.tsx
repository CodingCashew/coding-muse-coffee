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
import { CartItem, useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";

export default function Courses() {
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
  const course2Info: CartItem = {
    id: 2,
    name: "Standup Vocabulary",
    description:
      "Confidently express your abilities during a technical interview",
    price: 37,
    length: "4:17:44",
    imagePath: "/courses/henry-be-bAFiBDMeiVI-unsplash.jpg",
  };

  const course3Info: CartItem = {
    id: 3,
    name: "Pair Programming",
    description:
      "Confidently express your abilities during a technical interview",
    price: 29,
    length: "3:39:38",
    imagePath: "/courses/henry-be-bAFiBDMeiVI-unsplash.jpg",
  };
  const course4Info: CartItem = {
    id: 4,
    name: "General Tech Conversation",
    description:
      "Confidently express your abilities during a technical interview",
    price: 34,
    length: "4:13:25",
    imagePath: "/courses/henry-be-bAFiBDMeiVI-unsplash.jpg",
  };

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Courses</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
        Audio Courses
      </Text>
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
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => addItem(course1Info)}
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
          src="/courses/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex p={8} minH="sm" align="center">
        <Image
          src="/courses/henry-be-bAFiBDMeiVI-unsplash.jpg"
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
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => addItem(course2Info)}
            >
              Buy Now
            </Button>
          </Link>

          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => addItem(course2Info)}
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
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => addItem(course3Info)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => addItem(course3Info)}
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
          src="/courses/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex p={8} minH="sm" align="center">
        <Image
          src="/courses/henry-be-bAFiBDMeiVI-unsplash.jpg"
          alt="man listening to American English for Devs course on street"
          w="50%"
        />
        <Container p={8}>
          <Text fontSize="2xl">General Tech Conversation</Text>
          <Text pt={2}>Have Productive Conversations With Your Colleagues</Text>
          <Container p={5}>
            <UnorderedList mb={5}>
              <ListItem>Over 5 hours of audio content</ListItem>
              <ListItem>Immersive speaking practice</ListItem>
              <ListItem>Printable Vocab Study Sheet Included</ListItem>
              <ListItem>Thrive in a Tech Environment</ListItem>
            </UnorderedList>
            <audio controls src="/dummy-audio.mp3" />
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="30%"
              onClick={() => addItem(course4Info)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="30%"
            onClick={() => addItem(course4Info)}
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
