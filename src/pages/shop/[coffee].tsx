import React, { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { Container, Text, Flex, Link, Button, Box } from "@chakra-ui/react";
import Carousel from "../../components/Carousel";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Head from "next/head";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const name = router.query.coffee;
  const [coffee, setCoffee] = useState(initialCoffee);

  useEffect(() => {
    if (!coffees || !name) return;
    let filteredCoffee = coffees.find((coffee: any) => {
      return coffee.name.toLowerCase() === name;
    });
    setCoffee(filteredCoffee);
  }, [coffees, name, coffee]);

  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();
  // const quantity = getItemQty(coffee.id);

  return (
    <>
      {coffee.name && (
        <Box width="100%" minH="3xl" bgColor="black" mt={20} p={10}>
          <Head>
            <title>{coffee.name}</title>
            <link rel="icon" href="/coding-muse-icon.ico" />
          </Head>
          <Flex p={8} minH="md" maxW="5xl" align="center" mt={10}>
            <Carousel coffeePhotoString={coffee.imagePath} />
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
                  <Button color="white" ml={3} bgColor="primary.light">
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
