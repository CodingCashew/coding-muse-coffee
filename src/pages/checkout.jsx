import React, { useEffect, useRef } from "react";
import {
  Container,
  Text,
  Button,
  Link,
  Stack,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import Head from "next/head";

export default function Checkout() {
  const { cartItems, subtotal } = useShoppingCart();

  const paypal = useRef();

  const total = subtotal()

  useEffect(() => {
    if (window.paypal) {

      window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "American English Course for Devs",
                amount: {
                  currency_code: "USD",
                  value: Number(total.toFixed(2)) -.01
                }
              }
            ]
          })
        },
        onApprove: async (data, actions) => {
          const order = await (actions.order.capture())
          console.log('Order:', order)
        },
        onError: (err) => {
          console.log('error: ', err)
        }
      }).render(paypal.current)
    }
  }, [])

  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`} async></script>
      <Stack mt={20}>
        <Text fontSize="2xl" mt={10}>Checkout</Text>
        <Divider mb={7} />
        <Text color="red" fontSize="3xl">{'total HEEERE: ' + total}</Text>
        {cartItems &&
          cartItems.map((item, index) => (
            <Flex key={index} gap={5}>
              <Text fontSize="xl" color="tertiary.dark">
                {item.name} -{" "}
              </Text>
              <Text fontSize="xl" color="tertiary.dark">
                ${item.price}
              </Text>
            </Flex>
          ))}
        <Divider mb={7} />
        <Text fontSize="2xl">Order Subtotal: ${subtotal()}</Text>
        <Container ref={paypal} mt={5}></Container>
      </Stack>
    </Container>
  );
}
