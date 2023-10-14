import React, { useState } from "react";
import {
  Container,
  Text,
  Button,
  Link,
  Image,
  Stack,
  Flex,
  Input,
  Divider,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Cart() {
  const { cartItems, numOfItems, subtotal, removeItem } = useShoppingCart();
  const [showDiscountInput, setShowDiscountInput] = useState(false);

  const toggleShowDiscountInput = () => {
    setShowDiscountInput(!showDiscountInput);
  };
  const handleSubmitDiscountCode = () => {
    console.log("Discount Code Submitted!");
  };

  const orderTotal = subtotal();
  return (
    <Container minH="xl" minW={{ base: "xs", sm: "sm", md: "3xl", lg: "5xl" }}>
      <Head>
        <title>Cart</title>
        <link rel="icon" href="coding-muse-coffee.jpg" />
      </Head>
      <Text fontSize="2xl" mt={20}>
        Cart
      </Text>
      <Flex wrap={{ base: "wrap", lg: "nowrap" }} justify="center">
        <Container minW="xl">
          {!cartItems.length && (
            <Container>
              <Text mt={20} mb={5}>
                Your cart is empty :/
              </Text>
              <Link href="/shop">
                <Button color="white" bgColor="primary.main" m={3}>
                  Add a Coding Muse
                  <ArrowRightIcon ml={3} />
                </Button>
              </Link>
            </Container>
          )}
          {cartItems &&
            cartItems.map((item) => (
              <Container
                key={Math.random() * 1000}
                mt={5}
                maxW={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
              >
                <Text fontSize="xl" mt={7} mb={4}>
                  {item.name} Coffee
                </Text>
                <Image
                  src={item.imagePath}
                  alt={`${item.name} coffee`}
                  w="100%"
                />
                <Text fontSize="lg" mt={3}>
                  Price:{" "}
                  <Text as="span" color="secondary.dark">
                    ${item.price}
                  </Text>
                </Text>

                <Button
                  color="primary.main"
                  variant="ghost"
                  m={3}
                  width="28%"
                  onClick={() => removeItem(item.id)}
                >
                  Remove Item
                </Button>
                <Divider mb={10} />
              </Container>
            ))}
        </Container>
        {cartItems.length > 0 && (
          <Container
            maxW={{ base: "xs", sm: "sm", md: "sm", lg: "md", xl: "lg" }}
          >
            <Text fontSize="xl" minW="xl" mb={5}>
              Order Summary
            </Text>
            <Flex justify="space-between">
              <Text>Number of Items</Text>
              <Text>{numOfItems()}</Text>
            </Flex>
            <Button
              m={3}
              mb={0}
              variant="ghost"
              color="secondary.main"
              onClick={toggleShowDiscountInput}
            >
              Add Discount Code
            </Button>
            {showDiscountInput && (
              <Container m={3} mt={1}>
                <Input></Input>
                <Button
                  bgColor="secondary.main"
                  color="white"
                  onClick={handleSubmitDiscountCode}
                  mt={3}
                >
                  Submit
                </Button>
                <Button
                  variant="ghost"
                  ml={3}
                  onClick={toggleShowDiscountInput}
                  mt={3}
                >
                  Cancel
                </Button>
              </Container>
            )}

            <Flex justify="space-between">
              <Text>Tax</Text>
              <Text>TBD</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Order Subtotal</Text>
              <Text>${orderTotal}</Text>
            </Flex>
            <Container mb={10}>
              <Link href="/checkout">
                {!!cartItems.length && (
                  <Button color="white" bgColor="primary.dark" m={3}>
                    Checkout
                  </Button>
                )}
              </Link>
              <Link href="/shop">
                <Button color="primary.dark" variant="outline" m={3}>
                  Back to Coffees
                </Button>
              </Link>
            </Container>
          </Container>
        )}
      </Flex>
    </Container>
  );
}
