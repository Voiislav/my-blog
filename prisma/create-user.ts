/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Test',
      email: 'test@test.com',
      post: {
        create: [{
          name: 'Test post',
        }],
      },
    },
    include: {
      post: true,
    },
  })

  console.log(user)
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1) // error happened
  })
  .finally(async () => {
    await prisma.$disconnect()
    process.exit(0) // no errors
  })

