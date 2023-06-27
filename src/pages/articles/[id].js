import {
  Container,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Textarea,
  Input,
  Divider,
  Image,
  Flex,
} from "@chakra-ui/react";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useState } from "react";
import NavButtons from "../../components/navButtons";
// import Sidebar from "../../components/sidebar";
// import { blogLinks } from "../../components/sidebarLinks";

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/articles/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const numOfArticles = data.length;
  let article = data.filter((article) => article.id == context.query.id);

  article = article[0];
  return {
    props: { article, numOfArticles },
  };
};

export default function Article({ article, numOfArticles }) {
  const section = "articles";
  const [numOfLikes, setNumOfLikes] = useState(article.likes);
  const [numOfShares, setNumOfShares] = useState(article.shares);
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    const previousLikeCount = numOfLikes;
    // if it was already liked, remove it
    if (liked) {
      setLiked(false);
      const res = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify({ addOrRemoveLike: "removeLike", id: article.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNumOfLikes(previousLikeCount - 1);
    }
    // if it wasn't previously liked, add it
    else {
      setLiked(true);
      const res = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify({ addOrRemoveLike: "addLike", id: article.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNumOfLikes(previousLikeCount + 1);
    }
  };
  const handleShare = async () => {
    const previousShareCount = numOfShares;
    const res = await fetch("/api/share", {
      method: "POST",
      body: JSON.stringify({ addShare: 1, id: article.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setNumOfShares(previousShareCount + 1);
  };

  const [comments, setComments] = useState(article.comments);
  const [isCommenting, setIsCommenting] = useState(false);

  const initialCommentValues = {
    username: "",
    content: "",
  };
  const handleCommenting = () => {
    isCommenting ? setIsCommenting(false) : setIsCommenting(true);
  };
  const [currentComment, setCurrentComment] = useState(initialCommentValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentComment({
      ...currentComment,
      [name]: value,
    });
  };

  const postComment = async (e) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        content: currentComment.content,
        id: article.id,
        name: currentComment.username,
        date: new Date().toDateString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setComments([currentComment, ...comments]);
    setCurrentComment(initialCommentValues);
    setIsCommenting(false);
  };

  return (
    <Container maxW={{ base: "xs", sm: "sm", md: "xl", lg: "3xl" }} minH="sm" pt={5} mt={20}>
      <Flex>
        {/* <Sidebar links={blogLinks} section={"articles"} /> */}
        <Flex maxW={{ base: "xs", sm: "sm", md: "xl", lg: "3xl" }} flexDirection="column" justify='center'>
          <Card key={article.id} >
            <CardHeader>
              <Heading size="lg" p={5}>
                {article.title}
              </Heading>
            </CardHeader>
            <Image
              objectFit="cover"
              width={{base: "100%", md: "75%", lg: "60%"}}
              // maxW={{base: "sm", md: "lg"}}
              alignSelf="center"
              src="https://picsum.photos/300/200"
              alt="Chakra UI"
            />
            <CardBody>
              <Text p={7} fontSize='xl'>{article.content}</Text>
            </CardBody>
            <Flex flexDirection="column">
              <Text alignSelf="flex-end" pr={6}>
                {numOfLikes > 0 &&
                  `${numOfLikes}${numOfLikes > 1 ? " Likes" : " Like"}`}
              </Text>
              <Text alignSelf="flex-end" pt={3} pr={6}>
                {numOfShares > 0 &&
                  `${numOfShares}${numOfShares > 1 ? " Shares" : " Share"}`}
              </Text>
            </Flex>
            <CardFooter
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost" m={3} onClick={handleLike}>
                Like{!liked && <AiOutlineLike pl={6} />}
                {liked && <AiFillLike pl={6} />}
              </Button>
              <Button flex="1" variant="ghost" m={3} onClick={handleCommenting}>
                Comment
                <AiOutlineComment pl={6} />
              </Button>
              <Button flex="1" variant="ghost" m={3} onClick={handleShare}>
                Share
                <AiOutlineShareAlt pl={6} />
              </Button>
              <Divider />
              {!comments.length && !isCommenting && (
                <Text>Be the first to comment.</Text>
              )}
              {isCommenting && (
                <Container>
                  <Input
                    placeholder="Name"
                    onChange={handleChange}
                    value={currentComment.username}
                    name="username"
                    required
                  />
                  <Textarea
                    placeholder="Leave a Comment"
                    onChange={handleChange}
                    value={currentComment.content}
                    name="content"
                    required
                  />
                  <Button
                    backgroundColor="tertiary.dark"
                    color="white"
                    onClick={postComment}
                    mt={3}
                  >
                    Add Comment
                  </Button>
                </Container>
              )}
              <Container>
                {comments.length > 0 &&
                  comments.map((comment, i) => (
                    <Flex key={i} direction="column" maxW="lg">
                      <Flex direction="row" justifyContent="space-between">
                        <Text pt={5} fontSize="sm" color="grey">
                          {comment.commenter}
                        </Text>
                        <Text pt={5} fontSize="sm" color="grey">
                          {new Date(comment.date_written).toDateString()}
                        </Text>
                      </Flex>
                      <Text minW="3xl">{comment.content}</Text>
                    </Flex>
                  ))}
              </Container>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
      <NavButtons numOfExercises={numOfArticles} section={section} />
    </Container>
  );
}
