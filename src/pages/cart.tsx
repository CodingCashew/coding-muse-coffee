import React from "react";
import { Container, Text, Button, Link, Stack } from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <Container minH="xl">
      <Head>
        <title>Cart</title>
      </Head>
      <Stack>
        {cartItems && cartItems.map((item, index) => (
          <>
            <Text key={item.id}>Item Id: {item.id}</Text>
            <Text key={item.id}>Item Qty: {item.quantity}</Text>
          </>
        ))}
      </Stack>
      <Link href="/checkout">
        <Button color="white" bgColor="primary.dark">
          Checkout
        </Button>
      </Link>
    </Container>
  );
}
