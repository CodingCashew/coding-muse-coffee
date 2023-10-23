import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient()

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, username, password } = req.body;
      
      const hashedPassword = await bcrypt.hash(password, 10);

      // holy crap, keep this!!! .user
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword
        }
      })
      console.log('user HERE ---> ', user)

      res.json(user);
    } catch (e) {
      console.error(e);
    }
  }
};

export default handler;
