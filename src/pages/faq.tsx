import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

interface faq {
  question: string;
  answer: string;
}

const questions: faq[] = [
  {
    question: "What if I don't like it?",
    answer: "First, you can listen to the sample audios to see how well you like the speaking style. More importantly, if the content did not rock your world, you are eligible for a 110% money-back guarantee.",
  },
  {
    question: "But will I really learn that much?",
    answer: "Definitely! Not only will you learn a ton, but the language content is directly related to software engineering, so you can obtain the job of your dreams and excel when communicating with the rest of your team. ",
  },
  {
    question: "Why is it so expensive?",
    answer: "Not only is the target material specific to your needs, it would save you dozens of hours trying to compile separate materials from various sources. In addition, the audio is all recorded in a standard American accent, so you can be confident and clearly communicate with others.",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

export default function Faq() {
  return (
    <Container minW="6xl" minH="xl">
      <Head>
        <title>FAQs</title>
      </Head>
      <Text fontSize="2xl" color="primary.dark">Frequently Asked Questions</Text>
      {questions.map((faq: faq, index) => (
        <Container key={index} minW="4xl" mt={5}>
          <Text fontSize="2xl" color="secondary.light">{faq.question}</Text>
          <Text fontSize="xl">{faq.answer}</Text>
        </Container>
      ))}
    </Container>
  );
}
