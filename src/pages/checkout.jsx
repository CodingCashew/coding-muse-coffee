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
import { ArrowRightIcon } from "@chakra-ui/icons";

import Head from "next/head";

export default function Checkout() {
  const { cartItems, subtotal, resetCart } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(true);

  const blankOrder = {
    email: "",
    first_name: "",
    last_name: "",
    paypal_order_id: "",
    total: "",
    discount_id: "",
    created_at: null,

    product_id_1: null,
    product_name_1: "",
    product_price_1: "",
    product_id_2: null,
    product_name_2: "",
    product_price_2: "",
    product_id_3: null,
    product_name_3: "",
    product_price_3: "",
    product_id_4: null,
    product_name_4: "",
    product_price_4: "",
  };

  const [orderInfo, setOrderInfo] = useState(blankOrder);

  const paypal = useRef();

  const total = subtotal();

  useEffect(() => {
    if (window.paypal && total) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              // intent: "CAPTURE",
              purchase_units: [
                {
                  description: "American English Course for Devs",
                  amount: {
                    value: "10",
                    // value: total
                  },
                },
              ],
            });
            // .then(res => {
            //   if (res.ok) return res.json()
            //   return res.json().then(json => Promise.reject(json))
            // }).then(({id}) => {
            //   return orderId;
            //   // return id;
            // }).catch(e => console.error(e.error))
          },

          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Order:", order);
            if (order.status == "COMPLETED") {
              const orderData = {
                email: order.payer.email_address,
                first_name: order.payer.name.given_name,
                last_name: order.payer.name.surname,
                total: order.purchase_units[0].amount.value,
                paypal_order_id: order.id,
                created_at: order.create_time,
                product_id_1: cartItems[0].id,
                product_name_1: cartItems[0].name,
                product_price_1: cartItems[0].price.toString(),
                product_id_2: cartItems[1]?.id || null,
                product_name_2: cartItems[1]?.name || "",
                product_price_2: cartItems[1]?.price.toString() || "",
                product_id_3: cartItems[2]?.id || null,
                product_name_3: cartItems[2]?.name || "",
                product_price_3: cartItems[2]?.price.toString() || "",
                product_id_4: cartItems[3]?.id || null,
                product_name_4: cartItems[3]?.name || "",
                product_price_4: cartItems[3]?.price.toString() || "",
              }

              console.log('orderData: ', orderData)

              setOrderInfo(orderData);
              console.log('orderInfo after setting state: ', orderInfo)

              const res = await fetch("/api/order", {
                method: "POST",
                body: JSON.stringify(order),
              });
              const data = await res.json();
          
              console.log("SUCCESS!", res.status, res.text);
              alert("Order Submitted");







              resetCart();
              setIsCheckingOut(false);
            }
          },
          onError: (err) => {
            console.log("error: ", err);
            alert(
              "There was a problem fulfilling your order. Please try again or send a message on the Contact Tab."
            );
          },
        })
        .render(paypal.current);
    }
  }, [total]);

  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
        async
      ></script>
      {isCheckingOut && cartItems && (
        <Stack mt={20}>
          <Text fontSize="2xl" mt={10}>
            Checkout
          </Text>
          <Divider mb={7} />
          {subtotal &&
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
          {/* {subtotal > 0 && ( */}
            <Text fontSize="2xl">Order Subtotal: ${subtotal()}</Text>
          {/* )} */}
          {subtotal == 0 && (
            <Flex mt={20} direction="column ">
              <Text fontSize="2xl">Nothing in Cart</Text>
              <Link href="/courses">
                <Button color="white" bgColor="primary.main" m={3}>
                  Add a Course <ArrowRightIcon ml={3} />
                </Button>
              </Link>
            </Flex>
          )}
          <Container ref={paypal} mt={5}></Container>
        </Stack>
      )}
      {!isCheckingOut && (
        <Flex mt={20} minH="sm" direction="column">
          <Text mt={20} mb={5}>
            Thank you for your purchase!
          </Text>
          <Link href="/">
            <Button bgColor="tertiary.dark">Back to Home </Button>
          </Link>
        </Flex>
      )}
    </Container>
  );
}
