import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  console.log("fuckin req.bodyemail: ", req.body.email);
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).send("Cannot find user");
  }

  try {
    console.log('in try')
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log('in compare conditional')
      res.send({"message": "Success", "username": user.username})
    } else {
      res.json("Not allowed");
    }


  } catch (e) {
    console.error('error in catch: ', e);
  }
};

export default handler;
