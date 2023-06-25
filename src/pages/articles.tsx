import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
// import Sidebar from "../components/sidebar";
// import { blogLinks } from "../components/sidebarLinks";

interface Article {
  _id: number;
  title: string;
  content: string;
  id: string;
  likes: number;
  comments: [];
}

export default function Articles({ articles }: any) {
  return (
    <Container maxW="7xl" minH="xl" centerContent pt={8} mt={20}>
      <Head>
        <title>Articles</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex>
        {/* <Sidebar links={blogLinks} section={"articles"} maxW="sm" /> */}
        <Flex flexDirection="column" maxW="4xl">
          <Text fontSize="2xl" color="primary.dark">
            {"My Lovely Articles:"}
          </Text>

          {articles.map((article: Article) => (
            <Card mt={2} key={article._id}>
              <CardBody>
                <Image
                  src="https://picsum.photos/300/200"
                  alt="language blog logo"
                  // w="75%"
                />
                <Link href={`/articles/${article.id}`}>
                  <Text fontSize="xl">{article.title}</Text>
                </Link>
                <Text fontSize="md">{article.content.slice(0, 100)}...</Text>
                <Link href={`/articles/${article.id}`}>
                  <Button bgColor="secondary.dark" m="1rem" color="white">
                    Continue Reading
                    <ChevronRightIcon />
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  let res = await fetch("http://localhost:3000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let articles = await res.json();

  return {
    props: { articles },
  };
}
