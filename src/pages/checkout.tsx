import React from "react";
import { Container, Text, Button, Link, Stack } from "@chakra-ui/react";
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
      </Head>
      <Stack>
        {cartItems && cartItems.map((item, index) => (
          <>
            <Text key={index}>Item Id: {item.id}</Text>
            <Text key={index * 100}>Item Qty: {item.quantity}</Text>
          </>
        ))}
      </Stack>
      <Link href="/cart">
        <Button color="white" bgColor="secondary.main">
          Back to Cart
        </Button>
      </Link>
    </Container>
  );
}
