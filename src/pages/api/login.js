import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

const handler = async (req, res) => {
  console.log('in handler')
  try {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
console.log(email, password, hash)


    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: hash
      },
    })
    console.log('user: ', user)
    if (user) {
      console.log('hash: ', hash)
      const isValid = await bcrypt.compare(password, hash);
      if (!isValid) {
        res.json("Incorrect email or password");
      } else {
        res.json("Success!! Woot, woot!");
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export default handler;
