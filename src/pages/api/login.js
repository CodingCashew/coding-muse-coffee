import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcrypt";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
  try {
    const { email } = req.body;
    const hash = await bcrypt.hash(req.body.password, 10);

    const client = await clientPromise;
    const db = client.db("Langship");

    const user = await db.collection("Users").findOne({ email: email });
    if (user) {
      const isValid = await bcrypt.compare(req.body.password, user.password);
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
