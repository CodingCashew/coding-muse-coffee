import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Container,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
// import NotificationBadge from "react-notification-badge";
// import { Effect } from "react-notification-badge";
import { ColorModeScript } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CheckIcon } from "@chakra-ui/icons";
import { BsPersonCircle, BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const { cartItems, numOfItems } = useShoppingCart();
  const num: number = numOfItems();

  // const [device, setDevice] = useState("mobile");
  const device = useBreakpointValue({ base: "mobile", md: "tablet" });

  const showBrand = useBreakpointValue({ md: false, lg: true });

  return (
    <>
        {device === "mobile" && (
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
            zIndex={100}
            justify="space-between"
          >
            <Link href="/" className="icon">
              <Image
                src="coding-muse-icon.jpg"
                alt="coding muse logo"
                maxW="40px"
              ></Image>
            </Link>
            <Menu isLazy>
              <MenuButton>
                <HamburgerIcon boxSize={35} color="primary.dark" />
              </MenuButton>
              <MenuList>
                <Link href="/contact">
                  <MenuItem>
                    <Text fontSize="lg" color="primary.main" className="link">
                      Contact
                    </Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        )}
        {device === "tablet" && (
          <Flex
            as="header"
            position="fixed"
            top="0"
            backgroundColor="white"
            w="100%"
            className="navbar flexboxContainer"
            mb={20}
            p={3}
            zIndex={100}
            bgColor="white"
            align="center"
            justify="space-between"
          >
            <Flex align="center" className="navbar">
              <Link href="/" className="icon">
                <Image
                  src="coding-muse-icon.jpg"
                  alt="coding muse logo"
                  maxW="40px"
                ></Image>
              </Link>
              {showBrand && (
                <Link href="/" className="logo">
                  <Text
                    fontSize={{ lg: "xl", xl: "2xl" }}
                    ml={3}
                    color="primary.main"
                  >
                    Coding Muse Coffee
                  </Text>
                </Link>
              )}
            </Flex>
            <Flex align="center" gap={8} justify="center" className="skdfjl">
              <Link href="/shop" className="links">
                <Text fontSize="xl" color="secondary.dark" className="link">
                  Shop
                </Text>
              </Link>
              <Link href="/faq" className="links">
                <Text fontSize="xl" color="secondary.dark" className="link">
                  FAQs
                </Text>
              </Link>
              <Link href="/account" className="links">
                <Text fontSize="xl" color="secondary.dark" className="link">
                  Account
                </Text>
              </Link>
              <Link href="/cart" className="links">
                <Text fontSize="xl" color="secondary.main" className="link">
                  Cart
                </Text>
              </Link>
              <Flex>
              <Button bgColor="green.400">
                <CheckIcon
                  boxSize={35}
                  color="white"
                  m={2}
                />
                Buy Now: coffee.random()
              </Button>
              </Flex>
            </Flex>
          </Flex>
        )}
    </>
  );
}
