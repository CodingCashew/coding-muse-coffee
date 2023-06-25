import React from "react";
import {
  Container,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

export default function SpeakingOne() {

  return (
    <Container minW="5xl" minH="xl">
      <Head>
        <title>Speaking Practice 1</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex width="6xl" mt={20} alignItems="center" justifyContent="center">
        <Image
          width="40%"
          src="/speaking/emmanuel-ikwuegbu-Gy_G8PMkPSc-unsplash.webp"
          alt="software developer"
        />
        <Container width="2xl">
          <Text fontSize="2xl">Talking About Your Preferred Work Environment</Text>
          <Text fontSize="xl">6 phrases you MUST know</Text>
        </Container>
      </Flex>
      <Flex direction="column" justify="start" mt={5} mb={5} ml={5}>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1Q.DescribeEnvironment.mp3" />
          <Text>Describe your ideal environment as a developer.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.QuietEnvironment.mp3" />
          <Text>I like to work in a quiet environment.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.2.OpenLayout.mp3" />
          <Text>I like to work around people.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a.3.AroundPeople.mp3" />
          <Text>I prefer an open-layout environment.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a4FaceToFace.mp3" />
          <Text>I like to communicate with my team members face-to-face.</Text>
        </Flex>
        <Flex align="center" gap={4} mt={5}>
          <audio controls src="/speaking1audio/1a5Remotely.mp3" />
          <Text>
            I prefer to work remotely so I can have a good work-life balance.
          </Text>
        </Flex>
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