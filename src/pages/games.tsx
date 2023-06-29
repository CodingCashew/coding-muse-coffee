import {
  Container,
  Text,
  Flex,
  Box,
  Link,
  Spacer,
  Card,
  Image,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const games = [
  {
    image: "/games/test-runner.png",
    alt: "",
    title: "Test Runner",
    description: "Get your all tests to pass by completing the sentences!",
    id: "1",
    endpoint: "test-runner",
  },
];

export default function Games() {
  return (
    <Container maxW="6xl" minH="sm" mt={20}>
      <Flex maxW="5xl">
        <Flex flexWrap="wrap" minW="5xl">
          {games.map((game: any) => (
            <Card maxW="xs" m={5} key={game.id}>
              <CardBody>
                <Link href={`/games/${game.endpoint}`}>
                  <Image src={game.image} alt={game.alt} borderRadius="lg" />
                </Link>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{game.title}</Heading>
                  <Text>{game.description}</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Link href={`/games/${game.endpoint}`}>
                    <Button
                      variant="solid"
                      backgroundColor="secondary.dark"
                      color="white"
                    >
                      Play
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
