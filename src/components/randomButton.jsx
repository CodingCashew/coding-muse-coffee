import { useShoppingCart } from "@/context/ShoppingCartContext";
import { coffee } from "@/pages/shop";
import { Button, Link } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const coffees = await prisma.coffee.findMany();

//   return {
//     props: { coffees },
//   };
// }

// export async function getServerSideProps() {
//   const res = await fetch('/api/getCoffees', {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   })
//   const coffees = await res.json()
//   return { props: { coffees } }
// }

export default function RandomButton() {
  const router = useRouter();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("/api/getCoffees", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setCoffees(data);
      })
      .catch((err) => {
        console.log("error!: ", err);
      });
  }, []);

  const { increment } = useShoppingCart();

  const buyRandomCoffee = () => {
    if (!coffees.length) return;
    console.log("coffees in buy random: --->", coffees);
    const index = Math.floor(Math.random() * (coffees.length - 1 - 0 + 1));
    console.log("index: ", index);
    const coffee = coffees[index];
    console.log("random coffee: ", coffee);
    increment(
      coffee.id,
      coffee.name,
      coffee.description,
      coffee.roast,
      coffee.region,
      coffee.price,
      coffee.size,
      coffee.imagePath
    );
    router.push("/cart");
  };
  return (
    <Button bgColor="green.400" onClick={() => buyRandomCoffee()}>
      <CheckIcon boxSize={35} color="white" m={2} />
      Buy Now: Coffee.random()
    </Button>
  );
}
