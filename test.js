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
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

