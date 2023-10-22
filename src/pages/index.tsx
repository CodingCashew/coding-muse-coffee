import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Container,
  Text,
  Flex,
  Image,
  Divider,
  UnorderedList,
  ListItem,
  Button,
  Link,
  Box,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex>
      <Head>
        <title>Coding Muse Coffee</title>
        <meta name="description" content="Coding Muse Coffee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coding-muse-icon.ico" />
      </Head>
      <main>
        {/* <Container  width="100%"> */}
        <Image
          mt={20}
          width="100%"
          src="anastasiia-beans.jpg"
          alt="coffee beans"
        />
        {/* </Container> */}
        <Box
          width="100%"
          minHeight="md"
          bgColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            align="center"
            justify="center"
            wrap={{ base: "wrap-reverse", lg: "nowrap" }}
          >
            <Container m={2}>
              <Text fontSize="3xl" color="white">
                Coffee!
              </Text>
            </Container>

            <Image
              maxW={{ base: "100%", sm: "80%", md: "60%" }}
              src="anastasiia-beans.jpg"
              alt="coffee beans"
            />
          </Flex>
        </Box>
        <Image width="100%" src="anastasiia-beans.jpg" alt="coffee beans" />
        <Box
          width="100%"
          minHeight="md"
          // bgGradient="linear(to-b, primary.light, primary.dark)"
          bgColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            justify="center"
            align="center"
            wrap={{ base: "wrap-reverse", lg: "nowrap" }}
          >
            <Image
              maxW={{ base: "80%", sm: "60%", md: "50%", lg: "40%" }}
              src="anastasiia-beans.jpg"
              alt="coffee beans"
            />
            <Container display="flex column" maxW="3xl">
              <Text fontSize="3xl" color="white" p={2}>
                Coffee!
              </Text>
              <Text fontSize="3xl" color="white" p={2}>
                Coffee!
              </Text>
            </Container>
          </Flex>
        </Box>
        <Box
          width="100%"
          minHeight="md"
          bgGradient="linear(to-r, primary.dark, primary.light)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            align="center"
            justify="center"
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Text fontSize="3xl" color="white" p={2}>
              Don&apos;t miss out! Create an account!
            </Text>
            <Link href="/signup">
              <Button
                bgColor="primary.dark"
                color="white"
                justifyContent="center"
                paddingX="3em"
                paddingY="1.35em"
              >
                <ArrowRightIcon marginRight=".5rem" /> Join
              </Button>
            </Link>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}
