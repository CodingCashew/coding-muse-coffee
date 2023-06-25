import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { addOrRemoveLike, id } = req.body;

    if (addOrRemoveLike === "addLike") {
      try {
        const client = await clientPromise;
        const db = client.db("Langship");

        const likes = await db
          .collection("Articles")
          .updateOne({ id: id }, { $inc: { likes: 1 } });
        res.status(200).json(likes);
      } catch (e) {
        console.error(e);
      }
    } else if (addOrRemoveLike === "removeLike") {
      try {
        const client = await clientPromise;
        const db = client.db("Langship");

        const likes = await db
          .collection("Articles")
          .updateOne({ id: id }, { $inc: { likes: -1 } });
        res.status(200).json(likes);
      } catch (e) {
        console.error(e);
      }
    }
  }
};

export default handler;
