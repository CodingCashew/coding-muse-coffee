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
        <title>American English for Devs</title>
        <meta name="description" content="American English for Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <main>
        {/* <Container  width="100%"> */}
        <Image
          mt={20}
          width="100%"
          src="/landingPage/nubelson-fernandes-gTs2w7bu3Qo-unsplash.webp"
          alt="software developer"
        />
        {/* </Container> */}
        <Box
          width="100%"
          minHeight="md"
          bgColor="tertiary.main"
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
                Work on just the vocabulary you need, and practice sentences
                that you would use in real life on the job.
              </Text>
            </Container>

            <Image
              maxW={{ base: "100%", sm: "80%", md: "60%" }}
              src="/landingPage/windows-6G6akT8biLg-unsplash.webp"
              alt="software developer"
            />
          </Flex>
        </Box>
        <Image
          width="100%"
          src="/landingPage/linkedin-sales-solutions-1LyBcHrH4J8-unsplash.webp"
          alt="software developer"
        />
        <Box
          width="100%"
          minHeight="md"
          bgGradient="linear(to-b, primary.light, tertiary.dark)"
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
              src="/landingPage/procreator-ux-design-studio-VzJjPuk53sk-unsplash.webp"
              alt="software developer"
            />
            <Container display="flex column" maxW="3xl">
              <Text fontSize="3xl" color="white" p={2}>
                Save valuable time by having everything compiled for you!
              </Text>
              <Text fontSize="3xl" color="white" p={2}>
                Short, content-rich lessons that fit into your busy schedule
              </Text>
            </Container>
          </Flex>
        </Box>
        <Box
          width="100%"
          minHeight="md"
          bgGradient="linear(to-r, primary.dark, secondary.light)"
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
              Join Our English-Learning Community for Devs!
            </Text>
            <Link href="/signup">
              <Button
                bgColor="primary.dark"
                color="white"
                justifyContent="center"
                paddingX="3em"
                paddingY="1.35em"
              >
                <ArrowRightIcon marginRight=".5rem" /> Create a New Account
              </Button>
            </Link>
          </Flex>
        </Box>
      </main>
    </Flex>
  );
}
