import { Prisma, PrismaClient } from "@prisma/client";
import { AuthorizationService } from "../../../authorization/services/AuthorizationService";

type FindEmployeeInput = {
  employeeId: string;
  deps: {
    prisma: PrismaClient;
    authz: AuthorizationService;
  };
};

export const findEmployee = async ({
  employeeId,
  deps: { prisma, authz },
}: FindEmployeeInput) => {
  return await prisma.user.findUnique({ where: { id: employeeId } });
};
