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
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BsPersonCircle, BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const { cartItems, numOfItems } = useShoppingCart();
  const num: number = numOfItems();

  const { colorMode, toggleColorMode } = useColorMode();
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
          justify="space-between"
        >
          <Link href="/" className="icon">
            <Image
              src="/landingPage/favicon.png"
              alt="AEFD logo"
              maxW="40px"
            ></Image>
          </Link>
          <Menu isLazy>
            <MenuButton>
              <HamburgerIcon boxSize={35} color="primary.dark" />
            </MenuButton>
            <MenuList>
              <Link href="/speaking">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Speaking
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/listening">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Listening
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/vocab">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Vocab
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/grammar">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Grammar
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/articles">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Articles
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/games">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Games
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/courses">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Courses
                  </Text>
                </MenuItem>
              </Link>
              <Link href="/contact">
                <MenuItem>
                  <Text fontSize="lg" color="primary.main" className="link">
                    Contact
                  </Text>
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Flex align="center" mr={3} gap={3}>
            {colorMode === "dark" ? (
              <SunIcon color="primary.main" onClick={toggleColorMode} />
            ) : (
              <MoonIcon color="primary.main" onClick={toggleColorMode} />
            )}
            <Link href="/account" className="links">
              <BsPersonCircle size={25} fill="teal" />
            </Link>
            {/* <Link href="/cart" className="links">
              <NotificationBadge count={num} effect={Effect.Custome} />
              <BsCart2 className="cart" size={30} fill="teal" />
            </Link> */}
          </Flex>
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
          bgColor="white"
          align="center"
          justify="space-between"
        >
          <Flex align="center" className="navbar">
            <Link href="/" className="icon">
              <Image
                src="/landingPage/favicon.png"
                alt="AEFD logo"
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
                  American English For Devs
                </Text>
              </Link>
            )}
          </Flex>
          <Flex align="center" gap={8} className="mainLinksContainer">
            <Menu isLazy>
              <MenuButton className="links">
                <Text fontSize="xl" color="primary.dark">
                  Practice
                </Text>
              </MenuButton>
              <MenuList sx={{ "z-index": "99999", position: "fixed" }}>
                <Link href="/speaking">
                  <MenuItem width="100%">
                    <Text fontSize="lg" color="primary.main" className="link">
                      Speaking
                    </Text>
                  </MenuItem>
                </Link>
                <Link href="/listening">
                  <MenuItem>
                    <Text fontSize="lg" color="primary.main" className="link">
                      Listening
                    </Text>
                  </MenuItem>
                </Link>
                <Link href="/vocab">
                  <MenuItem>
                    <Text fontSize="lg" color="primary.main" className="link">
                      Vocabulary
                    </Text>
                  </MenuItem>
                </Link>
                <Link href="/grammar">
                  <MenuItem>
                    <Text fontSize="lg" color="primary.main" className="link">
                      Grammar
                    </Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Link href="/articles" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                Articles
              </Text>
            </Link>
            <Link href="/games" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                Games
              </Text>
            </Link>
            <Link href="/courses" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                Courses
              </Text>
            </Link>
            <Link href="/contact" className="links">
              <Text fontSize="xl" color="secondary.dark" className="link">
                Contact
              </Text>
            </Link>
            <Flex align="center" mr={3} gap={3}>
              {colorMode === "dark" ? (
                <SunIcon color="primary.main" onClick={toggleColorMode} />
              ) : (
                <MoonIcon color="primary.main" onClick={toggleColorMode} />
              )}
              <Link href="/account" className="links">
                <BsPersonCircle size={25} fill="teal" />
              </Link>
              {/* <Link href="/cart" className="links">
                <NotificationBadge count={num} effect={Effect.Custome} />
                <BsCart2 className="cart" size={30} fill="teal" />
              </Link> */}
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}
