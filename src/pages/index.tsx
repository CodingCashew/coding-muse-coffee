import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>American English for Devs</title>
        <meta name="description" content="American English for Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Container minH="xl" minW="8xl" bgColor="primary.main">
          <Text>Someone coding </Text>
          <Text>You know how to code</Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="white">
          <Text>People talking in team</Text>
          <Text>
            But you struggle to communicate your ideas effectively in English
          </Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="tertiary.dark">
          <Text>
            American English for Devs solves this problem and helps you to be
            able to confidently speak with your manager, co-worker, team lead,
            or technical interviewer
          </Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="white">
          <Text>
            Work on just the vocabulary you need, and practice sentences that
            you would use in real life on the job
          </Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="secondary.light">
          <Text>Icons showing benefits</Text>
          <Text>Save valuable time by having everything compiled for you</Text>
          <Text>
            Convenient and efficient to have mp3 instead of scrolling youtube
            and listening to ads
          </Text>
          <Text>
            Short, content-rich lessons that fit into your busy schedule
          </Text>
          <Text>
            Native American accent so you can avoid criticism from assholes
          </Text>
          <Text>Confidently show your skills</Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="white">
          <Text>Here is what people are saying about the course:</Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="primary.main">
          <Text>
            Risk free! If you are not completely rocked, get 110% of your money
            back.
          </Text>
        </Container>
        <Container minH="xl" minW="8xl" bgColor="white">
          <Text>
            Icons of each course linking to details page
          </Text>
        </Container>
      </main>
    </>
  );
}
