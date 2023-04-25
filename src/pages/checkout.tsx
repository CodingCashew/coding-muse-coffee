import React from "react";
import { Container, Text, Button, Link } from "@chakra-ui/react";

export default function Checkout() {
  return (
    <Container>
      <Text>Time to pay!</Text>
      <Link href="/cart">
        <Button color="white" bgColor="secondary.main">
          Back to Cart
        </Button>
      </Link>
    </Container>
  );
}
