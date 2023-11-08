import { useState } from "react";
import {
  Container,
  Text,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

import { useAccountContext } from "@/context/AccountContext";

export interface User {
  email: string;
  username?: string;
  password: string;
}

const initialValues = {
  email: "",
  username: "",
  password: "",
};

function Login() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [values, setValues] = useState(initialValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const {
    isLoggedIn,
    updateIsLoggedIn,
    isLoggingIn,
    updateIsLoggingIn,
    user,
    updateUser,
  } = useAccountContext();

  const toast = useToast();

  const login = async () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        updateUser({
          username: data.username,
          email: values.email,
          password: "xxxxxxx",
        });
        setValues(initialValues);
        updateIsLoggingIn(false);
        updateIsLoggedIn(true);
      })
      .catch((err) => {
        console.error("error!: ", err);
      });
  };

  return (
    <Container
      maxW="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="2xl" mt={14} mb={7} color="secondary.dark">
        <ArrowRightIcon marginRight="1rem" color="secondary.dark" />
        Welcome Back
      </Text>
      <Stack spacing={5} w="75%" mt={5}>
        <Input
          placeholder="Email Address"
          size="md"
          bgColor="white"
          value={values.email}
          name={"email"}
          onChange={handleChange}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Password"
            bgColor="white"
            value={values.password}
            name={"password"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              bgColor="#E2E8F0"
              onClick={handleShow}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          mt={5}
          bgGradient="linear(to-b, primary.main, secondary.dark)"
          color="white"
          onClick={login}
        >
          Log In
        </Button>
        <Button
          variant="link"
          fontSize="xs"
          color="#718096"
          onClick={() =>
            toast({
              title: "Error",
              description:
                "Sorry, update password is not implemented yet. \n Please use the Contact link at the bottom of the page.",
              status: "error",
              duration: 4000,
              isClosable: true,
            })
          }
        >
          Forgot Password?
        </Button>
        <Container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        ></Container>
        <Button
          variant="link"
          fontSize="xl"
          mt={10}
          color="white"
          onClick={() => updateIsLoggingIn(false)}
        >
          Don&apos;t have an account yet? Sign Up <ArrowRightIcon ml={3} />
        </Button>
      </Stack>
    </Container>
  );
}

export default Login;
