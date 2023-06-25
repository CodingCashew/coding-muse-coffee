import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Langship");

    const grammar = await db.collection("Grammar").find({}).toArray();

    res.json(grammar);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
