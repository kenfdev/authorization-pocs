import { PrismaClient } from "@prisma/client";
import {
  LoggedInUser,
  createLoggedInUser,
} from "../domain/entities/LoggedInUser";
import {
  AuthorizationService,
  createOsoAuthorizationService,
} from "../authorization/services";
import { prisma } from "../shared/types/db/prisma";

export interface Context {
  request: Request;
  prisma: PrismaClient;
  authz: AuthorizationService;
  user?: LoggedInUser;
}

export async function createContext(request: Request): Promise<Context> {
  const userId = request.headers.get("x-user-id");

  const user = userId ? createLoggedInUser({ id: userId }) : undefined;

  const osoAuthorizationService = await createOsoAuthorizationService();

  return {
    user,
    request,
    prisma,
    authz: osoAuthorizationService,
  };
}
