import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const coffees = await prisma.coffee.findMany();

    if (!coffees) {
      return res.status(400).send("Cannot find coffees");
    }
    res.send(coffees);
  }
}
