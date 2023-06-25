import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Langship");

    const listening = await db.collection("Listening").find({}).toArray();
    res.json(listening);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
