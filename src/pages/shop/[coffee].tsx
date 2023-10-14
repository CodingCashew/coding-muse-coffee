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
  Box,
} from "@chakra-ui/react";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { SiCoffeescript } from "react-icons/si";

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const coffees = await prisma.coffee.findMany();

  const paths = coffees.map((coffee) => ({
    params: { coffee: coffee.name.toLowerCase() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const coffees = await prisma.coffee.findMany();
  // console.log('coffeeeeees', coffees)
  return {
    props: { coffees },
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

export default function Coffee({ coffees }: any) {
  // const coffees = props;
  const router = useRouter();
  const name = router.query.coffee;
  const [coffee, setCoffee] = useState(initialCoffee);
  // console.log('coffees heeere : ', coffees)

  useEffect(() => {
    // console.log("coffees: ", coffees);
    if (!coffees || !name) return;
    let filteredCoffee = coffees.find((coffee: any) => {
      return coffee.name.toLowerCase() === name;
    });
    console.log("filteredCoffee HERE! -->: ", filteredCoffee);
    setCoffee(filteredCoffee);
    // console.log('name: ', name)
  }, [coffees, name, coffee]);

  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  // const quantity = getItemQty(coffee.id);

  return (
    <>
      {coffee.name && (
        <Box width="100%" minH="2xl" bgColor="black" mt={20} p={10}>
          <Head>
            <title>{coffee.name}</title>
            <link rel="icon" href="coding-muse-coffee.jpg" />
          </Head>
          <Flex p={8} minH="sm" maxW="5xl" align="center" mt={10}>
            <Image src={coffee?.imagePath} alt="coffee beans" w="50%" />
            <Flex p={8} direction="column">
              <Text fontSize="2xl" color="primary.main">
                {coffee?.name}
              </Text>
              <Text pt={2} color="primary.light">
                {coffee?.description}
              </Text>
              <Container p={5}>
                <Text color="primary.light">Region: {coffee?.region}</Text>
                <Text color="primary.light">Roast: {coffee?.roast}</Text>
                <Text color="primary.light">Price: ${coffee?.price}</Text>
              </Container>
              <Flex>
                <Link href="/checkout">
                  <Button
                    color="white"
                    bgColor="primary.dark"
                    onClick={() =>
                      increment(
                        coffee.id,
                        coffee.name,
                        coffee.description,
                        coffee.roast,
                        coffee.region,
                        coffee.price,
                        coffee.size,
                        coffee.imagePath
                      )
                    }
                  >
                    Buy Now
                  </Button>
                </Link>
                <Button
                  color="white"
                  ml={3}
                  bgColor="primary.main"
                  onClick={() =>
                    increment(
                      coffee.id,
                      coffee.name,
                      coffee.description,
                      coffee.roast,
                      coffee.region,
                      coffee.price,
                      coffee.size,
                      coffee.imagePath
                    )
                  }
                >
                  Add to Cart
                </Button>
                <Link href="/shop">
                  <Button
                    color="white"
                    ml={3}
                    bgColor="primary.light"
                  >
                    Back to Coffees
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
