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
} from "@chakra-ui/react";

import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { ChatIcon } from "@chakra-ui/icons";
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const initialValues = {
  email: "",
  // username: '',
  password: "",
};

function SignUp() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

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

  const createUser = (e: any) => {
    if (values.password.length < 8) {
      setPasswordError("Please enter 8 or more characters.");
      return;
    }
    if (values.email && values.password) {
      fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // alert('You successfully created a new account')

          // setLoggedIn(true);
          // console.log("loggedIn?:", loggedIn)

          // setValues({
          //   email: '',
          //   password: ''
          // })
          // TO DO: redirect to href="/account"
        })
        .catch((err) => console.log(err));
    }
  };

  const facebookOAuth = () => {
    alert("OAuth functionality in progress...");
  };
  const googleOAuth = () => {
    alert("OAuth functionality in progress...");
  };

  return (
    <div>
      <Box
        bgGradient="linear(to-tl, primary.main, secondary.light)"
        h="100%"
        w="100%"
        mt={20}
        minH="3xl"
      >
        <Container
          maxW="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            fontSize="2xl"
            color="white"
            paddingY="2rem"
            maxW="md"
            textAlign="center"
          >
            <ChatIcon marginRight="1rem" />
            Start speaking English today with a free account.{" "}
          </Text>
          <Stack spacing={5} w="75%">
            <Input
              placeholder="Email Address"
              size="md"
              bgColor="#F7FAFC"
              value={values.email}
              name={"email"}
              onChange={handleChange}
            />
            {/* <Input
              placeholder='Username'
              size='md'
              bgColor="#F7FAFC"
              value={values.username}
              name={"username"}
              onChange={handleChange} /> */}
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
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
                  bgColor="#E2E8F0"
                  onClick={handleShow}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {passwordError && <Text>{passwordError}</Text>}
            <Button bgColor="secondary.dark" color="white" onClick={createUser}>
              Sign Up Free
            </Button>
            <Button variant="link" color="black" fontSize="xs">
              <Link href="/login">Already Have An Account? Log In~</Link>
            </Button>
            <Container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Divider w="47%" />
              <Text>or</Text>
              <Divider w="47%" />
            </Container>
            <Button bgColor="primary.dark" color="white" onClick={googleOAuth}>
              <AiFillGoogleCircle size={25} style={{ marginRight: "6px" }} />
              Continue with Google
            </Button>
            <Button
              bgColor="primary.dark"
              color="white"
              onClick={facebookOAuth}
            >
              <AiFillFacebook size={25} style={{ marginRight: "6px" }} />
              Continue with Facebook
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default SignUp;
