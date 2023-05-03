import React from "react";
import { Container, Text, Button, Link, Stack } from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";

export default function Checkout() {
  const { cartItems } = useShoppingCart();
  return (
    <Container>
      <Text>Time to pay!</Text>
      <Stack>
        {cartItems.map((item, index) => (
          <>
            <Text key={index}>Item Id: {item.id}</Text>
            <Text key={index*100}>Item Qty: {item.quantity}</Text>
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
