
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { Box, Text, Link, Container, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg='gray.50' className="footer" minW="4xl">
        <Flex className="flexboxContainer" maxW="4xl" gap={3} justify="center" p={3}>
          <Link href="https://twitter.com/AmericanEnglishForDevs" className="footerLinks"><FaTwitter className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.facebook.com/profile.php?id=0" className="footerLinks"><FaFacebookSquare className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.instagram.com/AmericanEnglishForDevs/" className="footerLinks"><FaInstagramSquare className="search" size={35}  color="primary.main" /></Link>
          <Link href="https://www.youtube.com/channel/0" className="footerLinks"><FaYoutube className="search" size={35}  color="primary.main" /></Link>
          </Flex>
          <Flex className="flexboxContainer" maxW="2xl" gap={3} justify="center" p={3}>
          <Link href="/contact" className="footerLinks"><Text fontSize='lg' className="footerText">Contact</Text></Link>
          <Link href="/newsletter" className="footerLinks"><Text fontSize='lg' className="footerText">Newsletter</Text></Link>
          <Link href="/privacy-policy" className="footerLinks"><Text fontSize='lg' className="footerText">Privacy Policy</Text></Link>
          <Link href="/terms-of-service" className="footerLinks"><Text fontSize='lg' className="footerText">Terms of Service</Text></Link>
      </Flex>
    </Box>
  );
}