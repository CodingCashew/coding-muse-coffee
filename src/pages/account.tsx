import {
  Container,
  Text,
  Flex,
  Image,
  Input,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAccountContext, AccountProvider } from "../context/AccountContext";
import SignUp from "../components/signup";
import Login from "../components/login";
import Head from "next/head";

export default function Account() {
  // const currentUser = {
  //   email: "",
  //   username: "",
  //   password: "",
  // };

  // let [user, setUser] = useState(currentUser);
  // const getUser = async () => {
  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log("data.results:", data.results[0]);
  //       setUser(data.results[0]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  // useEffect(() => {
  //   console.log('isLoggedIn: ', isLoggedIn);
  // }, []);

  const { isLoggedIn, updateIsLoggedIn, isLoggingIn, updateIsLoggingIn, user } =
    useAccountContext();

  return (
    <Box bgColor="black" mt={20}>
      <Container
        minH="2xl"
        maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}
      >
        <Head>
          <title>Account</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <Flex
          mt={20}
          mb={20}
          align="center"
          justify="center"
          wrap={{ base: "wrap", lg: "nowrap" }}
        >
          {/* {( */}
          {isLoggedIn && (
            <Flex flexDirection="column" minW={{ base: "xs", sm: "md" }} gap={1}>
              <Text fontSize="xl" color="secondary.dark" py={5}>
                Account
              </Text>
              <Text fontSize="md" color="primary.main" mt={4}>Username</Text>
              <Input
                value={user.username}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Text fontSize="md" color="primary.main" mt={4}>Email Address</Text>
              <Input
                value={user.email}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Text fontSize="md" color="primary.main" mt={4}>Password</Text>
              <Input
                value={user.password}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Button mt={7} bgGradient="linear(to-bl, secondary.dark,  primary.main)" color="white" onClick={() => updateIsLoggedIn(false)}>Log Out</Button>
            </Flex>
          )}
          {!isLoggedIn && !isLoggingIn && <SignUp />}
          {!isLoggedIn && isLoggingIn && <Login />}
        </Flex>
      </Container>
    </Box>
  );
}
