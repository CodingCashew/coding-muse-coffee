import React from "react";
import { Box, Text, Flex, Image, Container } from "@chakra-ui/react";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

export default function Navbar() {
  const { cartItems, numOfItems } = useShoppingCart();
  const num: number = numOfItems();
  return (
    <Box minH={20}>
      <Flex
        className="flexboxContainer"
        p={3}
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Link href="/" className="landingPage">
            <Image
              src="/favicon.png"
              alt="American English for Devs logo"
              w="50px"
              m={3}
            />
          </Link>
          <Link href="/" className="logo">
            <Text fontSize="2xl" ml={3} color="primary.main">
              American English for Devs
            </Text>
          </Link>
        </Flex>
        <Flex align="center" gap={8} className="mainLinksContainer">
          <Link href="/speaking" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Speaking
            </Text>
          </Link>
          <Link href="/listening" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Listening
            </Text>
          </Link>
          <Link href="/courses" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Courses
            </Text>
          </Link>
          {/* <Link href="/faq" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              FAQ
            </Text>
          </Link> */}
          <Link href="/contact" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Contact
            </Text>
          </Link>
          <Container>
            <Link href="/cart" className="links">
              <NotificationBadge count={num} effect={Effect.Custome}/>
              <GrCart className="cart" size={25} color="red"/>
            </Link>
          </Container>
        </Flex>
      </Flex>
    </Box>
  );
}
