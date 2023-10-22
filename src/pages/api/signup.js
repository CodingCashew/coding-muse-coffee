import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()

const handler = async (req, res) => {
  if (req.method === "POST") {
    // console.log('req.body: ', req.body)
    try {
      const { email, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      // const client = await clientPromise;
      // const db = client.db("Mysa");

      // holy crap, keep this!!! .user
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword
        }
      })
      console.log('user HERE ---> ', user)
      // const user = await db
      //   .collection("Users")
      //   .insertOne({ username: username, email: email, password: hashedPassword });

      res.json(user);
    } catch (e) {
      console.error(e);
    }
  }
};

export default handler;
