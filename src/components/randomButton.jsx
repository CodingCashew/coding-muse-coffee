import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useShoppingCart } from "@/context/ShoppingCartContext";

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
        setCoffees(data);
      })
      .catch((err) => {
        console.error("error!: ", err);
      });
  }, []);

  const { increment } = useShoppingCart();

  const buyRandomCoffee = () => {
    if (!coffees.length) return;
    const index = Math.floor(Math.random() * (coffees.length - 1 - 0 + 1));
    const coffee = coffees[index];

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
