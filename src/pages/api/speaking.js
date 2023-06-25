import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Langship");

    const speaking = await db.collection("Speaking").find({}).toArray();

    res.json(speaking);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
