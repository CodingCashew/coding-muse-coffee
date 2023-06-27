import { Button, Container, Input, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import NavButtons from "../../components/navButtons";

const answers = {
  one: "",
  two: "",
  three: "",
  four: "",
  five: "",
};

function Future({ grammar, numOfExercises }) {
  const section = "grammar";
  const [revealAnswers, setRevealingAnswers] = useState(false);
  const [values, setValues] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [corrections, setCorrections] = useState({});

  const checkAnswers = () => {
    setRevealingAnswers(true);

    for (let questionNumber in values) {
      if (
        values[questionNumber].toLowerCase().trim() !==
        answers[questionNumber].toLowerCase()
      ) {
        setCorrections((corrections) => ({
          ...corrections,
          [questionNumber]: answers[questionNumber],
        }));
      }
    }
  };

  const clearAnswers = () => {
    setRevealingAnswers(false);
    setValues({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
    });
    setCorrections({});
  };

  return (
    <Container maxW={{ base: "xs", sm: "md", md: "xl", lg: "3xl" }}  minH="md"  mt={20}>
      <Text fontSize="xl" align="center">
        Talking About the Future
      </Text>
          <Text fontSize="md" p={3}>Put the words in the right order.</Text>
      <Container>
        <Flex maxW={{ base: "xs", sm: "md", md: "xl", lg: "3xl" }}  wrap={{base: 'wrap'}}>
          <Text fontSize="lg" p={3}>1. Mason, </Text>
          <Text value="have" draggable="true" fontSize="lg" p={3} color="tertiary.dark">
            you
          </Text>
          <Text value="have" draggable="true" fontSize="lg" p={3} color="tertiary.dark">
            going
          </Text>
          <Text value="have" draggable="true" fontSize="lg" p={3} color="tertiary.dark">
            are
          </Text>
          <Text fontSize="lg" p={3}>to wash the dishes?</Text>
        </Flex>
        {!Object.keys(corrections).length && revealAnswers && (
          <Text color="primary.main">You got them all correct!!</Text>
        )}
        <Flex direction="row" wrap={{base: 'wrap'}}>
          <Button onClick={checkAnswers} backgroundColor="primary.main" color="white" m={2}>Check Answers</Button>
          <Button onClick={clearAnswers} backgroundColor="secondary.main" color="white" m={2}>Reset Answers</Button>
        </Flex>
      </Container>
      <NavButtons numOfExercises={numOfExercises} section={section} />
    </Container>
  );
}

export default Future;
