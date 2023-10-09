import { Container, Text, Flex, Image, Input, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Account() {
  const initialDummyUser = {
    email: "",
    login: {
      username: "",
      password: "",
    },
    dob: { date: "" },
  };

  let [user, setUser] = useState(initialDummyUser);
  const getUser = async () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data.results:", data.results[0]);
        setUser(data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Container minH="xl" maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}>
      <Flex
        mt={20}
        mb={20}
        align="center"
        justify="center"
        wrap={{ base: "wrap", lg: "nowrap" }}
      >
        
        <Flex flexDirection="column" minW={{ base: "xs", sm: "md"}}>
          <Text fontSize="xl" py={5}>
            Account
          </Text>
          <Text fontSize="md">Username</Text>
          <Input
            value={user.login.username}
            maxW={{ base: "sm", sm: "md", md: "lg"}}
            disabled
          />
          <Text fontSize="md">Email Address</Text>
          <Input value={user.email} maxW={{ base: "sm", sm: "md", md: "lg"}} disabled />
          <Text fontSize="md">Password</Text>
          <Input value={'xxxxxxx'} maxW={{ base: "sm", sm: "md", md: "lg"}} disabled />
          
        </Flex>
      </Flex>
    </Container>
  );
}
