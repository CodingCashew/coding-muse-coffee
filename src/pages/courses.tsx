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

export default function Courses() {
  return (
    <Container minW="5xl">
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
          <Button color="white" bgColor="primary.dark" width="28%">
            Buy Now
          </Button>
          <Button color="white" ml={3} bgColor="secondary.main" width="28%">
            Add to Cart
          </Button>
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
          <Button color="white" bgColor="primary.dark" width="30%">
            Buy Now
          </Button>
          <Button color="white" ml={3} bgColor="secondary.main" width="30%">
            Add to Cart
          </Button>
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
          <Button color="white" bgColor="primary.dark" width="30%">
            Buy Now
          </Button>
          <Button color="white" ml={3} bgColor="secondary.main" width="30%">
            Add to Cart
          </Button>
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
          <Button color="white" bgColor="primary.dark" width="30%">
            Buy Now
          </Button>
          <Button color="white" ml={3} bgColor="secondary.main" width="30%">
            Add to Cart
          </Button>
        </Container>
      </Flex>
      <Divider w="100%" alignSelf="center" bgColor="black" m={3} />
    </Container>
  );
}
