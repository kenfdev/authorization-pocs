import { LoggedInUser } from "../../domain/entities/LoggedInUser";
import { NonFunctionPropertyNames } from "../../shared/types/utils";
import { AuthorizationService } from "./AuthorizationService";

export class InmemoryAuthorizationService implements AuthorizationService {
  isFieldAllowed<R>(
    actor: LoggedInUser,
    fieldName: NonFunctionPropertyNames<R>,
    resource: R
  ): boolean {
    return true;
  }
}
