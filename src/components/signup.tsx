import { useState } from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Input,
  Button,
  Divider,
  Link,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import bcrypt from "bcrypt";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { useAccountContext } from "@/context/AccountContext";
import { PrismaClient } from "@prisma/client";
import { User } from "../context/AccountContext";

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const prisma = new PrismaClient();
function SignUp() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleShow = (e:any) => {
    e.target.value === '1' ? setShow1(!show1) : setShow2(!show2)
  }

  // const [loggedIn, setLoggedIn] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [passwordError, setPasswordError] = useState("");
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (values.password.length >= 8) setPasswordError("");
  };

  const toast = useToast();

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const createUser = async (e: any) => {
    if (values.password.length < 8) {
      setPasswordError("Please enter 8 or more characters.");
      return;
    }
    // test email regex
    if (!emailRegex.test(values.email)) {
      setPasswordError("Please enter a valid email address.");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setPasswordError("Password fields must match.");
      return;
    }

    if (values.email && values.password && values.username) {
      const { email, username, password } = values;

      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          updateIsLoggedIn(true);
          updateUser({
            username,
            email,
            password: "xxxxxxx",
          });

          setValues({
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          });
          toast({
            title: "Success",
            description: "You have successfully created your account.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          setTimeout(() => {
            console.log("success");
          }, 4000);
        })
        .catch((err) => console.error(err));
    }
  };

  const {
    isLoggedIn,
    updateIsLoggedIn,
    isLoggingIn,
    updateIsLoggingIn,
    user,
    updateUser,
  } = useAccountContext();

  return (
    <Container
      maxW="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text
        fontSize="2xl"
        paddingY="2rem"
        maxW="md"
        textAlign="center"
        color="primary.main"
      >
        Start leveraging your coding muse today with a free account.
      </Text>
      <Stack spacing={5} w="75%" mt={5}>
        <Input
          placeholder="Email Address"
          size="md"
          bgColor="#F7FAFC"
          value={values.email}
          name={"email"}
          onChange={handleChange}
        />
        <Input
          placeholder="Username"
          size="md"
          bgColor="#F7FAFC"
          value={values.username}
          name={"username"}
          onChange={handleChange}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show1 ? "text" : "password"}
            placeholder="Password"
            bgColor="#F7FAFC"
            value={values.password}
            name={"password"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              value="1"
              bgColor="#E2E8F0"
              onClick={handleShow}
            >
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show2 ? "text" : "password"}
            placeholder="Confirm Password"
            bgColor="#F7FAFC"
            value={values.confirmPassword}
            name={"confirmPassword"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              value="2"
              bgColor="#E2E8F0"
              onClick={handleShow}
            >
              {show2 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {passwordError && <Text color="secondary.main">{passwordError}</Text>}
        <Button
          bgGradient="linear(to-br, secondary.dark,  primary.main)"
          color="white"
          onClick={createUser}
        >
          Sign Up Free
        </Button>
        <Button
          variant="link"
          color="white"
          ml={1}
          mt={10}
          fontSize="xl"
          onClick={() => updateIsLoggingIn(true)}
        >
          Already Have An Account? Log In <ArrowRightIcon />
        </Button>
        <Container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Divider w="47%" />
          <Text>or</Text>
          <Divider w="47%" /> */}
        </Container>
      </Stack>
    </Container>
  );
}

export default SignUp;
