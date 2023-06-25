import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Langship");

    const vocab = await db.collection("Vocab").find({}).toArray();

    res.json(vocab);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
