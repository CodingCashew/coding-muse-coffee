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
  {
    sentence: "(end of dummy sentences)",
    blank: "dummy",
    seenBefore: false,
  },
];

const words = ["sentence", "another"];

export default function TestRunner() {
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ranTests, setRanTests] = useState([]);
  // const [ranTests, setRanTests] = useState([
  //   {
  //     sentence: "I think I will put the ____ after the sentence .",
  //     word: "word",
  //     correct: true,
  //   },
  // ]);

  const getNewSentence = () => {
    // how to efficiently ensure shuffled but access all of them?
    const newIndex = currentIndex + 1;
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
    const newTest = {
      test: sentences[currentIndex].sentence,
      correctAnswer: sentences[currentIndex].blank,
      userAnswer: userInput,
      correct: null,
    };
    if (userInput == sentences[currentIndex].blank) {
      console.log("TEST PASSING!");
      newTest.correct = true;
    } else {
      newTest.correct = false;
    }
    updateRanTests(newTest);
    getNewSentence();
    setUserInput('')
  };

  const updateRanTests = (newTest) => {
    setRanTests([...ranTests, newTest]);
  };

  return (
    <Container minH="lg" minW="100%" bgColor="black" mt={20}>
      <Head>
        <title>TestRunner</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex minH="lg" minW="6xl" direction="column" justify="space-between">
        {/* <Flex minH="lg" minW="6xl" direction="column-reverse"> */}
        <Container minH="md" direction="column" minW="6xl">
        {ranTests.map((test, index) => (
          <Flex key={index} >
            {test.correct ? (
              <CheckIcon color="green" />
            ) : (
              <CloseIcon color="red" />
            )}
            <Text color="white" mr={2}>
              {test.test}
            </Text>
            <Text mr={2} color="white">
              Your Answer:{" "}
            </Text>
            <Text mr={2} color={test.correct ? "green" : "red"}>
              {test.userAnswer}
            </Text>
            <Text mr={2} color="white">
              Correct Answer:{" "}
            </Text>
            <Text mr={2} color={test.correct ? "green" : "red"}>
              {test.correctAnswer}
            </Text>
            <Text color="white">{test.word}</Text>
          </Flex>
        ))}
        </Container>
        <Flex>
        <Text fontSize="xl" color="white">
          <CloseIcon color="red" /> {sentences[currentIndex].sentence}
        </Text>
        </Flex>
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
          value={userInput}
        />
      </Flex>
    </Container>
  );
}
