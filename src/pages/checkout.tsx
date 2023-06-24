import React from "react";
import { Container, Text, Button, Link, Stack, Flex, Divider } from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";
import { loadScript } from "@paypal/paypal-js";

export default function Checkout() {
  const { cartItems, subtotal } = useShoppingCart();
  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <script src="https://www.paypal.com/sdk/js?client-id=AX6sT-Kg-FyZyuvJFG82284HHExo12Tz1yC565OTL2ew6-2VSG3Dq7iI5ql-3Ju99VIgsO6JKZymSip2"></script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Stack mt={20}>
        <Text fontSize="2xl">Checkout</Text>
        <Divider mb={7}/>
        {cartItems && cartItems.map((item, index) => (
          <Flex key={index} gap={5}>
            <Text fontSize="xl" color="tertiary.dark">{item.name} - </Text>
            <Text fontSize="xl" color="tertiary.dark">${item.price}</Text>
          </Flex>
        ))}
        <Divider mb={7}/>
        <Text fontSize="2xl">Order Subtotal: ${subtotal()}</Text>
      </Stack>
    </Container>
  );
}
