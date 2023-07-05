import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Admin User",
      dateOfBirth: "1990-01-01",
      id: "1",
    },
  });

  await prisma.user.create({
    data: {
      name: "Member User",
      dateOfBirth: "1992-02-02",
      id: "2",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
