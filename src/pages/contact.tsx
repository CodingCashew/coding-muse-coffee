import { useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";

import {
  Container,
  Text,
  Input,
  Textarea,
  Grid,
  GridItem,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

// initialize state
const initialValues = {
  fullName: "",
  email: "",
  message: "",
};

function Contact() {
  // set state values as they type
  const [values, setValues] = useState(initialValues);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const toast = useToast();

  // send the message to my email using the three input values and my emailjs account info
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ensvq7g",
        "template_8n7h3nn",
        e.target,
        "pejELF4DUloCH3X7c"
      )
      .then((response: any) => {
        console.log("SUCCESS!", response.status, response.text);
        toast({
          title: "Success",
          description: "Message Submitted.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setValues({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch((err: any) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Box bgColor="black" mt={20}>
      <Container
        minH="2xl"
        mt={20}
        centerContent
        maxW={{ base: "sm", sm: "2xl", md: "4xl" }}
      >
        <Head>
          <title>Contact</title>
          <link rel="icon" href="/coding-muse-icon.ico" />
        </Head>
        <form onSubmit={sendEmail}>
          <Grid mt={20} w={{ base: "xs", sm: "sm", md: "lg" }}>
            <Text fontSize="xl" color="secondary.main">
              Questions? Comments? Suggestions?
            </Text>
            <Text fontSize="2xl" color="primary.main" mb={7}>
              Drop us a Message ~
            </Text>
            <GridItem maxW={{ xs: "xs", sm: "2xl", md: "4xl" }}>
              <Input
                id="outlined-name"
                placeholder="Name"
                name="fullName"
                value={values.fullName}
                bgColor="white"
                onChange={handleChange}
                required
              />
            </GridItem>
            <GridItem mt={3}>
              <Input
                type="email"
                id="outlined-email"
                placeholder="Email"
                name="email"
                value={values.email}
                margin="normal"
                bgColor="white"
                onChange={handleChange}
                required
              />
            </GridItem>
            <GridItem mt={3}>
              <Textarea
                id="outlined-message"
                placeholder="Message"
                name="message"
                value={values.message}
                size="md"
                rows={5}
                bgColor="white"
                onChange={handleChange}
                required
              />
            </GridItem>
            <GridItem mt={8}>
              <Button
                variant="contained"
                type="submit"
                bgColor="primary.dark"
                color="white"
              >
                Submit Message <ArrowRightIcon ml={3} />
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;
