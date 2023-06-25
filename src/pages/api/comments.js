import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { content, id, name, date } = req.body;
    try {
      const client = await clientPromise;
      const db = client.db("Langship");

      const comments = await db.collection("Articles").updateOne(
        { id: id },
        {
          $push: {
            comments: {
              content: content,
              date_written: date,
              commenter: name,
            },
          },
        }
      );
      res.status(200).json(comments);
    } catch (e) {
      console.error(e);
    }
  }
};

export default handler;
