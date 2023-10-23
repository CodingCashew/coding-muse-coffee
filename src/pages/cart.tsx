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
  Box,
  useToast,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Cart() {
  const { cartItems, numOfItems, subtotal, removeItem, increment, decrement, percentToPay, updatePercentToPay } =
    useShoppingCart();
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState<string>("");

  const [invalidDiscountCode, setInvalidDiscountCode] = useState(false);

  const toast = useToast();

  const toggleShowDiscountInput = () => {
    setShowDiscountInput(!showDiscountInput);
    setInvalidDiscountCode(false);
  };
  const handleSubmitDiscountCode = () => {
    const hardcodedDiscountCodes = {
      eggplant778: "50",
      snorkel322: "80",
      bananas556: "90",
    };
    if (hardcodedDiscountCodes.hasOwnProperty(discountCode)) {
      const percentToPay = Number(
        hardcodedDiscountCodes[
          discountCode as keyof typeof hardcodedDiscountCodes
        ]
      );
      toast({
        title: "Success",
        description: `Discount Code added for ${100 - percentToPay}% off.`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      updatePercentToPay(percentToPay);
      setInvalidDiscountCode(false);
      toggleShowDiscountInput();
    } else {
      setInvalidDiscountCode(true);
    }
  };

  const handleUpdateDiscountCode = (e: any) => {
    setDiscountCode(e.target.value);
  };

  const handleCheckout = () => {
    setDiscountCode('')
    
  }

  const orderTotal = percentToPay !== 100 ? (subtotal() * percentToPay) / 100 : subtotal();

  // const orderTotal = subtotal()

  return (
    <Box bgColor="black" mt={20}>
      <Container
        minH="2xl"
        minW={{ base: "xs", sm: "sm", md: "3xl", lg: "5xl" }}
        mt={20}
      >
        <Head>
          <title>Cart</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Text fontSize="2xl" pt={10} color="white">
          Cart
        </Text>
        <Flex wrap={{ base: "wrap", lg: "nowrap" }} justify="center">
          <Container minW="xl">
            {!cartItems.length && (
              <Container>
                <Text mt={10} mb={5} color="secondary.light">
                  Your cart is empty :/
                </Text>
                <Link href="/shop">
                  <Button color="white" bgColor="secondary.main" m={3}>
                    Add a Coding Muse
                    <ArrowRightIcon ml={3} />
                  </Button>
                </Link>
              </Container>
            )}
            <Text color="white">percentToPay: {orderTotal}</Text>
            {cartItems &&
              cartItems.map((item) => (
                <Container
                  key={Math.random() * 1000}
                  mt={5}
                  maxW={{ base: "xs", sm: "sm", md: "md", xl: "lg" }}
                >
                  <Text fontSize="xl" mt={7} mb={4} color="primary.main">
                    {item.name} Coffee
                  </Text>
                  <Image
                    src={item.imagePath}
                    alt={`${item.name} coffee`}
                    w="100%"
                  />
                  <Text fontSize="lg" mt={3} color="primary.main">
                    Price:{" "}
                    <Text as="span" color="secondary.main">
                      ${item.price}
                    </Text>
                  </Text>
                  <Text fontSize="lg" mt={3} color="primary.main">
                    Quantity:{" "}
                    <Text as="span" color="secondary.main">
                      {item.quantity}
                    </Text>
                  </Text>

                  <Button
                    color="white"
                    variant="ghost"
                    m={3}
                    onClick={() =>
                      increment(
                        item.id,
                        item.name,
                        item.description,
                        item.roast,
                        item.region,
                        item.price,
                        item.size,
                        item.imagePath
                      )
                    }
                  >
                    +
                  </Button>
                  <Button
                    color="white"
                    variant="ghost"
                    m={3}
                    onClick={() =>
                      decrement(
                        item.id,
                        item.name,
                        item.description,
                        item.roast,
                        item.region,
                        item.price,
                        item.size,
                        item.imagePath
                      )
                    }
                  >
                    -
                  </Button>
                  <Button
                    color="white"
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
              <Text fontSize="xl" minW="xl" mb={5} color="white">
                Order Summary
              </Text>
              <Flex justify="space-between">
                <Text color="white">Number of Items</Text>
                <Text color="secondary.main">{numOfItems()}</Text>
              </Flex>
              {percentToPay === 100 && (
                <Button
                  m={3}
                  mb={0}
                  variant="ghost"
                  color="primary.main"
                  onClick={toggleShowDiscountInput}
                >
                  Add Discount Code
                </Button>
              )}

              {showDiscountInput && (
                <Container m={3} mt={7} mb={7}>
                  <Input
                    bgColor="white"
                    value={discountCode}
                    onChange={handleUpdateDiscountCode}
                  ></Input>
                  {invalidDiscountCode && (
                    <div>
                      <Text color="primary.light">Invalid Discount Code</Text>
                    </div>
                  )}
                  <Button
                    bgColor="secondary.main"
                    color="white"
                    onClick={handleSubmitDiscountCode}
                    mt={3}
                  >
                    Submit Code
                  </Button>
                  <Button
                    variant="ghost"
                    ml={3}
                    color="white"
                    onClick={toggleShowDiscountInput}
                    mt={3}
                  >
                    Cancel
                  </Button>
                </Container>
              )}

              <Flex justify="space-between">
                <Text color="white">Tax</Text>
                <Text color="secondary.main">TBD</Text>
              </Flex>
              <Flex justify="space-between" mt={5}>
                <Text color="white" alignSelf="end">Order Subtotal</Text>

                {percentToPay === 100 && (
                  <Text color="secondary.main">${orderTotal}</Text>
                )}
                {percentToPay !== 100 && (
                  <Flex direction="column">
                    <Text id="oldPrice" color="white">${subtotal()}</Text>
                    <Text color="secondary.main">${orderTotal}</Text>
                  </Flex>
                )}
              </Flex>
              <Container mb={10} mt={5}>
                <Link href="/checkout">
                  {!!cartItems.length && (
                    <Button color="white" bgColor="primary.dark" m={3} onClick={handleCheckout}>
                      Checkout
                    </Button>
                  )}
                </Link>
                <Link href="/shop">
                  <Button color="primary.dark" variant="ghost" m={3}>
                    Back to Coffees
                  </Button>
                </Link>
              </Container>
            </Container>
          )}
        </Flex>
      </Container>
    </Box>
  );
}
