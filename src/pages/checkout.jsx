import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Text,
  Button,
  Link,
  Stack,
  Flex,
  Input,
  Divider,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import { PrismaClient } from "@prisma/client";
import { ArrowRightIcon } from "@chakra-ui/icons";

import Head from "next/head";

export default function Checkout() {
  const { cartItems, subtotal, resetCart } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(true);
  const [hasSubmittedInfo, setHasSubmittedInfo] = useState(false);

  const submitUserInfo = () => {
    setHasSubmittedInfo(true);
  };

  const initialValues = {
    name: "",
    email: "",
  };
  const [userInfo, setUserInfo] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const blankOrder = {
    email: "",
    first_name: "",
    last_name: "",
    paypal_order_id: "",
    total: "",
    discount_id: "",
    created_at: "",

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
            return (
              actions.order
                .create({
                  // intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "American English Course for Devs",
                      amount: {
                        value: "1",
                        // value: total
                      },
                    },
                  ],
                })
                // .then(res => {
                //   if (res.ok) return res.json()
                //   return res.json().then(json => Promise.reject(json))
                .then(({ id }) => {
                  return id;
                  // return id;
                })
                .catch((e) => console.error(e.error))
            );
          },

          onApprove: function (data, actions) {
            // const paypalOrderObj = actions.order.capture();
            // console.log("Order object from paypal:", order);
            return actions.order.capture().then(function (paypalOrderObj) {
              console.log("here: ", paypalOrderObj);
            });
            if (paypalOrderObj.status == "COMPLETED") {
              const orderData = {
                email: paypalOrderObj.payer.email_address,
                first_name: paypalOrderObj.payer.name.given_name,
                last_name: paypalOrderObj.payer.name.surname,
                paypal_order_id: paypalOrderObj.id,
                total: paypalOrderObj.purchase_units[0].amount.value,
                discount_id: "",
                created_at: paypalOrderObj.create_time,
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
              };

              console.log("orderData that I manually built out: ", orderData);

              setOrderInfo(orderData);
              // console.log("orderInfo after setting state: ", orderInfo);
              handleSubmitOrder();
            }
          },
          onCancel: () => {
            console.log("order cancelled");
          },
          onError: (err) => {
            console.log("descriptive error: ", err);
            // alert(
            //   "There was a problem fulfilling your order. Please try again or send a message on the Contact Tab."
            // );
          },
        })
        .render(paypal.current);
    }
  }, [total, hasSubmittedInfo]);

  const handleSubmitOrder = () => {
    const res = fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(orderInfo),
    });
    // const data = await res.json();

    // console.log("data:", data);
    // alert("Order Submitted");

    // resetCart();
    // setIsCheckingOut(false);
  };

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
          <Text fontSize="2xl">Order Subtotal: ${subtotal()}</Text>
          {
            
            <Container>
                <Text>{'name ' + ' ' +  userInfo.name}</Text>
              <Text>{'email ' +  ' ' + userInfo.email}</Text>
                <Input
                  placeholder="Name"
                  name="name"
                  value={userInfo.name}
                  color="primary"
                  onChange={handleChange}
                  disabled={hasSubmittedInfo}
                  m={3}
                  required
                />
                <Input
                  placeholder="Email"
                  name="email"
                  value={userInfo.email}
                  color="primary"
                  onChange={handleChange}
                  disabled={hasSubmittedInfo}
                  m={3}
                  required
                />
                <Button
                  variant="contained"
                  type="submit"
                  bgColor="primary.dark"
                  color="white"
                  mt={3}
                  onClick={submitUserInfo}
                >
                  Save Info to Continue to Checkout<ArrowRightIcon ml={3} />
                </Button>
              </Container>
          }
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
          {hasSubmittedInfo && <Container ref={paypal} mt={5}></Container>}
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
