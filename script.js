import { PrismaClient } from '@prisma/client'
// const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // replace this data with new course data


// const order = await prisma.orders.create({
//   data: {
//     firstName: "Pam",
//     lastName: "Poovey",
//     shippingAddressLine1: "123 Cool St.",
//     shippingAddressLine2: "",
//     shippingCity: "OKC",
//     shippingState: "OK",
//     shippingZip: "78978",
//     email: "pampage@test.io",
//     phone_number: "123",
//     item1Id: 2,
//     item1Qty: 3
//   }
// })

//   console.log('order: ', order)


//   const course = await prisma.course.create({

//     data: {
//       id: 1,
//       name: 'Interview Vocabulary',
//       price: 27,
//       length: '3:27:10',
//       description: 'Confidently express your abilities during a technical interview',
//       imagePath: '/courses/linkedin-sales-solutions-Be5aVKFv9ho-unsplash.webp'
//     },

//   })

//   console.log('course: ', course)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
