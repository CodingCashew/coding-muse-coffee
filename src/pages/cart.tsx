import React from "react";
import { Container, Text, Button, Link, Flex, Stack } from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <Container>
      <Text>This is a list of the items you want to buy</Text>
      <Stack>
        {cartItems.map((item, index) => (
          <>
            <Text key={index}>Item Id: {item.id}</Text>
            <Text key={index*100}>Item Qty: {item.quantity}</Text>
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