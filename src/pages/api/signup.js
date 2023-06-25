import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcrypt";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
  try {
    const { email } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const client = await clientPromise;
    const db = client.db("Langship");
    const user = await db
      .collection("Users")
      .insertOne({ email: email, password: hashedPassword });

    res.json(user);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
