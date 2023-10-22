// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // replace this data with new course data


const user = await prisma.users.create({
  data: {
    username:'Lana',
    email: 'lana@test.com',
    password: 'noooooooope'
  }
})

  console.log('user: ', user)


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
