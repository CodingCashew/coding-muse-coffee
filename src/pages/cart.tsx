import React from "react";
import { Container, Text, Button, Link } from "@chakra-ui/react";

export default function Cart() {
  return (
    <Container>
      <Text>This is a list of the items you want to buy</Text>
      <Link href="/checkout">
        <Button color="white" bgColor="primary.dark">
          Checkout
        </Button>
      </Link>
    </Container>
  );
}
