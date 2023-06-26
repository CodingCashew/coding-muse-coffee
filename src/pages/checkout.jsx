import React, { useEffect, useRef, useState } from "react";
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
  const { cartItems, subtotal, resetCart } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(true)

  const paypal = useRef();

  const total = subtotal()

  useEffect(() => {
    if (window.paypal && total) {

      window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            // intent: "CAPTURE",
            purchase_units: [
              {
                description: "American English Course for Devs",
                amount: {
                  value: '10'
                  // value: total
                }
              }
            ]
          })
          // .then(res => {
          //   if (res.ok) return res.json()
          //   return res.json().then(json => Promise.reject(json))
          // }).then(({id}) => {
          //   return orderId;
          //   // return id;
          // }).catch(e => console.error(e.error))
        },


        onApprove: async (data, actions) => {
          const order = await (actions.order.capture())
          console.log('Order:', order)
          if (order.status == 'COMPLETED') {
            resetCart();
            setIsCheckingOut(false)
          }
        },
        onError: (err) => {
          console.log('error: ', err)
          alert('There was a problem fulfilling your order. Please try again or send a message on the Contact Tab.')
        }
      }).render(paypal.current)
    }
  }, [total])

  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <script src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`} async></script>
      {isCheckingOut && cartItems && <Stack mt={20}>
        <Text fontSize="2xl" mt={10}>Checkout</Text>
        <Divider mb={7} />
        {subtotal && cartItems.map((item, index) => (
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
      </Stack>}
      {!isCheckingOut && <Container mt={20}>
        <Text mt={20}>Thank you for your purchase!</Text>
        <Link href="/">
          <Button bgColor="tertiary.dark">Back to Home </Button>
        </Link>
        </Container>
      }
    </Container>
  );
}
