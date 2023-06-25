import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const { firstName, email } = req.body;
    const client = await clientPromise;
    const db = client.db("Langship");
    const user = await db
      .collection("Newsletter")
      .insertOne({ firstName: firstName, email: email });

    res.json(user);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
