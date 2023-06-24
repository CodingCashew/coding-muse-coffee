import React from "react";
import { Container, Text, Button, Link, Stack, Flex, Divider } from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";

export default function Checkout() {
  const { cartItems } = useShoppingCart();
  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Stack>
        <Text fontSize="2xl">Checkout</Text>
        <Divider mb={7}/>
        {cartItems && cartItems.map((item, index) => (
          <Flex key={index} gap={5}>
            <Text fontSize="xl" color="tertiary.dark">{item.name} - </Text>
            <Text fontSize="xl" color="tertiary.dark">${item.price}</Text>
          </Flex>
        ))}
      </Stack>
    </Container>
  );
}
