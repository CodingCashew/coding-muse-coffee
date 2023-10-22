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

// import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { ArrowRightIcon, ChatIcon } from "@chakra-ui/icons";
import { useAccountContext } from "@/context/AccountContext";
import { PrismaClient } from "@prisma/client";
import { User } from "../context/AccountContext";
// const passport = require("passport");
// const FacebookStrategy = require("passport-facebook").Strategy;

const initialValues = {
  email: "",
  username: "",
  password: "",
};

const prisma = new PrismaClient();
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
  
  const toast = useToast();

  const createUser = async (e: any) => {
    if (values.password.length < 8) {
      setPasswordError("Please enter 8 or more characters.");
      return;
    }
    if (values.email && values.password && values.username) {
      console.log("req.body: ", values);
      // try {
      const { email, username, password } = values;
      // const hashedPassword = await bcrypt.hash(values.password, 10);

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
          console.log(data);
          updateIsLoggedIn(true);
          updateUser({
            username,
            email,
            password: 'xxxxxxx'
          })

          setValues({
            email: "",
            password: "",
            username: "",
          });
          toast({
            title: "Success",
            description:
              "You have successfully created your account.",
            status: "success",
            duration: 4000,
            isClosable: true,
          })
          setTimeout(() => {
            console.log('success')
          }, 4000)
        })
        // alert('You successfully created a new account')
        //   const user = await prisma.users.create({
        //     data: {
        //       email: email,
        //       username: username,
        //       password: hashedPassword,
        //     },
        //   });
        // const client = await clientPromise;
        // const db = client.db("Mysa");
        // const user = await db
        //   .collection("Users")
        //   .insertOne({
        //     username: username,
        //     email: email,
        //     password: hashedPassword,
        //   });
        // console.log("user: ", user);
        // res.json(user);
        // } catch (e) {
        //   console.error(e);
        // }

        //     // console.log("loggedIn?:", loggedIn)
        //     // TO DO: redirect to href="/account"

        .catch((err) => console.log(err));
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
    //   </Box>
    // </div>
  );
}

export default SignUp;
