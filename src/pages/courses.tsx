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
    imagePath: "/courses/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.webp",
  };
  const course2Info: CartItem = {
    id: 2,
    name: "Standup Vocabulary",
    description: "Confidently express yourself during standup",
    price: 37,
    length: "4:17:44",
    imagePath: "/courses/dylan-gillis-KdeqA3aTnBY-unsplash.webp",
  };

  const course3Info: CartItem = {
    id: 3,
    name: "Pair Programming",
    description:
      "Be able to smoothly communicate your ideas and get along well with your partner",
    price: 29,
    length: "3:39:38",
    imagePath: "/courses/alvaro-reyes-fSWOVc3e06w-unsplash.webp",
  };
  const course4Info: CartItem = {
    id: 4,
    name: "General Tech Conversation",
    description: "Be able to keep up with the latest tech news and share ideas",
    price: 34,
    length: "4:13:25",
    imagePath: "/courses/sigmund-AQTA5E6mCNU-unsplash.webp",
  };

  return (
    <Container
      maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}
      minH="xl"
      alignContent="center"
    >
      <Head>
        <title>Courses</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex align="center" direction="column">
        <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
          Audio Courses
        </Text>
        <Link href="/faq">
          <Button variant="ghost" size="sm" color="tertiary.main">
            Visit our FAQ Page
          </Button>
        </Link>
      </Flex>
      <Flex
        minH="sm"
        align="center"
        wrap={{ base: "wrap-reverse", lg: "nowrap" }}
      >
        <Container>
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
          <Flex gap={3} wrap="wrap">
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course1Info)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              bgColor="secondary.main"
              onClick={() => addItem(course1Info)}
            >
              Add to Cart
            </Button>
            <Link href="/courses/course1">
              <Button color="white" bgColor="tertiary.main">
                Course Details
              </Button>
            </Link>
          </Flex>
        </Container>
        <Container>
          <Image
            src={course1Info.imagePath}
            alt="man listening to American English for Devs course on street"
            maxW={{ base: "100%", sm: "85%", md: "90%", lg: "95%", xl: "100%" }}
          />
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex minH="sm" align="center" wrap={{ base: "wrap", lg: "nowrap" }}>
        <Container>
          <Image
            src={course2Info.imagePath}
            alt="man listening to American English for Devs course on street"
            maxW={{ base: "100%", sm: "85%", md: "90%", lg: "95%", xl: "100%" }}
          />
        </Container>
        <Container>
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
          <Flex gap={3} wrap="wrap">
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course2Info)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              bgColor="secondary.main"
              onClick={() => addItem(course2Info)}
            >
              Add to Cart
            </Button>
            <Link href="/courses/course2">
              <Button color="white" bgColor="tertiary.main">
                Course Details
              </Button>
            </Link>
          </Flex>
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex
        minH="sm"
        align="center"
        wrap={{ base: "wrap-reverse", lg: "nowrap" }}
      >
        <Container>
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
          <Flex gap={3} wrap="wrap">
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course3Info)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              bgColor="secondary.main"
              onClick={() => addItem(course3Info)}
            >
              Add to Cart
            </Button>
            <Link href="/courses/course3">
              <Button color="white" bgColor="tertiary.main">
                Course Details
              </Button>
            </Link>
          </Flex>
        </Container>
        <Container>
          <Image
            src={course3Info.imagePath}
            alt="man listening to American English for Devs course on street"
            maxW={{ base: "100%", sm: "85%", md: "90%", lg: "95%", xl: "100%" }}
          />
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
      <Flex minH="sm" align="center" wrap={{ base: "wrap", lg: "nowrap" }}>
        <Container>
          <Image
            src={course4Info.imagePath}
            alt="man listening to American English for Devs course on street"
            maxW={{ base: "100%", sm: "85%", md: "90%", lg: "95%", xl: "100%" }}
          />
        </Container>
        <Container>
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
          <Flex gap={3} wrap="wrap">
            <Link href="/checkout">
              <Button
                color="white"
                bgColor="primary.dark"
                onClick={() => addItem(course4Info)}
              >
                Buy Now
              </Button>
            </Link>
            <Button
              color="white"
              bgColor="secondary.main"
              onClick={() => addItem(course4Info)}
            >
              Add to Cart
            </Button>
            <Link href="/courses/course4">
              <Button color="white" bgColor="tertiary.main">
                Course Details
              </Button>
            </Link>
          </Flex>
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
    </Container>
  );
}
