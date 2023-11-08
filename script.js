// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.create({
    data: {
      username: "Lana",
      email: "lana@test.com",
      password: "noooooooope",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
