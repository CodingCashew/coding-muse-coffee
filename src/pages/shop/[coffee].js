import React, { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import {
  CardHeader, 
  Container,
  Text,
  Card,
  CardBody,
  Flex,
  UnorderedList,
  ListItem,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { SiCoffeescript } from "react-icons/si";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const coffees = await prisma.coffee.findMany();
  // console.log("coffee in getStaticProps:", SiCoffeescript);
  return {
    props: { coffees },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/coffees/Sumatra",
      // Object variant:
      // { params: { slug: 'second-post' } },
    ],
    fallback: true,
  };
}

const initialCoffee = {
  id: 0,
  name: "",
  description: "",
  roast: "",
  region: "",
  price: 0,
  size: "",
  imagePath: "",
};

export default function Coffee({ coffees }) {
  const router = useRouter();
  const name = router.query.coffeeName;
  const [coffee, setCoffee] = useState(initialCoffee);

  useEffect(() => {
    let filteredCoffee = coffees.find((coffee) => coffee.name == name);
    setCoffee(filteredCoffee);
  }, [coffees, name]);

  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  const quantity = getItemQty(coffee.id);

  return (
    <Container minW="5xl" minH="2xl">
      <Head>
        <title>{coffee.name}</title>
      </Head>
      <Flex p={8} minH="sm" align="center">
        <Container p={8}>
          <Text fontSize="2xl">{coffee?.name}</Text>
          <Text pt={2}>{coffee?.description}</Text>
          <Container p={5}>
            <Text>Region: {coffee?.region}</Text>
            <Text>Roast: {coffee?.roast}</Text>
            <Text>Price: {coffee?.price}</Text>
          </Container>
          <Link href="/checkout">
            <Button
              color="white"
              bgColor="primary.dark"
              width="28%"
              onClick={() => increment(coffee.id, coffee.name, coffee.description, coffee.roast, coffee.region, coffee.price, coffee.size, coffee.imagePath)}
            >
              Buy Now
            </Button>
          </Link>
          <Button
            color="white"
            ml={3}
            bgColor="secondary.main"
            width="28%"
            onClick={() => increment(coffee.id, coffee.name, coffee.description, coffee.roast, coffee.region, coffee.price, coffee.size, coffee.imagePath)}
          >
            Add to Cart
          </Button>
          <Link href="/coffees">
            <Button color="white" ml={3} bgColor="tertiary.main" width="34%">
              Back to Coffees
            </Button>
          </Link>
        </Container>
        <Image src={coffee?.imagePath} alt="coffee beans" w="50%" />
      </Flex>
    </Container>
  );
}