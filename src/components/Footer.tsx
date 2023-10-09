import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import {
  Box,
  Text,
  Link,
  Container,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className="footer" minW="100%" minH="2vh" p={5}>
      {/* <Flex
        className="flexboxContainer"
        // maxW="8xl"
        // minW="7xl"
        gap={5}
        justify="center"
        p={3}
      >
        <Link
          href="https://twitter.com/AmericanEnglishForDevs"
          className="footerLinks"
        >
          <FaTwitter className="search" size={35} />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=0"
          className="footerLinks"
        >
          <FaFacebookSquare className="search" size={35} />
        </Link>
        <Link
          href="https://www.instagram.com/AmericanEnglishForDevs/"
          className="footerLinks"
        >
          <FaInstagramSquare className="search" size={35} />
        </Link>
        <Link href="" className="footerLinks">
          <FaYoutube className="search" size={35} />
        </Link>
      </Flex> */}
      <Flex
        className="flexboxContainer"
        gap={7}
        justify="center"
        align="center"
        // p={3}
      >
        <Link href="/contact" className="footerLinks">
          <Text fontSize="lg" className="footerText">
            Contact
          </Text>
        </Link>
        <Link href="/return-policy" className="footerLinks">
          <Text fontSize="lg" className="footerText">
            Return Policy
          </Text>
        </Link>
        <Link href="/privacy-policy" className="footerLinks">
          <Text fontSize="lg" className="footerText">
            Privacy Policy
          </Text>
        </Link>
        <Link href="/terms-of-service" className="footerLinks">
          <Text fontSize="lg" className="footerText">
            Terms of Service
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
