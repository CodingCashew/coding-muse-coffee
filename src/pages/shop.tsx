import React, { useEffect, useState } from "react";
import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { CheckIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "@/context/ShoppingCartContext";

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
  console.log("coffee in getStaticProps:", coffees);
  return {
    props: { coffees },
  };
}

export default function Coffees({ coffees }: any) {
  // const { getItemQty, increment, decrement, removeItem } = useShoppingCart();

  return (
    <Container maxW="6xl" minH="2xl" mb={10} bgColor="black">
      <Head>
        <title>Shop Coffees</title>
        <link rel="icon" href="coding-muse-coffee.jpg" />
      </Head>
      <Flex direction="column" align="center">
        <Text fontSize="2xl" color="primary.dark" mt={20} align="center">
          Your muse awaits
        </Text>
        <Button bgColor="green.400">
          <CheckIcon boxSize={35} color="white" m={2} />
          Buy Now: coffee.random()
        </Button>
      </Flex>
      <Flex wrap="wrap">
        {coffees.map((coffee: coffee, index: number) => (
          <Link key={index} >
            <Flex key={index} maxW="lg" p={3} direction="column">
              <Text fontSize="2xl" color="secondary.light">
                {coffee.name}
              </Text>
              <Text fontSize="xl" color="secondary.main">
                {coffee.roast}
              </Text>
              <Text fontSize="xl" color="secondary.main">
                {coffee.size}
              </Text>
              <Text fontSize="xl" color="secondary.main">
                {coffee.price}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
