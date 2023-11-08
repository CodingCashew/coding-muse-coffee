import React, { useEffect, useState } from "react";
import { Button, Container, Flex, Text, Image } from "@chakra-ui/react";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Divider } from "@chakra-ui/react";
import Link from "next/link";

// TODO: add endpoint ref name (one word or kabob case name)
export interface coffee {
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
      minH="3xl"
      bgColor="black"
      align="center"
      direction="column"
      p={5}
    >
      <Head>
        <title>Shop Coffees</title>
        <link rel="icon" href="/coding-muse-icon.ico" />
      </Head>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Text fontSize="3xl" color="secondary.main" mt={20} align="center">
          Select Your Muse
        </Text>
        <Divider />
      </Flex>
      <Flex wrap="wrap" maxW="6xl" align="center" gap={7}>
        {coffees.map((coffee: coffee, index: number) => (
          <Flex key={index} maxW="sm" direction="column">
            <Link href={`/shop/${coffee.name.toLowerCase()}`}>
              <Text fontSize="2xl" color="white">
                {coffee.name}
              </Text>
              <Image
                src={coffee.imagePath.split(" ")[0]}
                alt={`${coffee.roast} coffee beans`}
                maxW="100%"
                maxH="220px"
                mb={3}
                mt={3}
              />
            </Link>
            <Text fontSize="xl" color="white">
              {coffee.roast} Roast
            </Text>
            <Text fontSize="xl" color="white">
              {coffee.size}
            </Text>
            <Text fontSize="xl" color="white">
              ${coffee.price}
            </Text>
            <Flex mt={3} gap={3}>
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
                // ml={3}
                bgColor="primary.main"
                // width="34%"
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
              <Link href={`/shop/${coffee.name.toLowerCase()}`}>
                <Button color="white" bgColor="primary.light">
                  Details
                </Button>
              </Link>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
