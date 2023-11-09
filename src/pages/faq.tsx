import React from "react";
import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";

interface faq {
  question: string;
  answer: string;
}

const questions: faq[] = [
  {
    question: "What if I don't like it?",
    answer: "If the coffee doesn't rock your world, contact us and ship it back for free. We'll get you a new one that we hope you'll enjoy.",
  },
  {
    question: "How long does it take to ship?",
    answer: "2 weeks",
  },
  {
    question: "What happens if my order never arrives?",
    answer: "We'll refund you and ship you another one.",
  },
  {
    question: "",
    answer: "",
  },
];

export default function Faq() {
  return (
    <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
      <Container maxW="6xl" minH="3xl" mb={10}>
        <Head>
          <title>FAQs</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Flex direction="column" align="center">
          <Text fontSize="2xl" color="secondary.dark" mt={20} align="center">
            Frequently Asked Questions
          </Text>
          <Link href="/shop">
            <Button variant="ghost" size="sm" color="secondary.main">
              Back to Coffees Page
            </Button>
          </Link>
        </Flex>
        {questions.map((faq: faq, index) => (
          <Container key={index} maxW="6xl" mt={10}>
            <Text fontSize="2xl" color="primary.dark">
              {faq.question}
            </Text>
            <Text fontSize="xl" color="white">{faq.answer}</Text>
          </Container>
        ))}
      </Container>
    </Box>
  );
}
