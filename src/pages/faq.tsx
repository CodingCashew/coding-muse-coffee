import React from "react";
import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";

interface faq {
  question: string;
  answer: string;
}

const questions: faq[] = [
  {
    question: "What if I don't like it?",
    answer: "",
  },
  {
    question: "How long does it take to ship?",
    answer: "",
  },
  {
    question: "What happens if my order never arrives?",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

export default function Faq() {
  return (
    <Container maxW="6xl" minH="3xl" mb={10}>
      <Head>
        <title>FAQs</title>
        <link rel="icon" href="/coding-muse-icon.ico" />
      </Head>
      <Flex direction="column" align="center">
        <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
          Frequently Asked Questions
        </Text>
        <Link href="/shop">
          <Button variant="ghost" size="sm" color="secondary.main">
            Back to Coffees Page
          </Button>
        </Link>
      </Flex>
      {questions.map((faq: faq, index) => (
        <Container key={index} maxW="4xl" mt={10}>
          <Text fontSize="2xl" color="secondary.light">
            {faq.question}
          </Text>
          <Text fontSize="xl">{faq.answer}</Text>
        </Container>
      ))}
    </Container>
  );
}
