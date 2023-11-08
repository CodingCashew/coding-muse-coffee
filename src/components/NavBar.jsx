import React from "react";
import {
  Text,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Link,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  useShoppingCart,
  ShoppingCartProvider,
} from "../context/ShoppingCartContext";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { ColorModeScript } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GrCart } from "react-icons/gr";
import { BsPersonCircle, BsCart2 } from "react-icons/bs";
import RandomButton from "../components/randomButton";

export default function Navbar() {
  const { cartItems, numOfItems } = useShoppingCart();
  const num = numOfItems();
  // const [device, setDevice] = useStaijte("mobile");
  const device = useBreakpointValue({ base: "mobile", md: "tablet" });

  const showBrand = useBreakpointValue({ md: false, lg: true });

  return (
    <>
      {device === "mobile" && (
        <Flex
          as="header"
          position="fixed"
          top="0"
          backgroundColor="black"
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
                  color="primary.dark"
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
            <Link href="/about" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                About
              </Text>
            </Link>
            <Link href="/faq" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                FAQs
              </Text>
            </Link>
            <Link href="/account" className="links">
              {/* <Text fontSize="xl" color="secondary.dark" className="link">
                Account
              </Text> */}
              <BsPersonCircle size={25} />
            </Link>
            <Link href="/cart" className="links" mr={5}>
              <NotificationBadge count={num} effect={Effect.Custome} />
              <GrCart className="cart" size={25} color="red" />
              {/* <Text fontSize="xl" color="primary.main" className="link">
                Cart
              </Text> */}
            </Link>
            <RandomButton />
          </Flex>
        </Flex>
      )}
    </>
  );
}
