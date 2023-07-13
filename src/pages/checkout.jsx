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
  useToast,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import { PrismaClient } from "@prisma/client";
import { ArrowRightIcon } from "@chakra-ui/icons";

import Head from "next/head";

export default function Checkout() {
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

  const { cartItems, subtotal, resetCart } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(true);


  const toast = useToast();
  const [hasSubmittedInfo, setHasSubmittedInfo] = useState(false);

  const submitUserInfo = async () => {
    if (userInfo.name.length && userInfo.email.length) {
      try {
        const res = await fetch("/api/emailOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...userInfo, orderId}),
        });
        const data =  await res.json();
        // console.log('data: ', data)
        setHasSubmittedInfo(true);
      } catch (e) {
        console.log(e)
        toast({
          title: "Error",
          description:
            "Please contact support using the Contact tab.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else if (!userInfo.name.length && !userInfo.email.length) {
      toast({
        title: "Error",
        description:
          "Please add a valid name and email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else if (!userInfo.name.length) {
      toast({
        title: "Error",
        description:
          "Please add a valid name.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else if (!userInfo.email.length) {
      toast({
        title: "Error",
        description:
          "Please add a valid email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
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


  const [orderInfo, setOrderInfo] = useState(blankOrder);
  // const [orderId, setOrderId] = useState('adfasdfas')
  const [orderId, setOrderId] = useState('')
  const paypal = useRef();

  const total = subtotal();

  const [purchaseUnits, setPurchaseUnits] = useState([]);

  useEffect(() => {
    const units = [];
    for (let i = 0; i < cartItems.length; i++) {
      const currItem = cartItems[i];
      const unit = {
        description: currItem.name,
        reference_id: currItem.id,
        amount: {
          currency_code: "USD",
          value: currItem.price,
        },
      };
      units.push(unit);
    }

    setPurchaseUnits(units);
  }, [cartItems]);

  useEffect(() => {
    if (window.paypal && total && purchaseUnits.length) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              purchase_units: purchaseUnits,
            });
          },

          onApprove: function (data, actions) {
            return actions.order.capture().then(function (paypalOrderObj) {
              if (paypalOrderObj.status == "COMPLETED") {
                setOrderId(paypalOrderObj.id)
                const orderData = {
                  email: paypalOrderObj.payer.email_address,
                  first_name: paypalOrderObj.payer.name.given_name,
                  last_name: paypalOrderObj.payer.name.surname,
                  paypal_order_id: paypalOrderObj.id,
                  total: total.toString(),
                  // discount_id: "",
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
                handleSubmitOrder(orderData);
              }
            });
          },
          onCancel: () => {
            console.log("order cancelled");
            toast({
              title: "Order cancelled",
              description: "Your order has been cancelled.",
              status: "warning",
              duration: 9000,
              isClosable: true,
            });
          },
          onError: (err) => {
            console.log("helpful and descriptive error: ", err);
            toast({
              title: "Error: There was a problem fulfilling your order.",
              description:
                "Please try again or send a message on the Contact Tab.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          },
        })
        .render(paypal.current);
    }
  }, [total, purchaseUnits]);

  const handleSubmitOrder = async (orderData) => {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await res.json();

    toast({
      title: "Success!",
      description: "Your order has been submitted.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    resetCart();
    setIsCheckingOut(false);
  };

  return (
    <Container minH="xl">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/landingPage/favicon.png" />
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
          {total > 0 && <Text fontSize="2xl">Order Subtotal: ${subtotal()}</Text>}
          {total == 0 && (
            <Flex  direction="column ">
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
          {/* {true && */}
          {!isCheckingOut && !hasSubmittedInfo &&
            <Container mt={20}>
              <Text fontSize={{base: "xl", md: "2xl"}} color="primary.light" mt={5}>Success!</Text>
              <Text fontSize={{base: "lg", md: "xl"}}>Let us know where to send your audio:</Text>
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
                Send Email with Audio
                <ArrowRightIcon ml={3} />
              </Button>
            </Container>
          }
      {!isCheckingOut && hasSubmittedInfo && (
        <Flex mt={20} minH="sm" direction="column">
          <Text mt={20} mb={5} fontSize="2xl">
            Thank you for your purchase!
          </Text>
          <Text mb={5}>Check your email to download your new course.</Text>
          <Link href="/">
            <Button
              bgGradient="linear(to-r, primary.dark, secondary.main)"
              color="white"
            >
              Back to Home{" "}
            </Button>
          </Link>
        </Flex>
      )}
    </Container>
  );
}
