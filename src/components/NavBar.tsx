import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Container,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { ColorModeScript } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { cartItems, numOfItems } = useShoppingCart();
  const num: number = numOfItems();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    // <Box minH={20} className="navbar">

    <Flex bgColor="white" sx={{'z-index':'9999'}} className="navbar">
      <Flex
        as="header"
        position="fixed"
        top="0"
        backgroundColor="white"
        w="100%"
        className="navbar flexboxContainer"
        mb={20}
        p={3}
        bgColor="white"
        align="center"
        justify="space-between"
      >
        <Flex align="center" className="navbar">
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
          <Link href="/vocab" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Vocab
            </Text>
          </Link>
          <Link href="/grammar" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Grammar
            </Text>
          </Link>
          <Link href="/articles" className="links">
            <Text fontSize="xl" color="secondary.dark" className="link">
              Articles
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
          <Flex align="center" mr={3}>
            <Button onClick={toggleColorMode} color="tertiary.dark" size="lg">
              {colorMode === "dark" ? (
                <SunIcon marginRight=".5rem" color="primary.main" />
              ) : (
                <MoonIcon marginRight=".5rem" color="primary.main" />
              )}
            </Button>
            <Link href="/cart" className="links">
              <NotificationBadge count={num} effect={Effect.Custome} />
              <GrCart className="cart" size={25} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
