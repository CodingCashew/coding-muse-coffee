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
    answer:
      "First, you can listen to the sample audios to see how well you like the speaking style. More importantly, if the content did not rock your world, you are eligible for a 110% money-back guarantee.",
  },
  {
    question: "But will I really learn that much?",
    answer:
      "Definitely! Not only will you learn a ton, but the language content is directly related to software engineering, so you can obtain the job of your dreams and excel when communicating with the rest of your team. ",
  },
  {
    question: "Why is it so expensive?",
    answer:
      "Not only is the target material specific to your needs, it would save you dozens of hours trying to compile separate materials from various sources. In addition, the audio is all recorded in a standard American accent, so you can be confident and clearly communicate with others.",
  },
  {
    question: "How will I receive the audio files?",
    answer:
      "After you pay, the audio files are sent directly to the email address that you entered during checkout.",
  },
  {
    question: "How long is each lesson?",
    answer:
      "Each lesson is around 15-20 minutes, which is the ideal amount of time for learning. You can listen to a lesson on the way to work, during lunch, or getting ready in the morning.",
  },
  {
    question: "Can't I just learn this by myself?",
    answer:
      "Of course you can; however, it will take you much more time to compile the materials, listen to or watch advertisements. As a developer, your time is valueable. Don't waste your precious time having to search for the next lesson when you could have the ease and convenience of high quality materials ready to learn.",
  },
  {
    question: "Which lesson should I start with?",
    answer:
      "If you have already found a position as a software engineer, you might want to start with Standups. Otherwise, you should probably start with the Technical Interview English Prep.",
  },
  {
    question: "Do these courses teach me to program?",
    answer:
      "No, the point of these courses is not to teach you to code or debug, but to be able to communicate with your software development team or technical interviewer. You are already an amazing developer. It's time to be able to be able to communicate your thoughts clearly and confidently.",
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
    <Container maxW="6xl" minH="xl" mb={10}>
      <Head>
        <title>FAQs</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <Flex direction="column" align="center">
        <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
          Frequently Asked Questions
        </Text>
        <Link href="/courses">
          <Button variant="ghost" size="sm" color="tertiary.main">
            Back to Courses Page
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
