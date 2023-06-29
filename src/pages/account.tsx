import { Container, Text, Flex, Image, Input, Stack } from "@chakra-ui/react";
// import Sidebar from "../components/sidebar";
// import { accountLinks } from "../components/sidebarLinks";
import { useState, useEffect } from "react";

export default function Account() {
  const initialDummyUser = {
    email: "tesssttt@test.io",
    login: {
      username: "coffeemonster",
      password: "2394231fzxcxxc",
    },
    dob: { date: "12/12/1980" },
  };
  let [avatar, setAvatar] = useState("");
  let [user, setUser] = useState(initialDummyUser);
  const getUser = async () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data.results:", data.results[0]);
        setAvatar(data.results[0].picture.large);
        setUser(data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Container minH="sm" maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}>
      <Flex
        mt={20}
        mb={20}
        align="center"
        justify="center"
        wrap={{ base: "wrap", lg: "nowrap" }}
      >
        {avatar && (
          <Flex>
            <Image boxSize="2xs" src={avatar} p={5} alt="profile image" />
          </Flex>
        )}
        <Flex flexDirection="column" minW={{ base: "xs", sm: "md"}}>
          <Text fontSize="xl" py={5}>
            User Profile
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
          <Input value={user.login.password} maxW={{ base: "sm", sm: "md", md: "lg"}} disabled />
          <Text fontSize="md">Date of Birth</Text>
          <Input value={new Date(user.dob.date).toDateString()} maxW={{ base: "sm", sm: "md", md: "lg"}} disabled />
        </Flex>
      </Flex>
    </Container>
  );
}
