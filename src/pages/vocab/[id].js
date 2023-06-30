import React, { useState, useEffect } from "react";
import { Container, Text, Flex, Image, Button } from "@chakra-ui/react";
import Head from "next/head";
import { ChevronLeftIcon, ChevronRightIcon, ViewIcon } from "@chakra-ui/icons";

export default function Vocab() {
  let vocab = {
    cards: [
      { front: "put together", back: "integrate", sentence: "We need to integrate the new feature into the program.", vocabImg: '/vocab/anja-bauermann-VnIgQz6UqoE-unsplash.jpg', audioPath: "/dummy-audio.mp3" },
      { front: "to design a program", back: "architect", sentence: "He architected the project keeping scalability in mind.", vocabImg: '/vocab/danial-igdery-FCHlYvR5gJI-unsplash.jpg', audioPath: "/dummy-audio.mp3" }
    ]
  }

  const [cards, setCards] = useState([
    { front: "put together", back: "integrate", sentence: "We need to integrate the new feature into the program.", vocabImg: '/vocab/anja-bauermann-VnIgQz6UqoE-unsplash.jpg', audioPath: "/dummy-audio.mp3" }
  ]);

  const [isShowingBack, setIsShowingBack] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    setCards(vocab.cards);
  };

  const getPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
      setIsShowingBack(false);
    }
  };
  const showBack = () => {
    setIsShowingBack(!isShowingBack);
  };
  const getNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setIsShowingBack(false);
    }
  };
  return (
    <Container maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}  minH="xl">
      <Head>
        <title>Engineering Verbs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex direction="column" align="center" >

      <Container
        mt={20}
        mb={3}
        minH={400}
        borderRadius={6}
        boxShadow="3px 3px 5px 1px #ccc"
      >
        <Flex direction="column" justify="center" align="center" mt={10}>
        <Image src={cards[index].vocabImg} alt={cards[index].alt} maxH="150px" maxW="100%" />
        <Text fontSize="2xl" mt={4} mb={4} color="primary.dark">
          {cards[index].front}
        </Text>

        {isShowingBack && (
          <Container mb={10} minH="200px" align="center">
            <Text fontSize="3xl" color="secondary.light" p={5}>
              {cards[index].back}
            </Text>
            <audio controls src={cards[index].audioPath} />
          </Container>
        )}
        </Flex>
      </Container>
      <Text fontSize="lg" mb={1} color="primary.dark">
        {index + 1}/{cards.length}
      </Text>
      <Flex justify="center" gridGap={3} mb={10}>
        <Button onClick={getPrevious}  color="white" colorScheme={ index > 0  ? "teal" : ''}>
          <ChevronLeftIcon mr={2} />
          Previous
        </Button>
        <Button onClick={showBack} bgColor="primary.main" color="white">
          <ViewIcon mr={2} />
          {isShowingBack ? 'Hide' : 'Show'}
        </Button>
        <Button onClick={getNext} color="white" colorScheme={index < cards.length - 1 ? "teal" : ''} >
          Next
          <ChevronRightIcon ml={2} />
        </Button>
      </Flex>
    </Flex>
    </Container>
  );
}
