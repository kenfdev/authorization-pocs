import { PrismaClient } from "@prisma/client";

const rawPrisma = new PrismaClient();

export const prisma = rawPrisma.$extends({
  result: {
    user: {
      type: {
        compute: () => "DbUser",
      },
    },
  },
}) as unknown as typeof rawPrisma;
