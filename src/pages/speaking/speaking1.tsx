import React from "react";
import {
  CardHeader,
  Container,
  Text,
  Card,
  CardBody,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";

export default function SpeakingOne() {
  const id = 1;
  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  const quantity = getItemQty(id);

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Speaking Practice 1</title>
      </Head>
      <Flex width="6xl" alignItems="center" justifyContent="center" >
        <Image
          width="40%"
          src="/practice/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.jpg"
          alt="software developer"
        />
        <Container width="2xl">
          <Text fontSize="2xl">Practice Answering Interview Questions</Text>
          <Text fontSize="xl">10 phrases you MUST know</Text>
        </Container>
      </Flex>
      <Flex direction="column" alignItems="center" mt={5} mb={5}>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>This is the script for this audio</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>This is the script for this audio</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>This is the script for this audio</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>This is the script for this audio</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>This is the script for this audio</Text>
        </Flex>
      </Flex>
    </Container>
  );
}
