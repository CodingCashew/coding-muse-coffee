import React from "react";
import {
  Container,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

export default function SpeakingOne() {

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Speaking Practice 1</title>
      </Head>
      <Flex width="6xl" alignItems="center" justifyContent="center">
        <Image
          width="40%"
          src="/practice/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.jpg"
          alt="software developer"
        />
        <Container width="2xl">
          <Text fontSize="2xl">Talking About Your Preferred Work Environment</Text>
          <Text fontSize="xl">6 phrases you MUST know</Text>
        </Container>
      </Flex>
      <Flex direction="column" justify="start" mt={5} mb={5} ml={5}>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>Describe your ideal environment as a developer.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.QuietEnvironment.mp3" />
          <Text>I like to work in a quiet environment.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.2.OpenLayout.mp3" />
          <Text>I like to work around people.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.3.AroundPeople.mp3" />
          <Text>I prefer an open-layout environment.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a4FaceToFace.mp3" />
          <Text>I like to communicate with my team members face-to-face.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a5Remotely.mp3" />
          <Text>
            I prefer to work remotely so I can have a good work-life balance.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
