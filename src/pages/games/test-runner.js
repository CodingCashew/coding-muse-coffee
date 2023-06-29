import React, { useState } from "react";
import {
  Container,
  Text,
  Flex,
  Input,
  Divider,
  FormControl,
} from "@chakra-ui/react";
import Head from "next/head";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";

// interface sentence {
//   sentence: string;
//   blank: string;
//   seenBefore: boolean;
// }

const sentences = [
  { sentence: "This is a ___________.", blank: "sentence", seenBefore: false },
  {
    sentence: "This is ___________ sentence.",
    blank: "another",
    seenBefore: false,
  },
];

const words = ["sentence", "another"];

export default function TestRunner() {
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNewSentence = () => {
    // how to efficiently ensure shuffled but access all of them?
    const newIndex = 0;
    setCurrentIndex(newIndex);
    return sentences[newIndex];
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const checkForSubmit = (e) => {
    if (e.keyCode === 13) {
      runTest(userInput);
    }
  };

  const runTest = (userInput) => {
    console.log("running test...");
    if (userInput == sentences[currentIndex].blank) {
      console.log("TEST PASSING!");
      return markTest(true);
    } else return markTest(false);
  };

  const markTest = () => {
    // do stuff
    // change icon to checkmark
    // move to top,
    // render new sentence
  };

  return (
    <Container minH="lg" minW="100%" bgColor="black" mt={20}>
      <Head>
        <title>TestRunner</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex minH="lg" minW="6xl" direction="column-reverse">
        <Text fontSize="xl" color="white">
          <CloseIcon color="red" /> {sentences[0].sentence}
        </Text>
      </Flex>
      <Divider />
      <Flex>
        <Input
          type="text"
          name="word"
          color="white"
          onChange={handleUserInput}
          className="terminal"
          onKeyUp={checkForSubmit}
        />
      </Flex>
    </Container>
  );
}
