import clientPromise from "../../../lib/mongodb";

const handler = async (req, res) => {
  console.log("in searchArticles");
  try {
    const client = await clientPromise;
    const db = client.db("Langship");
    const { searchValue } = req.body;
    console.log("req.body.searchValue in handler: ", searchValue);
    // const articles = await db.collection("Articles").find({"category": "category1"}).toArray();
    const articles = await db
      .collection("Articles")
      .find({
        $or: [
          {
            title: { $regex: searchValue },
          },
          {
            article_content: { $regex: searchValue },
          },
        ],
      })
      // .find({ "title": { $regex: searchValue } || "article_content": { $regex: searchValue } })
      .toArray();

    res.json(articles);
  } catch (e) {
    console.error(e);
  }
};

export default handler;
