import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  return (
    <Box minH={20}>
      <Flex className="flexboxContainer" p={3} align="center" justify="space-between">
        <Flex align="center" >
        <Link href="/" className="landingPage">
          <Image src="/favicon.jpg" alt="vegan boxing gloves logo" w="50px" />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" ml={3} color="primary.main">
            Vegan Boxing Gloves
          </Text>
        </Link>
        </Flex>
        <Flex align="center" gap={5} className="mainLinksContainer">
          <Link href="/shop" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Shop
            </Text>
          </Link>
          <Link href="/about" className="links">
            <Text fontSize="xl" color="secondary.dark">
              About
            </Text>
          </Link>
          <Link href="/cart" className="links">
            <GrCart className="cart" size={25} color="red" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
