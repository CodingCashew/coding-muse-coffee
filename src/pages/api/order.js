import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log('in handler, huzzah!!')
  if (req.method === "POST") {
    const {
      email,
      first_name,
      last_name,
      paypal_order_id,
      total,
      created_at,
      product_id_1,
      product_name_1,
      product_price_1,
      product_id_2,
      product_name_2,
      product_price_2,
      product_id_3,
      product_name_3,
      product_price_3,
      product_id_4,
      product_name_4,
      product_price_4,
    } = JSON.parse(req.body);
    const order = await prisma.orders.create({
      data: {
        email: email,
        first_name: first_name,
        last_name: last_name,
        total: total,
        paypal_order_id: paypal_order_id,
        created_at: created_at,
        product_id_1: product_id_1,
        product_name_1: product_name_1,
        product_price_1: product_price_1,
        product_id_2: product_id_2,
        product_name_2: product_name_2,
        product_price_2: product_price_2,
        product_id_3: product_id_3,
        product_name_3: product_name_3,
        product_price_3: product_price_3,
        product_id_4: product_id_4,
        product_name_4: product_name_4,
        product_price_4: product_price_4,
      },
    });
    return res.status(200).json(order);
  }
}