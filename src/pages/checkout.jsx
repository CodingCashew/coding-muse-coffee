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
import Script from "next/script";
import { loadScript } from "@paypal/paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Paypal from "@/components/Paypal";

export default function Checkout() {
  const { cartItems, subtotal } = useShoppingCart();

  const paypal = useRef();

  useEffect(() => {
    if (window.paypal) {

      window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          // console.log('data: ', data)
          // console.log('actions: ', actions)
          // console.log('err: ', err)
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "American English Course for Devs",
                amount: {
                  currency_code: "USD",
                  value: 650.00
                }
              }
            ]
          })
        },
        onApprove: async (data, actions) => {
          const order = await (actions.order.capture())
          // const order = await (actions.order.CAPTURE)
          console.log('Order:', order)
        },
        onError: (err) => {
          console.log('error: ', err)
        }
      }).render(paypal.current)
    }
  }, [])


  // const addPaypalScript = () => {
  //   const script = document.createElement('script');
  //   script.src = "https://www.paypal.com/sdk/js?client-id=AT2icWsG7fv_6swdjSGpEot6gPzCqyJk9LQM74lgbZm8snjmCK8hY01enIeqT4MVv2EQjal_UsDEFuiJ"
  //   script.type = "text/javascript"
  //   script.async = true;
  //   document.body.appendChild(script)
  // }

  // useEffect(() => {
  //   addPaypalScript()
  // }, [])


  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <script src="https://www.paypal.com/sdk/js?client-id=AT2icWsG7fv_6swdjSGpEot6gPzCqyJk9LQM74lgbZm8snjmCK8hY01enIeqT4MVv2EQjal_UsDEFuiJ" async></script>
      <Stack mt={20}>
        <Text fontSize="2xl" mt={10}>Checkout</Text>
        <Divider mb={7} />
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
              <div ref={paypal}></div>
        {/* <Paypal /> */}
        {/* <PayPalScriptProvider ref={paypal} options={{ "clientId": process.env.PAYPAL_CLIENT_ID }}/> */}
      </Stack>
    </Container>
  );
}
