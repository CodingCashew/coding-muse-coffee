import React from "react";
import { Container, Text, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";

export default function SpeakingOne() {
  const sentences = [
    {
      sentence: "Describe your ideal environment as a developer.",
      audio: "/speaking1audio/1Q.DescribeEnvironment.mp3",
    },
    {
      sentence: "I like to work in a quiet environment.",
      audio: "/speaking1audio/1a.QuietEnvironment.mp3",
    },
    {
      sentence: "I like to work around people.",
      audio: "/speaking1audio/1a.3.AroundPeople.mp3",
    },
    {
      sentence: "I prefer an open-layout environment.",
      audio: "/speaking1audio/1a.2.OpenLayout.mp3",
    },
    {
      sentence: "I like to communicate with my team members face-to-face.",
      audio: "/speaking1audio/1a4FaceToFace.mp3",
    },
    {
      sentence:
        "I prefer to work remotely so I can have a good work-life balance.",
      audio: "/speaking1audio/1a5Remotely.mp3",
    },
  ];

  return (
    <Container maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }} minH="xl">
      <Head>
        <title>Speaking Practice 1</title>
        <link rel="icon" href="/landingPage/favicon.png" />
      </Head>
      <Flex
        wrap={{ base: "wrap", lg: "nowrap" }}
        gap={2}
        mt={20}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          // width="40%"
          maxW={{ base: "sm", md: "md", lg: "lg" }}
          src="/speaking/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.webp"
          alt="software developer"
        />
        <Flex direction="column">
          <Text fontSize="2xl">
            Talking About Your Preferred Work Environment
          </Text>
          <Text fontSize="xl">6 phrases you MUST know</Text>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justify="start"
        mt={5}
        mb={5}
        ml={5}
        maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}
      >
        {sentences.map((sentence, index) => (
          <Flex
            align="center"
            gap={{ base: 1, md: 4 }}
            mt={6}
            key={index}
            wrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Flex
              maxW={{ base: "sm", sm: "2xl", md: "4xl", lg: "5xl" }}
              justify="start"
            >
              <audio controls src={sentence.audio} />
            </Flex>
            <Text minW={{ sm: "2xl", md: "3xl" }}>{sentence.sentence}</Text>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}

// import {
//   Card,
//   CardBody,
//   Container,
//   Text,
//   Flex
// } from "@chakra-ui/react";
// import Sidebar from "../../components/sidebar";
// import { speakingLinks } from "../../components/sidebarLinks"
// import NavButtons from "../../components/navButtons"

// export const getServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/speaking/", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await res.json();
//   const numOfExercises = data.length

//   let speaking = data.filter((speaking) => speaking.id == context.query.id);

//   speaking = speaking[0];

//   return {
//     props: { speaking, numOfExercises },
//   };
// };

// function Speaking({ speaking, numOfExercises }) {
//   const section = "speaking";
//   return (
//     <Container maxW="2xl">
//       <Flex maxW="5xl">
//         <Sidebar links={speakingLinks} section={'speaking'} />
//         <Flex minH="sm" minW="5xl" direction="column">
//       <Text fontSize="xl">{speaking.title}</Text>
//       <Container >
//       {speaking.phrases.map(prac => (
//         <Card mt={3} key={prac.id}>
//           <CardBody>
//             <audio
//               controls
//               src={prac.path}
//               sx={{ align: "center" }}
//             />
//             <Text mt={3} >
//               {prac.text}
//             </Text>
//           </CardBody>
//         </Card>
//       ))}
//       <NavButtons numOfExercises={numOfExercises} section={section} />
//       </Container>
//       </Flex>
//       </Flex>
//     </Container>
//   );
// }

// export default Speaking;
