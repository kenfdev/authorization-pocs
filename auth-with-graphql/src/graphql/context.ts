import { PrismaClient } from "@prisma/client";
import {
  LoggedInUser,
  createLoggedInUser,
} from "../domain/entities/LoggedInUser";
import {
  InmemoryAuthorizationService,
  AuthorizationService,
} from "../authorization/services";

export interface Context {
  request: Request;
  prisma: PrismaClient;
  authz: AuthorizationService;
  user?: LoggedInUser;
}

export function createContext(request: Request): Context {
  const userId = request.headers.get("x-user-id");

  const user = userId ? createLoggedInUser({ id: userId }) : undefined;

  return {
    user,
    request,
    prisma: new PrismaClient(),
    authz: new InmemoryAuthorizationService(),
  };
}
