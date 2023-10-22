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
import { ArrowRightIcon } from "@chakra-ui/icons";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
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
    // console.log('values:', values)
  };
  const { isLoggedIn, updateIsLoggedIn, isLoggingIn, updateIsLoggingIn } =
    useAccountContext();

  const toast = useToast();

  const login = () => {
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: values.email, password: values.password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data in login:", data);
        // setValues(initialValues)
      })
      .catch((err) => {
        console.log("error!: ", err);
      });

    setShow(false);
  };

  return (
    <Container
      maxW="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="2xl" paddingY="2rem" color="secondary.dark">
        <ArrowRightIcon marginRight="1rem" color="secondary.dark" />
        Welcome Back
      </Text>
      <Stack spacing={5} w="75%" mt={5} >
        <Input
          placeholder="Email Address"
          size="md"
          bgColor="#F7FAFC"
          value={values.email}
          name={"email"}
          onChange={handleChange}
        />
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
        {/* <Button bgGradient='linear(to-r, secondary.main, secondary.main)' color="white" onClick={login} >Log In</Button> */}
        <Button mt={5} bgGradient="linear(to-b, primary.main, secondary.dark)"  color="white" onClick={login}>
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
        >
          {/* <Divider w="47%" bgColor="#718096" />
          <Text color="#718096">or</Text>
          <Divider w="47%" bgColor="#718096" /> */}
        </Container>
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
