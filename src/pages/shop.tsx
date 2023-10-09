import React, { useEffect, useState } from "react";
import { Button, Container, Flex, Link, Text, Image } from "@chakra-ui/react";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { CheckIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "@/context/ShoppingCartContext";

// TODO: add endpoint ref name (one word or kabob case name)
interface coffee {
  id: number;
  name: string;
  description: string;
  roast: string;
  region: string;
  price: number;
  size: string;
  imagePath: string;
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const coffees = await prisma.coffee.findMany();

  return {
    props: { coffees },
  };
}

export default function Coffees({ coffees }: any) {
  const { getItemQty, increment, decrement, removeItem } = useShoppingCart();

  return (
    <Flex
      maxW="8xl"
      minH="2xl"
      mb={10}
      bgColor="black"
      align="center"
      direction="column"
    >
      <Head>
        <title>Shop Coffees</title>
        <link rel="icon" href="coding-muse-coffee.jpg" />
      </Head>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Text fontSize="3xl" color="primary.main" mt={20} align="center">
          Select Your Muse
        </Text>
        {/* <Text fontSize="3xl" color="secondary.light" mt={20} align="center">
          Your muse awaits
        </Text> */}
      </Flex>
      <Flex wrap="wrap" maxW="6xl" align="center">
        {coffees.map((coffee: coffee, index: number) => (
          <Link key={index} href={`/shop/${coffee.name}`}>
            <Flex key={index} maxW="sm" direction="column">
              <Text fontSize="2xl" color="secondary.main">
                {coffee.name}
              </Text>
              <Image
                src={coffee.imagePath}
                alt={`${coffee.roast} coffee beans`}
                maxW="90%"
                maxH="220px"
                mb={3}
                mt={3}
              />
              <Text fontSize="xl" color="secondary.main">
                {coffee.roast} Roast
              </Text>
              <Text fontSize="xl" color="secondary.main">
                {coffee.size}
              </Text>
              <Text fontSize="xl" color="secondary.main">
                ${coffee.price}
              </Text>
              <Container mt={3}>
                <Link href="/checkout">
                  <Button
                    color="white"
                    bgColor="primary.dark"
                    width="30%"
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
                  width="34%"
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
                <Link href={`/shop/${coffee.name}`}>
                  <Button
                    color="white"
                    ml={3}
                    bgColor="primary.light"
                    width="29%"
                  >
                    Details
                  </Button>
                </Link>
              </Container>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
