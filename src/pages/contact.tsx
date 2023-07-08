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

  // send the message to my email using the three input values and my emailjs account info
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jo3giqp",
        "template_idwgknc",
        e.target,
        "lfS3piNP6e7SskUcv"
      )
      .then((response: any) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Submitted");
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
    <Container
      minH="xl"
      mt={20}
      centerContent
      maxW={{ base: "sm", sm: "2xl", md: "4xl" }}
    >
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <form onSubmit={sendEmail}>
        <Grid mt={20} w={{ base: "xs", sm: "sm", md: "lg" }}>
          <Text fontSize="xl" color="secondary.dark">
            Questions? Comments? Suggestions?
          </Text>
          <Text fontSize="2xl" color="primary.main">
            Drop us a Message ~
          </Text>
          <GridItem mt={3} maxW={{ xs: "xs", sm: "2xl", md: "4xl" }}>
            <Input
              id="outlined-name"
              placeholder="Name"
              name="fullName"
              value={values.fullName}
              color="primary"
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
              color="primary"
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
              color="primary"
              onChange={handleChange}
              required
            />
          </GridItem>
          <GridItem>
            <Button
              variant="contained"
              type="submit"
              bgColor="primary.dark"
              color="white"
              mt={3}
            >
              Submit Message <ArrowRightIcon ml={3} />
            </Button>
          </GridItem>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
