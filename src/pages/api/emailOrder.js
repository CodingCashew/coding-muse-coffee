import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const emailOrder = await prisma.emails.create({
        data: {
          name: req.body.name,
          email: req.body.email,
          paypal_order_id: req.body.orderId,
        },
      });
      return res.status(200).json(emailOrder);
    } catch (e) {
      console.error(e);
    }
  }
};

export default handler;
