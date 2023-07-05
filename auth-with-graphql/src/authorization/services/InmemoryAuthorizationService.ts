import { LoggedInUser } from "../../domain/entities/LoggedInUser";
import { NonFunctionPropertyNames } from "../../shared/types/utils";
import { AuthorizationService } from "./AuthorizationService";

export class InmemoryAuthorizationService implements AuthorizationService {
  async canReadField<R>(
    actor: LoggedInUser,
    fieldName: NonFunctionPropertyNames<R>,
    resource: R
  ): Promise<boolean> {
    return true;
  }
}
