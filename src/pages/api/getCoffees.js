import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log('in getCoffees handler')
  if (req.method === "GET") {
    const coffees = await prisma.coffee.findMany();
    console.log("coffees in api/getCoffees: ", coffees);
    // res.send(coffees)
    if (!coffees) {
      return res.status(400).send("Cannot find coffees");
    }
     res.send(coffees)
    // return res.status(200).json();

  }
}
