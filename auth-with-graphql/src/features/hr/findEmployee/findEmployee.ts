import { Prisma, PrismaClient } from "@prisma/client";
import { AuthorizationService } from "../../../authorization/services/AuthorizationService";
import { FindEmployeeSuccess as GqlFindEmployeeSuccess } from "../../../generated/graphql";
import { NotFound } from "../../../graphql/types";
import { createEmployee } from "../../../domain/entities/Employee";

export type FindEmployeeResult = FindEmployeeSuccess | NotFound;

export type FindEmployeeSuccess = GqlFindEmployeeSuccess & {
  type: "FindEmployeeSuccess";
};

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
}: FindEmployeeInput): Promise<FindEmployeeResult> => {
  const userData = await prisma.user.findUnique({ where: { id: employeeId } });
  if (!userData) return { type: "NotFound", message: "Employee not found" };

  return {
    type: "FindEmployeeSuccess",
    employee: createEmployee(userData),
  };
};
