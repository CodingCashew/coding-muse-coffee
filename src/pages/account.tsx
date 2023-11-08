import { Container, Text, Flex, Input, Box, Button } from "@chakra-ui/react";
import { useAccountContext } from "../context/AccountContext";
import SignUp from "../components/signup";
import Login from "../components/login";
import Head from "next/head";

export default function Account() {
  const {
    isLoggedIn,
    updateIsLoggedIn,
    isLoggingIn,
    updateIsLoggingIn,
    user,
    updateUser,
  } = useAccountContext();

  const logOut = () => {
    updateIsLoggedIn(false);
    updateIsLoggingIn(true);
    updateUser({
      email: "",
      username: "",
      password: "",
    });
  };

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
          {user.email && (
            <Flex
              flexDirection="column"
              minW={{ base: "xs", sm: "md" }}
              gap={1}
              mt={5}
            >
              <Text fontSize="2xl" color="secondary.dark" py={5}>
                Account
              </Text>
              <Text fontSize="md" color="primary.main" mt={4}>
                Username
              </Text>
              <Input
                value={user.username}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Text fontSize="md" color="primary.main" mt={4}>
                Email Address
              </Text>
              <Input
                value={user.email}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Text fontSize="md" color="primary.main" mt={4}>
                Password
              </Text>
              <Input
                value={user.password}
                bgColor="white"
                maxW={{ base: "sm", sm: "md", md: "lg" }}
                readOnly={true}
              />
              <Button
                mt={7}
                bgGradient="linear(to-bl, secondary.dark,  primary.main)"
                color="white"
                onClick={logOut}
              >
                Log Out
              </Button>
            </Flex>
          )}
          {!isLoggedIn && !isLoggingIn && <SignUp />}
          {!isLoggedIn && isLoggingIn && <Login />}
        </Flex>
      </Container>
    </Box>
  );
}
