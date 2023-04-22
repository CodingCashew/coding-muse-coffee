import React from "react";
import {
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bg="gray.50" minH={20}>
      <div className="flexboxContainer">
        <Link href="/" className="landingPage">
          <Image src="/favicon.jpg" alt="language blog logo" w="50px" />
        </Link>
        <Link href="/" className="logo">
          <Text fontSize="2xl" color="primary.main">
            Vegan Boxing Gloves
          </Text>
        </Link>
        <div className="mainLinksContainer">
          <Link href="/listening" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Listening
            </Text>
          </Link>
          <Link href="/speaking" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Speaking
            </Text>
          </Link>
          <Link href="/grammar" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Grammar
            </Text>
          </Link>
          <Link href="/vocab" className="links">
            <Text fontSize="xl" color="secondary.dark">
              Vocabulary
            </Text>
          </Link>
        </div>
      </div>
    </Box>
  );
}
