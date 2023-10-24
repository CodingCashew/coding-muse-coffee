import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Text,
  Button,
  Link,
  Stack,
  Flex,
  Input,
  Box,
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
import { useAccountContext } from "@/context/AccountContext";

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
    product_name_3: "",x
    product_price_3: "",
    product_id_4: null,
    product_name_4: "",
    product_price_4: "",
  };

  const { cartItems, subtotal, resetCart, percentToPay, updatePercentToPay } =
    useShoppingCart();
  const { user } = useAccountContext();
  const [isCheckingOut, setIsCheckingOut] = useState(true);

  const toast = useToast();
  const [hasSubmittedInfo, setHasSubmittedInfo] = useState(false);

  // const submitUserInfo = async () => {
  //   if (userInfo.name.length && userInfo.email.length) {
  //     try {
  //       const res = await fetch("/api/emailOrder", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ...userInfo, orderId }),
  //       });
  //       const data = await res.json();
  //       // console.log('data: ', data)
  //       setHasSubmittedInfo(true);
  //     } catch (e) {
  //       console.log(e);
  //       toast({
  //         title: "Error",
  //         description: "Please contact support using the Contact tab.",
  //         status: "error",
  //         duration: 9000,
  //         isClosable: true,
  //       });
  //     }
  //   } else if (!userInfo.name.length && !userInfo.email.length) {
  //     toast({
  //       title: "Error",
  //       description: "Please add a valid name and email address.",
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   } else if (!userInfo.name.length) {
  //     toast({
  //       title: "Error",
  //       description: "Please add a valid name.",
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   } else if (!userInfo.email.length) {
  //     toast({
  //       title: "Error",
  //       description: "Please add a valid email address.",
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //   }
  // };

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
  const [orderId, setOrderId] = useState("");
  const paypal = useRef();

  const total =
    percentToPay !== 100 ? (subtotal() * percentToPay) / 100 : subtotal();

  const [purchaseUnits, setPurchaseUnits] = useState([]);

  useEffect(() => {
    const units = [];
    for (let i = 0; i < cartItems.length; i++) {
      const currItem = cartItems[i];
      console.log(currItem);
      const unit = {
        description: currItem.name,
        reference_id: currItem.id,
        amount: {
          currency_code: "USD",
          value: currItem.price,
          quantity: currItem.quantity,
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
                setOrderId(paypalOrderObj.id);
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
  }, [total, purchaseUnits, cartItems]);

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
    <Box bgColor="black">
      <Container minH="2xl">
        <Head>
          <title>Checkout</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
          async
        ></script>
        {isCheckingOut && cartItems && (
          <Flex mt={20} direction="column">
            <Flex justify="space-between" align="center" mt={10}>
              <Text fontSize="2xl" color="white">
                Checkout
              </Text>
              {total != 0 && (
                <Link href="/cart">
                  <Button variant="ghost" color="primary.dark">
                    Return to Cart
                  </Button>
                </Link>
              )}
            </Flex>
            <Divider mb={7} />
            {subtotal &&
              cartItems.map((item, index) => (
                <Flex key={index} gap={5} mt={3} mb={7} justify="space-between">
                  <Flex direction="column">
                    <Text fontSize="2xl" color="secondary.dark">
                      {item.name}
                    </Text>
                    <Text color="white" fontSize="md" ml={5}>
                      Size: {item.size}
                    </Text>
                    <Text color="white" fontSize="md" ml={5}>
                      Grind: {item.grind}
                    </Text>
                    <Text color="white" fontSize="md" ml={5}>
                      Quantity: {item.quantity}
                    </Text>
                  </Flex>
                  {percentToPay === 100 && (
                    <Text fontSize="xl" color="secondary.dark">
                      ${total}
                    </Text>
                  )}
                  {percentToPay !== 100 && (
                    <Flex direction="column">
                      <Text id="oldPrice" color="white">
                        ${item.price * item.quantity}
                      </Text>
                      <Text color="secondary.dark" fontSize="xl">
                        ${(item.price * item.quantity * percentToPay) / 100}
                      </Text>
                    </Flex>
                  )}
                </Flex>
              ))}
            <Divider mb={7} />
            {total > 0 && (
              <Container>
                <Text fontSize="2xl" color="primary.main">
                  Order Subtotal: ${total}
                </Text>
                {!user.email && (
                  <Container>
                    <Input></Input>
                  </Container>
                )}
              </Container>
            )}
            {/* <Text fontSize="2xl" color="primary.main">
                User email: {user.email}
                User username: {user.username}  
              </Text> */}
            {total == 0 && (
              <Flex direction="column" mt={5}>
                <Text fontSize="2xl" color="secondary.main">
                  Nothing in Cart
                </Text>
                <Link href="/shop">
                  <Button color="white" bgColor="primary.main" mt={10}>
                    Add a Coding Muse
                    <ArrowRightIcon ml={3} />
                  </Button>
                </Link>
              </Flex>
            )}
            <Container ref={paypal} mt={5}></Container>
          </Flex>
        )}

        {!isCheckingOut && !hasSubmittedInfo && (
          <Container mt={20}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              color="primary.light"
              mt={5}
            >
              Success!
            </Text>
            <Text fontSize={{ base: "lg", md: "xl" }}>
              Let us know where to send your email:
            </Text>
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
              Send Email
              <ArrowRightIcon ml={3} />
            </Button>
          </Container>
        )}
        {!isCheckingOut && hasSubmittedInfo && (
          <Flex mt={20} minH="sm" direction="column">
            <Text mt={20} mb={5} fontSize="2xl">
              Thank you for your purchase!
            </Text>
            <Text mb={5}>Your coding muse is on its way!</Text>
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
    </Box>
  );
}
